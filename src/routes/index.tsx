import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/portrait.jpg";
import projectTempo from "@/assets/project-tempo.jpg";
import projectTactile from "@/assets/project-tactile.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Isabel Bolger — Product Manager at Microsoft" },
      {
        name: "description",
        content:
          "Isabel Bolger is a Product Manager at Microsoft focused on performance — making software feel fast, sleek, and effortless.",
      },
      { property: "og:title", content: "Isabel Bolger — Product Manager at Microsoft" },
      {
        property: "og:description",
        content:
          "Engineer-turned-PM working on performance at Microsoft. A few words on my path, my passions, and the things I build on the side.",
      },
      { property: "og:image", content: portrait },
      { property: "og:url", content: "/" },
      { name: "twitter:image", content: portrait },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Nav() {
  return (
    <nav className="fixed top-0 z-50 flex w-full items-center justify-between px-6 py-6 md:px-12 mix-blend-multiply">
      <a href="#top" className="font-serif text-xl italic">
        I. Bolger
      </a>
      <div className="flex gap-6 text-xs font-medium uppercase tracking-[0.18em] text-ink/60 md:gap-10 md:text-sm">
        <a href="#path" className="transition-colors hover:text-clay">
          Path
        </a>
        <a href="#work" className="transition-colors hover:text-clay">
          Work
        </a>
        <a href="#contact" className="transition-colors hover:text-clay">
          Contact
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="flex min-h-screen flex-col justify-center px-6 pb-16 pt-32 md:px-12"
    >
      <div className="mx-auto w-full max-w-5xl">
        <h1 className="mb-10 font-serif text-6xl leading-[0.95] tracking-tight md:text-8xl lg:text-9xl">
          Building for <br />
          <span className="italic text-clay">speed</span> & soul.
        </h1>
        <div className="grid grid-cols-1 items-end gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-5">
            <p className="text-lg leading-relaxed text-ink/80 md:text-xl">
              I&rsquo;m Isabel — a Product Manager at Microsoft working on
              performance. I make things feel fast, sleek, and the kind of
              effortless people only notice when it&rsquo;s missing.
            </p>
          </div>
          <div className="md:col-span-7">
            <img
              src={portrait}
              alt="Portrait of Isabel Bolger"
              width={1200}
              height={896}
              className="aspect-[4/3] w-full rounded-2xl object-cover outline outline-1 -outline-offset-1 outline-black/5"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function PathStep({ title, body }: { title: string; body: string }) {
  return (
    <div className="relative border-l border-clay/30 pl-8">
      <div className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-clay" />
      <h3 className="text-lg font-medium">{title}</h3>
      <p className="mt-2 leading-relaxed text-ink/60">{body}</p>
    </div>
  );
}

function Path() {
  return (
    <section id="path" className="bg-stone-soft/60 py-28 md:py-32">
      <div className="mx-auto max-w-5xl px-6 md:px-12">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-24">
          <div>
            <h2 className="mb-12 font-serif text-4xl italic md:text-5xl">
              From bits to big&#8209;picture.
            </h2>
            <div className="space-y-10">
              <PathStep
                title="Software Engineer"
                body="I started out writing code — drawn to the puzzle of why things were slow and the quiet satisfaction of making them quick."
              />
              <PathStep
                title="The Transition"
                body="Along the way I fell in love with the human side: customers, collaboration, design. So I made the jump to product on an adjacent partner team."
              />
              <PathStep
                title="Product Manager at Microsoft"
                body="Today I work on performance — making things feel fast and sleek, partnering with brilliant teams, and shipping changes our customers notice and appreciate."
              />
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="rounded-3xl border border-stone-soft bg-canvas p-10 shadow-sm md:p-12">
              <blockquote className="font-serif text-2xl italic leading-snug md:text-3xl">
                &ldquo;The best performance work is invisible — it just feels
                like the product is finally listening.&rdquo;
              </blockquote>
              <p className="mt-6 text-xs uppercase tracking-[0.25em] text-clay">
                — A philosophy
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PassionsStrip() {
  const passions = [
    "Customer empathy",
    "Cross-team collaboration",
    "Design craft",
    "Performance, end-to-end",
    "Mentoring & teaching",
  ];
  return (
    <section className="border-y border-stone-soft py-12 md:py-16">
      <div className="mx-auto max-w-5xl px-6 md:px-12">
        <p className="mb-6 text-xs uppercase tracking-[0.25em] text-ink/40">
          A few things I care about
        </p>
        <div className="flex flex-wrap gap-x-8 gap-y-3 font-serif text-2xl italic text-ink/80 md:text-3xl">
          {passions.map((p, i) => (
            <span key={p} className="flex items-center gap-8">
              {p}
              {i < passions.length - 1 && (
                <span className="text-clay/60" aria-hidden>
                  •
                </span>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  src,
  alt,
  title,
  body,
  className = "",
}: {
  src: string;
  alt: string;
  title: string;
  body: string;
  className?: string;
}) {
  return (
    <div className={`group ${className}`}>
      <div className="mb-6 aspect-[4/5] w-full overflow-hidden rounded-2xl bg-stone-soft">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          width={800}
          height={1000}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
        />
      </div>
      <h4 className="font-serif text-2xl">{title}</h4>
      <p className="mt-2 leading-relaxed text-ink/60">{body}</p>
    </div>
  );
}

function Work() {
  return (
    <section id="work" className="py-28 md:py-32">
      <div className="mx-auto max-w-5xl px-6 md:px-12">
        <div className="mb-14 flex flex-col justify-between gap-4 md:mb-16 md:flex-row md:items-end">
          <h2 className="font-serif text-5xl md:text-6xl">
            Personal curiosities.
          </h2>
          <p className="max-w-xs text-ink/60 md:text-right">
            Small things I build and tinker with outside of work.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-8">
          <ProjectCard
            src={projectTempo}
            alt="A minimalist mindful timer interface"
            title="Tempo — a mindful timer"
            body="A tiny iOS experiment in haptics and quiet UI for deep work sessions."
          />
          <ProjectCard
            src={projectTactile}
            alt="Close-up of warm clay pottery"
            title="Tactile studies"
            body="Throwing clay on weekends. Same lesson as software: take care of the small surfaces, the whole thing feels better."
            className="md:mt-16"
          />
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <footer
      id="contact"
      className="border-t border-stone-soft px-6 py-28 md:px-12 md:py-32"
    >
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="mb-12 font-serif text-6xl italic md:text-8xl">
          Say hello.
        </h2>
        <p className="mx-auto mb-12 max-w-md text-ink/60">
          I love meeting people who care about craft. If anything here resonated,
          I&rsquo;d genuinely love to hear from you.
        </p>
        <div className="flex flex-wrap justify-center gap-8 text-lg md:gap-12">
          {[
            { label: "Email", href: "mailto:hello@example.com" },
            { label: "LinkedIn", href: "#" },
            { label: "GitHub", href: "#" },
            { label: "Read.cv", href: "#" },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="border-b border-transparent pb-1 transition-colors hover:border-clay hover:text-clay"
            >
              {l.label}
            </a>
          ))}
        </div>
        <p className="mt-24 text-[10px] uppercase tracking-[0.3em] text-ink/30 md:mt-32">
          © {new Date().getFullYear()} Isabel Bolger · Performance & Product
        </p>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="bg-canvas text-ink selection:bg-clay/20">
      <Nav />
      <Hero />
      <Path />
      <PassionsStrip />
      <Work />
      <Contact />
    </main>
  );
}
