import { Trophy, Medal, Flag } from "lucide-react";

const items = [
  { icon: Trophy, title: "Olympian", desc: "Represented the United States at the Olympic Games." },
  { icon: Medal, title: "National Team Veteran", desc: "Multiple-time U.S. World Team/National Team member." },
  { icon: Flag, title: "International Podiums", desc: "Medaled at premier international tournaments." },
];

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Achievements</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl bg-slate-900/60 border border-white/10 p-6">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/15 text-cyan-300 grid place-items-center">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="mt-4 text-white font-semibold">{title}</h3>
              <p className="text-slate-300 text-sm mt-1">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
