import { Link } from 'react-router-dom'

export default function WorkCard({ project }){
  return (
    <Link to={`/work/${project.id}`} className="group block bg-white/5 border border-white/10 rounded-xl overflow-hidden">
      <div className="aspect-[4/3] overflow-hidden">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="p-4">
        <div className="text-sm text-white/60">{project.tag}</div>
        <div className="text-lg font-semibold">{project.title}</div>
      </div>
    </Link>
  )
}
