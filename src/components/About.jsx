import { User, Code2 } from 'lucide-react';

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'C Language',
  'VFX',
  'Animation',
];

const About = () => {
  return (
    <section id="about" className="relative w-full bg-slate-950 py-20 text-slate-100">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-center gap-3">
          <div className="rounded-md bg-cyan-500/20 p-2 ring-1 ring-cyan-400/30">
            <User className="h-5 w-5 text-cyan-300" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight">About</h2>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-5">
          <div className="md:col-span-3">
            <p className="text-slate-300 leading-relaxed">
              I’m Captain Charan, a web developer who blends code with creativity. I build fast, accessible, and responsive interfaces, often adding a touch of motion and polish inspired by VFX and animation. My focus is on modern tooling, clean architecture, and delightful user experiences.
            </p>
            <ul className="mt-6 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-slate-700 bg-slate-900/60 px-4 py-2 text-sm text-slate-200 shadow shadow-slate-900/20"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="relative aspect-square w-full overflow-hidden rounded-xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-800 p-1">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/20 via-sky-400/10 to-blue-500/20" />
              <div className="relative flex h-full items-center justify-center">
                <Code2 className="h-24 w-24 text-cyan-300" />
              </div>
            </div>
            <p className="mt-3 text-center text-xs text-slate-400">Photo placeholder</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
