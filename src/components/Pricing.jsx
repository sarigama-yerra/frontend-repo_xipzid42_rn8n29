export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-slate-900/0 to-slate-900/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Simple, scalable pricing</h2>
          <p className="text-slate-300/80 mt-2">Start free. Pay as you grow.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-slate-200">
            <h3 className="text-white font-semibold text-xl">Starter</h3>
            <p className="text-slate-300/80 mt-2">For personal projects</p>
            <div className="mt-6 text-white text-4xl font-bold">$0<span className="text-base text-slate-300/80 font-normal">/mo</span></div>
            <ul className="mt-6 space-y-2 text-sm">
              <li>• 50 survey responses</li>
              <li>• 5 recorded interviews</li>
              <li>• Basic insights</li>
            </ul>
            <a href="#" className="mt-8 inline-block w-full text-center rounded-lg bg-white/10 hover:bg-white/20 py-2.5 text-white">Get started</a>
          </div>

          <div className="rounded-2xl border border-cyan-400/40 bg-gradient-to-b from-cyan-500/10 to-transparent p-6 text-slate-200 ring-1 ring-inset ring-cyan-400/20">
            <div className="inline-flex px-2 py-1 text-xs rounded-full bg-cyan-500/20 text-cyan-200 border border-cyan-500/30">Most popular</div>
            <h3 className="text-white font-semibold text-xl mt-2">Team</h3>
            <p className="text-slate-300/80 mt-2">For small teams</p>
            <div className="mt-6 text-white text-4xl font-bold">$29<span className="text-base text-slate-300/80 font-normal">/mo</span></div>
            <ul className="mt-6 space-y-2 text-sm">
              <li>• 2,000 responses</li>
              <li>• Unlimited interviews</li>
              <li>• AI insights & tagging</li>
              <li>• Export & integrations</li>
            </ul>
            <a href="#" className="mt-8 inline-block w-full text-center rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 py-2.5 text-white">Start free trial</a>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-slate-200">
            <h3 className="text-white font-semibold text-xl">Enterprise</h3>
            <p className="text-slate-300/80 mt-2">For larger orgs</p>
            <div className="mt-6 text-white text-4xl font-bold">Custom</div>
            <ul className="mt-6 space-y-2 text-sm">
              <li>• SSO/SAML</li>
              <li>• SOC2 reports</li>
              <li>• Dedicated support</li>
              <li>• On-prem options</li>
            </ul>
            <a href="#" className="mt-8 inline-block w-full text-center rounded-lg bg-white/10 hover:bg-white/20 py-2.5 text-white">Contact sales</a>
          </div>
        </div>
      </div>
    </section>
  )
}
