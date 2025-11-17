export default function CaseStudyHeader({ eyebrow, title, summary }){
  return (
    <div>
      {eyebrow && <div className="text-sm text-white/60">{eyebrow}</div>}
      <h1 className="mt-2 text-4xl sm:text-5xl font-semibold tracking-tight">{title}</h1>
      {summary && <p className="mt-3 max-w-3xl text-white/70">{summary}</p>}
    </div>
  )
}
