export default function Footer() {
  return (
    <footer className="bg-[#0b0b0d] text-white/70 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm">© {new Date().getFullYear()} GuidingPixel. All rights reserved.</p>
        <div className="flex items-center gap-6 text-sm">
          <a href="/about" className="hover:text-white">About</a>
          <a href="/services" className="hover:text-white">Services</a>
          <a href="/contact" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  )
}
