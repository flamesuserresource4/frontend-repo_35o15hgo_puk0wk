import { Mail, Youtube, Instagram, Github, Linkedin } from 'lucide-react';

const socials = [
  { name: 'YouTube', icon: Youtube, href: 'https://youtube.com' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
  { name: 'GitHub', icon: Github, href: 'https://github.com' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
];

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    alert(`Thanks ${name}! Your message has been received.`);
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="relative w-full bg-slate-950 py-20 text-slate-100">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-center gap-3">
          <div className="rounded-md bg-blue-500/20 p-2 ring-1 ring-blue-400/30">
            <Mail className="h-5 w-5 text-blue-300" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight">Contact</h2>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm text-slate-300">Name</label>
              <input
                name="name"
                type="text"
                required
                className="mt-1 w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100 placeholder-slate-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm text-slate-300">Email</label>
              <input
                name="email"
                type="email"
                required
                className="mt-1 w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100 placeholder-slate-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm text-slate-300">Message</label>
              <textarea
                name="message"
                rows="4"
                required
                className="mt-1 w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100 placeholder-slate-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                placeholder="How can I help?"
              />
            </div>
            <button
              type="submit"
              className="rounded-md bg-sky-500/90 px-5 py-2 text-sm font-semibold text-white ring-1 ring-sky-300/30 transition hover:-translate-y-0.5 hover:bg-sky-500"
            >
              Send Message
            </button>
          </form>

          <div>
            <p className="text-slate-300">Connect on social media</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {socials.map(({ name, icon: Icon, href }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-200 transition hover:-translate-y-0.5 hover:border-sky-500 hover:bg-slate-900/80"
                >
                  <Icon className="h-4 w-4" /> {name}
                </a>
              ))}
            </div>

            <div className="mt-10 rounded-xl border border-slate-800 bg-slate-900/60 p-5 text-sm text-slate-300">
              <p className="font-semibold text-slate-200">Email</p>
              <p>captaincharan@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
