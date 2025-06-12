import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Can it actually grade handwritten essays? My students have messy writing.",
      answer: "Yes. Our system handles real, messy student handwriting. If it's unsure, it flags it for review — so you only check what matters."
    },
    {
      question: "How does it know how I would grade? I don't want generic AI feedback.",
      answer: "You upload a few marked essays — Remarkably learn your tone, style, and feedback habits. It writes like you, not like ChatGPT."
    },
    {
      question: "How do we know it's accurate? Can we trust the grades?",
      answer: "Yes. You can upload your own rubrics, and Remarkably will grade based on them — not a generic AI standard. You control the criteria. We ensure consistency."
    },
    {
      question: "How long does it take to grade a full class?",
      answer: "Usually under an hour for 30–40 essays. Most teachers save 20+ hours per round compared to manual marking."
    },
    {
      question: "Does it work for narrative, discursive, and argumentative essays?",
      answer: "Yes. It handles all common essay types and adjusts feedback based on the structure expected."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="container mx-auto px-4 py-16 md:py-24">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Get answers to common questions about Remarkably's AI essay grading platform
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
};

export default FAQ; 