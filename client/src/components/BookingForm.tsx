import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, CreditCard, Lock } from "lucide-react";
import { format } from "date-fns";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";

if (!import.meta.env.VITE_STRIPE_PUBLIC_KEY) {
  console.warn('VITE_STRIPE_PUBLIC_KEY not set. Payment processing will not work.');
}

const stripePromise = import.meta.env.VITE_STRIPE_PUBLIC_KEY 
  ? loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY)
  : null;

function PaymentForm({ 
  clientSecret, 
  onPaymentSuccess 
}: { 
  clientSecret: string; 
  onPaymentSuccess: (paymentIntentId: string) => void;
}) {
  const stripe = useStripe();
  const elements = useElements();
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      redirect: "if_required",
    });

    setIsProcessing(false);

    if (error) {
      toast({
        title: "Payment Failed",
        description: error.message,
        variant: "destructive",
      });
    } else if (paymentIntent && paymentIntent.status === "succeeded") {
      onPaymentSuccess(paymentIntent.id);
    }
  };

  return (
    <form onSubmit={handlePayment} className="space-y-6">
      <div className="bg-muted/50 p-4 rounded-md flex items-center gap-3">
        <Lock className="h-5 w-5 text-primary" />
        <div>
          <p className="font-semibold text-sm">Secure Payment</p>
          <p className="text-xs text-muted-foreground">
            We accept all major cards, Apple Pay, Google Pay, and PayPal
          </p>
        </div>
      </div>
      <PaymentElement />
      <Button 
        type="submit" 
        className="w-full" 
        disabled={!stripe || isProcessing}
        data-testid="button-complete-payment"
      >
        {isProcessing ? "Processing..." : "Complete Payment & Booking"}
      </Button>
    </form>
  );
}

