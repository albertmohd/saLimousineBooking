import { Shield, Award, Users, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  const values = [
    {
      icon: Shield,
      title: "Discretion & Confidentiality",
      description: "We understand the importance of privacy for our VIP clients. All our chauffeurs are trained in confidentiality protocols.",
    },
    {
      icon: Award,
      title: "Excellence & Reliability",
      description: "Our commitment to punctuality and service excellence has made us the trusted choice for government and corporate clients.",
    },
    {
      icon: Users,
      title: "Professional Team",
      description: "Every chauffeur undergoes rigorous background checks, extensive training, and regular performance evaluations.",
    },
  ];

  const standards = [
    "Comprehensive background checks for all drivers",
    "Defensive driving and security training",
    "VIP protocol and etiquette training",
    "Multi-lingual chauffeurs available",
    "Regular vehicle maintenance and inspections",
    "24/7 dispatch and customer support",
    "GPS tracking and flight monitoring",
    "Corporate invoicing and reporting",
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="font-sans font-semibold text-4xl sm:text-5xl text-foreground mb-4">
            About Sanganeb Limo
          </h1>
          <p className="font-serif text-lg text-muted-foreground max-w-3xl mx-auto">
            Your trusted partner for luxury transportation and professional chauffeur services
          </p>
        </div>

        <div className="mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-sans font-semibold text-2xl sm:text-3xl text-foreground mb-6">
              Our Story
            </h2>
            <div className="space-y-4 font-serif text-lg text-muted-foreground leading-relaxed">
              <p>
                Sanganeb Limo was founded with a singular vision: to provide unparalleled luxury transportation services to distinguished clients who demand the highest standards of professionalism, discretion, and reliability.
              </p>
              <p>
                Over the years, we have built a reputation as the preferred transportation partner for government officials, corporate executives, international organizations, and VIP clients. Our success is built on a foundation of trust, earned through consistent excellence in every journey we undertake.
              </p>
              <p>
                We understand that our clients' time is precious and their privacy paramount. Every aspect of our service is designed to provide a seamless, discreet, and comfortable experience that exceeds expectations.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="font-sans font-semibold text-2xl sm:text-3xl text-foreground mb-12 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover-elevate transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-sans font-semibold text-xl text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="font-serif text-base text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-sans font-semibold text-2xl sm:text-3xl text-foreground mb-6">
              Our Standards
            </h2>
            <p className="font-serif text-lg text-muted-foreground mb-8 leading-relaxed">
              Every member of the Sanganeb Limo team is held to the highest professional standards. Our comprehensive training and vetting process ensures that every journey meets our exacting requirements:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {standards.map((standard, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <p className="font-serif text-base text-foreground">{standard}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-card rounded-lg p-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-sans font-semibold text-2xl sm:text-3xl text-foreground mb-4">
              Committed to Excellence
            </h2>
            <p className="font-serif text-lg text-muted-foreground leading-relaxed">
              Our fleet of immaculate, late-model luxury vehicles is maintained to the highest standards. We invest continuously in training, technology, and service improvements to ensure that Sanganeb Limo remains the gold standard in executive transportation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
