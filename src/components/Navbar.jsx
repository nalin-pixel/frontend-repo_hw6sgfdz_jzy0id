import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#about", label: "About" },
    { href: "#highlights", label: "Highlights" },
    { href: "#achievements", label: "Achievements" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mt-5 rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#" className="font-extrabold tracking-tight text-white text-lg">
              TD <span className="text-cyan-400">Wrestling</span>
            </a>
            <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
              {links.map((l) => (
                <a key={l.href} href={l.href} className="hover:text-white transition">
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                className="ml-2 inline-flex items-center px-4 py-2 rounded-lg bg-cyan-500 text-slate-900 font-semibold shadow-lg shadow-cyan-500/20"
              >
                Book Thomas
              </a>
            </nav>
            <button
              className="md:hidden text-white/80 hover:text-white"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
          {open && (
            <div className="md:hidden px-4 pb-4 border-t border-white/10">
              <nav className="flex flex-col gap-3 text-slate-300">
                {links.map((l) => (
                  <a key={l.href} href={l.href} className="hover:text-white transition" onClick={() => setOpen(false)}>
                    {l.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  className="mt-2 inline-flex items-center justify-center px-4 py-2 rounded-lg bg-cyan-500 text-slate-900 font-semibold"
                  onClick={() => setOpen(false)}
                >
                  Book Thomas
                </a>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
