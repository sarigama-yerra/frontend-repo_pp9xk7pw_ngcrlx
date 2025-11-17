import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Work from './pages/Work'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
import CaseStudy from './pages/CaseStudy'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/work" element={<Work />} />
      <Route path="/work/:id" element={<CaseStudy />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default App
