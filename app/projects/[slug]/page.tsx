import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ProjectDetailGallery from "@/components/ProjectDetailGallery";
import { getProjectImages } from "@/lib/projectImages";

export function generateStaticParams() {
  return portfolio.projects.map((p) => ({ slug: p.id }));
}

// Only the slugs returned above are valid routes — anything else 404s
// instead of Next trying to render it on demand.
export const dynamicParams = false;

// Next.js 16 passes `params` as a Promise — it must be awaited before use.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = portfolio.projects.find((p) => p.id === slug);
  if (!project) return {};
  return {
    title: `${project.name} — ${portfolio.profile.name}`,
    description: project.shortDescription,
  };
}

const SECTIONS: { key: keyof typeof portfolio.projects[number]; label: string }[] = [
  { key: "problem", label: "The Problem" },
  { key: "solution", label: "The Solution" },
  { key: "howItWorks", label: "How It Works" },
  { key: "role", label: "My Role" },
  { key: "challenges", label: "Challenges" },
  { key: "result", label: "Result" },
  { key: "learned", label: "What I Learned" },
];

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = portfolio.projects.find((p) => p.id === slug);
  if (!project) notFound();

  return (
    <div className="flex flex-col min-h-screen">
      <Nav />

      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-6 pt-14 pb-24">
          <Reveal>
            <Link
              href="/#projects"
              className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-text transition-colors"
            >
              <ArrowLeft size={15} />
              All projects
            </Link>

            <p className="mt-8 font-mono text-xs uppercase tracking-[0.2em] text-accent">
              {project.category}
            </p>
            <h1 className="mt-3 font-display font-semibold text-3xl sm:text-4xl tracking-tight text-text">
              {project.name}
            </h1>
            <p className="mt-4 text-text-muted text-base sm:text-lg leading-relaxed">
              {project.shortDescription}
            </p>
          </Reveal>

          <Reveal delay={60} className="mt-8">
            <ProjectDetailGallery
              images={getProjectImages(project)}
              alt={project.name}
            />
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-8">
              <p className="font-mono text-[11px] uppercase tracking-wide text-text-faint mb-2">
                Project Stack
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((tool) => (
                  <span
                    key={tool}
                    className="font-mono text-[11px] px-2 py-1 rounded-md border border-border bg-bg-raised text-text-muted"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="mt-14 space-y-10">
            {SECTIONS.map((s, i) => {
              const value = project[s.key];
              if (!value) return null;
              return (
                <Reveal key={s.key} delay={i * 40}>
                  <h2 className="font-display font-semibold text-lg text-text mb-2">
                    {s.label}
                  </h2>
                  <p className="text-text-muted leading-relaxed">
                    {String(value)}
                  </p>
                </Reveal>
              );
            })}
          </div>

          {(project.github || project.demo) && (
            <Reveal>
              <div className="mt-12 pt-8 border-t border-border flex flex-wrap gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-border bg-bg-card px-4 py-2.5 text-sm text-text-muted hover:text-text hover:border-border-strong transition-colors"
                  >
                    <Github size={16} className="text-accent" />
                    View Code
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-border bg-bg-card px-4 py-2.5 text-sm text-text-muted hover:text-text hover:border-border-strong transition-colors"
                  >
                    <ExternalLink size={16} className="text-accent" />
                    Live Demo
                  </a>
                )}
              </div>
            </Reveal>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
