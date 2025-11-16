import Hero from "@/components/Hero";
import TrustBadges from "@/components/TrustBadges";
import FleetCard from "@/components/FleetCard";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Briefcase, Shield, Plane, Calendar, Building2, Users } from "lucide-react";

// Import fleet images
import mercedesImage from "@assets/generated_images/Mercedes_S-Class_executive_sedan_8e4fb399.png";
import bmwImage from "@assets/generated_images/BMW_7-Series_luxury_sedan_82b96848.png";
import audiImage from "@assets/generated_images/Audi_A8_executive_sedan_f27508a7.png";
import escaladeImage from "@assets/generated_images/Cadillac_Escalade_luxury_SUV_73bd9b1e.png";
import rangeRoverImage from "@assets/generated_images/Range_Rover_luxury_SUV_96bd9aa7.png";
import glsImage from "@assets/generated_images/Mercedes_GLS_luxury_SUV_a0e8a5b6.png";

export default function Home() {
  const featuredFleet = [
    {
      image: mercedesImage,
      category: "Executive Sedan",
      name: "Mercedes S-Class",
      passengers: 3,
      amenities: ["Premium leather seats", "Wi-Fi connectivity", "Refreshments included"],
      pricing: "From $150/hour",
    },
    {
      image: escaladeImage,
      category: "Luxury SUV",
      name: "Cadillac Escalade",
      passengers: 6,
      amenities: ["Spacious interior", "Privacy partition", "Premium sound system"],
      pricing: "From $200/hour",
    },
    {
      image: rangeRoverImage,
      category: "Luxury SUV",
      name: "Range Rover",
      passengers: 6,
      amenities: ["All-terrain capability", "Luxurious comfort", "Advanced safety features"],
      pricing: "From $220/hour",
    },
  ];

  const services = [
    {
      icon: Briefcase,
      title: "Corporate Transportation",
      description: "Reliable executive transport for meetings, roadshows, and multi-day corporate events. Professional service tailored to your business needs.",
    },
    {
      icon: Shield,
      title: "Government & Diplomatic Services",
      description: "Secure, discreet transportation for officials and delegations with security-cleared drivers and enhanced protocols.",
    },
    {
      icon: Plane,
      title: "Airport Transfers",
      description: "Meet & greet service with flight monitoring, luggage assistance, and seamless transfers to your destination.",
    },
  ];

  const testimonials = [
    {
      quote: "Sanganeb Limo has been our trusted transportation partner for all diplomatic functions. Their discretion and professionalism are unmatched.",
      author: "Ambassador Sarah Williams",
      title: "Chief of Protocol",
      organization: "Ministry of Foreign Affairs",
    },
    {
      quote: "We rely on Sanganeb Limo for all our executive transportation needs. Their service is consistently excellent, and their drivers are top-notch.",
      author: "Michael Chen",
      title: "CEO",
      organization: "Global Dynamics Corporation",
    },
    {
      quote: "Outstanding service! The attention to detail and commitment to punctuality make Sanganeb Limo our first choice for VIP transportation.",
      author: "Dr. Fatima Al-Rahman",
      title: "Director",
      organization: "International Development Agency",
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero />
      <TrustBadges />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-sans font-semibold text-3xl sm:text-4xl text-foreground mb-4">
              Our Premium Fleet
            </h2>
            <p className="font-serif text-lg text-muted-foreground max-w-2xl mx-auto">
              Immaculate, late-model luxury vehicles maintained to the highest standards
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredFleet.map((vehicle, index) => (
              <FleetCard
                key={index}
                {...vehicle}
                onCheckAvailability={() => console.log(`Check availability: ${vehicle.name}`)}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/fleet">
              <Button size="lg" variant="outline" data-testid="button-view-full-fleet">
                View Full Fleet
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-sans font-semibold text-3xl sm:text-4xl text-foreground mb-4">
              Why Choose Sanganeb Limo
            </h2>
            <p className="font-serif text-lg text-muted-foreground max-w-2xl mx-auto">
              Exceptional service tailored to distinguished clients
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-sans font-semibold text-3xl sm:text-4xl text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="font-serif text-lg text-muted-foreground max-w-2xl mx-auto">
              Trusted by government officials, corporate executives, and VIP clients
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-sans font-semibold text-3xl sm:text-4xl mb-6">
            Ready to Experience Excellence?
          </h2>
          <p className="font-serif text-lg mb-8 opacity-95">
            Book your luxury transportation today and discover the Sanganeb Limo difference
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/book-now">
              <Button size="lg" variant="secondary" className="px-8" data-testid="button-cta-book-now">
                Book Now
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10" data-testid="button-cta-contact">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
