'use client';

import GlassSurface from './GlassSurface';
import ShapeBlur from './ShapeBlur';

export default function ProductCTA({ ctaText, ctaNote }: { ctaText: string; ctaNote: string }) {
  return (
    <div className="relative flex items-center justify-center" style={{ minHeight: '320px' }}>
      {/* ShapeBlur behind the card */}
      <div className="absolute shape-blur-reveal" style={{
        width: '700px',
        height: '700px',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.7,
      }}>
        <ShapeBlur
          variation={2}
          shapeSize={0.85}
          roundness={0.5}
          borderSize={0.12}
          circleSize={0.35}
          circleEdge={0.8}
        />
      </div>

      {/* Glass card */}
      <div className="relative z-10 w-full" style={{
        borderRadius: '20px',
        border: '1px solid rgba(255,255,255,0.10)',
        boxShadow: '0 8px 48px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04)',
        overflow: 'hidden',
      }}>
        <GlassSurface
          width={800}
          height={280}
          borderRadius={20}
          borderWidth={0.06}
          brightness={14}
          opacity={0.88}
          blur={24}
          displace={1.0}
          distortionScale={-50}
          redOffset={0}
          greenOffset={4}
          blueOffset={8}
          mixBlendMode="difference"
          style={{ width: '100%' }}
        >
          <div className="p-14 text-center relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(255,82,0,0.6), transparent)' }} />
            <h2 className="text-3xl font-semibold tracking-tight text-white mb-3">{ctaText}</h2>
            <p className="mb-8" style={{ color: 'rgba(250,250,250,0.45)' }}>{ctaNote}</p>
            <a href="mailto:hello@e70.solutions"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold"
              style={{ background: 'linear-gradient(135deg,#ff5200,#ff8040)', color: '#fff' }}>
              {ctaText}
            </a>
          </div>
        </GlassSurface>
      </div>
    </div>
  );
}
