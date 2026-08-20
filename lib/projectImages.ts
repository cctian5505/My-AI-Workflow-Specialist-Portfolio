import type { Project, ProjectImage } from "@/data/portfolio";

/**
 * Returns a project's full image list: the main/cover `image` first,
 * followed by any optional `images` entries (normalizing plain string
 * paths into `{ src }` objects). Every project has at least one image.
 */
export function getProjectImages(project: Project): ProjectImage[] {
  const extra = (project.images ?? []).map((img) =>
    typeof img === "string" ? { src: img } : img
  );
  return [{ src: project.image }, ...extra];
}
