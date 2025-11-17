import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-amber-50 text-emerald-950">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <Testimonials />
        <section id="about" className="py-20 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center">
          <div className="bg-white/80 backdrop-blur">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-2 gap-10">
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Science, warmth, and clarity</h2>
                <p className="mt-4 text-emerald-900/80 leading-relaxed">We believe real health comes from understanding. Our team blends rigorous lab methods with human‑centered guidance, so you can make confident, sustainable changes.</p>
                <ul className="mt-6 space-y-2 text-emerald-900/80 list-disc list-inside">
                  <li>Clear, readable reports</li>
                  <li>Certified lab partners</li>
                  <li>Action‑first consultations</li>
                </ul>
              </div>
              <div className="rounded-2xl overflow-hidden ring-1 ring-emerald-900/10 shadow-sm">
                <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2069&auto=format&fit=crop" alt="Glass vials and greenery" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
