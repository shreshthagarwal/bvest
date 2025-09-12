"use client";
import React from "react";
import { motion } from "framer-motion";

interface ProblemStatementCardProps {
  title: string;
  description: string;
  theme: string;
  index: number;
  icon: string;
}

const ProblemStatementCard: React.FC<ProblemStatementCardProps> = ({
  title,
  description,
  theme,
  index,
  icon,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative h-full"
    >
      <div
        className={`${theme} rounded-2xl p-0.5 h-full transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl`}
      >
        <div className="h-full bg-[#111827]/95 backdrop-blur-xl rounded-2xl p-4 flex flex-col relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-16 h-16 bg-white/5 rounded-full -translate-y-8 translate-x-8"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/3 rounded-full translate-y-12 -translate-x-12"></div>

          {/* Icon */}
          <div className="text-3xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>

          {/* Content */}
          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
            {title}
          </h3>
          <p className="text-[#E5E7EB] flex-grow mb-3 leading-relaxed text-sm">
            {description}
          </p>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-auto w-full py-2 px-4 bg-gradient-to-r from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 text-white font-semibold rounded-lg transition-all duration-300 border border-white/20 hover:border-white/30 backdrop-blur-sm group-hover:shadow-lg text-sm"
          >
            <span className="flex items-center justify-center gap-2">
              Download Problem Statement
              <svg
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

const ProblemStatements: React.FC = () => {
  const problemStatements = [
    {
    title: "Waste Management & Circular Economy",
    description: "Reduce landfill pressure and promote a circular economy by encouraging sustainable consumption, efficient waste segregation, recycling, and reuse in urban environments like Delhi.",
    theme: "bg-gradient-to-br from-[#38BDF8] to-[#3B82F6]",
    icon: "♻️"
  },
  {
    title: "Energy Conservation & Efficiency",
    description: "Address rising energy demand by optimizing consumption, integrating renewable sources, and promoting behavioral changes to reduce wastage in households, offices, and grids.",
    theme: "bg-gradient-to-br from-[#36D399] to-[#10B981]",
    icon: "⚡"
  },
  {
    title: "Water Conservation",
    description: "Tackle urban water scarcity by tracking consumption, detecting leaks, improving wastewater recycling, and educating citizens for sustainable water use and distribution.",
    theme: "bg-gradient-to-br from-[#0EA5E9] to-[#2563EB]",
    icon: "💧"
  },
  {
    title: "Sustainable Agriculture & Food Systems",
    description: "Promote eco-friendly farming and food security by enhancing supply chains, diagnostics, inventory management, and localized production through data-driven solutions.",
    theme: "bg-gradient-to-br from-[#F59E0B] to-[#D97706]",
    icon: "🌱"
  },
  {
    title: "Environmental Awareness & Education",
    description: "Empower individuals and communities with knowledge and tools to adopt sustainable behaviors through interactive learning, gamified platforms, and awareness campaigns.",
    theme: "bg-gradient-to-br from-[#A855F7] to-[#9333EA]",
    icon: "🏙️"
  },
  {
    title: "Environmental Policy & Governance",
    description: "Strengthen environmental policies through data-driven tools for compliance tracking, transparent reporting, citizen feedback, and informed decision-making.",
    theme: "bg-gradient-to-br from-[#14B8A6] to-[#06B6D4]",
    icon: "🦋"
  }    
  ];

  return (
    <section className="py-8 px-6 lg:px-8 relative overflow-hidden min-h-screen flex flex-col">
      {/* Background Elements */}
      <div className="absolute inset-0"></div>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-4 w-96 h-96 bg-[#36D399] rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-4 w-96 h-96 bg-[#38BDF8] rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex-1 flex flex-col">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-[#36D399] via-[#38BDF8] to-[#2563EB] bg-clip-text text-transparent"
          >
            Problem Tracks
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-[#36D399] to-[#38BDF8] mx-auto mb-4 rounded-full"
          ></motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-lg text-[#E5E7EB] max-w-2xl mx-auto leading-relaxed"
          >
            Choose your challenge and build innovative solutions that will shape
            a sustainable future.
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 flex-1">
          {problemStatements.map((problem, index) => (
            <ProblemStatementCard
              key={index}
              title={problem.title}
              description={problem.description}
              theme={problem.theme}
              index={index}
              icon={problem.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemStatements;
