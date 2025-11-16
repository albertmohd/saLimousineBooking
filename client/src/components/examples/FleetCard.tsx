import FleetCard from "../FleetCard";
import mercedesImage from "@assets/generated_images/Mercedes_S-Class_executive_sedan_8e4fb399.png";

export default function FleetCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <FleetCard
        image={mercedesImage}
        category="Executive Sedan"
        name="Mercedes S-Class"
        passengers={3}
        amenities={["Premium leather seats", "Wi-Fi connectivity", "Refreshments included", "Phone chargers"]}
        pricing="From $150/hour"
        onCheckAvailability={() => console.log("Check availability clicked")}
      />
    </div>
  );
}
