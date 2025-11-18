import { useState } from 'react'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function AuthDialog({ open, onClose, onAuthed }) {
  const [mode, setMode] = useState('login')
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const url = `${BACKEND_URL}/api/auth/${mode === 'login' ? 'login' : 'register'}`
      const body = mode === 'login' ? { email, password } : { name, email, password }
      const res = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
      if (!res.ok) {
        const t = await res.json().catch(() => ({}))
        throw new Error(t.detail || 'Request failed')
      }
      const data = await res.json()
      localStorage.setItem('ib_token', data.token)
      localStorage.setItem('ib_name', data.name)
      localStorage.setItem('ib_email', data.email)
      onAuthed?.(data)
      onClose()
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-slate-900 p-6 text-slate-200 shadow-xl">
        <div className="flex items-center justify-between">
          <h3 className="text-white font-semibold">{mode === 'login' ? 'Sign in' : 'Create account'}</h3>
          <button onClick={onClose} className="text-slate-400 hover:text-white">✕</button>
        </div>
        <form onSubmit={submit} className="mt-4 space-y-3">
          {mode === 'register' && (
            <div>
              <label className="text-sm text-slate-300">Name</label>
              <input value={name} onChange={e => setName(e.target.value)} required className="mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-500"/>
            </div>
          )}
          <div>
            <label className="text-sm text-slate-300">Email</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} required className="mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-500"/>
          </div>
          <div>
            <label className="text-sm text-slate-300">Password</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} required className="mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-500"/>
          </div>
          {error && <p className="text-sm text-rose-400">{error}</p>}
          <button disabled={loading} className="w-full rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 py-2.5 font-semibold text-white hover:from-blue-600 hover:to-cyan-600 disabled:opacity-60">
            {loading ? 'Please wait…' : (mode === 'login' ? 'Sign in' : 'Create account')}
          </button>
        </form>
        <div className="mt-4 text-sm text-slate-400">
          {mode === 'login' ? (
            <span>
              New here? <button onClick={() => setMode('register')} className="text-cyan-300 hover:text-cyan-200">Create an account</button>
            </span>
          ) : (
            <span>
              Already have an account? <button onClick={() => setMode('login')} className="text-cyan-300 hover:text-cyan-200">Sign in</button>
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
