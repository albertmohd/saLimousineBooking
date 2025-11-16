import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  title: string;
  organization: string;
}

export default function TestimonialCard({ quote, author, title, organization }: TestimonialCardProps) {
  return (
    <Card className="h-full hover-elevate transition-shadow" data-testid={`card-testimonial-${author.toLowerCase().replace(/\s+/g, '-')}`}>
      <CardContent className="p-8">
        <Quote className="w-10 h-10 text-primary/20 mb-4" />
        <p className="font-serif text-base text-foreground leading-relaxed mb-6 italic">"{quote}"</p>
        <div className="border-t pt-4">
          <p className="font-sans font-semibold text-foreground">{author}</p>
          <p className="font-serif text-sm text-muted-foreground">{title}</p>
          <p className="font-serif text-sm text-muted-foreground">{organization}</p>
        </div>
      </CardContent>
    </Card>
  );
}
