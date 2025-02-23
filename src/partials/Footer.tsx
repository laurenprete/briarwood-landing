const Footer = () => (
  <footer className="bg-slate-900 flex items-center">
  <div className="mx-auto max-w-7xl overflow-hidden px-6 py-10 sm:py-12 lg:px-8">
    <nav className="-mb-6 flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm/6" aria-label="Footer">
      <a href="/services/" className="text-zinc-300 hover:text-white">Services</a>
      <a href="/about/" className="text-zinc-300 hover:text-white">About</a>
      <a href="/contact/" className="text-zinc-300 hover:text-white">Contact</a>
      <a href="/privacy/" className="text-zinc-300 hover:text-white">Privacy Policy</a>
    </nav>
    <p className="mt-10 text-center text-sm/6 text-zinc-400">&copy; {new Date().getFullYear()} Briarwood Software. All rights reserved.</p>
  </div>
</footer>
);

export { Footer };
