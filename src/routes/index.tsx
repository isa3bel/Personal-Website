import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import newHereImage from "@/assets/project-tactile.jpg";
import lumaBriefImage from "@/assets/project-tempo.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Isabel Bolger — Product Manager & Builder" },
      {
        name: "description",
        content:
          "Isabel Bolger is a product manager who builds. See New Here and LumaBrief.",
      },
      { property: "og:title", content: "Isabel Bolger — Product Manager & Builder" },
      {
        property: "og:description",
        content:
          "Isabel Bolger is a product manager who builds. See New Here and LumaBrief.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type ProjectProps = {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imageClassName?: string;
  tags: string[];
  problem: React.ReactNode;
  action: React.ReactNode;
  result: React.ReactNode;
  liveUrl: string;
  repoUrl: string;
};

function Project({
  id,
  title,
  description,
  image,
  imageAlt,
  imageClassName,
  tags,
  problem,
  action,
  result,
  liveUrl,
  repoUrl,
}: ProjectProps) {
  const [open, setOpen] = useState(false);
  const panelId = `${id}-panel`;

  return (
    <article className={`project reveal${open ? " open" : ""}`} id={id}>
      <button
        className="project-toggle"
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
      >
        <div className="thumb thumb-img">
          <img className={imageClassName} src={image} alt={imageAlt} width="1240" height="880" />
        </div>
        <div className="info">
          <div className="title">
            <h3>{title}</h3>
            <span className="arrow" aria-hidden="true">+</span>
          </div>
          <p>{description}</p>
          <ul className="tags">
            {tags.map((tag) => <li key={tag}>{tag}</li>)}
          </ul>
        </div>
      </button>
      <div className="case-panel" id={panelId} role="region" aria-label={`${title} case study`}>
        <div className="case-inner">
          <div className="cols">
            <div><h4>Problem</h4><p>{problem}</p></div>
            <div><h4>Action</h4><p>{action}</p></div>
            <div><h4>Result</h4><p>{result}</p></div>
          </div>
          <p className="case-links">
            <a className="btn btn-dark" href={liveUrl} target="_blank" rel="noopener noreferrer">
              Visit {title} ↗
            </a>
            <a className="btn" href={repoUrl} target="_blank" rel="noopener noreferrer">
              GitHub repo ↗
            </a>
          </p>
        </div>
      </div>
    </article>
  );
}

