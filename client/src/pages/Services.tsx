import ServiceCard from "@/components/ServiceCard";
import { Briefcase, Shield, Globe, Plane, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Services() {
  const services = [
    {
      icon: Briefcase,
      title: "Corporate Transportation",
      description: "Reliable executive transport for meetings, roadshows, and multi-day corporate events. Our professional chauffeurs ensure punctual, discreet service tailored to your business schedule and requirements.",
    },
    {
      icon: Shield,
      title: "Government & Diplomatic Services",
      description: "Secure, discreet transportation for officials and delegations with security-cleared drivers trained in diplomatic protocol. We understand the unique requirements of government transportation.",
    },
    {
      icon: Globe,
      title: "NGO & International Organizations",
      description: "Reliable transport for missions, conferences, and humanitarian operations. We support international organizations with flexible, professional service across all operational areas.",
    },
    {
      icon: Plane,
      title: "Airport Transfers",
      description: "Professional meet & greet service with flight monitoring, luggage assistance, and seamless transfers. Your chauffeur will be waiting upon arrival, ready to assist with a smooth journey.",
    },
    {
      icon: Calendar,
      title: "Special Events",
      description: "Elegant transportation for galas, conferences, award ceremonies, and VIP events. Make a lasting impression with our premium vehicles and impeccable service standards.",
    },
    {
      icon: Clock,
      title: "Multi-day Charters",
      description: "Extended bookings with dedicated vehicles and chauffeurs for your multi-day requirements. Ideal for conferences, executive visits, and extended corporate travel needs.",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="font-sans font-semibold text-4xl sm:text-5xl text-foreground mb-4">
            Our Services
          </h1>
          <p className="font-serif text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive luxury transportation solutions tailored to the unique needs of government officials, corporate executives, and distinguished clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <div className="bg-card rounded-lg p-12 text-center">
          <h2 className="font-sans font-semibold text-2xl sm:text-3xl text-foreground mb-4">
            Custom Service Packages Available
          </h2>
          <p className="font-serif text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Need a tailored solution? We offer customized service packages for corporate accounts, government contracts, and long-term partnerships. Contact us to discuss your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" data-testid="button-request-quote">
                Request a Quote
              </Button>
            </Link>
            <Link href="/book-now">
              <Button size="lg" variant="outline" data-testid="button-book-service">
                Book a Service
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
