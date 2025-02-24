const ServiceSpotlight = () => {
  return (
    <section className="bg-zinc-300 py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-7xl lg:mx-0">
          <p className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl jura-header">
            Services Spotlight
          </p>
          <p className="mt-6 text-lg/8 text-slate-950">
            Streamline operations with custom software and websites designed for ease of use, long-term support, and business growth.
          </p>
        </div>

        <dl className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-8 text-base/7 text-slate-950 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
          {/* Card 1 */}
          <div className="bg-zinc-100 rounded-lg p-6 shadow-xl">
            <dt className="flex items-center mb-2 font-semibold text-slate-900">
              <i className="fa-solid fa-code mr-2"></i>
              Custom Business Software
            </dt>
            <dd>
              Are you running your business on spreadsheets alone? Upgrade to tailored solutions that improve efficiency and grow with you.
            </dd>
          </div>

          {/* Card 2 */}
          <div className="bg-zinc-100 rounded-lg p-6 shadow-xl">
            <dt className="flex items-center mb-2 font-semibold text-slate-900">
              <i className="fa-solid fa-globe mr-2"></i>
              Website Design and Hosting
            </dt>
            <dd>
              From simple brochure-style to the more complex, we'll create you a professional, accessible, SEO-optimized website with managed hosting and support.
            </dd>
          </div>

          {/* Card 3 */}
          <div className="bg-zinc-100 rounded-lg p-6 shadow-xl">
            <dt className="flex items-center mb-2 font-semibold text-slate-900">
              <i className="fa-solid fa-cart-shopping mr-2"></i>
              E-Commerce and Online Payments
            </dt>
            <dd>
              Build or improve your online presence with seamless storefronts and payment systems for hassle-free transactions.
            </dd>
          </div>

          {/* Card 4 */}
          <div className="bg-zinc-100 rounded-lg p-6 shadow-xl">
            <dt className="flex items-center mb-2 font-semibold text-slate-900">
              <i className="fa-solid fa-link mr-2"></i>
              Systems Integration &amp; API Development
            </dt>
            <dd>
              Unify your essential tools and information systems — CRM, accounting, inventory, e-commerce, and more — for a streamlined workflow that reduces manual effort and improves accuracy.
            </dd>
          </div>

          {/* Card 5 */}
          <div className="bg-zinc-100 rounded-lg p-6 shadow-xl">
            <dt className="flex items-center mb-2 font-semibold text-slate-900">
              <i className="fa-solid fa-gears mr-2"></i>
              Workflow &amp; Process Automation
            </dt>
            <dd>
              Streamline your business operations by automating repetitive tasks like data entry, data syncing, invoice processing, and customer notifications. We help you reduce errors and improve efficiency.
            </dd>
          </div>

          {/* Card 6 */}
          <div className="bg-zinc-100 rounded-lg p-6 shadow-xl">
            <dt className="flex items-center mb-2 font-semibold text-slate-900">
              <i className="fa-solid fa-wrench mr-2"></i>
              Managed Hosting &amp; Support
            </dt>
            <dd>
            Let us handle the hosting and maintenance while you focus on growing your business.
             We minimize downtime and technical hassles so you can dedicate your time to what matters most.

            </dd>
          </div>
        </dl>
        <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="/services/"
                className="rounded-md bg-emerald-600 px-6 py-4 text-lg lg:text-xl font-semibold text-white shadow-md hover:bg-sky-500 transition-all duration-300">
                Explore Our Services
              </a>
            </div>

      </div>
    </section>
  );
};

export { ServiceSpotlight };
