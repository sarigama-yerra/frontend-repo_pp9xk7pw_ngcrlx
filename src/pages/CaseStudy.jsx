import { useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ArrowLeft, ArrowRight, ExternalLink, CircleDot } from 'lucide-react'
import { motion } from 'framer-motion'

const projects = Array.from({length:9}).map((_,i)=>{
  const id = i+1
  const tag = i%3===0? 'Branding' : i%3===1? 'Web' : 'Product'
  const title = `Case Study ${id}`
  const image = `https://picsum.photos/seed/gp-${i}/1600/1000`
  return {
    id: String(id),
    slug: String(id),
    title,
    tag,
    cover: image,
    client: `Client ${id}`,
    year: 2023 + (id % 2),
    services: tag === 'Branding' ? ['Identity System', 'Art Direction', 'Guidelines'] : tag === 'Web' ? ['UX Strategy','Design System','Web Dev'] : ['Product Design','Prototyping','Handoff'],
    summary: 'A concise overview of the engagement highlighting the business goal, the problem space, and the transformation delivered.',
    challenge: 'The client needed to modernize their presence and create a cohesive experience across touchpoints while improving performance and accessibility.',
    approach: 'We led a discovery sprint, mapped user journeys, defined a modular design system, and shipped incrementally with tight feedback loops.',
    outcome: 'Launch exceeded KPIs with improved conversion, stronger brand recall, and a scalable design language that supports future growth.',
    metrics: [
      {label:'Conversion lift', value:'+34%'},
      {label:'Time to ship', value:'8 weeks'},
      {label:'CLS score', value:'0.01'},
      {label:'Pagespeed', value:'98/100'}
    ],
    gallery: [
      `https://picsum.photos/seed/gp-${i}-a/1200/800`,
      `https://picsum.photos/seed/gp-${i}-b/1200/800`,
      `https://picsum.photos/seed/gp-${i}-c/1200/800`
    ],
    link: 'https://example.com'
  }
})

export default function CaseStudy(){
  const { id } = useParams()
  const projectIndex = useMemo(()=> projects.findIndex(p => p.slug === id), [id])
  const project = projectIndex >= 0 ? projects[projectIndex] : null
  const prev = projectIndex > 0 ? projects[projectIndex-1] : null
  const next = projectIndex < projects.length - 1 ? projects[projectIndex+1] : null

  if(!project){
    return (
      <div className="bg-[#0b0b0d] min-h-screen text-white">
        <Navbar />
        <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
          <Link to="/work" className="inline-flex items-center text-white/70 hover:text-white transition"><ArrowLeft className="w-4 h-4 mr-2"/>Back to Work</Link>
          <h1 className="mt-6 text-3xl font-semibold">Not found</h1>
          <p className="text-white/60 mt-2">We couldn’t find that case study.</p>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="bg-[#0b0b0d] text-white min-h-screen">
      <Navbar />

      {/* Cover */}
      <section className="relative pt-24">
        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6}} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/work" className="inline-flex items-center text-white/70 hover:text-white transition"><ArrowLeft className="w-4 h-4 mr-2"/>Back to Work</Link>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-white/60">
            <span className="inline-flex items-center gap-2"><CircleDot className="w-4 h-4 text-[#FF5A3C]"/> {project.tag}</span>
            <span className="opacity-40">•</span>
            <span>{project.year}</span>
          </div>
          <h1 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight">{project.title}</h1>
          <p className="mt-3 max-w-3xl text-white/70">{project.summary}</p>
        </motion.div>
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.8, delay:0.1}} className="mt-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <img src={project.cover} alt={project.title} className="w-full h-full object-cover"/>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Meta + Overview */}
      <section className="mt-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4 bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="font-semibold text-sm uppercase tracking-wider text-white/60">Project Details</h3>
            <dl className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between border-b border-white/10 pb-3"><dt className="text-white/60">Client</dt><dd className="font-medium">{project.client}</dd></div>
              <div className="flex justify-between border-b border-white/10 pb-3"><dt className="text-white/60">Year</dt><dd className="font-medium">{project.year}</dd></div>
              <div className="pb-3"><dt className="text-white/60">Services</dt><dd className="mt-1 flex flex-wrap gap-2">{project.services.map(s=> <span key={s} className="px-2.5 py-1 rounded-full bg-white/10 text-white/80 text-xs">{s}</span>)}</dd></div>
              <div className="pt-2"><a className="inline-flex items-center gap-2 text-[#FF5A3C] hover:text-white transition" href={project.link} target="_blank" rel="noreferrer"><ExternalLink className="w-4 h-4"/> Visit project</a></div>
            </dl>
          </div>
          <div className="lg:col-span-8">
            <div className="prose prose-invert max-w-none">
              <h2>Challenge</h2>
              <p className="text-white/70">{project.challenge}</p>
              <h2>Approach</h2>
              <p className="text-white/70">{project.approach}</p>
              <h2>Outcome</h2>
              <p className="text-white/70">{project.outcome}</p>
            </div>
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {project.metrics.map(m => (
                <div key={m.label} className="bg-white/5 border border-white/10 rounded-xl p-5">
                  <div className="text-white/60 text-sm">{m.label}</div>
                  <div className="text-2xl font-semibold mt-1">{m.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="mt-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl font-semibold">Gallery</h3>
          <div className="mt-5 grid sm:grid-cols-2 gap-4">
            {project.gallery.map((src,idx)=> (
              <motion.div key={src} initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5, delay: idx*0.05}} className="overflow-hidden rounded-xl border border-white/10 bg-white/5">
                <img src={src} alt={`${project.title} ${idx+1}`} className="w-full h-full object-cover"/>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Next / Previous */}
      <section className="mt-12 mb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              {prev ? (
                <Link to={`/work/${prev.slug}`} className="group inline-flex items-center gap-2 text-white/80 hover:text-white">
                  <ArrowLeft className="w-4 h-4"/>
                  <span className="uppercase tracking-wider text-xs text-white/60">Previous</span>
                  <span className="font-medium">{prev.title}</span>
                </Link>
              ) : <span className="text-white/40 text-sm">Start</span>}
            </div>
            <div>
              {next ? (
                <Link to={`/work/${next.slug}`} className="group inline-flex items-center gap-2 text-white/80 hover:text-white">
                  <span className="uppercase tracking-wider text-xs text-white/60">Next</span>
                  <span className="font-medium">{next.title}</span>
                  <ArrowRight className="w-4 h-4"/>
                </Link>
              ) : <span className="text-white/40 text-sm">End</span>}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
