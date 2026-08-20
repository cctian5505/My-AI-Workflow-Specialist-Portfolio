import { portfolio } from "@/data/portfolio";
import Reveal from "./Reveal";

export default function WhatIDo() {
  return (
    <section id="what-i-do" className="scroll-mt-16 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4">
            What I Do
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-3 gap-4 sm:gap-5">
          {portfolio.whatIDo.map((item, i) => (
            <Reveal key={item.title} delay={i * 90}>
              <div className="h-full rounded-xl border border-border bg-bg-card p-6 hover:border-border-strong transition-colors">
                <span className="font-mono text-xs text-text-faint">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display font-semibold text-lg text-text">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
