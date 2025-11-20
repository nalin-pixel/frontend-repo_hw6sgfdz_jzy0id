export default function Highlights() {
  const videos = [
    {
      title: "World Stage Moments",
      desc: "Signature Greco sequences and par terre turns.",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      title: "Training Room Intensity",
      desc: "Drills, pressure ties, and match prep.",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      title: "Technique Breakdown",
      desc: "Short form analysis for clinics.",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
  ];

  return (
    <section id="highlights" className="relative py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Highlights</h2>
        <p className="mt-4 text-slate-300 max-w-2xl">
          A glance at the intensity, craft, and showmanship that define Thomas's style on the mat.
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-8">
          {videos.map((v) => (
            <div key={v.title} className="bg-slate-900/60 border border-white/10 rounded-2xl overflow-hidden">
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src={v.url}
                  title={v.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div className="p-5">
                <h3 className="text-white font-semibold">{v.title}</h3>
                <p className="text-slate-300 text-sm mt-1">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
