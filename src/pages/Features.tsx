import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FlowingParticles from "@/components/FlowingParticles";
import GlowEffect from "@/components/GlowEffect";

const Features = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <FlowingParticles />
      <GlowEffect targetSelector="#features-hero" startDelay={0.2} />
      
      {/* Header */}
      <Header />

      <main className="pt-32 pb-16">
        {/* Hero Section */}
        <section id="features-hero" className="container mx-auto px-4 mb-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              AI powered essay grading features for Handwritten and Typed Work
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Remarkably is an AI grading platform built for real classrooms. It grades handwritten and typed essays, 
              mirrors your personal marking style, and provides instant, high quality feedback. 
              Saving teachers hours every week.
            </p>
          </div>

          {/* Demo Section */}
          <div className="mt-12 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">SEE A LIVE DEMO</h2>
            <p className="text-muted-foreground mb-8">
              Want to see Remarkably in action? Watch how we grade a real handwritten essay in under 2 minutes.
            </p>
            <div className="bg-muted rounded-lg border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 mb-12 transform hover:translate-y-[-2px] transition-transform">
              {/* Video placeholder - replace with actual video component */}
              <div className="aspect-video bg-background rounded-lg flex items-center justify-center border-2 border-black">
                <span className="text-muted-foreground">Demo Video Placeholder</span>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Grade Handwritten & Typed Submissions",
                description: "Remarkably accepts scanned handwritten essays and digital files. No need for manual transcription."
              },
              {
                title: "Advanced OCR + AI Feedback",
                description: "Automatically detects grammar, sentence structure, clarity, and coherence using intelligent models."
              },
              {
                title: "Mimics Your Grading Style",
                description: "Remarkably learns your tone and feedback preferences, so comments feel like they came from you."
              },
              {
                title: "Fast, Real-Time Feedback",
                description: "Instantly grades hundreds of essays in minutes. Teachers save up to 6x the time."
              },
              {
                title: "PDF Splitter",
                description: "Instantly grades hundreds of essays in minutes. Teachers save up to 6x the time."
              },
              {
                title: "3 Unique Dashboards",
                description: "Remarkably features three unique dashboards — Class, Assignment, and Student — designed to give teachers a complete view of progress, performance, and feedback across every level."
              }
            ].map((feature, index) => (
              <Card key={index} className="p-8 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform hover:-translate-y-1 transition-all bg-white">
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>

          {/* Time Calculator Widget */}
          <div className="mt-16 bg-gradient-to-r from-pink-100 to-violet-100 rounded-lg border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8">
            <h3 className="text-2xl font-semibold mb-6 text-center">Time Saved Calculator</h3>
            <div className="max-w-md mx-auto">
              <div className="space-y-4">
                <label className="block">
                  <span className="text-sm font-medium">Number of Students</span>
                  <input 
                    type="number" 
                    className="mt-1 block w-full rounded-md border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all px-4 py-2"
                    placeholder="Enter number of students"
                  />
                </label>
                <div className="text-center">
                  <p className="text-lg font-semibold">Estimated Time Saved:</p>
                  <p className="text-3xl font-bold text-primary">0 hours/week</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Features; 