export default function About() {
  return (
    <section id="about" className="relative py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          <div className="md:col-span-2">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">About Thomas</h2>
            <p className="mt-5 text-slate-300 leading-relaxed">
              Thomas "T.C." Dantzler is an American Greco-Roman wrestler and Olympian, recognized for his
              tactical mastery at 74–74/75 kg and fierce competitive spirit. Over a long international career,
              he earned multiple national titles and represented Team USA at World Championships and the Olympic Games.
            </p>
            <p className="mt-5 text-slate-300 leading-relaxed">
              Known for heavy hands, suffocating ties, and the ability to convert scoring opportunities from par terre,
              Thomas brings a unique combination of athleticism and grit. Today he shares that experience through
              training, mentoring, and speaking — helping athletes and teams build winning cultures.
            </p>
          </div>
          <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-6">
            <h3 className="text-white font-semibold">Quick Facts</h3>
            <ul className="mt-4 space-y-2 text-slate-300 text-sm">
              <li>Discipline: Greco-Roman Wrestling</li>
              <li>Team USA Olympian</li>
              <li>Multiple-time U.S. National Team member</li>
              <li>Weight Class: 74–75 kg (historical)</li>
              <li>Coach, mentor, and speaker</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
