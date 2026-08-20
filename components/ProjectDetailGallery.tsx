"use client";

import { useRef, useState } from "react";
import type { ProjectImage } from "@/data/portfolio";
import SafeImage from "./SafeImage";
import ImageLightbox from "./ImageLightbox";

const SWIPE_THRESHOLD = 40;

export default function ProjectDetailGallery({
  images,
  alt,
}: {
  images: ProjectImage[];
  alt: string;
}) {
  const [active, setActive] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const didSwipe = useRef(false);

  if (images.length === 0) return null;

  const current = images[active];

  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
    didSwipe.current = false;
  }

  function handleTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null || images.length <= 1) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > SWIPE_THRESHOLD) {
      didSwipe.current = true;
      setActive((i) =>
        delta > 0
          ? (i - 1 + images.length) % images.length
          : (i + 1) % images.length
      );
    }
    touchStartX.current = null;
  }

  function handleClick() {
    if (didSwipe.current) {
      didSwipe.current = false;
      return;
    }
    setLightboxOpen(true);
  }

  return (
    <div>
      <button
        type="button"
        onClick={handleClick}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="block w-full aspect-[16/9] rounded-2xl border border-border bg-bg-card overflow-hidden relative cursor-zoom-in"
        aria-label={
          images.length > 1
            ? `View larger image, image ${active + 1} of ${images.length}`
            : "View larger image"
        }
      >
        <SafeImage
          src={current.src}
          alt={alt}
          className="w-full h-full object-cover"
        />
      </button>

      {current.caption && (
        <p className="mt-3 text-center text-xs text-text-faint font-mono px-4">
          {current.caption}
        </p>
      )}

      {images.length > 1 && (
        <div
          className="mt-4 flex items-center justify-center gap-2"
          role="tablist"
          aria-label="Project images"
        >
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-label={`Show image ${i + 1} of ${images.length}`}
              onClick={() => setActive(i)}
              className={`h-2 rounded-full transition-all ${
                i === active
                  ? "w-6 bg-accent"
                  : "w-2 bg-border-strong hover:bg-text-faint"
              }`}
            />
          ))}
        </div>
      )}

      <ImageLightbox
        open={lightboxOpen}
        src={current.src}
        alt={alt}
        onClose={() => setLightboxOpen(false)}
      />
    </div>
  );
}
