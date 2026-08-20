import { portfolio } from "@/data/portfolio";
import ToolIcon from "./ToolIcon";
import Reveal from "./Reveal";
import BookingTile from "./BookingTile";

export default function Contact() {
  const { contact } = portfolio;

  const links = [
    //{ name: "Email", href: `mailto:${contact.email}`, icon: "email" },
    //{ name: "Telegram", href: contact.telegram, icon: "telegram" },
    //{ name: "GitHub", href: contact.github, icon: "github" },
    //{ name: "LinkedIn", href: contact.linkedin, icon: "linkedin" },
  ].filter((l) => l.href);

  return (
    <section id="contact" className="scroll-mt-16 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4">
            Contact
          </p>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl tracking-tight text-text max-w-md">
            Let&apos;s build something.
          </h2>
        </Reveal>

        <BookingTile />

        <Reveal delay={60}>
          <div className="mt-8 flex flex-wrap gap-3">
            {links.map((l) => (
              <a
                key={l.name}
                href={l.href}
                target={l.name === "Email" ? undefined : "_blank"}
                rel={l.name === "Email" ? undefined : "noopener noreferrer"}
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-bg-card px-4 py-2.5 text-sm text-text-muted hover:text-text hover:border-border-strong transition-colors"
              >
                <ToolIcon name={l.icon} size={16} className="text-accent" />
                {l.name}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
