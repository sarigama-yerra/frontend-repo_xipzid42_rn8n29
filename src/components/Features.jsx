import { MessageSquare, ListChecks, BarChart3, Share2 } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: MessageSquare,
      title: 'Interview flows',
      desc: 'Guide conversations with structured prompts, consent, and recording. Auto-transcribe and summarize with AI.'
    },
    {
      icon: ListChecks,
      title: 'Survey builder',
      desc: 'Compose surveys with question banks, logic, and branching. Collect responses across channels.'
    },
    {
      icon: BarChart3,
      title: 'Insights & analysis',
      desc: 'Tag highlights, find patterns, and generate insight reports. Export to your tools.'
    },
    {
      icon: Share2,
      title: 'Share & collaborate',
      desc: 'Spaces for teams, roles, and shareable links with permissions.'
    }
  ]

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-slate-200 shadow hover:shadow-lg/20 transition-shadow">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white mb-4">
                <f.icon size={18} />
              </div>
              <h3 className="text-white font-semibold mb-2">{f.title}</h3>
              <p className="text-slate-300/80 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
