import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

const CTASection: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="cta"
      className="py-24 relative overflow-hidden bg-gradient-to-b from-indigo-400 to-indigo-900 bg-opacity-90"
    >
      {/* Decorative elements */}
      <motion.div
        className="absolute top-12 left-1/4 w-24 h-24 bg-cyan-300 border-4 border-black z-0"
        initial={{ rotate: 0, opacity: 0 }}
        whileInView={{ rotate: 12, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
      <motion.div
        className="absolute bottom-12 right-1/4 w-20 h-20 bg-yellow-300 border-4 border-black z-0"
        initial={{ rotate: 0, opacity: 0 }}
        whileInView={{ rotate: -6, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          ref={contentRef}
          className="relative max-w-5xl mx-auto"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="absolute -top-8 -left-8 w-full h-full bg-pink-300 border-4 border-black z-0"
            initial={{ rotate: 0, opacity: 0 }}
            whileInView={{ rotate: 2, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />

          <div className="bg-white border-4 border-black p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-black mb-6 text-black">
                  Ready to Become
                  <span className="relative ml-2 inline-block">
                    <span className="relative z-10">Remarkable</span>
                    <motion.span
                      className="absolute -bottom-2 left-0 w-full h-4 bg-yellow-300 -z-0"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.8 }}
                    />
                  </span>
                  ?
                </h2>
                <motion.p
                  className="text-xl text-black font-bold mb-8 bg-blue-100 border-2 border-black p-4"
                  initial={{ rotate: 0, opacity: 0 }}
                  whileInView={{ rotate: -1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  Join hundreds of teachers who are reclaiming their time and
                  making a bigger impact with Remarkably.
                </motion.p>
                <div className="flex flex-wrap gap-4">
                  <motion.button
                    className="bg-black text-white text-lg font-black px-8 py-4 border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform transition-all flex items-center gap-2 animate-bounce"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}

                  >
                    <a href="mailto:contact@lenorai.com">Book a Demo</a>
                    <ArrowRight size={18} />
                  </motion.button>
                  <motion.button
                    className="bg-pink-300 text-black text-lg font-black px-8 py-4 border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform transition-all duration-300 hover:-translate-y-1 hover:-translate-x-1"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    It's Free!
                  </motion.button>
                </div>
              </motion.div>

              <motion.div
                className="relative"
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <motion.div
                  className="absolute -top-4 -left-4 w-full h-full bg-[#B8F7D4] border-2 border-black z-0"
                  initial={{ rotate: 0, opacity: 0 }}
                  whileInView={{ rotate: -2, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                />
                <motion.div
                  className="bg-white border-3 border-black p-6 relative z-10 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]"
                  initial={{ rotate: 0, opacity: 0 }}
                  whileInView={{ rotate: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <h3 className="text-xl font-black mb-6 text-black relative inline-block">
                    What You'll Get:
                    <motion.span
                      className="absolute -bottom-2 left-0 w-full h-2 bg-cyan-300 -z-0"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.9 }}
                    />
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "A Powerful automated essay grader.",
                      "Personalized onboarding session",
                      "Reduced Marking Time from 15mins to 3mins",
                      "Priority customer support",
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start gap-3 mb-3"
                        initial={{ x: -10, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                      >
                        <div className="w-6 h-6 bg-black flex items-center justify-center flex-shrink-0">
                          <Check size={14} className="text-white" />
                        </div>
                        <span className="text-black font-bold">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
