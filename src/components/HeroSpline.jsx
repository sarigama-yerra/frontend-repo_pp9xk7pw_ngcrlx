import Spline from '@splinetool/react-spline'

export default function HeroSpline() {
  return (
    <section className="relative w-full h-[80vh] sm:h-[85vh] lg:h-[92vh] bg-[#0b0b0d]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-[#0b0b0d]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-end pb-16">
        <div className="text-white max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
            Designing clarity in a complex world
          </h1>
          <p className="mt-4 text-white/80 text-lg max-w-2xl">
            Strategy, design, and advanced web experiences for brand, product, and content — crafted with intention.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="/work" className="px-5 py-2.5 rounded-md bg-[#FF5A3C] hover:bg-[#ff6a50] text-white font-semibold transition-colors">See our work</a>
            <a href="/contact" className="px-5 py-2.5 rounded-md border border-white/20 hover:border-white/40 text-white/90 hover:text-white transition-colors">Start a project</a>
          </div>
        </div>
      </div>
    </section>
  )
}
