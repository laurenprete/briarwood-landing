const WhyChoose = () => {


  return (
    <section className="bg-slate-950 py-16 px-6">
    <h2 className="text-3xl font-bold text-zinc-100 text-center jura-header">Why Choose Briarwood?</h2>
    <div className="grid md:grid-cols-2 gap-8 mt-8 max-w-5xl mx-auto">
      <div className="flex items-start">
        <span className="text-emerald-600 text-2xl font-bold">✓</span>
        <p className="ml-4 text-zinc-200"><strong>No Outsourcing:</strong> Every project is developed in-house in the U.S. No third-party handoffs, just clear, direct communication with the person actually building your software.</p>
      </div>
      <div className="flex items-start">
        <span className="text-emerald-600 text-2xl font-bold">✓</span>
        <p className="ml-4 text-zinc-200"><strong>User-Friendly Solutions:</strong> Intuitive software built for all levels of tech expertise</p>
      </div>
      <div className="flex items-start">
        <span className="text-emerald-600 text-2xl font-bold">✓</span>
        <p className="ml-4 text-zinc-200"><strong>Expert Support:</strong> Whether you need troubleshooting, updates, or guidance, get direct access to an experienced software engineer.</p>
      </div>
      <div className="flex items-start">
        <span className="text-emerald-600 text-2xl font-bold">✓</span>
        <p className="ml-4 text-zinc-200"><strong>Flexible Pricing:</strong> Purpose-built solutions for businesses (and budgets) of all sizes.</p>
      </div>
    </div>
  </section>
)};

export { WhyChoose };
