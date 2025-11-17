import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-emerald-50/20 text-emerald-950">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <Testimonials />
        <section id="about" className="py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-emerald-900">A calmer way to do science</h2>
                <p className="mt-5 text-emerald-900/80 leading-relaxed">We keep things simple and evidence‑based. Clear reports, thoughtful consultations, and a gentle, root‑cause approach help you make changes that last.</p>
                <ul className="mt-6 space-y-2 text-emerald-900/80 list-disc list-inside">
                  <li>Readable, action‑oriented reports</li>
                  <li>Certified partner laboratory</li>
                  <li>Support that respects your pace</li>
                </ul>
              </div>
              <div className="rounded-xl overflow-hidden ring-1 ring-emerald-900/10">
                <img 
                  src="https://images.unsplash.com/photo-1505576399279-565b52d4ac71?q=80&w=1600&auto=format&fit=crop" 
                  alt="Simple glassware on neutral background" 
                  className="w-full h-full object-cover"
                />
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
