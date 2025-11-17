import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const projects = Array.from({length:9}).map((_,i)=>({
  id: i+1,
  title: `Case Study ${i+1}`,
  tag: i%3===0? 'Branding' : i%3===1? 'Web' : 'Product',
  image: `https://picsum.photos/seed/gp-${i}/800/600`
}))

export default function Work(){
  return (
    <div className="bg-[#0b0b0d] min-h-screen text-white">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
        <h1 className="text-4xl font-bold tracking-tight">Selected Work</h1>
        <p className="text-white/70 mt-3 max-w-2xl">A snapshot of brand systems, product launches, and immersive experiences.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(p => (
            <a key={p.id} href={`/work/${p.id}`} className="group block bg-white/5 border border-white/10 rounded-xl overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4">
                <div className="text-sm text-white/60">{p.tag}</div>
                <div className="text-lg font-semibold">{p.title}</div>
              </div>
            </a>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
