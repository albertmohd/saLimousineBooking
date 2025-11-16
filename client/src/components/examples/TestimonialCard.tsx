import TestimonialCard from "../TestimonialCard";

export default function TestimonialCardExample() {
  return (
    <div className="p-8 max-w-md">
      <TestimonialCard
        quote="Sanganeb Limo has been our trusted transportation partner for all diplomatic functions. Their discretion and professionalism are unmatched."
        author="Ambassador Sarah Williams"
        title="Chief of Protocol"
        organization="Ministry of Foreign Affairs"
      />
    </div>
  );
}
