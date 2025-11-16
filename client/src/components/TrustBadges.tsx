import { Shield, Clock, Award, CheckCircle2 } from "lucide-react";

export default function TrustBadges() {
  const badges = [
    { icon: Clock, title: "24/7 Service", description: "Available anytime" },
    { icon: Shield, title: "Licensed & Insured", description: "Fully compliant" },
    { icon: CheckCircle2, title: "Professional Chauffeurs", description: "Vetted & trained" },
    { icon: Award, title: "Government Approved", description: "Trusted partner" },
  ];

  return (
    <section className="py-12 bg-card border-y">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {badges.map((badge, index) => (
            <div key={index} className="flex flex-col items-center text-center gap-3" data-testid={`badge-${badge.title.toLowerCase().replace(/\s+/g, '-')}`}>
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <badge.icon className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="font-sans font-semibold text-base text-foreground">{badge.title}</h3>
                <p className="font-serif text-sm text-muted-foreground">{badge.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
