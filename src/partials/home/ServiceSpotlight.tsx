const ServiceSpotlight = () => {


  return (
    <section className="bg-zinc-300 py-12 sm:py-24">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-7xl lg:mx-0">
        <p className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl jura-header">Service Spotlight</p>
        <p className="mt-6 text-lg/8 text-slate-900">Streamline operations with custom software and websites designed for ease of use, long-term support, and business growth.</p>
      </div>
      <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base/7 text-slate-900 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-16">
        <div className="relative pl-9">
          <dt className="inline font-semibold text-slate-900">
          <i className="fa-solid fa-code mr-2"></i>
            Custom Business Software
          </dt>
          <dd>Are you running your business on spreadsheets alone? Upgrade to tailored solutions that improve efficiency and grow with you.</dd>
        </div>
        <div className="relative pl-9">
          <dt className="inline font-semibold text-slate-900">
          <i className="fa-solid fa-globe mr-2"></i>
            Website Design and Hosting
          </dt>
          <dd>From simple brochure-style to the more complex, we'll create you a professional, accessible, SEO-optimized website with managed hosting and support.</dd>
        </div>
        <div className="relative pl-9">
          <dt className="inline font-semibold text-slate-900">
          <i className="fa-solid fa-cart-shopping mr-2"></i>
            E-Commerce and Online Payments
          </dt>
          <dd>Build or improve your online presence with seamless storefronts and payment systems for hassle-free transactions.</dd>
        </div>
        <div className="relative pl-9">
          <dt className="inline font-semibold text-slate-900">
          <i className="fa-solid fa-link mr-2"></i>
          Systems Integration & API Development
          </dt>
          <dd>Connect your tools (CRM, accounting, inventory) for a smoother workflow.</dd>
        </div>
        <div className="relative pl-9">
          <dt className="inline font-semibold text-slate-900">
          <i className="fa-solid fa-gears mr-2"></i>
          Workflow & Process Automation 
          </dt>
          <dd>Eliminate manual tasks with smart automation that saves time and reduces errors.</dd>
        </div>
        <div className="relative pl-9">
          <dt className="inline font-semibold text-slate-900">
          <i className="fa-solid fa-wrench mr-2"></i>
          Managed Hosting & Support
          </dt>
          <dd>Leave the hosting and maintenance to us - we'll keep things running smoothly so you can focus on the business aspect.</dd>
        </div>
      </dl>
      <a href="/services/" className="text-sky-600 hover:text-sky-500 font-semibold float-right mt-6 cursor-pointer mx-6">See the full list of our services  <i className="fa-solid fa-arrow-right ml-2"></i></a>
    </div>
  </section>
)};

export { ServiceSpotlight };
