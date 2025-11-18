export default function Docs() {
  return (
    <section id="docs" className="py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-slate-200">
          <h2 className="text-3xl font-bold text-white mb-4">Documentation</h2>
          <p className="text-slate-300/90 leading-relaxed">
            Get started in minutes: create an account, set up your first project, and invite your team. Use the survey builder for structured studies or launch interview flows to collect rich qualitative data. Our API lets you import/export responses, automate tagging, and push insights to your workspace. Visit our repository to contribute or open issues.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#" className="inline-flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 px-4 py-2 text-white">Quickstart</a>
            <a href="#" className="inline-flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 px-4 py-2 text-white">API Reference</a>
            <a href="https://github.com/" target="_blank" className="inline-flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 px-4 py-2 text-white">GitHub Repo</a>
          </div>
        </div>
      </div>
    </section>
  )
}
