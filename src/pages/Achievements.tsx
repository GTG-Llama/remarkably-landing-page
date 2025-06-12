import { Card } from "@/components/ui/card";

const Achievements = () => {
  const partners = [
    "Google for Startups",
    "NVIDIA Inception Program",
    "MongoDB for Startups"
  ];

  const institutions = [
    "NUS Enterprise",
    "BLOCK71",
    "The HANGAR",
    "NUS Overseas Colleges",
    "NUS Computing"
  ];

  const awards = [
    "Best Pitch — NUS Ground Zero (2024 & 2025)",
    "Best Pitch — NUS Social Ignition 2024",
    "People's Choice — N House Pitch Night",
    "Audience Favorite — Social Ignition 2024",
    "Runner-Up — N House Pitch Night (2024 & 2025)",
    "Top 3 — NUS Student Innovation Carnival",
    "Regional Finalist — Hult Prize 2024",
    "NUS Venture Ignition Grant Recipient"
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="container mx-auto px-4 py-16 md:py-24">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Backed by global leaders. Recognized by national institutions. Built for educators.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Remarkably, through our parent brand Lenor, is backed by top startup programs and global tech leaders.
          </p>
        </div>

        {/* Partners Section */}
        <Card className="p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Global Partners</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {partners.map((partner, index) => (
              <div key={index} className="p-4 bg-muted rounded-lg text-center">
                <p className="font-semibold">{partner}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Institutions Section */}
        <Card className="p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Supported by NUS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {institutions.map((institution, index) => (
              <div key={index} className="p-4 bg-muted rounded-lg text-center">
                <p className="font-semibold">{institution}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Awards Section */}
        <Card className="p-8">
          <h2 className="text-2xl font-bold mb-6">Awards & Recognition</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {awards.map((award, index) => (
              <div key={index} className="p-4 bg-muted rounded-lg">
                <p className="font-semibold">{award}</p>
              </div>
            ))}
          </div>
        </Card>
      </section>
    </div>
  );
};

export default Achievements; 