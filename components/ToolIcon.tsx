import {
  Workflow,
  Github,
  Send,
  Sparkles,
  Train,
  Triangle,
  FileSpreadsheet,
  Braces,
  Code2,
  Linkedin,
  Mail,
  Terminal,
} from "lucide-react";
import type { LucideProps } from "lucide-react";

// Maps a `tools[].icon` / `socials[].icon` key from portfolio.ts to a
// recognizable icon. No brand logos are invented — these are generic,
// legible icons paired with the tool's name label in the UI.
const ICONS: Record<string, React.ComponentType<LucideProps>> = {
  n8n: Workflow,
  python: Code2,
  openai: Sparkles,
  github: Github,
  railway: Train,
  vercel: Triangle,
  telegram: Send,
  nextjs: Triangle,
  typescript: Braces,
  excel: FileSpreadsheet,
  linkedin: Linkedin,
  email: Mail,
  default: Terminal,
};

export default function ToolIcon({
  name,
  ...props
}: { name: string } & LucideProps) {
  const Icon = ICONS[name] ?? ICONS.default;
  return <Icon {...props} />;
}
