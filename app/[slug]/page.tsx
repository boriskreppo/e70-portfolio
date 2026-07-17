import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import BorderGlow from '@/components/BorderGlow';
import { getProductBySlug, products } from '@/lib/products';

export function generateStaticParams() {
  return products.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProductBySlug(slug);
  if (!p) return {};
  return { title: `${p.name} — ${p.tagline}`, description: p.shortDescription };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProductBySlug(slug);
  if (!p) notFound();

  return (
    <>
      {/* ── PRODUCT HERO ── */}
      <section className="relative pt-24 pb-20 overflow-hidden"
        style={{ background: 'var(--color-void)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        {/* glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(255,82,0,0.07) 0%, transparent 60%)', zIndex: 0 }} />

        <div className="max-w-4xl mx-auto px-10 relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-sm mb-8 transition-colors hover:text-white"
            style={{ color: 'rgba(255,255,255,0.35)' }}>
            ← Nazad na sve proizvode
          </Link>

          {p.segment === 'view-ecosystem' && (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold mb-5 block w-fit"
              style={{ background: 'rgba(255,82,0,0.12)', color: '#ff8040', border: '1px solid rgba(255,82,0,0.2)' }}>
              {p.segmentLabel}
            </span>
          )}

          <h1 className="text-5xl md:text-6xl font-bold tracking-[-0.035em] leading-none mb-5 text-white">
            {p.name}
          </h1>
          <p className="text-lg leading-relaxed mb-6 max-w-2xl" style={{ color: 'rgba(250,250,250,0.5)' }}>
            {p.tagline}
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {p.tags.map(t => (
              <span key={t} className="px-3 py-1 rounded-full text-xs font-medium"
                style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(250,250,250,0.55)', border: '1px solid rgba(255,255,255,0.08)' }}>
                {t}
              </span>
            ))}
          </div>

          <a href="mailto:hello@e70.solutions"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold"
            style={{ background: 'linear-gradient(135deg,#ff5200,#ff8040)', color: '#fff' }}>
            {p.ctaText}
          </a>

          {/* Stats */}
          {p.stats && p.stats.length > 0 && (
            <div className="flex flex-wrap gap-12 pt-10 mt-10 border-t" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
              {p.stats.map(s => (
                <div key={s.label} className="flex flex-col gap-1">
                  <span className="text-4xl font-semibold tracking-[-0.04em] text-white">
                    {s.value}{s.suffix}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'rgba(250,250,250,0.3)' }}>
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── SCREENSHOT ── */}
      {p.mockupImage && (
        <section className="py-0 border-t-0" style={{ background: 'var(--color-void)' }}>
          <div className="max-w-5xl mx-auto px-10 pb-0 pt-0">
            <div className="rounded-xl overflow-hidden border border-white/8 mt-[-1px]"
              style={{ boxShadow: '0 32px 80px rgba(0,0,0,0.5), 0 0 80px rgba(255,82,0,0.06)' }}>
              <div className="flex items-center gap-3 px-4 h-10 border-b border-white/7"
                style={{ background: 'rgba(20,22,28,1)' }}>
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(255,95,86,0.7)' }} />
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(255,188,46,0.7)' }} />
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(40,200,64,0.7)' }} />
                </div>
                <span className="flex-1 text-center text-[11px]" style={{ color: 'rgba(255,255,255,0.25)' }}>
                  app.e70solutions.com
                </span>
              </div>
              <Image src={p.mockupImage} alt={`${p.name} screenshot`} width={1200} height={680} className="w-full" />
            </div>
          </div>
        </section>
      )}

      {/* ── PROBLEM / SOLUTION ── */}
      <section className="py-20 border-t border-white/5" style={{ background: 'var(--color-carbon)' }}>
        <div className="max-w-4xl mx-auto px-10">
          <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: '#ff8040' }}>
            <span className="w-4 h-px inline-block" style={{ background: '#ff5200' }} />
            {p.problemLabel}
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-white mb-10">{p.problemTitle}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px rounded-2xl overflow-hidden border border-white/6"
            style={{ background: 'rgba(255,255,255,0.04)' }}>
            <div className="p-9" style={{ background: 'var(--color-graphite)' }}>
              <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'rgba(255,255,255,0.3)' }}>Problem</div>
              <p className="text-base leading-relaxed" style={{ color: 'rgba(250,250,250,0.5)' }}>{p.problemText}</p>
            </div>
            <div className="p-9 relative" style={{ background: '#1a1f26' }}>
              <div className="absolute top-0 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(90deg, rgba(255,82,0,0.7), transparent 60%)' }} />
              <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#ff8040' }}>Rešenje</div>
              <p className="text-base leading-relaxed" style={{ color: 'rgba(250,250,250,0.65)' }}>{p.solutionText}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="py-20 border-t border-white/5" style={{ background: '#0e1014' }}>
        <div className="max-w-4xl mx-auto px-10">
          <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: '#ff8040' }}>
            <span className="w-4 h-px inline-block" style={{ background: '#ff5200' }} />
            Funkcionalnosti
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-white mb-10">Šta {p.name} donosi</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {p.features.map((f, i) => (
              <BorderGlow
                key={i}
                backgroundColor="#13151a"
                borderRadius={16}
                glowColor="20 80 70"
                glowIntensity={0.8}
                colors={['rgba(255,82,0,0.14)','rgba(255,120,0,0.07)','rgba(180,40,0,0.05)']}
                fillOpacity={0.3}
              >
                <div className="p-6">
                  <h4 className="text-sm font-semibold text-white mb-2">{f.title}</h4>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(250,250,250,0.4)' }}>{f.desc}</p>
                </div>
              </BorderGlow>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIFFERENTIATOR ── */}
      <section className="py-20 border-t border-white/5" style={{ background: 'var(--color-carbon)' }}>
        <div className="max-w-4xl mx-auto px-10">
          <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: '#ff8040' }}>
            <span className="w-4 h-px inline-block" style={{ background: '#ff5200' }} />
            {p.differentiatorLabel}
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-white mb-5">{p.differentiatorTitle}</h2>
          <p className="text-lg leading-relaxed max-w-2xl" style={{ color: 'rgba(250,250,250,0.45)' }}>
            {p.differentiatorText}
          </p>
        </div>
      </section>

      {/* ── TECH SPECS ── */}
      <section className="py-20 border-t border-white/5" style={{ background: '#0e1014' }}>
        <div className="max-w-4xl mx-auto px-10">
          <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: '#ff8040' }}>
            <span className="w-4 h-px inline-block" style={{ background: '#ff5200' }} />
            Tech specs
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-white mb-8">Tehnička arhitektura</h2>
          <table className="w-full">
            <tbody>
              {p.techSpecs.map((s, i) => (
                <tr key={i} className="border-t" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                  <td className="py-4 pr-6 text-sm w-52" style={{ color: 'rgba(255,255,255,0.35)' }}>{s.label}</td>
                  <td className="py-4 text-sm" style={{ color: 'rgba(250,250,250,0.7)' }}>{s.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 border-t border-white/5" style={{ background: 'var(--color-carbon)' }}>
        <div className="max-w-4xl mx-auto px-10">
          <BorderGlow
            backgroundColor="#13151a"
            borderRadius={20}
            glowColor="20 80 70"
            glowIntensity={1.0}
            colors={['rgba(255,82,0,0.18)','rgba(255,120,0,0.09)','rgba(180,40,0,0.07)']}
            fillOpacity={0.45}
            animated
          >
            <div className="p-14 text-center relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(255,82,0,0.6), transparent)' }} />
              <h2 className="text-3xl font-semibold tracking-tight text-white mb-3">{p.ctaText}</h2>
              <p className="mb-8" style={{ color: 'rgba(250,250,250,0.45)' }}>{p.ctaNote}</p>
              <a href="mailto:hello@e70.solutions"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold"
                style={{ background: 'linear-gradient(135deg,#ff5200,#ff8040)', color: '#fff' }}>
                {p.ctaText}
              </a>
            </div>
          </BorderGlow>
        </div>
      </section>
    </>
  );
}
