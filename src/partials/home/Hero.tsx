const Hero = () => {


  return (
    <section className="relative isolate overflow-hidden pt-14 shadow-2xl  
      bg-center md:bg-left-top
      bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply')]">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="mx-auto max-w-4xl py-12 lg:py-24">
          <div className="text-center p-4">
            <h1 className="text-balance text-3xl font-bold tracking-tight text-zinc-100 sm:text-5xl jura-header">
              We Build Software,<br />You Build Your Business.
            </h1>
            <p className="mt-8 p-2 sm:text-center text-lg text-zinc-200 sm:text-xl/8">
              Briarwood Software builds custom websites and web applications designed to fit your business needs.
              Our solutions are user-friendly, scalable, and fully maintained, allowing you to focus on growth while we handle the tech.
              Whether you're a new venture needing end-to-end consulting or an established business looking for seamless integrations, we're here to help.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="/contact/"
                className="rounded-md bg-emerald-600 px-6 py-4 text-lg lg:text-xl font-semibold text-white shadow-md hover:bg-sky-500 transition-all duration-300">
                Get a Free Consultation & Quote <i className="fa-solid fa-arrow-right ml-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export { Hero };
