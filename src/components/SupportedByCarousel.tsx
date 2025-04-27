import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const logos = [
  { src: "/nus-enterprise.png", alt: "NUS Enterprise" },
  { src: "/block71.png", alt: "Block71" },
  { src: "/google.png", alt: "Google" },
  { src: "/nvidia-inception.png", alt: "Nvidia Inception Program" },
  { src: "/nus.png", alt: "NUS" },
  { src: "/nus-soc.png", alt: "NUS SOC" },
  { src: "/mongodb.png", alt: "MongoDB" },
  { src: "/nhouse.png", alt: "nHouse" },
  { src: "/social-impact-catalyst.png", alt: "Social Impact Catalyst" },
  { src: "/hangar.png", alt: "Hangar" },
  { src: "/lianhua-primary.png", alt: "Lianhua Primary School" },
];

const carouselLogos = [...logos, ...logos]; // Duplicate for seamless loop

const SupportedByCarousel: React.FC = () => {
  return (
    <section className="py-12 bg-white border-t-4 border-black border-b-4 border-black">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-2xl md:text-3xl font-black text-center mb-8 text-black">
          Supported by
        </h3>
        <TooltipProvider>
          <div className="w-full overflow-visible">
            <div
              className="flex items-center gap-10 animate-supported-carousel"
              style={{
                width: "max-content",
                animation: "carousel-scroll 30s linear infinite"
              }}
            >
              {carouselLogos.map((logo, idx) => (
                <Tooltip key={idx}>
                  <TooltipTrigger asChild>
                    <div className="flex items-center justify-center h-30 w-30 md:h-40 md:w-40 cursor-pointer">
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        className="h-40 md:h-40 object-contain mx-auto"
                        draggable={false}
                      />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent side="top" align="center">
                    {logo.alt}
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </div>
        </TooltipProvider>
      </div>
    </section>
  );
};

export default SupportedByCarousel;

// Add the following to your global CSS (index.css or App.css):
 