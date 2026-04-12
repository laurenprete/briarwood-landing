const testimonials = [
  {
    quote:
      "Lauren Prete developed a custom website from the ground up in support of multiple MIT-led research and education initiatives. She delivered a streamlined, user-friendly, and highly effective platform that successfully integrates complex scientific and educational content for both general audiences and technical experts. Lauren is fast, thoughtful, and proactive\u2014anticipating challenges and delivering practical solutions with professionalism and ease. She was a pleasure to work with, and the MIT team wholeheartedly recommends her.",
    name: "Anthony Salazar",
    title:
      "Program Manager, MIT Microphotonics Center & Initiative for Knowledge and Innovation in Manufacturing",
    org: "Massachusetts Institute of Technology",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-zinc-300 py-16 px-6">
      <h2 className="text-3xl font-bold text-slate-950 text-center jura-header">
        What Our Clients Say
      </h2>
      <div
        className={`mt-10 mx-auto ${
          testimonials.length === 1
            ? "max-w-3xl"
            : "max-w-5xl grid md:grid-cols-2 gap-8"
        }`}
      >
        {testimonials.map((t, i) => (
          <div key={i} className="border-l-4 border-emerald-600 pl-6 py-4">
            <blockquote className="text-slate-700 leading-relaxed italic text-lg mb-6">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <div>
              <p className="text-slate-900 font-semibold">{t.name}</p>
              <p className="text-slate-500 text-sm">{t.title}</p>
              <p className="text-slate-500 text-sm">{t.org}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export { Testimonials };
