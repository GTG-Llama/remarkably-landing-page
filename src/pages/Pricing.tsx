import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, X } from "lucide-react";

const PricingTier = ({ 
  tier, 
  features 
}: { 
  tier: string; 
  features: { name: string; included: boolean }[] 
}) => (
  <Card className="p-6">
    <h3 className="text-2xl font-bold mb-6">Tier {tier}</h3>
    <ul className="space-y-4">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center gap-2">
          {feature.included ? (
            <Check className="h-5 w-5 text-green-500" />
          ) : (
            <X className="h-5 w-5 text-red-500" />
          )}
          <span className="text-muted-foreground">{feature.name}</span>
        </li>
      ))}
    </ul>
  </Card>
);

const Pricing = () => {
  const features = [
    { name: "Max PDF Upload", values: ["10", "20", "50+"] },
    { name: "Storage", values: ["200MB / Student", "2GB / Student", "50GB / Student"] },
    { name: "AI Chatbot", values: [true, true, true] },
    { name: "PDF Splitter", values: [false, true, true] },
    { name: "Custom Branding", values: [false, true, true] },
    { name: "Reports", values: [false, true, true] },
    { name: "Concierge Support", values: [false, true, true] },
    { name: "Early Access", values: [false, false, true] },
    { name: "Custom Feature Discounts", values: [false, false, true] },
  ];

  const tiers = ["1", "2", "3"].map((tier, tierIndex) => ({
    tier,
    features: features.map((feature) => ({
      name: feature.name === "Max PDF Upload" || feature.name === "Storage" 
        ? `${feature.name}: ${feature.values[tierIndex]}`
        : feature.name,
      included: typeof feature.values[tierIndex] === "boolean" 
        ? feature.values[tierIndex] 
        : true
    }))
  }));

  return (
    <div className="min-h-screen bg-background">
      <section className="container mx-auto px-4 py-16 md:py-24">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Flexible Plans for Every School, Teacher, and Institution
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-12">
            Explore Remarkably's flexible pricing models built for educators — from single-classroom 
            use to school-wide rollout. Contact us to find the right AI essay grading solution for your needs.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {tiers.map((tier) => (
            <PricingTier key={tier.tier} {...tier} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center space-y-6">
          <h3 className="text-2xl font-semibold">Contact Us for Pricing</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Schedule Live Demo
            </Button>
            <Button size="lg" variant="outline">
              Send Us Email
            </Button>
            <Button size="lg" variant="outline">
              WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing; 