import { ArrowRight } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import CalendlyPopup from "./CalendlyPopup";
import Reveal from "./Reveal";

export default function BookingTile() {
  const { contact } = portfolio;

  // Hidden entirely until a real Calendly URL is set in data/portfolio.ts.
  if (!contact.calendly) return null;

  return (
    <Reveal className="mt-8 max-w-xl">
      <div className="rounded-2xl border border-border bg-bg-card p-6 sm:p-8">
        <p className="font-mono text-[11px] uppercase tracking-wide text-accent mb-2">
          {contact.bookingDuration}
        </p>
        <h3 className="font-display font-semibold text-xl sm:text-2xl text-text">
          {contact.bookingTitle}
        </h3>
        <p className="mt-2 text-sm text-text-muted leading-relaxed">
          {contact.bookingDescription}
        </p>

        <CalendlyPopup
          url={contact.calendly}
          className="mt-5 inline-flex items-center gap-2 rounded-xl bg-accent text-bg font-mono text-sm px-5 py-3 hover:bg-accent-dim transition-colors"
        >
          Schedule a Call
          <ArrowRight size={16} />
        </CalendlyPopup>
      </div>
    </Reveal>
  );
}
