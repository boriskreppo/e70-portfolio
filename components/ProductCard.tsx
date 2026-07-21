'use client';

import Link from 'next/link';
import BorderGlow from './BorderGlow';
import { products } from '@/lib/products';

const CARD_COLORS: Record<string, string[]> = {
  'view-ecosystem': ['rgba(255,82,0,0.2)','rgba(255,120,0,0.10)','rgba(180,40,0,0.07)'],
  fueltrack:        ['rgba(255,160,0,0.18)','rgba(255,100,0,0.09)','rgba(200,60,0,0.06)'],
  flow:             ['rgba(86,131,218,0.18)','rgba(60,100,200,0.09)','rgba(30,60,160,0.06)'],
};

const RIBBON_COLORS: Record<string, { lines: string[]; glow: string }> = {
  'view-ecosystem': {
    lines: ['#ff5200','#ff8040','#ffaa70','#ff3000','#ff6020'],
    glow: 'rgba(255,82,0,0.35)',
  },
  fueltrack: {
    lines: ['#ff9000','#ffb830','#ffd060','#ff7000','#ffa020'],
    glow: 'rgba(255,160,0,0.35)',
  },
  flow: {
    lines: ['#5683da','#7ea8ff','#a0c0ff','#3a60c0','#6090f0'],
    glow: 'rgba(86,131,218,0.35)',
  },
};

function CardRibbon({ segment }: { segment: string }) {
  const { lines } = RIBBON_COLORS[segment] ?? RIBBON_COLORS['flow'];
  // 5 arcs, each starting from bottom-right corner, sweeping up-left
  const arcs = [
    { d: 'M 220 180 Q 180 80 60 20',   w: 1.8, o: 0.9 },
    { d: 'M 220 180 Q 175 90 45 35',   w: 1.2, o: 0.7 },
    { d: 'M 220 180 Q 170 100 30 55',  w: 2.4, o: 0.6 },
    { d: 'M 220 180 Q 185 70 80 5',    w: 0.8, o: 0.5 },
    { d: 'M 220 180 Q 165 110 15 75',  w: 1.0, o: 0.35 },
  ];

  return (
    <svg
      viewBox="0 0 220 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: '55%',
        height: '75%',
        pointerEvents: 'none',
        overflow: 'visible',
      }}
    >
      <defs>
        <filter id={`glow-${segment}`} x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="3.5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        {arcs.map((_, i) => (
          <linearGradient key={i} id={`lg-${segment}-${i}`} x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={lines[i % lines.length]} stopOpacity="0" />
            <stop offset="40%" stopColor={lines[i % lines.length]} stopOpacity={arc_op(i)} />
            <stop offset="100%" stopColor={lines[(i + 2) % lines.length]} stopOpacity="0" />
          </linearGradient>
        ))}
      </defs>
      {arcs.map((arc, i) => (
        <path
          key={i}
          d={arc.d}
          stroke={`url(#lg-${segment}-${i})`}
          strokeWidth={arc.w}
          strokeLinecap="round"
          filter={i < 2 ? `url(#glow-${segment})` : undefined}
          opacity={arc.o}
        />
      ))}
    </svg>
  );
}

// helper referenced inside JSX above
function arc_op(i: number) {
  return [0.95, 0.75, 0.55, 0.5, 0.4][i] ?? 0.4;
}

export default function ProductCard({ p, animated }: { p: typeof products[0]; animated?: boolean }) {
  return (
    <BorderGlow
      className="h-full"
      backgroundColor="#13151a"
      borderRadius={18}
      glowColor="20 80 70"
      glowIntensity={0.9}
      colors={CARD_COLORS[p.segment]}
      fillOpacity={0.38}
      animated={animated}
    >
      <div className="p-8 flex flex-col h-full min-h-[220px] relative overflow-hidden">
        <CardRibbon segment={p.segment} />
        {p.segment === 'view-ecosystem' && (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold mb-4 w-fit relative z-10"
            style={{ background: 'rgba(255,82,0,0.12)', color: '#ff8040', border: '1px solid rgba(255,82,0,0.2)' }}>
            View Ecosystem
          </span>
        )}
        <h3 className="text-xl font-semibold tracking-tight text-white mb-2 relative z-10">{p.name}</h3>
        <p className="text-sm leading-relaxed mb-6 flex-1 relative z-10" style={{ color: 'rgba(250,250,250,0.45)' }}>
          {p.shortDescription}
        </p>
        <Link href={`/${p.slug}`} className="text-sm font-semibold w-fit relative z-10" style={{ color: '#ff8040' }}>
          Detalji →
        </Link>
      </div>
    </BorderGlow>
  );
}
