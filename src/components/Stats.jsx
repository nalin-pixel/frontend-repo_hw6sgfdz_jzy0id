import { Dumbbell, Award, FlameKindling } from "lucide-react";

export default function Stats() {
  const stats = [
    { label: "Years Competing", value: "15+", icon: Dumbbell },
    { label: "International Teams", value: "US Team", icon: Award },
    { label: "Clinics & Camps", value: "Coaching", icon: FlameKindling },
  ];

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} className="rounded-2xl border border-white/10 bg-slate-900/70 p-6 text-center">
                <div className="mx-auto w-10 h-10 rounded-xl bg-cyan-500/15 text-cyan-400 grid place-items-center">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="mt-3 text-3xl font-extrabold text-white">{s.value}</div>
                <div className="text-slate-400 text-sm">{s.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
