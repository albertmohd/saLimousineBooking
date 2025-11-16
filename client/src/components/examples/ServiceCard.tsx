import ServiceCard from "../ServiceCard";
import { Briefcase } from "lucide-react";

export default function ServiceCardExample() {
  return (
    <div className="p-8 max-w-md">
      <ServiceCard
        icon={Briefcase}
        title="Corporate Transportation"
        description="Reliable executive transport for meetings, roadshows, and multi-day corporate events. Professional service tailored to your business needs."
      />
    </div>
  );
}
