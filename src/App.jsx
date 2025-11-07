import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen scroll-smooth bg-slate-950 font-inter">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <footer className="border-t border-slate-800 bg-slate-950 py-8 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Captain Charan. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
