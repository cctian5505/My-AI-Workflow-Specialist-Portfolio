"use client";

import { useEffect, useState } from "react";
import type { ProjectImage } from "@/data/portfolio";
import SafeImage from "./SafeImage";

const ROTATE_MS = 4500;

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = () => setReduced(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return reduced;
}

export default function ProjectGallery({
  images,
  alt,
  imgClassName = "",
  priority = false,
}: {
  images: ProjectImage[];
  alt: string;
  imgClassName?: string;
  priority?: boolean;
}) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (images.length <= 1 || paused || reducedMotion) return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % images.length);
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, [images.length, paused, reducedMotion]);

  if (images.length === 0) return null;

  return (
    <div
      className="relative w-full h-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {images.map((img, i) => (
        <SafeImage
          key={img.src}
          src={img.src}
          alt={alt}
          loading={i === 0 && priority ? "eager" : "lazy"}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
            i === active ? "opacity-100" : "opacity-0"
          } ${imgClassName}`}
        />
      ))}
    </div>
  );
}
