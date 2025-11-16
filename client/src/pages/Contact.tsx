import ContactForm from "@/components/ContactForm";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hello, I would like to inquire about Sanganeb Limo's chauffeur services");
    window.open(`https://wa.me/1234567890?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="font-sans font-semibold text-4xl sm:text-5xl text-foreground mb-4">
            Get in Touch with Sanganeb Limo
          </h1>
          <p className="font-serif text-lg text-muted-foreground max-w-2xl mx-auto">
            We're here to answer your questions and assist with your transportation needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>

          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-sans font-semibold text-xl text-foreground mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-sans text-sm font-medium text-foreground mb-1">Phone</p>
                      <a
                        href="tel:+1234567890"
                        className="font-serif text-base text-muted-foreground hover:text-primary transition-colors"
                        data-testid="link-contact-phone"
                      >
                        +1 (234) 567-8900
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-sans text-sm font-medium text-foreground mb-1">Email</p>
                      <a
                        href="mailto:info@sanganeblimo.com"
                        className="font-serif text-base text-muted-foreground hover:text-primary transition-colors"
                        data-testid="link-contact-email"
                      >
                        info@sanganeblimo.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-sans text-sm font-medium text-foreground mb-1">Office Address</p>
                      <p className="font-serif text-base text-muted-foreground">
                        123 Executive Boulevard<br />
                        Business District<br />
                        City, State 12345
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-sans text-sm font-medium text-foreground mb-1">Business Hours</p>
                      <p className="font-serif text-base text-muted-foreground">
                        Available 24/7 for Your Convenience
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t">
                  <Button
                    className="w-full"
                    onClick={handleWhatsAppClick}
                    data-testid="button-contact-whatsapp"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Message Us on WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-6">
                <h3 className="font-sans font-semibold text-lg mb-3">
                  For Urgent Bookings
                </h3>
                <p className="font-serif text-sm opacity-95">
                  Please call or WhatsApp us directly for same-day bookings and urgent transportation requests. Our team is standing by 24/7 to assist you.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
