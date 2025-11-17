import { Link, NavLink } from 'react-router-dom'
import { Menu } from 'lucide-react'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/work', label: 'Work' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="text-white font-semibold tracking-tight text-lg">
          GuidingPixel
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={({isActive}) => `text-sm transition-colors ${isActive ? 'text-white' : 'text-white/70 hover:text-white'}`}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button className="md:hidden text-white/80 hover:text-white" aria-label="Open menu">
          <Menu size={22} />
        </button>
      </div>
    </header>
  )
}
