import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Docs from './components/Docs'
import AuthDialog from './components/AuthDialog'

function App() {
  const [authOpen, setAuthOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-200">
      <Navbar onOpenAuth={() => setAuthOpen(true)} />

      <main>
        <Hero />
        <Features />
        <Pricing />
        <Docs />

        <footer className="py-12 border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Interviews & Surveys. Open-source friendly.</p>
            <div className="flex items-center gap-4 text-sm">
              <a href="#pricing" className="hover:text-white">Pricing</a>
              <a href="#docs" className="hover:text-white">Docs</a>
              <a href="https://github.com/" target="_blank" className="hover:text-white">GitHub</a>
            </div>
          </div>
        </footer>
      </main>

      <AuthDialog open={authOpen} onClose={() => setAuthOpen(false)} onAuthed={() => setAuthOpen(false)} />
    </div>
  )
}

export default App
