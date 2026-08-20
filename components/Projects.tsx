import { portfolio } from "@/data/portfolio";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

export default function Projects() {
  const projects = portfolio.projects;
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  // Fall back gracefully to the plain grid if nothing is marked featured.
  const ordered = featured.length > 0 ? [...featured, ...rest] : projects;

  return (
    <section id="projects" className="scroll-mt-16 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4">
            Projects
          </p>
          <h2 className="font-display font-semibold text-2xl sm:text-3xl text-text mb-10 sm:mb-12 max-w-xl">
            What I&apos;ve actually built.
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
          {ordered.map((project, i) => (
            <Reveal
              key={project.id}
              delay={(i % 2) * 80}
              className={
                project.featured ? "sm:col-span-2 lg:col-span-1" : ""
              }
            >
              <ProjectCard project={project} priority={i === 0} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
