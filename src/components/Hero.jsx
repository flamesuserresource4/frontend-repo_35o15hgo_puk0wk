import Spline from '@splinetool/react-spline';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  const handleDownload = () => {
    const content = `Captain Charan\n\nRole: Web Developer\nLocation: Remote\n\nSummary\n- Modern front-end specialist with a focus on responsive, accessible, and performant interfaces.\n- Passionate about creating delightful user experiences with clean, scalable code.\n\nSkills\n- HTML, CSS, JavaScript, C Language\n- VFX, Animation\n- React, Tailwind CSS\n\nExperience\n- Built multiple responsive portfolio and product sites with modern tooling.\n\nContact\n- Email: captaincharan@example.com\n- GitHub: github.com/captaincharan`;
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Captain_Charan_Resume.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/60 to-slate-950 pointer-events-none" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-3 text-sm uppercase tracking-widest text-cyan-300/90">Hello, I am</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
          <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
            Captain Charan
          </span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-300">Web Developer • VFX • Animation</p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={scrollToProjects}
            className="group inline-flex items-center gap-2 rounded-full bg-sky-500/90 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 ring-1 ring-sky-300/30 transition-all hover:-translate-y-0.5 hover:bg-sky-500"
          >
            View My Work
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
          <button
            onClick={handleDownload}
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-slate-100 ring-1 ring-white/20 backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/15"
          >
            <Download className="h-4 w-4" /> Download Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
