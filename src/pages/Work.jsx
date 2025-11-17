import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WorkCard from '../components/WorkCard'

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
            <WorkCard key={p.id} project={p} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