function Index() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("in"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.12 },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <a className="skip" href="#work">Skip to projects</a>

      <header className="nav">
        <a className="brand" href="#top"><span className="dot" aria-hidden="true">IB</span> Isabel Bolger</a>
        <nav aria-label="Primary">
          <a href="#experience">Experience</a>
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a className="btn" href="mailto:isabelbolger@hotmail.com">Get in touch</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="avatar" aria-hidden="true"><span>IB</span></div>
          <p className="eyebrow">Product Manager &amp; Builder</p>
          <h1>Hi, I&apos;m Isabel!</h1>
          <p className="lead">
            I&apos;m an Engineer turned Product Manager, with a passion for solving real problems and shipping solutions that make people&apos;s lives easier — grounded in hands-on engineering, sharpened by product leadership.
          </p>
          <div className="row">
            <a className="btn btn-dark" href="#work">View work</a>
            <a className="btn" href="https://drive.google.com/file/d/1IzzWfNLzHi_hBNV3NzqsoP78A7Q6VkHV/view?usp=share_link" target="_blank" rel="noopener noreferrer">Resume</a>
          </div>
        </section>

        <section id="experience" className="section">
          <div className="section-head">
            <h2>Experience</h2>
            <span className="count">Microsoft · 2021 – Present</span>
          </div>

          <div className="role reveal">
            <div className="role-meta">
              <p className="company">Microsoft</p>
              <h3>Product Manager 2, Office Web Shared</h3>
              <p className="dates">Jan 2025 – Present</p>
            </div>
            <ul className="role-body">
              <li><strong>Faster app load, 8s to 3s.</strong> Lead a 3-engineer crew adopting Chromium&apos;s Speculative Rules API. I own the experiment strategy and measurement framework, balancing performance gains against COGS, and align partner teams to expand adoption.</li>
              <li><strong>65% faster Copilot chat pane launch.</strong> Coordinated optimizations across Web Shared, Office AI and Office Platform, and set new org-wide performance metrics with User Research. Profiling and daily benchmarks surfaced startup delays and caught regressions early.</li>
              <li><strong>10s boot at P95 for major enterprise tenants.</strong> Led the Enterprise Health initiative across 6 teams, set its OKRs with senior leadership, and cut client-to-server latency by debugging tenant network traces.</li>
            </ul>
          </div>

          <div className="role reveal">
            <div className="role-meta">
              <p className="company">Microsoft</p>
              <h3>Software Engineer, Word Online</h3>
              <p className="dates">Jul 2021 – Dec 2024</p>
            </div>
            <ul className="role-body">
              <li><strong>Dark Mode.</strong> Helped take it from prototype to production, covering canvas rendering, browser bugs, contrast, automation and staged rollout.</li>
              <li><strong>Paragraph Options.</strong> Built the pagination controls (Keep with next, Widow/Orphan, Keep lines together) across client and server, then ran the bug bash, experiments and launch. Reported average usage of about 21,000 uses per day.</li>
              <li><strong>Accessibility.</strong> One of two drivers of a 300+ bug program across 13 engineering areas. I shipped fixes myself and trained partner teams through office hours. The crew earned a Gold Medal in the accessibility health score.</li>
              <li><strong>Graphics.</strong> Owned testing, automation and reliability for a migration to browser-side rendering of pictures and shapes. I built telemetry to guide rollout decisions and recommended pausing an experiment when the data was too thin to call.</li>
            </ul>
          </div>
        </section>

        <section id="work" className="section">
          <div className="section-head"><h2>Selected work</h2><span className="count">02</span></div>
          <Project
            id="new-here"
            title="New Here"
            description="A personalized 7/30/90-day plan for people moving to a new city."
            image={newHereImage}
            imageAlt="New Here project preview"
            tags={["Consumer", "AI", "Next.js", "Supabase"]}
            problem={<>Moving leaves a gap between <em>intending</em> to build a life and actually showing up. Meetup, Reddit and Google list options but never sequence them, so people stall before forming a routine.</>}
            action="Designed and built a time-boxed plan with checkable actions in three phases, personalized to the city down to the local transit card and DMV. Phase three is a weekly grid built from what the user kept, not another checklist."
            result="A live, full-stack app that guides users from logistics and setup to interest-based recommendations and sustainable routines. 28 fixed starter tasks keep every plan comparable, and a pre-move mode helps before arrival."
            liveUrl="https://newhereclub.vercel.app"
            repoUrl="https://github.com/isa3bel/New-Here"
          />
          <Project
            id="lumabrief"
            title="LumaBrief"
            description="Track the SF tech events you attend, what you learned, and who you met."
            image={lumaBriefImage}
            imageAlt="LumaBrief project preview"
            imageClassName="app-icon"
            tags={["Productivity", "Expo", "React Native", "Supabase"]}
            problem="Networking events blur together. Notes, takeaways and contacts end up scattered across Luma, LinkedIn and memory."
            action="Built one record per event, pulling events from Luma and connections from LinkedIn. A single codebase runs on web, iOS and Android."
            result="A live dashboard for managing event registrations and capturing post-event learnings in one place, plus a companion browser extension that imports LinkedIn connections."
            liveUrl="https://luma-brief.vercel.app/"
            repoUrl="https://github.com/isa3bel/Luma-Brief"
          />
        </section>

        <section id="about" className="section about reveal">
          <h2>About</h2>
          <div>
            <p>I grew up in Seattle, surrounded by water, mountains and gray skies I didn&apos;t fully appreciate until I moved to Boston for Northeastern. The distance gave me a new appreciation for the calm that shaped me.</p>
            <p>I started as a software engineer on the Word Web team, then moved into product. Being close to the implementation taught me to value strong foundations, but the part I loved most was the collaboration around the work.</p>
            <p>Off the clock, you&apos;ll find me at coffee shops, on walks, skiing, playing tennis or out at a cultural event.</p>
          </div>
        </section>

        <section className="section cta reveal">
          <h2>Have a role in mind?</h2>
          <a className="btn btn-dark" href="mailto:isabelbolger@hotmail.com">isabelbolger@hotmail.com</a>
          <p className="links">
            <a href="https://www.linkedin.com/in/isabel-b/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/isa3bel" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://drive.google.com/file/d/1IzzWfNLzHi_hBNV3NzqsoP78A7Q6VkHV/view?usp=share_link" target="_blank" rel="noopener noreferrer">Resume</a>
          </p>
        </section>
      </main>

      <footer className="foot"><span>© {new Date().getFullYear()} Isabel Bolger</span><a href="#top">Back to top ↑</a></footer>
    </>
  );
}