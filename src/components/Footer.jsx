import { ShieldCheck, Mail, Phone, Facebook, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-emerald-950 text-emerald-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold">HTMA Lab</h3>
            <p className="mt-2 text-emerald-100/80">A bridge between scientific insight and everyday wellbeing.</p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-emerald-900/40 px-3 py-1 text-sm">
              <ShieldCheck size={16} /> CLIA‑certified partner lab
            </div>
          </div>
          <div>
            <h4 className="font-semibold">Services</h4>
            <ul className="mt-3 space-y-2 text-emerald-100/80">
              <li>HTMA Testing</li>
              <li>Consultations</li>
              <li>Supplement Plans</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Company</h4>
            <ul className="mt-3 space-y-2 text-emerald-100/80">
              <li>About</li>
              <li>FAQ</li>
              <li>Privacy</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Contact</h4>
            <ul className="mt-3 space-y-2 text-emerald-100/80">
              <li className="flex items-center gap-2"><Mail size={16} /> hello@htmalab.com</li>
              <li className="flex items-center gap-2"><Phone size={16} /> (555) 123‑4567</li>
            </ul>
            <div className="mt-4 flex items-center gap-3">
              <a aria-label="Facebook" className="p-2 rounded-full bg-emerald-900/40"><Facebook size={16} /></a>
              <a aria-label="Instagram" className="p-2 rounded-full bg-emerald-900/40"><Instagram size={16} /></a>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-emerald-900/40 pt-6 text-sm text-emerald-100/70">
          © {new Date().getFullYear()} HTMA Lab. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
