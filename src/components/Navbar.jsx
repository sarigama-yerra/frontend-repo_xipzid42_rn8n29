import { useEffect, useState } from 'react'
import { Menu, X, LogIn, LogOut, Github, BookOpen, DollarSign } from 'lucide-react'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Navbar({ onOpenAuth }) {
  const [open, setOpen] = useState(false)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const stored = localStorage.getItem('ib_token')
    const name = localStorage.getItem('ib_name')
    const email = localStorage.getItem('ib_email')
    if (stored && name && email) {
      setUser({ token: stored, name, email })
    }
  }, [])

  const logout = () => {
    localStorage.removeItem('ib_token')
    localStorage.removeItem('ib_name')
    localStorage.removeItem('ib_email')
    setUser(null)
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-white/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 via-cyan-400 to-indigo-500 shadow-lg ring-1 ring-white/20 flex items-center justify-center text-white font-bold">IS</div>
            <span className="text-white font-semibold text-lg">Interviews & Surveys</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#pricing" className="text-slate-200/80 hover:text-white inline-flex items-center gap-2"><DollarSign size={16}/>Pricing</a>
            <a href="#docs" className="text-slate-200/80 hover:text-white inline-flex items-center gap-2"><BookOpen size={16}/>Docs</a>
            <a href="https://github.com/" target="_blank" className="text-slate-200/80 hover:text-white inline-flex items-center gap-2"><Github size={16}/>Open Source</a>
            {user ? (
              <button onClick={logout} className="inline-flex items-center gap-2 text-white bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-lg border border-white/10">
                <LogOut size={16}/> Logout
              </button>
            ) : (
              <button onClick={() => onOpenAuth()} className="inline-flex items-center gap-2 text-white bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 px-4 py-2 rounded-lg shadow">
                <LogIn size={16}/> Sign in
              </button>
            )}
          </div>

          <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
            {open ? <X/> : <Menu/>}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-3">
            <a href="#pricing" className="block text-slate-200/90">Pricing</a>
            <a href="#docs" className="block text-slate-200/90">Docs</a>
            <a href="https://github.com/" target="_blank" className="block text-slate-200/90">Open Source</a>
            {user ? (
              <button onClick={logout} className="w-full text-left text-white bg-white/10 hover:bg-white/20 px-3 py-2 rounded-lg border border-white/10">Logout</button>
            ) : (
              <button onClick={() => onOpenAuth()} className="w-full text-left text-white bg-gradient-to-r from-blue-500 to-cyan-500 px-4 py-2 rounded-lg">Sign in</button>
            )}
          </div>
        )}
      </nav>
    </header>
  )
}
