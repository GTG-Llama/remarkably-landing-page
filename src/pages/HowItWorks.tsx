import { Card } from "@/components/ui/card";

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Upload any essay format",
      description: `Teachers can upload handwritten essays, typed Word documents, or PDFs from Google Drive or their LMS. 
        No retyping or manual input required. Bulk upload supported for class sets. 
        Supports Primary, Secondary, JC and International School formats.`
    },
    {
      number: 2,
      title: "OCR + AI Transcription for Handwritten Essays",
      description: `Remarkably's optical character recognition (OCR) engine reads and interprets scanned handwritten essays 
        — including messy handwriting. Recognizes student names and separates submissions. 
        Maintains formatting like paragraph breaks and titles. Works across multiple handwriting styles.`
    },
    {
      number: 3,
      title: "Analyze Grammar, Structure & Clarity",
      description: `Our AI evaluates writing across key dimensions: Grammar & spelling (e.g. subject-verb agreement, 
        tense consistency), Structure (e.g. thesis clarity, paragraph cohesion, logical flow), 
        Clarity (e.g. vague language, weak topic sentences).`
    },
    {
      number: 4,
      title: "Personalized Feedback in Your Grading Style",
      description: `Remarkably doesn't just correct — it mimics how you grade. Learns your comment tone and depth 
        from past feedback. Customizes to rubrics, subjects, and marking schemes.`
    },
    {
      number: 5,
      title: "Real-Time Annotation on the Essay",
      description: `Comments are placed directly on the student's essay — including handwritten ones. 
        Highlight errors with suggested changes. Add improvement suggestions or positive reinforcement. 
        Review everything before submitting to the student.`
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="container mx-auto px-4 py-16 md:py-24">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            How Remarkably Works: AI-Powered Grading for Handwritten and Typed Essays
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-12">
            Learn how Remarkably uses AI and OCR to grade handwritten and typed essays. 
            See how it automates feedback, aligns with teacher styles, and helps schools 
            save time while improving student writing.
          </p>
        </div>

        {/* Steps Section */}
        <div className="mt-16 space-y-8">
          {steps.map((step, index) => (
            <Card key={index} className="p-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HowItWorks; 