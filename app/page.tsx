import Image from 'next/image';
import Link from 'next/link';
import HeroParticles from '@/components/HeroParticles';
import LaserFlow from '@/components/LaserFlow';
import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/products';

const viewEco  = products.filter(p => p.segment === 'view-ecosystem');
const fueltrack = products.filter(p => p.segment === 'fueltrack');
const flow      = products.filter(p => p.segment === 'flow');

const TICKER = ['CCTV Analytics','Fleet Management','Project Tracking','Security AI','Real-time Data','Cloud Native','AI Powered'];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col items-center pt-16 pb-0 overflow-hidden text-center"
        style={{ background: 'var(--color-void)' }}>

        <HeroParticles />
        <div className="hero-dot-grid" />


        {/* ambient glow bottom */}
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0,
          background: 'radial-gradient(ellipse 70% 50% at 50% 100%, rgba(255,72,0,0.16) 0%, transparent 65%)' }} />

        <div className="relative z-10 max-w-3xl mx-auto px-6 flex flex-col items-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-8"
            style={{ background: 'rgba(255,82,0,0.08)', border: '1px solid rgba(255,82,0,0.22)', color: '#ff8040' }}>
            Tech driven — Startup minded
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-[-0.04em] leading-none mb-6 text-white">
            Pametna{' '}
            <span style={{ background: 'linear-gradient(135deg,#ff5200,#ff8040)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              rešenja
            </span>{' '}
            za moderne timove
          </h1>

          <p className="text-lg leading-relaxed max-w-xl mb-10" style={{ color: 'rgba(250,250,250,0.45)' }}>
            Od CCTV kontrolnih centara i AI analitike, do upravljanja flotom i projektima — sve na jednom mestu.
          </p>

          <div className="flex items-center gap-3 flex-wrap justify-center">
            <Link href="#view-ecosystem"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold transition-all"
              style={{ background: 'linear-gradient(135deg,#ff5200,#ff8040)', color: '#fff' }}>
              Pogledaj proizvode
            </Link>
            <a href="mailto:hello@e70.solutions"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold border transition-all"
              style={{ border: '1px solid rgba(255,255,255,0.14)', color: 'rgba(255,255,255,0.7)' }}>
              Kontaktiraj nas
            </a>
          </div>
        </div>

        {/* Dashboard mockup */}
        <div className="relative z-10 w-full max-w-4xl mx-auto mt-16 px-6">
          <div className="rounded-t-xl border border-white/10 border-b-0 relative"
            style={{ boxShadow: '0 -8px 80px rgba(255,82,0,0.13), 0 0 0 1px rgba(255,255,255,0.04)' }}>
            {/* chrome bar */}
            <div className="flex items-center gap-3 px-4 h-10 border-b border-white/7"
              style={{ background: 'rgba(20,22,28,1)' }}>
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(255,95,86,0.7)' }} />
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(255,188,46,0.7)' }} />
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(40,200,64,0.7)' }} />
              </div>
              <div className="flex-1 flex justify-center">
                <span className="text-[11px] px-3 py-1 rounded-md" style={{ background: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.25)' }}>
                  app.e70solutions.com
                </span>
              </div>
            </div>
            <div className="overflow-hidden">
              <Image src="/dashboard.png" alt="e70Solutions Dashboard" width={1200} height={680} className="w-full" priority />
            </div>

            {/* LaserFlow — top:0 right:0 snaps to top-right corner of this relative div, translateY(-100%) shoots upward, translateX(50%) centers canvas on the edge */}
            <div className="absolute pointer-events-none"
              style={{ top: 0, right: 0, width: '440px', height: '500px', zIndex: 5, transform: 'translate(50%, -100%)' }}>
              <LaserFlow
                color="#ff5200"
                horizontalBeamOffset={0.0}
                verticalBeamOffset={0.0}
                verticalSizing={1.8}
                horizontalSizing={0.55}
                fogIntensity={0.45}
                wispIntensity={3.5}
                wispDensity={1}
                flowStrength={0.25}
                decay={1.1}
                falloffStart={1.3}
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, transparent, var(--color-void))', zIndex: 11 }} />
      </section>

      {/* ── TICKER ── */}
      <div className="overflow-hidden relative border-y border-white/5 py-4"
        style={{ background: 'rgba(255,255,255,0.02)', zIndex: 2 }}>
        <div className="flex gap-0 whitespace-nowrap" style={{ animation: 'ticker-scroll 26s linear infinite', width: 'max-content' }}>
          {[...TICKER, ...TICKER].map((t, i) => (
            <span key={i} className="inline-flex items-center gap-2 px-9 text-xs font-semibold uppercase tracking-widest relative"
              style={{ color: 'rgba(255,255,255,0.25)' }}>
              <span className="w-1 h-1 rounded-full inline-block" style={{ background: 'rgba(255,82,0,0.5)' }} />
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* ── VIEW ECOSYSTEM ── */}
      <section className="py-24 border-t border-white/5" id="view-ecosystem"
        style={{ background: 'var(--color-carbon)' }}>
        <div className="max-w-6xl mx-auto px-10">
          <div className="mb-14">
            <h2 className="text-3xl font-semibold tracking-tight text-white mb-3">View Ecosystem</h2>
            <p style={{ color: 'rgba(250,250,250,0.45)' }} className="text-base leading-relaxed max-w-xl">
              CCTV kao izvor — različite primene. Kontrolni centar, AI analitika i jedinstven pregled svih lokacija.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {viewEco.map((p, i) => <ProductCard key={p.slug} p={p} animated={i === 0} />)}
          </div>
        </div>
      </section>

      {/* ── FUELTRACK + FLOW ── */}
      <section className="py-24 border-t border-white/5" style={{ background: '#0e1014' }}>
        <div className="max-w-6xl mx-auto px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* FuelTrack */}
            <div id="fueltrack">
              <div className="mb-10">
                <h2 className="text-3xl font-semibold tracking-tight text-white mb-3">FuelTrack</h2>
                <p style={{ color: 'rgba(250,250,250,0.45)' }} className="text-base leading-relaxed">
                  Upravljanje voznim parkom i potrošnjom goriva, napravljeno za SME flote.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                {fueltrack.map(p => <ProductCard key={p.slug} p={p} />)}
              </div>
            </div>
            {/* Flow */}
            <div id="flow">
              <div className="mb-10">
                <h2 className="text-3xl font-semibold tracking-tight text-white mb-3">Flow</h2>
                <p style={{ color: 'rgba(250,250,250,0.45)' }} className="text-base leading-relaxed">
                  Project management dashboard za timove koji vode više paralelnih projekata.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                {flow.map(p => <ProductCard key={p.slug} p={p} />)}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
