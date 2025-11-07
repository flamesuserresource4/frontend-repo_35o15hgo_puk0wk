import { Download } from 'lucide-react';

const Resume = () => {
  const handleDownload = () => {
    const content = `Captain Charan\nWeb Developer\n\nSkills: HTML, CSS, JavaScript, C Language, VFX, Animation\nProjects: Interactive Landing, E-commerce UI, Portfolio Generator, Design System Kit\nContact: captaincharan@example.com`;
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Captain_Charan_Resume.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section id="resume" className="relative w-full bg-slate-950 py-20 text-slate-100">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold tracking-tight">Resume</h2>
          <p className="mt-2 text-slate-300">Download a copy of my resume.</p>
        </div>
        <button
          onClick={handleDownload}
          className="inline-flex items-center gap-2 rounded-md bg-sky-500/90 px-6 py-3 text-sm font-semibold text-white ring-1 ring-sky-300/30 transition hover:-translate-y-0.5 hover:bg-sky-500"
        >
          <Download className="h-4 w-4" /> Download Resume
        </button>
      </div>
    </section>
  );
};

export default Resume;
