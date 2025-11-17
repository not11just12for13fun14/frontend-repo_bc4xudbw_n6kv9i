import { Mail, Beaker, FileText } from 'lucide-react'

const steps = [
  {
    title: 'Collect & Mail',
    desc: 'Order your kit. Clip a small hair sample at home and mail it with the prepaid label.',
    icon: Mail,
  },
  {
    title: 'Lab Analysis',
    desc: 'Our partner lab measures 30+ minerals and toxic elements using validated methods.',
    icon: Beaker,
  },
  {
    title: 'Report & Plan',
    desc: 'Get a readable report plus a consultation to turn insights into a clear plan.',
    icon: FileText,
  },
]

export default function HowItWorks() {
  return (
    <section id="how" className="py-20 bg-[url('https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center">
      <div className="bg-white/80 backdrop-blur py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-semibold text-emerald-950 tracking-tight">How it works</h2>
            <p className="mt-3 text-emerald-900/80">Simple, guided, and supportive from start to finish.</p>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {steps.map(({ title, desc, icon: Icon }, i) => (
              <div key={title} className="relative rounded-2xl bg-white p-6 shadow-sm ring-1 ring-emerald-900/10">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-900"><Icon size={18} /></div>
                <h3 className="mt-4 text-xl font-semibold text-emerald-950">{i+1}. {title}</h3>
                <p className="mt-2 text-emerald-900/80 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
