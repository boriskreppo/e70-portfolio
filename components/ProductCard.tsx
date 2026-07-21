'use client';

import Link from 'next/link';
import BorderGlow from './BorderGlow';
import DarkVeil from './DarkVeil';
import { products } from '@/lib/products';

const CARD_COLORS: Record<string, string[]> = {
  'view-ecosystem': ['rgba(255,82,0,0.2)','rgba(255,120,0,0.10)','rgba(180,40,0,0.07)'],
  fueltrack:        ['rgba(255,160,0,0.18)','rgba(255,100,0,0.09)','rgba(200,60,0,0.06)'],
  flow:             ['rgba(86,131,218,0.18)','rgba(60,100,200,0.09)','rgba(30,60,160,0.06)'],
};


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
        <div className="absolute inset-0 pointer-events-none" style={{
          zIndex: 0,
          width: '100%',
          height: '100%',
          opacity: 0.7,
          WebkitMaskImage: 'radial-gradient(ellipse 85% 80% at 100% 100%, black 30%, transparent 75%)',
          maskImage: 'radial-gradient(ellipse 85% 80% at 100% 100%, black 30%, transparent 75%)',
        }}>
          <DarkVeil hueShift={-125} speed={1.2} warpAmount={0.3} resolutionScale={0.4} />
        </div>
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
