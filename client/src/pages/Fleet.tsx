import FleetCard from "@/components/FleetCard";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Import fleet images
import mercedesImage from "@assets/generated_images/Mercedes_S-Class_executive_sedan_8e4fb399.png";
import bmwImage from "@assets/generated_images/BMW_7-Series_luxury_sedan_82b96848.png";
import audiImage from "@assets/generated_images/Audi_A8_executive_sedan_f27508a7.png";
import escaladeImage from "@assets/generated_images/Cadillac_Escalade_luxury_SUV_73bd9b1e.png";
import rangeRoverImage from "@assets/generated_images/Range_Rover_luxury_SUV_96bd9aa7.png";
import glsImage from "@assets/generated_images/Mercedes_GLS_luxury_SUV_a0e8a5b6.png";
import limoImage from "@assets/generated_images/Stretch_limousine_luxury_vehicle_9c45523f.png";
import sprinterImage from "@assets/generated_images/Mercedes_Sprinter_executive_van_1435385e.png";

export default function Fleet() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const vehicles = [
    {
      image: mercedesImage,
      category: "Executive Sedan",
      name: "Mercedes S-Class",
      passengers: 3,
      amenities: ["Premium leather seats", "Wi-Fi connectivity", "Refreshments included", "Phone chargers"],
      pricing: "From $150/hour",
    },
    {
      image: bmwImage,
      category: "Executive Sedan",
      name: "BMW 7-Series",
      passengers: 3,
      amenities: ["Executive comfort", "Advanced technology", "Privacy partition", "Premium audio"],
      pricing: "From $145/hour",
    },
    {
      image: audiImage,
      category: "Executive Sedan",
      name: "Audi A8",
      passengers: 3,
      amenities: ["Quattro AWD", "Massage seats", "Ambient lighting", "Wi-Fi hotspot"],
      pricing: "From $145/hour",
    },
    {
      image: escaladeImage,
      category: "Luxury SUV",
      name: "Cadillac Escalade",
      passengers: 6,
      amenities: ["Spacious interior", "Privacy partition", "Premium sound system", "Rear entertainment"],
      pricing: "From $200/hour",
    },
    {
      image: rangeRoverImage,
      category: "Luxury SUV",
      name: "Range Rover",
      passengers: 6,
      amenities: ["All-terrain capability", "Luxurious comfort", "Advanced safety", "Climate zones"],
      pricing: "From $220/hour",
    },
    {
      image: glsImage,
      category: "Luxury SUV",
      name: "Mercedes GLS",
      passengers: 6,
      amenities: ["7-passenger seating", "Premium materials", "Panoramic roof", "Heated seats"],
      pricing: "From $210/hour",
    },
    {
      image: limoImage,
      category: "Stretch Limousine",
      name: "Stretch Limousine",
      passengers: 8,
      amenities: ["Bar service", "Entertainment system", "Fiber optic lighting", "Privacy partition"],
      pricing: "From $300/hour",
    },
    {
      image: sprinterImage,
      category: "Executive Van",
      name: "Mercedes Sprinter",
      passengers: 12,
      amenities: ["Group seating", "Luggage space", "Wi-Fi connectivity", "Climate control"],
      pricing: "From $180/hour",
    },
  ];

  const filteredVehicles = selectedCategory === "all" 
    ? vehicles 
    : vehicles.filter(v => v.category === selectedCategory);

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="font-sans font-semibold text-4xl sm:text-5xl text-foreground mb-4">
            The Sanganeb Limo Fleet
          </h1>
          <p className="font-serif text-lg text-muted-foreground max-w-2xl mx-auto">
            Immaculate, late-model luxury vehicles maintained to the highest standards for your comfort and safety
          </p>
        </div>

        <Tabs defaultValue="all" className="mb-12" onValueChange={setSelectedCategory}>
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8">
            <TabsTrigger value="all" data-testid="tab-all">All Vehicles</TabsTrigger>
            <TabsTrigger value="Executive Sedan" data-testid="tab-sedans">Sedans</TabsTrigger>
            <TabsTrigger value="Luxury SUV" data-testid="tab-suvs">SUVs</TabsTrigger>
            <TabsTrigger value="Stretch Limousine" data-testid="tab-limos">Limousines</TabsTrigger>
            <TabsTrigger value="Executive Van" data-testid="tab-vans">Vans</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVehicles.map((vehicle, index) => (
            <FleetCard
              key={index}
              {...vehicle}
              onCheckAvailability={() => console.log(`Check availability: ${vehicle.name}`)}
            />
          ))}
        </div>

        {filteredVehicles.length === 0 && (
          <div className="text-center py-16">
            <p className="font-serif text-lg text-muted-foreground">
              No vehicles found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
