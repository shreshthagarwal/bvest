'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const events = [
  {
    id: 1,
    title: 'Code Sprint',
    description: 'A fast-paced coding competition where participants solve algorithmic challenges against the clock.',
    category: 'Coding',
    date: 'Nov 14, 2024',
    icon: (
      <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Green Tech Expo',
    description: 'Showcase of innovative sustainable technologies and projects from students and startups.',
    category: 'Exhibition',
    date: 'Nov 15, 2024',
    icon: (
      <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Tech Talks',
    description: 'Inspiring talks from industry leaders on the latest trends in technology and sustainability.',
    category: 'Workshop',
    date: 'Nov 16, 2024',
    icon: (
      <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Robo Wars',
    description: 'Battle of the bots! Design and compete with your own robotic creations in this exciting competition.',
    category: 'Robotics',
    date: 'Nov 17, 2024',
    icon: (
      <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const EventsSection = () => {
  return (
    <section id="events" className="py-20 bg-black/50 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMyMmM1NWUiIHN0cm9rZS13aWR0aD0iMC41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwYXRoIGQ9Ik0xMiAyYTMgMyAwIDAgMSAzIDNjMCA0LTcgMTEtNyAxNWE0IDQgMCAwIDAgNiAwaDIiLz48cGF0aCBkPSJNMTIgOWg4bTQgMGgtOG0xMSA0YTI4LjYgMjguNCAwIDAgMC0yLjItMTIiLz48cGF0aCBkIk0yLjI1IDE1YTI4LjQgMjguNCAwIDAgMSAyLjItMTIiLz48cGF0aCBkPSJNMTggMTJjLS41Mi0yLjA1LTEuMzktMy44MS0yLjM4LTUuMTkiLz48cGF0aCBkPSJNMTIgMTlhNCA0IDAgMCAwIDQtNCIvPjwvc3ZnPg==')]" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 text-sm font-semibold text-green-400 bg-green-900/50 rounded-full mb-4">
              Events & Competitions
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
                BVEST Events 2024
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore a wide range of technical and non-technical events designed to challenge and inspire.
              Showcase your skills and win exciting prizes!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                className="group relative bg-gradient-to-br from-black to-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-green-500/30 transition-all duration-300 hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative p-8 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-3 rounded-xl bg-green-500/10 text-green-400">
                      {event.icon}
                    </div>
                    <span className="px-3 py-1 text-xs font-medium bg-gray-800 text-green-400 rounded-full">
                      {event.category}
                    </span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-white mb-3">{event.title}</h3>
                    <p className="text-gray-400 mb-6">{event.description}</p>
                  </div>
                  <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-800">
                    <div className="flex items-center text-sm text-gray-400">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {event.date}
                    </div>
                    <Link
                      href={`/events/${event.id}`}
                      className="inline-flex items-center text-green-400 hover:text-white font-medium group-hover:translate-x-1 transition-transform duration-300"
                    >
                      Learn More
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/events"
              className="inline-flex items-center px-8 py-4 border-2 border-green-500 text-base font-medium rounded-full text-white bg-green-500/10 hover:bg-green-500/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-300 transform hover:scale-105"
            >
              View All Events
              <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsSection;
