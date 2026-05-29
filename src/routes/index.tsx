import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import portrait from "@/assets/portrait.jpg";
import newPortrait from "@/assets/portrait-isabel.jpg";

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
          "Engineer-turned-PM working on performance at Microsoft. A few words on my path, my principles, and the things that make me, me.",
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
      <a href="#top" className="font-serif text-2xl italic text-sage-deep">
        Isabel Bolger
      </a>
      <div className="flex gap-6 text-xs font-semibold uppercase tracking-[0.2em] text-ink/50 md:gap-10 md:text-sm">
        <a href="#principles" className="transition-colors hover:text-clay">
          Principles
        </a>
        <a href="#about" className="transition-colors hover:text-clay">
          About
        </a>
        <a href="#game" className="transition-colors hover:text-clay">
          Two Truths and a lie
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
      <div className="mx-auto w-full max-w-6xl">
        <p className="mb-8 text-xs font-bold uppercase tracking-[0.3em] text-clay">
          Hello, I&rsquo;m
        </p>
        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-8">
            <h1 className="mb-10 font-serif text-7xl leading-[0.85] tracking-tight md:text-[9rem] lg:text-[11rem]">
              <span className="block text-sage-deep">Isabel</span>
              <span className="ml-6 block italic text-clay md:ml-16">Bolger.</span>
            </h1>
            <div className="max-w-xl">
              <p className="font-serif text-2xl italic leading-snug text-ink/70 md:text-3xl">
                Product Manager 2 — Office Web Shared
              </p>
              <p className="mt-6 text-lg leading-relaxed text-ink/65 md:text-xl">
                I strive to build products that are resilient, accessible, and genuinely useful — while leading with curiosity, empathy, and authenticity.
              </p>
            </div>
          </div>
          <div className="md:col-span-4 flex justify-center md:justify-end">
            <div className="relative">
              <div
                className="absolute -inset-4 -z-10 bg-sage/25"
                style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}
              />
              <img
                src={newPortrait}
                alt="Portrait of Isabel Bolger"
                width={1200}
                height={1200}
                className="w-72 object-cover shadow-2xl md:w-full"
                style={{ borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%", aspectRatio: "4 / 5" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const principles = [
  {
    n: "01",
    title: "⚡Energy is a product strategy",
    body: "How a team feels on Friday shapes what ships on Monday. I protect momentum like a feature.",
  },
  {
    n: "02",
    title: "➡️Direction before velocity",
    body: "Fast is only useful when it&rsquo;s pointed somewhere true. I&rsquo;d rather pause to aim than sprint sideways.",
  },
  {
    n: "03",
    title: "❓Confusion is useful data",
    body: "When something doesn&rsquo;t make sense, that&rsquo;s the signal — not the noise. I follow it instead of smoothing it over.",
  },
  {
    n: "04",
    title: "📐Every edge case belongs to somebody",
    body: "There&rsquo;s a real person behind that 0.3%. Caring about them is how a product earns the word &lsquo;great&rsquo;.",
  },
  {
    n: "05",
    title: "🧱I like foundations more than heroics",
    body: "Boring, durable systems beat dramatic rescues. Most of the magic is in the maintenance.",
  },
  {
    n: "06",
    title: "🤝Trust is built in small moments",
    body: "Loading states. Tiny copy. A button that responds when you expect it to. Every small surface is a promise.",
  },
];

function Principles() {
  return (
    <section id="principles" className="relative overflow-hidden bg-sage/10 py-28 md:py-32">
      <div className="absolute -left-32 top-20 -z-0 h-72 w-72 rounded-full bg-sage/20 blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-6 md:px-12">
        <div className="mb-16 max-w-2xl md:mb-20">
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.3em] text-sage-deep">
            How I work
          </p>
          <h2 className="font-serif text-5xl leading-[1.05] md:text-7xl">
            Six principles I keep <span className="italic text-clay">coming back to.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-x-12 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {principles.map((p) => (
            <div key={p.n} className="group flex flex-col gap-4">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-clay">
                {p.n}
              </span>
              <h3 className="font-serif text-2xl leading-snug transition-colors group-hover:text-clay md:text-[1.75rem]">
                {p.title}
              </h3>
              <p
                className="leading-relaxed text-ink/65"
                dangerouslySetInnerHTML={{ __html: p.body }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutBlock({
  kicker,
  title,
  children,
}: {
  kicker: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-12">
      <div className="md:col-span-4">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-sage-deep">{kicker}</p>
        <h3 className="mt-3 font-serif text-3xl italic text-clay md:text-4xl">{title}</h3>
      </div>
      <div className="space-y-4 text-lg leading-relaxed text-ink/75 md:col-span-8 md:border-l md:border-sage/30 md:pl-10">
        {children}
      </div>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="py-28 md:py-32">
      <div className="mx-auto max-w-5xl px-6 md:px-12">
        <div className="mb-20 max-w-2xl">
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.3em] text-clay">
            About
          </p>
          <h2 className="font-serif text-5xl leading-[1.05] md:text-7xl">
            The <span className="italic">longer version.</span>
          </h2>
        </div>
        <div className="space-y-20">
          <AboutBlock kicker="Origins" title="Where I started.">
            <p>
              I grew up in Seattle, surrounded by water, mountains, and gray
              skies I didn’t fully appreciate until I left. I moved to Boston to
              attend Northeastern University, and the distance gave me a new
              appreciation for the natural beauty and sense of calm that shaped
              my upbringing.
            </p>
          </AboutBlock>
          <AboutBlock kicker="Career path" title="Engineer → Product.">
            <p>
              I started my career as a software engineer on the Word Web team at Microsoft, working on front-end features like dark mode, accessibility, and graphics. Being close to the implementation taught me to value strong foundations and thoughtful systems, but over time I realized the part I loved most was the collaboration around the work — shaping ideas with designers, talking with customers, and solving messy problems as a team. That led me to transition into product management, where I found the kind of work I genuinely love. Today, I’m a PM working on performance in Microsoft Office, focused on making experiences feel fast, intuitive, and reliable while building the foundations that create trust with our users.
            </p>
          </AboutBlock>
          <AboutBlock kicker="Off the clock" title="What I do for me.">
            <p>
              Outside of work, I’m usually exploring a new coffee shop, taking
              long walks through the park, skiing in the mountains, or getting
              out on a tennis court. I also love discovering cultural events —
              live music, local art, great food, and the kinds of experiences
              that make a city feel alive and connected.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                { icon: "⛷️", label: "Ski", r: "2rem 1rem 2rem 1rem" },
                { icon: "🥾", label: "Hike", r: "1rem 2rem 1rem 2rem" },
                { icon: "🎾", label: "Tennis", r: "2rem 2rem 1rem 3rem" },
                { icon: "🏙️", label: "Local tourist", r: "1rem 1rem 2rem 2rem" },
                { icon: "📖", label: "Read", r: "3rem 1rem 3rem 1rem" },
              ].map((hobby) => (
                <div
                  key={hobby.label}
                  className="flex flex-col items-center gap-2 border border-sage/30 bg-canvas px-6 py-5 transition-all hover:-translate-y-1 hover:border-clay hover:shadow-md"
                  style={{ borderRadius: hobby.r }}
                >
                  <span className="text-2xl">{hobby.icon}</span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-ink/60">
                    {hobby.label}
                  </span>
                </div>
              ))}
            </div>
          </AboutBlock>
        </div>
      </div>
    </section>
  );
}

type Fact = {
  id: number;
  label: string;
  isLie: boolean;
  reveal: string;
};

const facts: Fact[] = [
  {
    id: 1,
    label: "I was adopted.",
    isLie: false,
    reveal:
      "True. I was adopted from China when I was 6 months old — a part of my story that’s shaped a lot of how I see identity, family, and belonging.",
  },
  {
    id: 2,
    label: "I used to do competitive cheerleading.",
    isLie: false,
    reveal:
      "True. Between the ages of 7 and 9, you could find me flying through the air, doing backflips, and leading cheer routines with questionable hairdo's. I can still hit a toe-touch — don’t test me.",
  },
  {
    id: 3,
    label: "I&rsquo;ve skydived twice.",
    isLie: true,
    reveal:
      "The lie! I’ve only gone skydiving once — which, in my opinion, is exactly the number of times a person needs to voluntarily launch themselves out of a perfectly functional airplane to fully understand the experience.",
  },
];

function TwoTruths() {
  const [guessed, setGuessed] = useState<number | null>(null);
  const correct = guessed !== null && facts.find((f) => f.id === guessed)?.isLie;

  return (
    <section id="game" className="relative overflow-hidden bg-clay/8 py-28 md:py-32">
      <div className="absolute -right-20 -top-20 -z-0 h-72 w-72 rounded-full bg-clay/15 blur-3xl" />
      <div className="absolute -bottom-32 -left-20 -z-0 h-80 w-80 rounded-full bg-sage/20 blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-6 md:px-12">
        <div className="mb-14 max-w-2xl md:mb-16">
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.3em] text-clay">
            A little game
          </p>
          <h2 className="font-serif text-5xl leading-[1.05] md:text-7xl">
            Two truths and <span className="italic text-clay">a lie.</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink/70">
            Three things about me. Two are true, one is a beautiful little
            fabrication. Tap the one you think is the lie — then I&rsquo;ll
            tell you the whole story.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {facts.map((f) => {
            const isOpen = guessed === f.id;
            const wasGuessed = guessed !== null;
            return (
              <button
                key={f.id}
                onClick={() => setGuessed(f.id)}
                className={`group relative flex flex-col rounded-2xl border bg-canvas p-8 text-left transition-all md:p-10 ${
                  isOpen
                    ? "border-clay shadow-lg shadow-clay/10"
                    : "border-stone-soft hover:-translate-y-1 hover:border-clay/40 hover:shadow-md"
                } ${wasGuessed && !isOpen ? "opacity-70" : ""}`}
              >
                <span className="mb-6 text-xs uppercase tracking-[0.3em] text-clay">
                  No. {f.id}
                </span>
                <p
                  className="font-serif text-2xl leading-snug md:text-[1.65rem]"
                  dangerouslySetInnerHTML={{ __html: f.label }}
                />

                {isOpen ? (
                  <div className="mt-8 border-t border-stone-soft pt-6">
                    <p
                      className="mb-4 text-xs uppercase tracking-[0.25em] text-ink/40"
                    >
                      {f.isLie ? "The lie" : "Truth"}
                    </p>
                    <p
                      className="leading-relaxed text-ink/75"
                      dangerouslySetInnerHTML={{ __html: f.reveal }}
                    />
                  </div>
                ) : (
                  <span className="mt-8 text-xs uppercase tracking-[0.25em] text-ink/40 transition-colors group-hover:text-clay">
                    Guess this one →
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {guessed !== null && (
          <div className="mt-12 flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <p className="font-serif text-2xl italic md:text-3xl">
              Fun guess — the lie was #3.
            </p>
            <button
              onClick={() => setGuessed(null)}
              className="text-xs uppercase tracking-[0.3em] text-clay transition-opacity hover:opacity-70"
            >
              Reset ↺
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-stone-soft px-6 py-16 md:px-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
        <p className="font-serif text-lg italic">Isabel Bolger</p>
        <p className="text-[10px] uppercase tracking-[0.3em] text-ink/40">
          © {new Date().getFullYear()} · More sections coming soon
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
      <Principles />
      <About />
      <TwoTruths />
      <Footer />
    </main>
  );
}
