import Navbar from '../components/Navbar'
import HeroSpline from '../components/HeroSpline'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="bg-[#0b0b0d] min-h-screen">
      <Navbar />
      <main className="pt-16">
        <HeroSpline />
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-3 gap-8 text-white/80">
            {["Brand Systems","Web Experiences","Motion & 3D"].map((title, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                <h3 className="text-white text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-white/70">We combine strategy, storytelling, and technology to produce outcomes that move the business forward.</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
