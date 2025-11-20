import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      // For now we just simulate success; backend could be wired later.
      await new Promise((res) => setTimeout(res, 700));
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (e) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-8">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Book Thomas</h2>
              <p className="mt-4 text-slate-300">
                For clinics, keynotes, camps, or consulting, share a few details and we’ll get back to you.
              </p>
              <ul className="mt-6 text-slate-300 text-sm space-y-2">
                <li>• Team and club clinics</li>
                <li>• Athlete mentorship</li>
                <li>• Corporate speaking</li>
              </ul>
            </div>

            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label className="block text-slate-300 text-sm mb-1">Name</label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-slate-800/80 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-slate-300 text-sm mb-1">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-slate-800/80 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-slate-300 text-sm mb-1">Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-slate-800/80 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  placeholder="Tell us about your event or needs"
                />
              </div>

              <button
                disabled={status === "loading"}
                className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-cyan-500 text-slate-900 font-semibold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 disabled:opacity-60"
              >
                {status === "loading" ? "Sending..." : status === "success" ? "Sent!" : "Send Request"}
              </button>

              {status === "success" && (
                <p className="text-green-400 text-sm">Thanks! We'll be in touch shortly.</p>
              )}
              {status === "error" && (
                <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
