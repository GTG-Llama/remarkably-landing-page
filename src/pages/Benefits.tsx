import { Card } from "@/components/ui/card";

const Benefits = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="container mx-auto px-4 py-16 md:py-24">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Empowering Teachers with AI Grading: Remarkably Benefits
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-12">
            Remarkably helps educators save time, personalize feedback, reduce grading stress, 
            and improve student outcomes - all through the power of AI
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          <Card className="p-8">
            <div className="mb-4">
              <h3 className="text-2xl font-semibold mb-4">5x Faster Grading</h3>
              <p className="text-muted-foreground">
                Grade essays 5-7x faster using AI. Remarkably reduces grading time from 15–20 minutes 
                to just 3–5 minutes per essay, helping teachers focus on teaching and student engagement.
              </p>
            </div>
          </Card>

          <Card className="p-8">
            <div className="mb-4">
              <h3 className="text-2xl font-semibold mb-4">Personalized Feedback</h3>
              <p className="text-muted-foreground">
                Remarkably adapts to your unique grading style — tone, phrasing, and feedback depth. 
                Provide personalized essay comments with AI that learns from you.
              </p>
            </div>
          </Card>

          <Card className="p-8">
            <div className="mb-4">
              <h3 className="text-2xl font-semibold mb-4">Label on Handwritten Essays</h3>
              <p className="text-muted-foreground">
                Remarkably allows teachers to annotate directly on scanned handwritten essays. 
                Our handwriting OCR enables direct marking on essays, making feedback easily visible 
                to students. We equip teachers with skills to grade like world-class professors and 
                provide detailed feedback to parents.
              </p>
            </div>
          </Card>

          <Card className="p-8">
            <div className="mb-4">
              <h3 className="text-2xl font-semibold mb-4">Standardized Grading</h3>
              <p className="text-muted-foreground">
                Ensure consistent, unbiased grading across students and classes. 
                Remarkably applies your rubric-based standards to every submission.
              </p>
            </div>
          </Card>

          <Card className="p-8">
            <div className="mb-4">
              <h3 className="text-2xl font-semibold mb-4">Improve Teacher Well-being</h3>
              <p className="text-muted-foreground">
                Reduce teacher burnout by automating tedious marking tasks. 
                Spend less time grading and more time doing what matters most.
              </p>
            </div>
          </Card>

          <Card className="p-8">
            <div className="mb-4">
              <h3 className="text-2xl font-semibold mb-4">Enhanced Understanding</h3>
              <p className="text-muted-foreground">
                Track student strengths, weaknesses, and writing progress over time. 
                Use AI-powered analytics to improve classroom performance and tailor support.
              </p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Benefits; 