export default function BookingForm() {
  const [step, setStep] = useState(1);
  const [clientSecret, setClientSecret] = useState<string>("");
  const [paymentIntentId, setPaymentIntentId] = useState<string>("");
  const [formData, setFormData] = useState({
    serviceType: "",
    vehicle: "",
    pickupLocation: "",
    dropoffLocation: "",
    date: undefined as Date | undefined,
    time: "",
    passengers: "",
    specialRequests: "",
    fullName: "",
    organization: "",
    email: "",
    phone: "",
    contactMethod: "",
    termsAccepted: false,
  });

  const serviceTypes = [
    "Airport Transfer",
    "Corporate Event",
    "Government Service",
    "Special Event",
    "Multi-day Charter",
  ];

  const vehicles = [
    "Mercedes S-Class (Executive Sedan)",
    "BMW 7-Series (Executive Sedan)",
    "Audi A8 (Executive Sedan)",
    "Cadillac Escalade (Luxury SUV)",
    "Range Rover (Luxury SUV)",
    "Mercedes GLS (Luxury SUV)",
    "Stretch Limousine",
    "Mercedes Sprinter (Executive Van)",
  ];

  const { toast } = useToast();

  const DEPOSIT_AMOUNT = 50;
  
  const bookingMutation = useMutation({
    mutationFn: async (data: typeof formData & { paymentIntentId: string; amount: string }) => {
      const response = await apiRequest("POST", "/api/bookings", {
        ...data,
        date: data.date ? format(data.date, "yyyy-MM-dd") : "",
        paymentStatus: "succeeded",
      });
      return await response.json();
    },
    onSuccess: (data: any) => {
      toast({
        title: "Booking Confirmed!",
        description: data.message || "Your payment has been processed and booking confirmed.",
      });
      setStep(1);
      setClientSecret("");
      setPaymentIntentId("");
      setFormData({
        serviceType: "",
        vehicle: "",
        pickupLocation: "",
        dropoffLocation: "",
        date: undefined,
        time: "",
        passengers: "",
        specialRequests: "",
        fullName: "",
        organization: "",
        email: "",
        phone: "",
        contactMethod: "",
        termsAccepted: false,
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Booking Failed",
        description: error.message || "Please try again or contact us directly.",
        variant: "destructive",
      });
    },
  });

  useEffect(() => {
    if (step === 4 && !clientSecret) {
      apiRequest("POST", "/api/create-payment-intent", { amount: DEPOSIT_AMOUNT })
        .then((res) => res.json())
        .then((data) => {
          if (data.clientSecret) {
            setClientSecret(data.clientSecret);
          }
        })
        .catch((error) => {
          toast({
            title: "Payment Setup Failed",
            description: "Unable to initialize payment. Please try again.",
            variant: "destructive",
          });
        });
    }
  }, [step]);

  const handlePaymentSuccess = (intentId: string) => {
    setPaymentIntentId(intentId);
    bookingMutation.mutate({
      ...formData,
      paymentIntentId: intentId,
      amount: DEPOSIT_AMOUNT.toString(),
    });
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="font-sans font-semibold text-xl text-foreground">Service Details</h3>
            <div className="space-y-4">
              <div>
                <Label htmlFor="serviceType">Service Type</Label>
                <Select
                  value={formData.serviceType}
                  onValueChange={(value) => setFormData({ ...formData, serviceType: value })}
                >
                  <SelectTrigger id="serviceType" data-testid="select-service-type">
                    <SelectValue placeholder="Select service type" />
                  </SelectTrigger>
                  <SelectContent>
                    {serviceTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="vehicle">Vehicle Selection</Label>
                <Select
                  value={formData.vehicle}
                  onValueChange={(value) => setFormData({ ...formData, vehicle: value })}
                >
                  <SelectTrigger id="vehicle" data-testid="select-vehicle">
                    <SelectValue placeholder="Select vehicle" />
                  </SelectTrigger>
                  <SelectContent>
                    {vehicles.map((vehicle) => (
                      <SelectItem key={vehicle} value={vehicle}>
                        {vehicle}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <h3 className="font-sans font-semibold text-xl text-foreground">Trip Details</h3>
            <div className="space-y-4">
              <div>
                <Label htmlFor="pickupLocation">Pickup Location</Label>
                <Input
                  id="pickupLocation"
                  placeholder="Enter pickup address"
                  value={formData.pickupLocation}
                  onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
                  data-testid="input-pickup-location"
                />
              </div>
              <div>
                <Label htmlFor="dropoffLocation">Drop-off Location</Label>
                <Input
                  id="dropoffLocation"
                  placeholder="Enter drop-off address"
                  value={formData.dropoffLocation}
                  onChange={(e) => setFormData({ ...formData, dropoffLocation: e.target.value })}
                  data-testid="input-dropoff-location"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal"
                        data-testid="button-date-picker"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {formData.date ? format(formData.date, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={formData.date}
                        onSelect={(date) => setFormData({ ...formData, date })}
                        disabled={(date) => date < new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div>
                  <Label htmlFor="time">Time</Label>
                  <Input
                    id="time"
                    type="time"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    data-testid="input-time"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="passengers">Number of Passengers</Label>
                <Input
                  id="passengers"
                  type="number"
                  min="1"
                  placeholder="1"
                  value={formData.passengers}
                  onChange={(e) => setFormData({ ...formData, passengers: e.target.value })}
                  data-testid="input-passengers"
                />
              </div>
              <div>
                <Label htmlFor="specialRequests">Special Requests</Label>
                <Textarea
                  id="specialRequests"
                  placeholder="Security requirements, special amenities, etc."
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                  rows={4}
                  data-testid="textarea-special-requests"
                />
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <h3 className="font-sans font-semibold text-xl text-foreground">Contact Information</h3>
            <div className="space-y-4">
              <div>
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  data-testid="input-full-name"
                />
              </div>
              <div>
                <Label htmlFor="organization">Organization/Agency</Label>
                <Input
                  id="organization"
                  placeholder="Company or Government Agency"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  data-testid="input-organization"
                />
              </div>
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  data-testid="input-email"
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 (234) 567-8900"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  data-testid="input-phone"
                />
              </div>
              <div>
                <Label htmlFor="contactMethod">Preferred Contact Method</Label>
                <Select
                  value={formData.contactMethod}
                  onValueChange={(value) => setFormData({ ...formData, contactMethod: value })}
                >
                  <SelectTrigger id="contactMethod" data-testid="select-contact-method">
                    <SelectValue placeholder="Select contact method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="email">Email</SelectItem>
                    <SelectItem value="whatsapp">WhatsApp</SelectItem>
                    <SelectItem value="phone">Phone</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms"
                  checked={formData.termsAccepted}
                  onCheckedChange={(checked) =>
                    setFormData({ ...formData, termsAccepted: checked as boolean })
                  }
                  data-testid="checkbox-terms"
                />
                <Label htmlFor="terms" className="text-sm font-serif cursor-pointer">
                  I agree to the terms and conditions and privacy policy
                </Label>
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-6">
            <h3 className="font-sans font-semibold text-xl text-foreground">Secure Payment</h3>
            <div className="bg-primary/10 p-4 rounded-md border border-primary/20">
              <div className="flex items-start gap-3">
                <CreditCard className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-semibold text-sm">Booking Deposit Required</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    A ${DEPOSIT_AMOUNT} deposit is required to confirm your reservation. This deposit will be applied to your final invoice.
                  </p>
                </div>
              </div>
            </div>
            {!clientSecret ? (
              <div className="flex items-center justify-center py-8">
                <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full" />
              </div>
            ) : stripePromise ? (
              <Elements stripe={stripePromise} options={{ clientSecret }}>
                <PaymentForm clientSecret={clientSecret} onPaymentSuccess={handlePaymentSuccess} />
              </Elements>
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                Payment processing is not configured. Please contact us to complete your booking.
              </div>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardContent className="p-8">
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            {[1, 2, 3, 4].map((s) => (
              <div
                key={s}
                className={`flex-1 h-2 rounded-full mx-1 ${
                  s <= step ? "bg-primary" : "bg-secondary"
                }`}
              />
            ))}
          </div>
          <p className="text-sm text-muted-foreground text-center font-serif">
            Step {step} of 4
          </p>
        </div>

        {renderStep()}

        {step !== 4 && (
          <div className="flex justify-between mt-8">
            {step > 1 && (
              <Button
                type="button"
                variant="outline"
                onClick={() => setStep(step - 1)}
                data-testid="button-back"
              >
                Back
              </Button>
            )}
            <Button
              type="button"
              className="ml-auto"
              onClick={() => setStep(step + 1)}
              disabled={step === 3 && !formData.termsAccepted}
              data-testid="button-next"
            >
              {step === 3 ? "Proceed to Payment" : "Next"}
            </Button>
          </div>
        )}
        {step === 4 && step > 1 && (
          <Button
            type="button"
            variant="outline"
            onClick={() => setStep(step - 1)}
            className="mt-6"
            data-testid="button-back"
          >
            Back
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
