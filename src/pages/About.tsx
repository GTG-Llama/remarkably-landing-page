import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="container mx-auto px-4 py-16 md:py-24">
        {/* Mission Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Mission: Help educators grade faster, give better feedback, and focus more on teaching.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Remarkably is an AI-powered essay grading solution developed by a group of young 
            entrepreneurs from the National University of Singapore (NUS).
          </p>
        </div>

        {/* Background Section */}
        <Card className="p-8 mb-12">
          <p className="text-lg leading-relaxed text-muted-foreground">
            With backgrounds in education, machine learning, and business, we created Remarkably 
            to solve a real problem: grading hundreds of essays by hand is exhausting, slow, 
            and unsustainable. Our tool brings AI directly into the teacher workflow, especially 
            for handwritten compositions, which most other platforms ignore.
          </p>
        </Card>

        {/* What We Do Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">What We Do</h2>
          <p className="text-lg mb-6">We help schools:</p>
          <ul className="list-disc list-inside space-y-4 text-muted-foreground">
            <li>Grade handwritten and typed essays up to 5–7x faster</li>
            <li>Generate feedback aligned to each teacher's style and school's rubric</li>
            <li>Reduce teacher workload without compromising on quality</li>
            <li>Track student growth over time with smart reports</li>
            <li>Save hours of repetitive marking every week</li>
          </ul>
          <p className="mt-6 text-muted-foreground">
            Our solution is currently used in MOE schools, international classrooms, and 
            expanding to institutions across Southeast Asia.
          </p>
        </div>

        {/* Founder Section */}
        <Card className="p-8">
          <h2 className="text-3xl font-bold mb-6">Meet the Founder</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Harry is an entrepreneur passionate about using AI to improve education. He is the 
              co-founder of Lenor (the parent company behind Remarkably), an AI education startup 
              focused on making essay grading faster and more efficient.
            </p>
            <p>
              Harry studies business and AI at the National University of Singapore, and is also 
              the ex-Machine Learning Director of Fintech Society. Harry combines strong technical 
              expertise in AI with genuine empathy for the classroom.
            </p>
            <p>
              He previously founded startups in blockchain, e-commerce, and dropshipping, and now 
              he's focused on bringing AI powered solutions to the education system.
            </p>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default About; 