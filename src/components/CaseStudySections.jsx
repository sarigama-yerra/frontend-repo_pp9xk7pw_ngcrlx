export function Section({ title, children }){
  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="mt-3 text-white/70 space-y-4">{children}</div>
    </section>
  )
}

export function Metrics({ items }){
  return (
    <div className="mt-6 grid sm:grid-cols-2 gap-4">
      {items.map(m => (
        <div key={m.label} className="bg-white/5 border border-white/10 rounded-xl p-5">
          <div className="text-white/60 text-sm">{m.label}</div>
          <div className="text-2xl font-semibold mt-1">{m.value}</div>
        </div>
      ))}
    </div>
  )
}
