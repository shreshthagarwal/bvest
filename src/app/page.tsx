'use client';

import Image from "next/image";
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

// Dynamically import components with no SSR to avoid hydration issues
const Navbar = dynamic(() => import('@/components/Navbar'), { ssr: false });
const Hero = dynamic(() => import('@/components/Hero'), { ssr: false });
const HackathonSection = dynamic(() => import('@/components/HackathonSection'), { ssr: false });
const EventsSection = dynamic(() => import('@/components/EventsSection'), { ssr: false });
const TeamSection = dynamic(() => import('@/components/TeamSection'), { ssr: false });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false });

// Metadata for the page

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Background gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-black to-green-900/20 -z-10" />
      
      {/* Main content */}
      <main className="relative z-10">
        <Navbar />
        <Hero />
        <div className="space-y-20">
          <HackathonSection />
          <EventsSection />
          <TeamSection />
        </div>
        <Footer />
        
        {/* Add smooth scrolling for anchor links */}
        <style jsx global>{`
          html {
            scroll-behavior: smooth;
          }
          
          /* Custom selection color */
          ::selection {
            background: rgba(34, 197, 94, 0.3);
            color: #fff;
          }
          
          /* Remove focus outline for mouse users but keep for keyboard navigation */
          *:focus:not(:focus-visible) {
            outline: none;
          }
          
          *:focus-visible {
            outline: 2px solid #22c55e;
            outline-offset: 2px;
          }
        `}</style>
      </main>
    </div>
  );
}
