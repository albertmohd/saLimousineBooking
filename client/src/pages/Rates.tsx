import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { CheckCircle2, Clock, Shield, Users, Award, Star } from "lucide-react";

export default function Rates() {
  const whyChooseUs = [
    "Reliable, On-Time Service",
    "24/7 Service – Early/Late Hours",
    "Hassle-Free Booking",
    "Professional Chauffeurs",
    "Sleek & High-End Fleet",
    "Luxurious Travel Experience",
  ];

  const rateCards = [
    {
      title: "Executive Sedan",
      vehicles: ["Mercedes S-Class", "BMW 7-Series", "Audi A8"],
      hourly: "$150-$165",
      airport: "From $120",
      features: ["3 passengers", "Premium comfort", "Wi-Fi included"],
    },
    {
      title: "Luxury SUV",
      vehicles: ["Cadillac Escalade", "Range Rover", "Mercedes GLS"],
      hourly: "$200-$230",
      airport: "From $180",
      features: ["6 passengers", "Spacious interior", "Premium amenities"],
    },
    {
      title: "Executive Van",
      vehicles: ["Mercedes Sprinter"],
      hourly: "$180-$200",
      airport: "From $160",
      features: ["12 passengers", "Group travel", "Luggage capacity"],
    },
    {
      title: "Stretch Limousine",
      vehicles: ["Premium Stretch Limo"],
      hourly: "$300-$350",
      airport: "Custom Quote",
      features: ["8 passengers", "Special events", "Full bar service"],
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="font-sans font-semibold text-4xl sm:text-5xl text-foreground mb-4">
            Competitive Rates
          </h1>
          <p className="font-serif text-lg text-muted-foreground max-w-3xl mx-auto">
            Why settle for anything less than the best? Choose our transportation solutions that combine competitive rates with exceptional service.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <Card className="bg-card">
            <CardContent className="p-8">
              <div className="space-y-4 font-serif text-base text-muted-foreground leading-relaxed">
                <p>
                  Experience the difference today and see why we're the preferred choice for distinguished clients across the industry. To serve our customers better, we meet or beat our competitors' prices.
                </p>
                <p>
                  Our pricing structure is designed to be flexible, catering to the diverse needs of our customers. Whether you require a one-time ride or ongoing transportation services, we offer competitive rates that fit your budget. We believe in transparency, which is why our pricing is clear and upfront, with no hidden fees or surprises along the way.
                </p>
              </div>
              <div className="mt-8 text-center">
                <Link href="/book-now">
                  <Button size="lg" data-testid="button-rates-book-online">
                    Book Online
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-16">
          <h2 className="font-sans font-semibold text-3xl text-foreground mb-8 text-center">
            Hourly & Transfer Rates
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {rateCards.map((rate, index) => (
              <Card key={index} className="hover-elevate transition-shadow" data-testid={`card-rate-${rate.title.toLowerCase().replace(/\s+/g, '-')}`}>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="font-sans font-semibold text-xl text-foreground mb-2">
                      {rate.title}
                    </h3>
                    <div className="space-y-1">
                      {rate.vehicles.map((vehicle, i) => (
                        <p key={i} className="font-serif text-sm text-muted-foreground">
                          {vehicle}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3 mb-6 pb-6 border-b">
                    <div>
                      <p className="font-sans text-xs font-medium text-muted-foreground uppercase mb-1">
                        Hourly Rate
                      </p>
                      <p className="font-sans text-2xl font-semibold text-primary">
                        {rate.hourly}
                      </p>
                      <p className="font-serif text-xs text-muted-foreground">per hour</p>
                    </div>
                    <div>
                      <p className="font-sans text-xs font-medium text-muted-foreground uppercase mb-1">
                        Airport Transfer
                      </p>
                      <p className="font-sans text-lg font-semibold text-foreground">
                        {rate.airport}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {rate.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 font-serif text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="font-serif text-sm text-muted-foreground mb-4">
              * Minimum 3-hour booking for hourly rates. Additional fees may apply for tolls, parking, and gratuity.
            </p>
            <Link href="/contact">
              <Button variant="outline" size="lg" data-testid="button-custom-quote">
                Request Custom Quote
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-8">
              <h3 className="font-sans font-semibold text-2xl mb-4">
                Why Choose Us?
              </h3>
              <ul className="space-y-3">
                {whyChooseUs.map((reason, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                    <span className="font-serif text-base">{reason}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card">
            <CardContent className="p-8">
              <h3 className="font-sans font-semibold text-2xl text-foreground mb-6">
                Special Packages Available
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-sans font-medium text-foreground mb-1">Corporate Accounts</p>
                    <p className="font-serif text-sm text-muted-foreground">
                      Volume discounts and dedicated service
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-sans font-medium text-foreground mb-1">Government Contracts</p>
                    <p className="font-serif text-sm text-muted-foreground">
                      Special rates for official use
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-sans font-medium text-foreground mb-1">Multi-Day Charters</p>
                    <p className="font-serif text-sm text-muted-foreground">
                      Extended booking discounts available
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-sans font-medium text-foreground mb-1">Event Packages</p>
                    <p className="font-serif text-sm text-muted-foreground">
                      Custom pricing for weddings & galas
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="bg-accent rounded-lg p-12 text-center">
          <h2 className="font-sans font-semibold text-2xl sm:text-3xl text-foreground mb-4">
            Need a Custom Quote?
          </h2>
          <p className="font-serif text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Every client has unique needs. Contact us for personalized pricing tailored to your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" data-testid="button-contact-pricing">
                Contact for Pricing
              </Button>
            </Link>
            <Link href="/book-now">
              <Button size="lg" variant="outline" data-testid="button-book-now-rates">
                Book Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
