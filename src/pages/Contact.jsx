import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Contact(){
  const [status, setStatus] = useState(null)
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const onSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    setStatus('sending')
    try {
      const res = await fetch(`${baseUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Failed to submit')
      setStatus('ok')
      e.currentTarget.reset()
    } catch (err) {
      setStatus(`error:${err.message}`)
    }
  }

  return (
    <div className="bg-[#0b0b0d] min-h-screen text-white">
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
        <h1 className="text-4xl font-bold tracking-tight">Start a project</h1>
        <p className="text-white/70 mt-3">Tell us a bit about your goals and timeline.</p>

        <form onSubmit={onSubmit} className="mt-8 grid gap-4 bg-white/5 border border-white/10 rounded-xl p-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-white/70 mb-1">Name</label>
              <input name="name" required className="w-full bg-black/30 border border-white/15 rounded-md px-3 py-2 text-white placeholder-white/40" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="block text-sm text-white/70 mb-1">Email</label>
              <input name="email" type="email" required className="w-full bg-black/30 border border-white/15 rounded-md px-3 py-2 text-white placeholder-white/40" placeholder="jane@guidingpixel.com" />
            </div>
          </div>

          <div>
            <label className="block text-sm text-white/70 mb-1">Company</label>
            <input name="company" className="w-full bg-black/30 border border-white/15 rounded-md px-3 py-2 text-white placeholder-white/40" placeholder="Acme Inc." />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-white/70 mb-1">Project Type</label>
              <select name="project_type" className="w-full bg-black/30 border border-white/15 rounded-md px-3 py-2 text-white">
                <option value="">Select</option>
                {['Branding','Web','Product','Motion','3D','Other'].map(v => <option key={v} value={v}>{v}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm text-white/70 mb-1">Budget</label>
              <input name="budget" className="w-full bg-black/30 border border-white/15 rounded-md px-3 py-2 text-white placeholder-white/40" placeholder="$25k–$50k" />
            </div>
          </div>

          <div>
            <label className="block text-sm text-white/70 mb-1">Message</label>
            <textarea name="message" required rows="6" className="w-full bg-black/30 border border-white/15 rounded-md px-3 py-2 text-white placeholder-white/40" placeholder="What are you hoping to build?" />
          </div>

          <div className="flex items-center gap-3">
            <button className="px-5 py-2.5 rounded-md bg-[#FF5A3C] hover:bg-[#ff6a50] text-white font-semibold transition-colors" disabled={status==='sending'}>
              {status==='sending' ? 'Sending…' : 'Submit'}
            </button>
            {status?.startsWith('error:') && <span className="text-red-400 text-sm">{status.replace('error:','')}</span>}
            {status==='ok' && <span className="text-emerald-400 text-sm">Thanks — we’ll be in touch shortly.</span>}
          </div>
        </form>
      </main>
      <Footer />
    </div>
  )
}
