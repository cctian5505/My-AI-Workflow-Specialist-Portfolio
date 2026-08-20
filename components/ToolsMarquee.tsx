import { portfolio } from "@/data/portfolio";
import ToolIcon from "./ToolIcon";
import Reveal from "./Reveal";

function Row({
  tools,
  reverse = false,
}: {
  tools: typeof portfolio.tools;
  reverse?: boolean;
}) {
  // Duplicate the list so the 50%-translate loop is seamless.
  const doubled = [...tools, ...tools];

  return (
    <div className="marquee-group relative overflow-hidden">
      <div
        className={`flex w-max gap-3 ${
          reverse ? "marquee-track-reverse" : "marquee-track"
        }`}
      >
        {doubled.map((tool, i) => (
          <div
            key={`${tool.name}-${i}`}
            className="flex items-center gap-2.5 shrink-0 px-4 py-3 rounded-xl border border-border bg-bg-card hover:border-border-strong hover:bg-bg-raised transition-colors"
          >
            <ToolIcon name={tool.icon} size={18} className="text-accent" />
            <span className="font-mono text-sm text-text-muted whitespace-nowrap">
              {tool.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ToolsMarquee() {
  const tools = portfolio.tools;
  const mid = Math.ceil(tools.length / 2);
  const rowA = tools.slice(0, mid);
  const rowB = tools.slice(mid).length > 0 ? tools.slice(mid) : tools;

  return (
    <section id="tools" className="scroll-mt-16 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4">
            Tools &amp; Technologies
          </p>
        </Reveal>

        <div
          className="mt-6 space-y-3 [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]"
          aria-label="Tools and technologies I use"
        >
          <Row tools={rowA} />
          <Row tools={rowB} reverse />
        </div>
      </div>
    </section>
  );
}
