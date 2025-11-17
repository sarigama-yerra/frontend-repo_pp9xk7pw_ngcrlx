import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About(){
  return (
    <div className="bg-[#0b0b0d] min-h-screen text-white">
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
        <h1 className="text-4xl font-bold tracking-tight">About</h1>
        <p className="text-white/70 mt-3 max-w-2xl">We’re a design and technology studio helping brands express purpose and build products people love.</p>

        <div className="mt-10 grid md:grid-cols-2 gap-8">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold">Approach</h3>
            <p className="text-white/80 mt-2">We pair rigorous strategy with craft to deliver work that’s as thoughtful as it is beautiful.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold">Team</h3>
            <p className="text-white/80 mt-2">An agile network of designers, engineers, and storytellers led by senior partners.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
