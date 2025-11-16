import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import heroImage from "@assets/generated_images/Hero_chauffeur_luxury_sedan_53c1a65c.png";

export default function Hero() {
  return (
    <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Professional chauffeur service"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <h1 className="font-sans font-semibold text-4xl sm:text-5xl lg:text-6xl text-white mb-6 tracking-tight">
          Welcome to Sanganeb Limo
        </h1>
        <p className="font-sans text-xl sm:text-2xl text-white/95 mb-4 max-w-3xl mx-auto">
          Elite Transportation for Distinguished Clients
        </p>
        <p className="font-serif text-base sm:text-lg text-white/90 mb-12 max-w-3xl mx-auto">
          Serving Government Officials, Corporate Executives, and VIP Clients with Discretion and Excellence
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/book-now">
            <Button size="lg" className="text-base px-8" data-testid="button-hero-book-now">
              Book Your Ride
            </Button>
          </Link>
          <Link href="/fleet">
            <Button
              variant="outline"
              size="lg"
              className="text-base px-8 bg-background/10 backdrop-blur border-white/30 text-white hover:bg-background/20"
              data-testid="button-hero-view-fleet"
            >
              View Our Fleet
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
