import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Maya R.',
    text: 'I finally understand why I was exhausted. The report was clear, and the consult gave me a doable plan. Two months in, my energy and mood are noticeably better.',
  },
  {
    name: 'Jordan T.',
    text: 'So professional and caring. The HTMA explained my symptoms better than anything else I tried.',
  },
  {
    name: 'Elena V.',
    text: 'The supplement plan felt personal, not generic. Loved the warm, science‑based approach.',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-[url('https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjMzMDU0MTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center">
      <div className="bg-emerald-50/90 backdrop-blur py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-semibold text-emerald-950 tracking-tight">What clients say</h2>
            <p className="mt-3 text-emerald-900/80">Real stories from people who chose clarity over guesswork.</p>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {testimonials.map(({ name, text }) => (
              <figure key={name} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-emerald-900/10">
                <div className="flex items-center gap-1 text-amber-500">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <blockquote className="mt-3 text-emerald-900/80 leading-relaxed">{text}</blockquote>
                <figcaption className="mt-4 text-sm font-medium text-emerald-950">{name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
