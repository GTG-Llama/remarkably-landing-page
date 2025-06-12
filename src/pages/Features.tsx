import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Features = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
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
          <div className="bg-muted rounded-lg p-8 mb-12">
            {/* Video placeholder - replace with actual video component */}
            <div className="aspect-video bg-background rounded-lg flex items-center justify-center">
              <span className="text-muted-foreground">Demo Video Placeholder</span>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Grade Handwritten & Typed Submissions</h3>
            <p className="text-muted-foreground">
              Remarkably accepts scanned handwritten essays and digital files. No need for manual transcription.
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Advanced OCR + AI Feedback</h3>
            <p className="text-muted-foreground">
              Automatically detects grammar, sentence structure, clarity, and coherence using intelligent models.
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Mimics Your Grading Style</h3>
            <p className="text-muted-foreground">
              Remarkably learns your tone and feedback preferences, so comments feel like they came from you.
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Fast, Real-Time Feedback</h3>
            <p className="text-muted-foreground">
              Instantly grades hundreds of essays in minutes. Teachers save up to 6x the time.
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">PDF Splitter</h3>
            <p className="text-muted-foreground">
              Instantly grades hundreds of essays in minutes. Teachers save up to 6x the time.
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">3 Unique Dashboards</h3>
            <p className="text-muted-foreground">
              Remarkably features three unique dashboards — Class, Assignment, and Student — designed to give 
              teachers a complete view of progress, performance, and feedback across every level.
            </p>
          </Card>
        </div>

        {/* Time Calculator Widget */}
        <div className="mt-16 bg-muted rounded-lg p-8">
          <h3 className="text-2xl font-semibold mb-6 text-center">Time Saved Calculator</h3>
          <div className="max-w-md mx-auto">
            <div className="space-y-4">
              <label className="block">
                <span className="text-sm font-medium">Number of Students</span>
                <input 
                  type="number" 
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
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
    </div>
  );
};

export default Features; 