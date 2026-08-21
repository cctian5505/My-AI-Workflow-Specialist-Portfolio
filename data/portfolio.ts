// ============================================================
// PORTFOLIO CONTENT — the only file you should need to edit.
// ============================================================
// Add a project        → copy an object in `projects` below.
// Add extra project
//   images              → add an `images` array to that project.
// Add a tool            → add ONE entry to `tools` below (no duplicates —
//                          the marquee component duplicates them for you).
// Change your photo     → replace public/profile.svg
// Change a project img  → replace the file in public/projects/<project>/
// Enable Calendly       → set `contact.calendly` to your booking URL.
// ============================================================

export type ProjectImage = {
  src: string;
  // Optional — leave empty/omit if you don't want a caption shown.
  caption?: string;
};

export type Project = {
  id: string;
  name: string;
  category: string;
  image: string;
  // Optional — additional images shown in the homepage rotation and the
  // project detail gallery, in ADDITION to the main `image` above.
  // Each entry can be a plain string path, or an object with a caption:
  //   images: ["/projects/x/shot1.webp", { src: "/projects/x/shot2.webp", caption: "..." }]
  images?: (string | ProjectImage)[];
  shortDescription: string;
  stack: string[];
  featured?: boolean;

  problem: string;
  solution: string;
  howItWorks: string;
  role: string;
  challenges: string;
  result: string;
  learned: string;

  github?: string;
  demo?: string;
};

export type Tool = {
  name: string;
  icon: string; // path in /public/tools OR a lucide icon name (see ToolIcon component)
};

export const portfolio = {
  profile: {
    // EDIT: Your full name
    name: "Christian Espinosa",

    // EDIT: Your professional title
    title: "Workflow & AI Automation Specialist",

    // EDIT: Your short About Me description (2–4 sentences, your own voice)
    about:
      "I build workflow and AI automation systems that connect tools, data, and business processes into practical, reliable workflows. I work with n8n, APIs, CRM systems, webhooks, AI, and business tools to automate repetitive processes and reduce manual work. Most of what I build starts with a real problem — then I design and build the system around it.",

    // EDIT: Path to your professional portrait — drop the file in /public
    image: "/profile.png",

    // EDIT: Your social / contact links. Add or remove entries freely.
    socials: [
      //{ name: "GitHub", url: "https://github.com/YOUR_GITHUB", icon: "github" },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/christian-espinosa-ph/", icon: "linkedin" },
      //{ name: "Telegram", url: "https://t.me/YOUR_TELEGRAM", icon: "telegram" },
    ],
  },

  whatIDo: [
    {
      title: "Business Automation",
      description:
        "I automate repetitive business processes and turn manual workflows into reliable systems.",
    },
    {
      title: "AI Automation",
      description:
        "I integrate AI into workflows for classification, analysis, generation, decision-making, and other useful business tasks.",
    },
    {
      title: "Workflow & System Integration",
      description:
        "I connect APIs, CRMs, forms, calendars, email, and other tools so information can move automatically between systems.",
    },
  ],

  // EDIT: Reorder this array to change project order on the site.
  projects: [
    {
      id: "Multi-Channel-Lead-Management-Sales-Automation",
      name: "Multi-Channel Lead Management & Sales Automation",
      category: "Business Automation",
      image: "/projects/multi-Channel-lead-management-sales-automation1.png",
      images: ["/projects/multi-Channel-lead-management-sales-automation2.png"],
      shortDescription:
        "",
      stack: [
        "n8n",
        "HubSpot",
        "OpenAI",
        "Gmail",
        "Slack",
        "Webhooks",
        "Google Sheets",
        "JavaScript"
      ],
      featured: false,

      problem: "Leads can arrive from different channels such as website forms, Gmail, and receptionist submissions, each with different data structures. Managing these inquiries separately makes it difficult to maintain consistent CRM records, identify urgent inquiries, and keep a reliable history of every lead.",
      solution: "Built a centralized, source-agnostic lead management engine in n8n that receives normalized lead data from multiple intake workflows, uses AI to analyze and classify each inquiry, finds or creates the corresponding HubSpot contact, generates a lead identifier, records the event, and routes important notifications automatically.",
      howItWorks: "Website, Gmail, and receptionist inputs are first normalized into a common lead structure before being passed to the Lead Management Engine. The workflow analyzes the inquiry with AI, normalizes the AI output, searches HubSpot by email, updates an existing contact or creates a new one, generates a Lead ID, logs the lead event to Google Sheets, and routes urgent inquiries to the appropriate Slack channel. New contacts also receive an automated welcome email.",
      role: "Designed and built the n8n lead management architecture, including multi-source intake, data normalization, AI lead analysis, HubSpot CRM synchronization, lead ID generation, audit logging, notification routing, and automated customer acknowledgement.",
      challenges: "Keeping the core lead management engine independent from individual intake sources while ensuring that data from Gmail, website forms, and receptionist submissions follows the same structure. Another challenge was handling both existing and new HubSpot contacts while preserving a consistent audit trail and routing urgent inquiries appropriately.",
      result: "Created a centralized lead management engine that gives the business one consistent workflow for processing leads regardless of their source, while automating CRM synchronization, AI analysis, audit logging, urgent notifications, and customer acknowledgement.",
      learned: "How to design reusable n8n sub-workflows, normalize data from different sources into a common structure, integrate AI into business processes, synchronize CRM records through APIs, and separate source-specific intake logic from a centralized business automation engine.",

      github: "",
      demo: "",
    },
  ] as Project[],

  // EDIT: Add or remove tools. `icon` matches a key in components/ToolIcon.tsx
  tools: [
    { name: "n8n", icon: "n8n" },
    { name: "Python", icon: "python" },
    { name: "OpenAI", icon: "openai" },
    { name: "GitHub", icon: "github" },
    { name: "Railway", icon: "railway" },
    { name: "Vercel", icon: "vercel" },
    { name: "Telegram", icon: "telegram" },
    { name: "Next.js", icon: "nextjs" },
    { name: "TypeScript", icon: "typescript" },
    { name: "Excel", icon: "excel" },
    { name: "Google Sheets", icon: "" },
    { name: "Google Calendar", icon: "" },
    { name: "Calendly", icon: "" },
    { name: "Claude", icon: "" },
    { name: "ChatGPT", icon: "" },
    { name: "VSCode", icon: "" },
    
  ] as Tool[],

  contact: {
    // EDIT: Your email address
    email: "ctian5505@gmail.com",
    // EDIT: Your Telegram handle / link
    telegram: "https://t.me/YOUR_TELEGRAMs",
    // EDIT: Your GitHub profile
    github: "https://github.com/YOUR_GITHUB",
    // EDIT: Your LinkedIn profile
    linkedin: "https://linkedin.com/in/YOUR_LINKEDIN",

    // EDIT: Your Calendly booking page URL (e.g. "https://calendly.com/your-name/consult").
    // Leave this as an empty string "" to hide the booking tile entirely.
    calendly: "https://calendly.com/ccctian5505/clinic-appointment",
    // EDIT: Booking CTA title
    bookingTitle: "Book a Free Automation Consultation",
    // EDIT: Booking CTA description
    bookingDescription: "Have a workflow you'd like to automate? Let's discuss it.",
    // EDIT: Booking duration text
    bookingDuration: "30 minutes · Free",
  },
};

export type Portfolio = typeof portfolio;
