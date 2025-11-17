import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/D17NpA0ni2BTjUzp/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Softer, minimal overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/40 via-emerald-900/30 to-white/0 pointer-events-none" />

      <div className="relative z-10 pt-28 pb-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl text-white/95">
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">Mineral clarity, made simple</h1>
            <p className="mt-5 text-base sm:text-lg text-white/90 leading-relaxed">
              A gentle, evidence‑based HTMA service that turns a small hair sample into practical guidance for energy, mood, and resilience.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#buy" className="inline-flex items-center justify-center rounded-full bg-emerald-300/90 px-6 py-3 text-emerald-950 font-semibold hover:bg-emerald-300">Buy HTMA Test</a>
              <a href="#consult" className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-6 py-3 text-white hover:bg-white/20">Book Consultation</a>
            </div>
            <p className="mt-4 text-sm text-white/85">CLIA‑certified partner lab • 30+ minerals & toxic elements</p>
          </div>
        </div>
      </div>
    </section>
  )
}
