import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-indigo-900 to-white pb-8 pt-20 relative">
      {/* Decorative elements */}
      <div className="absolute top-14 left-1/4 w-24 h-24 bg-pink-300 border-4 border-black -rotate-6"></div>
      <div className="absolute right-1/4 top-13 w-16 h-16 bg-yellow-300 border-4 border-black rotate-12"></div>

      <div className="container mx-auto px-4 md:px-2 relative">
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="relative">
            <div className="bg-white border-4 border-black p-6 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] mb-8">
              <div className="flex items-center mb-4">
                <img
                  src="/remarkably logo black.png"
                  alt="Logo"
                  className="w-38 h-10"
                />
              </div>
              <p className="text-black font-medium mb-6">
                Empowering teachers with AI-powered essay grading to save time
                and provide better feedback.
              </p>
              <div className="flex space-x-3 flex-wrap">
                <a
                  href="https://www.linkedin.com/company/lenor-eduai"
                  className="bg-[#FFAFCC] border-2 border-black p-2 hover:bg-yellow-300 hover:-translate-y-1 transform transition-all flex items-center justify-center"
                  aria-label="Linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>

          <div>
            <div className="border-3 border-black bg-[#B8F7D4] p-5 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] mb-8">
              <h3 className="text-lg font-black mb-4 relative inline-block">
                Contact Us
                <span className="absolute -bottom-1 left-0 w-full h-2 bg-pink-400 -z-0"></span>
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <a
                    href="mailto:contact@lenorai.com"
                    className="bg-black p-1 flex items-center justify-center"
                    aria-label="Email"
                  >
                    <Mail size={18} className="text-white" />
                  </a>
                  <a
                    href="mailto:contact@lenorai.com"
                    className="text-black font-bold hover:underline decoration-2 underline-offset-4"
                  >
                    contact@lenorai.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <a
                    href="tel:+6582608445"
                    className="bg-black p-1 flex items-center justify-center"
                    aria-label="Phone"
                  >
                    <Phone size={18} className="text-white" />
                  </a>
                  <a
                    href="tel:+6582608445"
                    className="text-black font-bold hover:underline decoration-2 underline-offset-4"
                  >
                    (+65) 8260 8445
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t-4 border-black pt-8 mt-12">
          <div className="border- border-black p-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]p-4 flex flex-col md:flex-row justify-between items-center">
            <p className="text-black font-bold mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Lenor. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="text-black font-bold hover:underline decoration-2 underline-offset-4"
              ></a>
              <a
                href="#"
                className="text-black font-bold hover:underline decoration-2 underline-offset-4"
              ></a>
              <a
                href="#"
                className="text-black font-bold hover:underline decoration-2 underline-offset-4"
              ></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
