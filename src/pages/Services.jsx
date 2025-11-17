import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Services(){
  const groups = [
    { title: 'Strategy', items: ['Positioning','Naming','Brand Architecture','Content Strategy'] },
    { title: 'Design', items: ['Identity Systems','UI/UX','Design Systems','Motion & 3D'] },
    { title: 'Engineering', items: ['Web Apps','CMS','E‑commerce','Integrations'] }
  ]

  return (
    <div className="bg-[#0b0b0d] min-h-screen text-white">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
        <h1 className="text-4xl font-bold tracking-tight">Services</h1>
        <p className="text-white/70 mt-3 max-w-2xl">End‑to‑end support from research to launch.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((g) => (
            <div key={g.title} className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold">{g.title}</h3>
              <ul className="mt-3 space-y-2 text-white/80">
                {g.items.map(it => <li key={it} className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#FF5A3C]"></span>{it}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
