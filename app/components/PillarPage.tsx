import Link from 'next/link';
import { ArrowRight, CheckCircle, LucideIcon } from 'lucide-react';

interface Feature { title: string; desc: string }
interface Stat { value: string; label: string }
interface StepVisual { svg: string }

interface PillarPageProps {
  icon: LucideIcon;
  label: string;
  tagline: string;
  description: string;
  gradient: string;
  bgGlow: string;
  borderColor: string;
  textColor: string;
  features: Feature[];
  stats: Stat[];
  howItWorks: string[];
  stepVisuals?: StepVisual[];
  nextPillar: { label: string; href: string };
}

export default function PillarPage({
  icon: Icon, label, tagline, description, gradient, bgGlow, borderColor, textColor,
  features, stats, howItWorks, stepVisuals, nextPillar,
}: PillarPageProps) {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="relative py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className={`absolute top-20 left-1/3 w-96 h-96 ${bgGlow} rounded-full blur-3xl opacity-30`} />

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className={`inline-flex w-20 h-20 rounded-2xl bg-gradient-to-br ${gradient} items-center justify-center mb-6 mx-auto float`}>
            <Icon className="w-10 h-10 text-white" />
          </div>
          <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${borderColor} ${textColor} mb-4`}>
            {label}
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-6">
            {tagline}
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            {description}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="#features"
              className={`px-6 py-3 bg-gradient-to-r ${gradient} text-white font-semibold rounded-xl hover:opacity-90 transition-all flex items-center gap-2 pulse-glow`}>
              Explore Features <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/#demo"
              className="px-6 py-3 bg-white/5 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all">
              Book a Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 lg:py-14 bg-[#0f172a]">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className={`p-6 rounded-2xl border ${borderColor} bg-white/3 text-center card-hover`}>
              <div className={`text-3xl font-black ${textColor} mb-2`}>{s.value}</div>
              <div className="text-xs text-gray-400">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16 lg:py-20 bg-[#0a0f1e]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-black text-white text-center mb-10">
            What <span className={textColor}>{label}</span> Does
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((f) => (
              <div key={f.title} className={`p-6 rounded-2xl border ${borderColor} bg-white/3 card-hover`}>
                <div className="flex items-start gap-3">
                  <CheckCircle className={`w-5 h-5 ${textColor} mt-0.5 shrink-0`} />
                  <div>
                    <h3 className="text-white font-bold mb-2">{f.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-20 bg-[#0f172a]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-black text-white text-center mb-10">How It Works</h2>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left: Steps */}
            <div className="space-y-4">
              {howItWorks.map((step, i) => (
                <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-white/3 border border-white/10 card-hover">
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center text-white text-sm font-bold shrink-0`}>
                    {i + 1}
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed pt-1">{step}</p>
                </div>
              ))}
            </div>

            {/* Right: Animated Step Visuals */}
            <div className="relative hidden lg:flex items-center justify-center h-96">
              <div className="relative w-full h-full flex items-center justify-center">
                {stepVisuals && stepVisuals.length > 0 ? (
                  <div className="w-full h-full flex items-center justify-center">
                    <svg viewBox="0 0 300 400" className="w-full h-full max-w-xs" dangerouslySetInnerHTML={{ __html: stepVisuals[0].svg }} />
                  </div>
                ) : (
                  /* Fallback: Animated circles */
                  <div className="absolute inset-0 flex flex-col justify-between items-center">
                    <div className="relative w-full h-full flex flex-col justify-between py-8">
                      <div className="flex justify-center">
                        <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center text-white font-bold text-lg float`}>
                          1
                        </div>
                      </div>
                      <div className="flex justify-center flex-1">
                        <div className={`w-1 h-full bg-gradient-to-b ${gradient} opacity-30`}></div>
                      </div>
                      <div className="flex justify-center">
                        <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center text-white font-bold text-lg float`} style={{ animationDelay: '0.2s' }}>
                          2
                        </div>
                      </div>
                      <div className="flex justify-center flex-1">
                        <div className={`w-1 h-full bg-gradient-to-b ${gradient} opacity-30`}></div>
                      </div>
                      <div className="flex justify-center">
                        <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center text-white font-bold text-lg float`} style={{ animationDelay: '0.4s' }}>
                          3
                        </div>
                      </div>
                      <div className="flex justify-center flex-1">
                        <div className={`w-1 h-full bg-gradient-to-b ${gradient} opacity-30`}></div>
                      </div>
                      <div className="flex justify-center">
                        <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center text-white font-bold text-lg float`} style={{ animationDelay: '0.6s' }}>
                          4
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Pillar CTA */}
      <section className={`py-12 lg:py-14 border-t border-white/10 bg-[#0a0f1e]`}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-gray-400 mb-4 text-sm">Continue exploring the platform</p>
          <Link href={nextPillar.href}
            className={`inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r ${gradient} text-white font-bold rounded-xl hover:opacity-90 transition-all text-lg pulse-glow`}>
            Next: {nextPillar.label} <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
