import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/portfolio";
import ProjectGallery from "./ProjectGallery";
import { getProjectImages } from "@/lib/projectImages";

export default function ProjectCard({
  project,
  priority = false,
}: {
  project: Project;
  priority?: boolean;
}) {
  const images = getProjectImages(project);

  return (
    <Link
      href={`/projects/${project.id}`}
      className="group block rounded-2xl border border-border bg-bg-card overflow-hidden hover:border-border-strong transition-colors"
    >
      <div className="relative w-full aspect-[16/10] bg-bg-raised overflow-hidden">
        <ProjectGallery
          images={images}
          alt=""
          priority={priority}
          imgClassName="transition-transform duration-500 group-hover:scale-[1.03]"
        />
        {/* Placeholder fallback shown behind the (possibly missing) image */}
        <div className="absolute inset-0 -z-10 flex items-center justify-center">
          <span className="font-mono text-xs text-text-faint">
            {project.image}
          </span>
        </div>
        <div className="absolute top-3 left-3">
          <span className="font-mono text-[11px] uppercase tracking-wide px-2.5 py-1 rounded-full bg-bg/80 border border-border-strong text-text-muted backdrop-blur">
            {project.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-display font-semibold text-xl text-text flex items-center gap-1.5">
          {project.name}
          <ArrowUpRight
            size={18}
            className="text-text-faint group-hover:text-accent transition-colors"
          />
        </h3>
        <p className="mt-2 text-sm text-text-muted leading-relaxed">
          {project.shortDescription}
        </p>

        <div className="mt-4">
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
      </div>
    </Link>
  );
}
