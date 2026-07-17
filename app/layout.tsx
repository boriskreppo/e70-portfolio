import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import './globals.css';
import '@/components/BorderGlow.css';
import '@/components/LaserFlow.css';
import Nav from '@/components/Nav';

const inter = Inter({ variable: '--font-inter', subsets: ['latin'] });
const manrope = Manrope({ variable: '--font-manrope', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'e70Solutions Portfolio',
  description: 'Pametna rešenja za moderne timove — View Ecosystem, FuelTrack, Flow.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sr" className={`${inter.variable} ${manrope.variable}`}>
      <body className="min-h-screen flex flex-col" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>
        <Nav />
        <main className="flex-1 pt-[72px]">{children}</main>
        <footer className="border-t border-white/5 py-9 text-center text-xs text-white/25"
          style={{ background: 'var(--color-void)' }}>
          © {new Date().getFullYear()} — Sales Portfolio
        </footer>
      </body>
    </html>
  );
}
