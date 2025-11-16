import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <Card className="hover-elevate transition-shadow" data-testid={`card-service-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <CardContent className="p-8">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        <h3 className="font-sans font-semibold text-xl text-foreground mb-3">{title}</h3>
        <p className="font-serif text-base text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
}
