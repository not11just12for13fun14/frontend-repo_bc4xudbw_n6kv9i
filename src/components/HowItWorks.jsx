import { Mail, Beaker, FileText } from 'lucide-react'

const steps = [
  {
    title: 'Collect & Mail',
    desc: 'Order your kit. Clip a small hair sample at home and send it back.',
    icon: Mail,
  },
  {
    title: 'Lab Analysis',
    desc: 'Our partner lab measures minerals and toxic elements with validated methods.',
    icon: Beaker,
  },
  {
    title: 'Report & Plan',
    desc: 'Receive a readable report and a consultation to turn insights into action.',
    icon: FileText,
  },
]

export default function HowItWorks() {
  return (
    <section id="how" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-emerald-950 tracking-tight">How it works</h2>
          <p className="mt-3 text-emerald-900/80">Simple and guided from start to finish.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {steps.map(({ title, desc, icon: Icon }, i) => (
            <div key={title} className="rounded-xl bg-white p-6 ring-1 ring-emerald-900/10">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-900"><Icon size={18} /></div>
              <h3 className="mt-4 text-xl font-semibold text-emerald-950">{i+1}. {title}</h3>
              <p className="mt-2 text-emerald-900/80 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
