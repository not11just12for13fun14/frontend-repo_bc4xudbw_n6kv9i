import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/D17NpA0ni2BTjUzp/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/60 via-emerald-900/50 to-white/0 pointer-events-none" />

      <div className="relative z-10 pt-28 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]">
            <p className="mb-3 inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-sm backdrop-blur">Non‑invasive mineral testing</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
              See your mineral balance. Support your metabolism.
            </h1>
            <p className="mt-5 text-lg text-white/90 leading-relaxed">
              HTMA Lab turns a small hair sample into a clear picture of your mineral status and toxic burden — then translates it into practical steps for better energy, mood, and resilience.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#buy" className="inline-flex items-center justify-center rounded-full bg-emerald-300/90 px-6 py-3 text-emerald-950 font-semibold shadow-sm shadow-emerald-900/10 hover:bg-emerald-300">Buy HTMA Test</a>
              <a href="#consult" className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-6 py-3 text-white backdrop-blur hover:bg-white/20">Book Consultation</a>
            </div>
            <p className="mt-4 text-sm text-white/80">CLIA-certified partner lab • 30+ minerals & toxic elements • Actionable plan</p>
          </div>
        </div>
      </div>
    </section>
  )
}
