import { Stethoscope, Pill, ShieldCheck, Leaf, Dna } from 'lucide-react'

const services = [
  {
    title: 'HTMA Testing',
    desc: 'A mail‑in hair test measuring 30+ minerals and toxic elements.',
    icon: Dna,
  },
  {
    title: 'Consultation',
    desc: 'A calm, structured session to interpret your results and set priorities.',
    icon: Stethoscope,
  },
  {
    title: 'Supplement Plan',
    desc: 'Clear, minimal recommendations tailored to your mineral profile.',
    icon: Pill,
  },
]

const badges = [
  { label: 'CLIA Certified Partner', icon: ShieldCheck },
  { label: 'Evidence‑based', icon: Leaf },
]

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          {services.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="group rounded-xl bg-white ring-1 ring-emerald-900/10 p-6 hover:ring-emerald-900/20 transition-colors">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-900">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-emerald-950">{title}</h3>
              <p className="mt-2 text-emerald-900/80 leading-relaxed">{desc}</p>
              <a href="#buy" className="mt-4 inline-block text-emerald-900 hover:underline">Learn more →</a>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          {badges.map(({ label, icon: Icon }) => (
            <div key={label} className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-sm text-emerald-900 ring-1 ring-emerald-900/10">
              <Icon size={16} /> {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
