const WhyChoose = () => {


  return (
    <section className="bg-slate-950 py-16 px-6">
    <h2 className="text-3xl font-bold text-zinc-100 text-center jura-header">Why Choose Briarwood?</h2>
    <div className="grid md:grid-cols-2 gap-8 mt-8 max-w-5xl mx-auto">
      <div className="flex items-start">
        <span className="text-emerald-600 text-2xl font-bold">✓</span>
        <p className="ml-4 text-zinc-200"><strong>No Outsourcing:</strong> All software development is done in-house by experts in the U.S.</p>
      </div>
      <div className="flex items-start">
        <span className="text-emerald-600 text-2xl font-bold">✓</span>
        <p className="ml-4 text-zinc-200"><strong>User-Friendly Solutions:</strong> Designed for business owners, not tech experts.</p>
      </div>
      <div className="flex items-start">
        <span className="text-emerald-600 text-2xl font-bold">✓</span>
        <p className="ml-4 text-zinc-200"><strong>Expert Support:</strong> We provide clear communication and long-term assistance.</p>
      </div>
      <div className="flex items-start">
        <span className="text-emerald-600 text-2xl font-bold">✓</span>
        <p className="ml-4 text-zinc-200"><strong>Flexible Pricing:</strong> Tailored solutions for businesses (and budgets) of all sizes.</p>
      </div>
    </div>
  </section>
)};

export { WhyChoose };
