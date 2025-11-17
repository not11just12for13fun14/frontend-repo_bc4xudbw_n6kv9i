const testimonials = [
  {
    name: 'Maya R.',
    text: 'I finally understand why I was exhausted. The report was clear, and the consult gave me a doable plan.',
  },
  {
    name: 'Jordan T.',
    text: 'Professional and caring. The HTMA explained my symptoms better than anything else I tried.',
  },
  {
    name: 'Elena V.',
    text: 'The supplement plan felt personal, not generic. Warm, science‑based, and calm.',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-emerald-950 tracking-tight">What clients say</h2>
          <p className="mt-3 text-emerald-900/80">Real stories from people who chose clarity over guesswork.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {testimonials.map(({ name, text }) => (
            <figure key={name} className="rounded-xl bg-white p-6 ring-1 ring-emerald-900/10">
              <blockquote className="text-emerald-900/90 leading-relaxed">{text}</blockquote>
              <figcaption className="mt-4 text-sm font-medium text-emerald-950">{name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
