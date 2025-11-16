import FAQSection from "@/components/FAQSection";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function FAQ() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">
        <FAQSection />

        <div className="mt-16 bg-card rounded-lg p-12 text-center">
          <h2 className="font-sans font-semibold text-2xl sm:text-3xl text-foreground mb-4">
            Still Have Questions?
          </h2>
          <p className="font-serif text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our team is here to help. Contact us for personalized assistance with your transportation needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" data-testid="button-faq-contact">
                Contact Us
              </Button>
            </Link>
            <Link href="/book-now">
              <Button size="lg" variant="outline" data-testid="button-faq-book">
                Book a Ride
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
