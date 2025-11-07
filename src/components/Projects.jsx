import { ExternalLink, Layers } from 'lucide-react';

const projects = [
  {
    title: 'Interactive Landing Page',
    description: 'A sleek, animated landing experience with responsive sections and scroll-based motion.',
    stack: ['React', 'Tailwind', 'Framer Motion'],
    link: '#',
  },
  {
    title: 'E-commerce UI',
    description: 'Modern storefront with product grid, filtering, and cart interactions.',
    stack: ['React', 'Zustand', 'Tailwind'],
    link: '#',
  },
  {
    title: 'Portfolio Generator',
    description: 'CLI + UI tool that scaffolds beautiful developer portfolios in minutes.',
    stack: ['Node', 'React', 'CSS'],
    link: '#',
  },
  {
    title: 'Design System Kit',
    description: 'Reusable component library with tokens, themes, and accessibility baked in.',
    stack: ['Storybook', 'React', 'Tailwind'],
    link: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative w-full bg-slate-950 py-20 text-slate-100">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-center gap-3">
          <div className="rounded-md bg-sky-500/20 p-2 ring-1 ring-sky-400/30">
            <Layers className="h-5 w-5 text-sky-300" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight">Projects</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900/60 p-5 transition-transform hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-500/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-sky-500/0 to-blue-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-10 pointer-events-none" />
              <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-slate-700 bg-slate-800/80 px-3 py-1 text-xs text-slate-200"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <div className="mt-5">
                <a
                  href={p.link}
                  className="inline-flex items-center gap-2 rounded-full bg-sky-500/90 px-4 py-2 text-xs font-semibold text-white ring-1 ring-sky-300/30 transition-all hover:-translate-y-0.5 hover:bg-sky-500"
                >
                  View Project <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
