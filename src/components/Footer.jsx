export default function Footer() {
  return (
    <footer className="bg-white border-t border-emerald-900/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-emerald-950">HTMA Lab</h3>
            <p className="mt-2 text-emerald-900/80">Clear mineral insight, delivered simply.</p>
          </div>
          <div>
            <h4 className="font-semibold text-emerald-950">Services</h4>
            <ul className="mt-3 space-y-2 text-emerald-900/80">
              <li>HTMA Testing</li>
              <li>Consultations</li>
              <li>Supplement Plans</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-emerald-950">Contact</h4>
            <ul className="mt-3 space-y-2 text-emerald-900/80">
              <li>hello@htmalab.com</li>
              <li>(555) 123‑4567</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-emerald-900/10 pt-6 text-sm text-emerald-900/70">
          © {new Date().getFullYear()} HTMA Lab. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
