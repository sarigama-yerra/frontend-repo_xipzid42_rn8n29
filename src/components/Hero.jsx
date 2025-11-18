import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative pt-28 pb-24 overflow-hidden">
      <div className="absolute inset-0 opacity-60">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_500px_at_50%_-100px,rgba(56,189,248,0.25),transparent)] pointer-events-none" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-cyan-200/90">
              <span className="inline-block h-2 w-2 rounded-full bg-cyan-400" />
              New: AI-assisted interview & survey pipelines
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Understand people faster with interviews and surveys
            </h1>
            <p className="mt-4 text-lg text-slate-300/90 max-w-xl">
              A modern toolkit to design, run, and learn from interviews and surveys. Capture insights, automate follow-ups, and share findings with your team.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#pricing" className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 px-5 py-3 text-white font-semibold shadow hover:from-blue-600 hover:to-cyan-600">Get started</a>
              <a href="#docs" className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-5 py-3 text-white/90 hover:bg-white/10">Read the docs</a>
            </div>
          </div>
          <div className="h-[420px] md:h-[520px] lg:h-[560px] rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b from-slate-900 to-slate-950/80 shadow-xl">
            <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  )
}
