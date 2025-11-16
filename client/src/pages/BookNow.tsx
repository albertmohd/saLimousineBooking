import BookingForm from "@/components/BookingForm";

export default function BookNow() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="font-sans font-semibold text-4xl sm:text-5xl text-foreground mb-4">
            Book Your Ride
          </h1>
          <p className="font-serif text-lg text-muted-foreground max-w-2xl mx-auto">
            Complete the form below to reserve your luxury transportation. We'll contact you within 1 hour to confirm your booking.
          </p>
        </div>

        <BookingForm />

        <div className="mt-12 max-w-2xl mx-auto">
          <div className="bg-card rounded-lg p-8">
            <h3 className="font-sans font-semibold text-xl text-foreground mb-4">
              Need Immediate Assistance?
            </h3>
            <p className="font-serif text-base text-muted-foreground mb-6">
              For urgent bookings or last-minute requests, please contact us directly:
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="font-sans text-sm font-medium text-foreground w-24">Phone:</span>
                <a
                  href="tel:+1234567890"
                  className="font-serif text-base text-primary hover:underline"
                  data-testid="link-urgent-phone"
                >
                  +1 (234) 567-8900
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-sans text-sm font-medium text-foreground w-24">Email:</span>
                <a
                  href="mailto:info@sanganeblimo.com"
                  className="font-serif text-base text-primary hover:underline"
                  data-testid="link-urgent-email"
                >
                  info@sanganeblimo.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-sans text-sm font-medium text-foreground w-24">WhatsApp:</span>
                <a
                  href="https://wa.me/1234567890"
                  className="font-serif text-base text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="link-urgent-whatsapp"
                >
                  Message Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
