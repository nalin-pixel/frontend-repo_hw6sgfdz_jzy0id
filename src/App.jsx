import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Highlights from "./components/Highlights";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <main className="pt-24">
        <Hero />
        <About />
        <Highlights />
        <Achievements />
        <Contact />
      </main>
      <footer className="border-t border-white/10 py-10 mt-10">
        <div className="max-w-6xl mx-auto px-6 text-slate-400 text-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Thomas Dantzler. All rights reserved.</p>
          <p>Greco-Roman • Team USA Olympian</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
