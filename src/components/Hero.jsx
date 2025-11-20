import { Medal, Flame } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950" />
      <div className="absolute inset-0 -z-10 opacity-30 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(56,189,248,0.35),transparent)]" />

      <div className="max-w-6xl mx-auto px-6 pt-24 pb-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-cyan-300/90 bg-cyan-500/10 border border-cyan-400/20 rounded-full px-3 py-1 mb-5">
              <Medal className="w-4 h-4" />
              <span className="text-xs tracking-wide">Olympian • Greco-Roman Wrestler</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
              Thomas "T.C." Dantzler
            </h1>
            <p className="mt-5 text-slate-300 text-lg leading-relaxed max-w-xl">
              Elite Greco-Roman wrestler known for relentless pressure and precision.
              Represented Team USA on the world stage, including the Olympic Games.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-cyan-500 text-slate-900 font-semibold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition"
              >
                <Flame className="w-5 h-5" />
                Book Thomas
              </a>
              <a
                href="#highlights"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 text-white font-semibold border border-white/20 hover:bg-white/15 transition"
              >
                View Highlights
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 rounded-[28px] bg-gradient-to-tr from-cyan-500/30 via-fuchsia-500/20 to-blue-500/20 blur-2xl" />
            <div className="relative rounded-[28px] bg-slate-900/70 border border-white/10 p-2">
              <div className="rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 p-10 flex items-center justify-center aspect-square">
                <div className="w-40 h-40 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 text-slate-900 font-extrabold text-5xl grid place-items-center shadow-2xl">
                  TD
                </div>
              </div>
            </div>
            <p className="text-center text-slate-400 mt-4 text-sm">
              Image coming soon — placeholder avatar displayed
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
