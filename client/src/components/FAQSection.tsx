import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How far in advance should I book?",
    answer: "We recommend booking at least 24 hours in advance for regular services. For special events, corporate functions, or government services, we suggest booking 3-5 days ahead to ensure vehicle availability and proper security arrangements.",
  },
  {
    question: "Do you offer airport meet & greet services?",
    answer: "Yes, we provide professional meet & greet services at all major airports. Your chauffeur will monitor your flight status and be waiting in the arrivals area with a name board, ready to assist with luggage and escort you to your vehicle.",
  },
  {
    question: "Are your chauffeurs background-checked?",
    answer: "Absolutely. All our chauffeurs undergo comprehensive background checks, extensive training, and regular performance evaluations. They are professional, courteous, and trained in defensive driving and VIP protocol.",
  },
  {
    question: "Do you have security-cleared drivers for government officials?",
    answer: "Yes, we maintain a team of security-cleared chauffeurs specifically trained to serve government officials and diplomatic personnel. These drivers have enhanced background clearances and are trained in secure transportation protocols.",
  },
  {
    question: "What's your cancellation policy?",
    answer: "Cancellations made 24 hours or more before the scheduled pickup receive a full refund. Cancellations within 24 hours are subject to a 50% cancellation fee. No-shows or same-day cancellations are charged in full. Special terms apply for corporate accounts.",
  },
  {
    question: "Do you offer corporate accounts?",
    answer: "Yes, we offer corporate account programs with monthly billing, dedicated account managers, priority booking, and volume discounts. Corporate clients benefit from detailed trip reports, centralized billing, and customized service packages.",
  },
  {
    question: "What amenities are included in your vehicles?",
    answer: "All vehicles feature premium leather seating, climate control, complimentary Wi-Fi, bottled water, phone chargers, and daily newspapers. Executive sedans and SUVs include privacy partitions, and we can accommodate special requests for refreshments or specific amenities.",
  },
  {
    question: "Are multi-lingual chauffeurs available?",
    answer: "Yes, we have chauffeurs fluent in multiple languages including English, Arabic, French, and Spanish. Please specify language requirements when booking to ensure we assign the appropriate driver.",
  },
];

export default function FAQSection() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-sans font-semibold text-3xl sm:text-4xl text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="font-serif text-lg text-muted-foreground">
            Find answers to common questions about our services
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border rounded-md px-6 bg-card"
              data-testid={`accordion-faq-${index}`}
            >
              <AccordionTrigger className="font-sans font-medium text-left hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="font-serif text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
