import { useState } from 'react'
import { Menu, X, Leaf } from 'lucide-react'

const navItems = [
  { label: 'HTMA Test', href: '#services' },
  { label: 'How It Works', href: '#how' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'About', href: '#about' },
]

function CTAButtons({ className = '' }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <a href="#buy" className="inline-flex items-center justify-center rounded-full bg-emerald-700 px-5 py-2.5 text-white shadow-sm hover:bg-emerald-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 transition-colors">Buy Test</a>
      <a href="#consult" className="inline-flex items-center justify-center rounded-full border border-emerald-900/20 bg-white px-5 py-2.5 text-emerald-900 hover:bg-emerald-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 transition-colors">Book Consultation</a>
    </div>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-white/80 backdrop-blur border-b border-emerald-900/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-700 text-white"><Leaf size={18} /></span>
            <span className="text-lg font-semibold tracking-tight text-emerald-900">HTMA Lab</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-emerald-900/80">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-emerald-900 transition-colors">
                {item.label}
              </a>
            ))}
            <CTAButtons />
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-emerald-900 hover:bg-emerald-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-emerald-900/10 bg-white/95 backdrop-blur">
          <div className="mx-auto max-w-6xl px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block rounded-md px-3 py-2 text-emerald-900 hover:bg-emerald-50"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <CTAButtons className="pt-2" />
          </div>
        </div>
      )}
    </header>
  )
}
