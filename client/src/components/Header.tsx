import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";


export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Fleet", href: "/fleet" },
    { name: "Services", href: "/services" },
    { name: "Rates", href: "/rates" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 hover-elevate active-elevate-2 rounded-md px-2 py-1 -ml-2" data-testid="link-home">
            <div className="h-12 w-12 rounded-md bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl">S</div>
            <div className="hidden sm:block">
              <div className="font-sans font-semibold text-lg text-foreground">SANGANEB</div>
              <div className="font-sans text-xs text-primary tracking-widest">LIMOUSINE</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link 
                key={item.name} 
                href={item.href}
                className={`font-sans text-sm font-medium transition-colors hover-elevate active-elevate-2 px-3 py-2 rounded-md ${
                  location === item.href ? "text-primary" : "text-foreground"
                }`}
                data-testid={`link-${item.name.toLowerCase()}`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="default" className="hidden sm:inline-flex" asChild data-testid="button-book-now">
              <Link href="/book-now">
                Book Now
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-menu-toggle"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t bg-background">
          <div className="px-6 py-4 space-y-2">
            {navigation.map((item) => (
              <Link 
                key={item.name} 
                href={item.href}
                className={`block font-sans text-sm font-medium px-4 py-3 rounded-md hover-elevate active-elevate-2 ${
                  location === item.href ? "text-primary bg-accent" : "text-foreground"
                }`}
                onClick={() => setMobileMenuOpen(false)}
                data-testid={`link-mobile-${item.name.toLowerCase()}`}
              >
                {item.name}
              </Link>
            ))}
            <Button className="w-full mt-4" asChild onClick={() => setMobileMenuOpen(false)}>
              <Link href="/book-now" data-testid="button-mobile-book-now">
                Book Now
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
