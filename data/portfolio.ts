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
    name: "Christian",

    // EDIT: Your professional title
    title: "Workflow & AI Automation Specialist",

    // EDIT: Your short About Me description (2–4 sentences, your own voice)
    about:
      "YOUR_ABOUT_TEXT — I build the automation layer behind a real e-commerce operation: pricing pipelines, Telegram agents, scrapers, and the sites that run on top of them. I learn by shipping, not by reading docs cover to cover — most of what's below started as a problem in my own business that I automated my way out of.",

    // EDIT: Path to your professional portrait — drop the file in /public
    image: "/profile.svg",

    // EDIT: Your social / contact links. Add or remove entries freely.
    socials: [
      { name: "GitHub", url: "https://github.com/YOUR_GITHUB", icon: "github" },
      { name: "LinkedIn", url: "https://linkedin.com/in/YOUR_LINKEDIN", icon: "linkedin" },
      { name: "Telegram", url: "https://t.me/YOUR_TELEGRAM", icon: "telegram" },
    ],
  },

  whatIDo: [
    {
      title: "Business Automation",
      description:
        "I help businesses automate repetitive processes and turn manual workflows into efficient systems.",
    },
    {
      title: "AI Automation",
      description:
        "I integrate AI into workflows where it can provide meaningful value through reasoning, generation, classification, decision-making, or other useful tasks.",
    },
    {
      title: "Workflow & System Integration",
      description:
        "I connect tools, APIs, platforms, and services so information can move automatically between systems.",
    },
  ],

  // EDIT: Reorder this array to change project order on the site.
  projects: [
    {
      id: "telegram-rate-agent",
      name: "Telegram AI Rate Assistant",
      category: "AI Automation",
      // EDIT: Main/cover image
      image: "/projects/telegram-rate-agent.svg",
      // EDIT: Optional additional images (shown in homepage rotation + detail
      // gallery). Uncomment and point at real files to use this. Each entry
      // can be a plain path string, or { src, caption } if you want a caption.
      // images: [
      //   "/projects/telegram-rate-agent/telegram.webp",
      //   { src: "/projects/telegram-rate-agent/workflow.webp", caption: "The n8n workflow behind the bot." },
      // ],
      shortDescription:
        "An AI agent inside Telegram that quotes item and currency rates to customers automatically, following a scripted 6-step conversation flow.",
      stack: ["n8n", "OpenAI", "Telegram", "Railway"],
      // EDIT: Set to true if this should be a featured project
      featured: true,

      problem:
        "PROJECT_DESCRIPTION — Customers ask for buy/sell rates all day, on both directions, across multiple platforms and shorthand formats. Answering manually doesn't scale and slows down first-to-reply sales.",
      solution:
        "PROJECT_DESCRIPTION — A self-hosted n8n workflow wired to an AI agent that reads the incoming message, works out rate direction and platform-specific shorthand, and replies with the correct quote — including reverse quantity calculation when the customer gives a budget instead of an amount.",
      howItWorks:
        "PROJECT_DESCRIPTION — Telegram messages hit a webhook in n8n, get parsed by a system prompt covering the full conversation flow, and the agent branches into the correct reply path (rate lookup, reverse calculation, or platform-ID delivery) before sending the response back.",
      role: "Designed the conversation flow, wrote the system prompt, and built and hosted the n8n workflow end-to-end.",
      challenges:
        "PROJECT_DESCRIPTION — Handling ambiguous shorthand and making sure the agent asks for missing information instead of guessing.",
      result:
        "The bot currently handles rate queries for the shop's Telegram channel and is in active use.",
      learned:
        "PROJECT_DESCRIPTION — How to structure a multi-step conversational flow inside a single system prompt, and where n8n's branching logic is a better fit than asking the model to do everything.",

      github: "",
      demo: "",
    },
    {
      id: "dota2-shop-site",
      name: "Dota 2 Inventory & Quoting Platform",
      category: "Workflow & System Integration",
      image: "/projects/dota2-shop-site.svg",
      shortDescription:
        "A live e-commerce site for a digital-goods resale business, with real-time link security, an admin console, and a fast product-browsing experience.",
      stack: ["Next.js", "Vercel", "JavaScript", "Excel"],
      featured: true,

      problem:
        "PROJECT_DESCRIPTION — Running a high-volume resale business over Facebook needed a proper storefront: something faster to browse than chat, with pricing that updates daily and links that can't be abused after hours.",
      solution:
        "PROJECT_DESCRIPTION — A Vercel-hosted site with a client-facing product catalog, cart drawer, and command-palette search, plus a password-protected admin view and a real-time link validation system so quote links expire on schedule.",
      howItWorks:
        "PROJECT_DESCRIPTION — Daily pricing is generated from an Excel workflow, pushed to the site, and a time-based key system checks link validity in real time using local time as the source of truth. Manual deploys (not CI) keep old links expired until fresh prices are pushed.",
      role: "Built and maintain the entire site solo — front end, admin tooling, security system, and deployment.",
      challenges:
        "PROJECT_DESCRIPTION — Keeping the link-expiry system simple enough to reason about while still being tamper-resistant, and making the catalog fast on mobile where most customers browse.",
      result:
        "In daily use as the main storefront for the business, handling both browsing and quote generation.",
      learned:
        "PROJECT_DESCRIPTION — How much a small amount of deliberate friction (manual deploys) can replace a lot of automated safeguards when you're a team of one.",

      github: "",
      demo: "",
    },
    {
      id: "price-history-tracker",
      name: "Dota 2 Price History Tracker",
      category: "Workflow & System Integration",
      image: "/projects/price-history-tracker.svg",
      shortDescription:
        "A static site that turns a raw Excel price export into a searchable, chartable price-history dashboard across 1,300+ items.",
      stack: ["Python", "JavaScript", "uPlot"],
      featured: false,

      problem:
        "PROJECT_DESCRIPTION — Item prices move constantly and there was no easy way to see how a specific item — or the market as a whole — was trending over time.",
      solution:
        "PROJECT_DESCRIPTION — A Python script converts a flat, tab-separated Excel export into a pre-aggregated JSON dataset, which powers Browse, Item Detail, Dashboard, and Grid views with time-series charts and staleness flags.",
      howItWorks:
        "PROJECT_DESCRIPTION — The Excel export is processed offline into data/items.json with precomputed stats (change windows, staleness), then the static site reads that file directly — no backend or database involved.",
      role: "Built the conversion script and the full front end, including the charting and comparison views.",
      challenges:
        "PROJECT_DESCRIPTION — Making 44,000+ data points load and chart smoothly in the browser without a backend.",
      result:
        "Tracks price history across 1,300+ items and 44,000+ data points as a static, self-contained dashboard.",
      learned:
        "PROJECT_DESCRIPTION — How far you can push a static-site architecture before you actually need a database.",

      github: "",
      demo: "",
    },
    {
      id: "match-schedule-poster",
      name: "Match Schedule Poster Generator",
      category: "Business Automation",
      image: "/projects/match-schedule-poster.svg",
      shortDescription:
        "An HTML/CSS generator that turns raw match data into a ready-to-post 1080×1080 schedule graphic for social media.",
      stack: ["HTML", "CSS", "JavaScript"],
      featured: false,

      problem:
        "PROJECT_DESCRIPTION — Posting a clean daily match schedule graphic by hand in a design tool was slow and repetitive.",
      solution:
        "PROJECT_DESCRIPTION — A templated poster generator that takes cleaned match data and outputs ready-to-paste HTML rows in a fixed dark-themed layout, ready to screenshot and post.",
      howItWorks:
        "PROJECT_DESCRIPTION — Raw schedule data is cleaned and structured, then mapped into a fixed 1080×1080 HTML/CSS template using a consistent type and color system.",
      role: "Designed the poster template and built the generation workflow.",
      challenges: "PROJECT_DESCRIPTION — Keeping the layout consistent regardless of how many matches are scheduled that day.",
      result: "Used to produce the daily schedule graphic for the business's social page.",
      learned: "PROJECT_DESCRIPTION — How to design a template that degrades gracefully with variable content length.",

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
  ] as Tool[],

  contact: {
    // EDIT: Your email address
    email: "YOUR_EMAIL@example.com",
    // EDIT: Your Telegram handle / link
    telegram: "https://t.me/YOUR_TELEGRAM",
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
