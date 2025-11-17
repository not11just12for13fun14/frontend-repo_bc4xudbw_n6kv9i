import { FlaskRound as Flask, Stethoscope, Pill, ShieldCheck, Leaf, Dna } from 'lucide-react'

const services = [
  {
    title: 'HTMA Testing',
    desc: 'Mail your hair sample and receive a lab-grade report on 30+ minerals and toxic elements.',
    icon: Dna,
  },
  {
    title: 'Professional Consultation',
    desc: 'One‑on‑one guidance to interpret results, explain imbalances, and set priorities that fit your life.',
    icon: Stethoscope,
  },
  {
    title: 'Personalized Supplement Plan',
    desc: 'Targeted nutrients mapped to your unique mineral profile to support balance over time.',
    icon: Pill,
  },
]

const badges = [
  { label: 'CLIA Certified Partner', icon: ShieldCheck },
  { label: 'Evidence‑based', icon: Flask },
  { label: 'Root‑cause Approach', icon: Leaf },
]

export default function Services() {
  return (
    <section id="services" className="relative py-20 bg-[url('https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjMzMDU0MTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center">
      <div className="absolute inset-0 bg-emerald-950/80 mix-blend-multiply" />
      <div className="absolute inset-0 backdrop-blur-[1px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          {services.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="group rounded-2xl bg-white/90 backdrop-blur p-6 shadow-sm ring-1 ring-emerald-900/10 hover:shadow-md transition-all">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-900 shadow-sm">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-emerald-950">{title}</h3>
              <p className="mt-2 text-emerald-900/80 leading-relaxed">{desc}</p>
              <a href="#buy" className="mt-4 inline-block text-emerald-900 font-medium hover:underline">Learn more →</a>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          {badges.map(({ label, icon: Icon }) => (
            <div key={label} className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-sm text-emerald-900 ring-1 ring-emerald-900/10 backdrop-blur">
              <Icon size={16} /> {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
