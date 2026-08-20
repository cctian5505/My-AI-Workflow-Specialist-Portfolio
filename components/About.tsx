import { portfolio } from "@/data/portfolio";
import ToolIcon from "./ToolIcon";
import Reveal from "./Reveal";
import SafeImage from "./SafeImage";

export default function About() {
  const { profile } = portfolio;

  return (
    <section id="about" className="scroll-mt-16 pt-20 pb-24 sm:pt-28 sm:pb-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4">
            About
          </p>
        </Reveal>

        <div className="grid md:grid-cols-[280px_1fr] gap-10 md:gap-16 items-start">
          <Reveal delay={80}>
            <div className="relative w-full max-w-[280px] aspect-[4/5] rounded-2xl border border-border bg-bg-card overflow-hidden">
              {/* EDIT: replace public/profile.jpg with your real portrait */}
              <SafeImage
                src={profile.image}
                alt={`Portrait of ${profile.name}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="font-mono text-xs text-text-faint">
                </span>
              </div>
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5" />
            </div>
          </Reveal>

          <Reveal delay={140}>
            <h1 className="font-display font-semibold text-4xl sm:text-5xl tracking-tight text-text">
              {profile.name}
            </h1>
            <p className="mt-2 font-mono text-sm sm:text-base text-accent">
              {profile.title}
            </p>

            <p className="mt-6 text-text-muted text-base sm:text-lg leading-relaxed max-w-xl">
              {profile.about}
            </p>

            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              {profile.socials.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-sm text-text-muted hover:text-text transition-colors"
                  >
                    <ToolIcon
                      name={s.icon}
                      size={16}
                      className="text-text-faint group-hover:text-accent transition-colors"
                    />
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
