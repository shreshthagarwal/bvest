'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div 
          className="absolute top-1/4 -left-20 w-96 h-96 bg-green-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute top-1/2 -right-40 w-96 h-96 bg-green-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70"
          animate={{
            scale: [1, 1.2, 1],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 5,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="flex flex-col items-center text-center"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Logo */}
          <motion.div
            variants={item}
            className="mb-8"
          >
            <div className="relative h-32 w-32 mx-auto">
              <svg viewBox="0 0 512 512" className="w-full h-full">
                <path d="M256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32zm0 400c-97 0-176-79-176-176s79-176 176-176 176 79 176 176-79 176-176 176z" fill="#22C55E"/>
                <path d="M256 80c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176S353.2 80 256 80zm0 320c-79.5 0-144-64.5-144-144s64.5-144 144-144 144 64.5 144 144-64.5 144-144 144z" fill="#16A34A"/>
                <path d="M200 160h48c17.7 0 32 14.3 32 32v16c0 8.8-7.2 16-16 16s-16-7.2-16-16v-16h-48v96h48v-16c0-8.8 7.2-16 16-16s16 7.2 16 16v16c0 17.7-14.3 32-32 32h-48c-17.7 0-32-14.3-32-32V192c0-17.7 14.3-32 32-32z" fill="white"/>
                <path d="M280 160h32c8.8 0 16 7.2 16 16v144c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16z" fill="white"/>
              </svg>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 max-w-4xl mx-auto"
            variants={item}
          >
            <span className="block mb-2 text-gray-300">Welcome to</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
              BVEST 2024
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto"
            variants={item}
          >
            Where Innovation Meets Sustainability
            <span className="block text-green-400 font-semibold mt-2">#Greenovate</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 mb-16"
            variants={item}
          >
            <Link 
              href="#hackathon"
              className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/30"
            >
              Explore Hackathon
            </Link>
            <Link 
              href="#events"
              className="px-8 py-4 bg-transparent border-2 border-green-500 hover:bg-green-500/10 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
            >
              View All Events
            </Link>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-400 mb-2">Scroll Down</span>
              <div className="w-6 h-10 border-2 border-green-500 rounded-full flex justify-center p-1">
                <motion.div 
                  className="w-1 h-2 bg-green-500 rounded-full"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
