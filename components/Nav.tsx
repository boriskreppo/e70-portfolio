'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const GlassSurface = require('./GlassSurface').default as React.ComponentType<any>;
import React from 'react';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
      <div
        className="w-full"
        style={{
          maxWidth: '900px',
          border: scrolled ? '1px solid rgba(255,255,255,0.10)' : '1px solid rgba(255,255,255,0.06)',
          borderRadius: '999px',
          boxShadow: scrolled ? '0 4px 32px rgba(0,0,0,0.4)' : '0 2px 16px rgba(0,0,0,0.2)',
          transition: 'border-color 0.3s, box-shadow 0.3s',
          overflow: 'hidden',
        }}
      >
      <GlassSurface
        width={900}
        height={56}
        borderRadius={999}
        borderWidth={0.06}
        brightness={18}
        opacity={0.92}
        blur={22}
        displace={1.2}
        distortionScale={-60}
        redOffset={0}
        greenOffset={5}
        blueOffset={10}
        mixBlendMode="difference"
        style={{ width: '100%' }}
      >
        <div className="flex items-center justify-between w-full px-5 h-full">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-[15px] tracking-tight text-white">
            <Image src="/e70-logo.svg" alt="e70" width={20} height={20} />
            e70Solutions
          </Link>

          {/* Links */}
          <div className="hidden md:flex items-center gap-1">
            {[
              { href: '/#view-ecosystem', label: 'View Ecosystem' },
              { href: '/#fueltrack',      label: 'FuelTrack' },
              { href: '/#flow',           label: 'Flow' },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="px-3 py-1.5 text-sm font-medium rounded-full transition-colors"
                style={{ color: 'rgba(255,255,255,0.55)' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <a
            href="mailto:hello@e70.solutions"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all"
            style={{
              background: 'linear-gradient(135deg, #ff5200, #ff8040)',
              color: '#fff',
            }}
          >
            Kontaktiraj nas
          </a>
        </div>
      </GlassSurface>
      </div>
    </nav>
  );
}
