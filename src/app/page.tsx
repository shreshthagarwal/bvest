'use client';

import { Hero } from '@/components/Hero';
import { Navbar } from '@/components/Navbar';
import { AnimatedBackground } from '@/components/AnimatedBackground';
import { Hackathon } from '@/components/Hackathon';

export default function Home() {
  return (
    <main className="min-h-screen">
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <Hackathon />
    </main>
  );
}
