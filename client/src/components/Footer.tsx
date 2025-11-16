import { Link } from "wouter";
import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import logoImage from "@assets/photo_2025-11-09_19-25-55_1762712767420.jpg";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Our Fleet", href: "/fleet" },
    { name: "Services", href: "/services" },
    { name: "Rates", href: "/rates" },
    { name: "About Us", href: "/about" },
    { name: "Book Now", href: "/book-now" },
    { name: "Contact", href: "/contact" },
    { name: "FAQ", href: "/faq" },
  ];

  return (
    <footer className="bg-card border-t">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src={logoImage} alt="Sanganeb Limo" className="h-12 w-12 rounded-md" />
              <div>
                <div className="font-sans font-semibold text-lg text-foreground">SANGANEB</div>
                <div className="font-sans text-xs text-primary tracking-widest">LIMOUSINE</div>
              </div>
            </div>
            <p className="font-serif text-sm text-muted-foreground mb-6 leading-relaxed">
              Discreet, Professional Chauffeur Services for Distinguished Clients
            </p>
            <p className="font-sans text-sm font-medium text-foreground">Available 24/7 for Your Transportation Needs</p>
          </div>

          <div>
            <h3 className="font-sans font-semibold text-base text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="font-serif text-sm text-muted-foreground hover:text-primary transition-colors hover-elevate active-elevate-2 inline-block px-2 py-1 -ml-2 rounded-md" 
                    data-testid={`link-footer-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-sans font-semibold text-base text-foreground mb-4">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="tel:+1234567890" className="font-serif text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-phone">
                  +1 (234) 567-8900
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="mailto:info@sanganeblimo.com" className="font-serif text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-email">
                  info@sanganeblimo.com
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="font-sans font-medium text-sm text-foreground mb-3">Follow Us</h4>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover-elevate active-elevate-2 transition-all" data-testid="link-linkedin">
                  <Linkedin className="w-5 h-5 text-secondary-foreground" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover-elevate active-elevate-2 transition-all" data-testid="link-facebook">
                  <Facebook className="w-5 h-5 text-secondary-foreground" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover-elevate active-elevate-2 transition-all" data-testid="link-instagram">
                  <Instagram className="w-5 h-5 text-secondary-foreground" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-serif text-sm text-muted-foreground">
              © 2024 Sanganeb Limo. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="font-serif text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-privacy">
                Privacy Policy
              </a>
              <a href="#" className="font-serif text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-terms">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
