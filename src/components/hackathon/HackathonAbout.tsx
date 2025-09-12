"use client";
import { Space_Grotesk } from "next/font/google";
import { motion } from "framer-motion";

const spaceGrotesk = Space_Grotesk({
  weight: ["400", "600"],
  subsets: ["latin"],
});

export function HackathonAbout() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className={`text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 mb-6 ${spaceGrotesk.className}`}
          >
            About EcoCode
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-6"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-slate-100 mb-6">
                Building a Sustainable Future Through Code
              </h3>
            </div>
            
            <div className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50">
              <p className="text-slate-300 text-sm sm:text-lg leading-relaxed mb-8">
                EcoCode is the premier hackathon of BVEST, a mission-driven event
                where top innovators tackle the planet&apos;s most urgent
                environmental challenges. This isn&apos;t just a competition;
                it&apos;s a high-energy, 24-hour sprint to build groundbreaking
                solutions for a sustainable future. At EcoCode, your skills meet
                real-world impact. You&apos;ll work on live problems, design
                innovative tech, and code for a cause that matters. This is where
                your passion for technology fuels a global change, proving that a
                single line of code can help build a better, greener world.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                <StatCard number="24" label="Hours" />
                <StatCard number="300+" label="Registrations" />
                <StatCard number="20+" label="Problems" />
                <StatCard number="6" label="Tracks" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/30 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 text-center hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
      <div className="text-2xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
        {number}
      </div>
      <div className="text-slate-300 text-xs sm:text-sm font-medium mt-1 sm:mt-2">{label}</div>
    </div>
  );
}
