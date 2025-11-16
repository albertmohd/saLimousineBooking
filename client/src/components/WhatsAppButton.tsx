import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hello, I would like to inquire about Sanganeb Limo's chauffeur services");
    const phoneNumber = "1234567890"; // Replace with actual phone number
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <Button
      size="icon"
      className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full shadow-xl animate-bounce bg-green-600 hover:bg-green-700 text-white border-green-600"
      onClick={handleWhatsAppClick}
      data-testid="button-whatsapp"
    >
      <MessageCircle className="h-6 w-6" />
    </Button>
  );
}
