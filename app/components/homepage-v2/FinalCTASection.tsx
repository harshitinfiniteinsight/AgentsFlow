import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function FinalCTASection() {
  return (
    <section className="bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_28%),linear-gradient(180deg,#081121_0%,#091120_100%)] py-12 lg:py-16">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] px-6 py-12 shadow-[0_30px_80px_rgba(15,23,42,0.35)] backdrop-blur-xl lg:px-12">
          <div className="mx-auto mb-5 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">
            Final CTA
          </div>
          <h2 className="text-4xl font-black text-white md:text-5xl">Ready to Govern Every AI?</h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-slate-400">
            See how AgentsFlow helps enterprises discover, govern, enforce, and monitor AI across every environment.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/#demo"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_40px_rgba(59,130,246,0.35)] transition-all hover:-translate-y-0.5 hover:opacity-95"
            >
              Request Demo
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/platform"
              className="inline-flex items-center justify-center rounded-2xl border border-white/12 bg-white/5 px-7 py-3.5 text-sm font-semibold text-slate-100 transition-all hover:bg-white/10"
            >
              Explore Platform
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
