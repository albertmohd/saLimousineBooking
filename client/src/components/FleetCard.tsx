import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Wifi, Coffee } from "lucide-react";

interface FleetCardProps {
  image: string;
  category: string;
  name: string;
  passengers: number;
  amenities: string[];
  pricing?: string;
  onCheckAvailability?: () => void;
}

export default function FleetCard({
  image,
  category,
  name,
  passengers,
  amenities,
  pricing = "Request Quote",
  onCheckAvailability,
}: FleetCardProps) {
  return (
    <Card className="overflow-hidden hover-elevate transition-shadow" data-testid={`card-vehicle-${name.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="aspect-video overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <CardContent className="p-6">
        <div className="flex items-start justify-between gap-2 mb-3">
          <div>
            <Badge variant="secondary" className="mb-2" data-testid={`badge-category-${category.toLowerCase().replace(/\s+/g, '-')}`}>
              {category}
            </Badge>
            <h3 className="font-sans font-semibold text-xl text-foreground">{name}</h3>
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <Users className="w-4 h-4" />
          <span>{passengers} Passengers</span>
        </div>
        <div className="space-y-2 mb-4">
          <p className="font-sans text-sm font-medium text-foreground">Amenities:</p>
          <ul className="text-sm text-muted-foreground space-y-1 font-serif">
            {amenities.slice(0, 3).map((amenity, index) => (
              <li key={index} className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-primary" />
                {amenity}
              </li>
            ))}
          </ul>
        </div>
        <p className="font-sans text-lg font-semibold text-primary" data-testid={`text-pricing-${name.toLowerCase().replace(/\s+/g, '-')}`}>
          {pricing}
        </p>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex gap-3">
        <Button
          variant="default"
          className="flex-1"
          onClick={onCheckAvailability}
          data-testid={`button-check-availability-${name.toLowerCase().replace(/\s+/g, '-')}`}
        >
          Check Availability
        </Button>
      </CardFooter>
    </Card>
  );
}
