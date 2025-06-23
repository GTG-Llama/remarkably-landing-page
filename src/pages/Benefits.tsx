import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FlowingParticles from "@/components/FlowingParticles";
import GlowEffect from "@/components/GlowEffect";

const Benefits = () => {
  const benefits = [
    {
      title: "5x Faster Grading",
      description: "Grade essays 5-7x faster using AI. Remarkably reduces grading time from 15–20 minutes to just 3–5 minutes per essay, helping teachers focus on teaching and student engagement."
    },
    {
      title: "Personalized Feedback",
      description: "Remarkably adapts to your unique grading style — tone, phrasing, and feedback depth. Provide personalized essay comments with AI that learns from you."
    },
    {
      title: "Label on Handwritten Essays",
      description: "Remarkably allows teachers to annotate directly on scanned handwritten essays. Our handwriting OCR enables direct marking on essays, making feedback easily visible to students. We equip teachers with skills to grade like world-class professors and provide detailed feedback to parents."
    },
    {
      title: "Standardized Grading",
      description: "Ensure consistent, unbiased grading across students and classes. Remarkably applies your rubric-based standards to every submission."
    },
    {
      title: "Improve Teacher Well-being",
      description: "Reduce teacher burnout by automating tedious marking tasks. Spend less time grading and more time doing what matters most."
    },
    {
      title: "Enhanced Understanding",
      description: "Track student strengths, weaknesses, and writing progress over time. Use AI-powered analytics to improve classroom performance and tailor support."
    }
  ];

  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <FlowingParticles />
      <GlowEffect targetSelector="#benefits-hero" startDelay={0.2} />
      
      {/* Header */}
      <Header />

      <main className="pt-32 pb-16">
        {/* Hero Section */}
        <section id="benefits-hero" className="container mx-auto px-4 mb-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              Empowering Teachers with AI Grading: Remarkably Benefits
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-12">
              Remarkably helps educators save time, personalize feedback, reduce grading stress, 
              and improve student outcomes - all through the power of AI
            </p>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className="p-8 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform hover:-translate-y-1 transition-all bg-white"
              >
                <div className="mb-4">
                  <h3 className="text-2xl font-semibold mb-4">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Benefits; 