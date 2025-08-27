import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BVEST 12 | Greenovate',
  description: 'BVEST - The flagship technical fest with a focus on sustainability and technology',
  keywords: ['BVEST', 'technical fest', 'hackathon', 'sustainability', 'green technology', 'innovation'],
  themeColor: '#000000',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'BVEST 12 | Greenovate',
    description: 'The flagship technical fest with a focus on sustainability and technology',
    type: 'website',
    locale: 'en_IN',
    siteName: 'BVEST',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
