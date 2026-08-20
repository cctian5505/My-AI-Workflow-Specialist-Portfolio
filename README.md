# Portfolio — Maintenance Guide

A static, dark-themed portfolio built with Next.js, TypeScript, and Tailwind CSS.
Everything you'll want to update lives in **one file**: `data/portfolio.ts`.
You should almost never need to touch anything in `app/` or `components/`.

## Where to edit things

| What | Where |
|---|---|
| Your name, title, About text | `data/portfolio.ts → profile` |
| Profile photo | `public/profile.svg` — replace with `public/profile.jpg` and update `profile.image` |
| Social links | `data/portfolio.ts → profile.socials` |
| "What I Do" cards | `data/portfolio.ts → whatIDo` |
| Projects | `data/portfolio.ts → projects` |
| Project cover images | `public/projects/` |
| Project stack badges | `data/portfolio.ts → projects[].stack` |
| Tools & Technologies marquee | `data/portfolio.ts → tools` |
| Contact links | `data/portfolio.ts → contact` |

Every field you're expected to edit has an `// EDIT:` comment above it in `data/portfolio.ts`.

## How to add a project

1. Create a folder for it under `public/projects/` (e.g. `public/projects/my-new-project/`) and add a cover image inside — e.g. `cover.webp`. Landscape, roughly 16:10, works best.
2. Open `data/portfolio.ts`.
3. Copy one of the existing objects inside the `projects` array.
4. Replace every field with your project's real info (`id` must be unique — it becomes the URL, e.g. `/projects/my-new-project`).
5. Set `image: "/projects/my-new-project/cover.webp"`.
6. Save. The new project appears on the homepage and gets its own case-study page automatically.

To **reorder** projects, just reorder the objects in the array — the site follows that order.
To **feature** a project, set `featured: true` on it (this doesn't change the layout yet — it's there for future use).

## How to remove a project

Delete its object from the `projects` array in `data/portfolio.ts`. That's it — its page stops being generated automatically.

## How to change a project image

Replace the file at the path referenced by that project's `image` field. Keep the same filename, or update the `image` field to match a new filename.

## Adding multiple project images

Every project can optionally have more than one image. Drop the extra files in that project's folder:

```
public/
  projects/
    my-project/
      cover.webp
      screenshot-1.webp
      screenshot-2.webp
```

Then reference them in `data/portfolio.ts`:

```ts
{
  id: "my-project",
  // EDIT: Main/cover image
  image: "/projects/my-project/cover.webp",
  // EDIT: Optional additional images
  images: [
    "/projects/my-project/screenshot-1.webp",
    "/projects/my-project/screenshot-2.webp",
  ],
  ...
}
```

That's it — no component code to touch. With multiple images set:

- **Homepage card:** the images auto-rotate with a subtle crossfade (starting on the cover image), pausing while a visitor's mouse is over the card, and respecting their device's reduced-motion setting.
- **Project detail page:** a large image with small dots underneath it. Visitors click a dot (or swipe on mobile) to switch images manually — nothing rotates automatically there. Clicking the image opens a zoomed-in view; click outside it or press Esc to close.

If a project only has `image` and no `images`, none of the above changes — it behaves exactly like a single static image, same as before.

### Adding image captions

Each entry in `images` can be a plain path, or an object with an optional caption:

```ts
images: [
  "/projects/my-project/screenshot-1.webp", // no caption
  {
    src: "/projects/my-project/screenshot-2.webp",
    caption: "The admin dashboard showing daily pricing.",
  },
],
```

Captions only appear on the project detail page, under the large image, and only for images that have one — leave `caption` off and nothing extra renders.

## How to add a tool

1. (Optional) Add an icon — the marquee maps tool names to icons via `components/ToolIcon.tsx`. If your tool isn't already in the `ICONS` map there, it falls back to a generic terminal icon, or you can add a new entry.
2. Add `{ name: "ToolName", icon: "iconKey" }` **once** to the `tools` array in `data/portfolio.ts`.
3. Save.

Each tool should appear only once in `portfolio.ts` — the marquee component duplicates the list internally to make the scrolling loop seamless, so you never need to type a tool twice.

## How to change social / contact links

Edit `profile.socials` (shown in About) and the `contact` object (shown in Contact) in `data/portfolio.ts`.

## Calendly booking

The Contact section can show a "Book a Free Automation Consultation" tile that opens Calendly's official popup scheduler. It's controlled entirely by `contact.calendly` in `data/portfolio.ts`:

1. Create an event type in Calendly (e.g. a 30-minute consultation call).
2. Copy that event's booking URL (e.g. `https://calendly.com/your-name/consult`).
3. Open `data/portfolio.ts`.
4. Replace `calendly: ""` with `calendly: "https://calendly.com/your-name/consult"`.
5. Save.
6. The booking tile appears automatically on the Contact section — no other changes needed.

Leave `calendly: ""` (empty string) to hide the tile completely — the rest of the Contact section (email, GitHub, LinkedIn, Telegram) keeps working either way.

The booking title, description, and duration text shown on the tile are also editable in the same `contact` object:

```ts
contact: {
  ...
  calendly: "https://calendly.com/your-name/consult",
  bookingTitle: "Book a Free Automation Consultation",
  bookingDescription: "Have a workflow you'd like to automate? Let's discuss it.",
  bookingDuration: "30 minutes · Free",
},
```

If Calendly's script fails to load (e.g. a network hiccup), the button shows a small "Having trouble opening the scheduler? Contact me directly." note instead of breaking — your other contact links are never affected.

## How to update About Me

Edit `profile.about` in `data/portfolio.ts`. Keep it a few honest sentences — no need to over-format it.

## What you should NOT normally need to edit

- Anything in `app/` — layout, routing, and the project case-study template.
- Anything in `components/` — these read from `data/portfolio.ts` and render it. If you find yourself editing a component just to change text or an image, that content probably belongs in `data/portfolio.ts` instead.
- `app/globals.css` — color/type tokens, unless you deliberately want to restyle the site.

## Running it locally

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Building for production

```bash
npm run build
npm run start
```

## Deploying

This is a static-friendly Next.js app — no database, backend, or environment variables required. Easiest path is [Vercel](https://vercel.com):

1. Push this repo to GitHub.
2. Import it in Vercel.
3. Deploy — no configuration needed.

## Project structure

```
data/portfolio.ts             ← the file you edit
lib/projectImages.ts          combines a project's cover + extra images into one list
app/
  layout.tsx                  site-wide fonts + metadata
  page.tsx                    assembles the homepage sections
  globals.css                 color tokens, type tokens, animation styles
  projects/[slug]/page.tsx    project case-study template (auto-generated per project)
components/
  Nav, About, WhatIDo, Projects, ProjectCard, ProjectGallery,
  ProjectDetailGallery, ImageLightbox, ToolsMarquee, Contact,
  BookingTile, CalendlyPopup, Footer, Reveal, SafeImage, ToolIcon, Divider
public/
  profile.svg                 placeholder — replace with your real photo
  projects/<project>/          one folder per project — cover + extra images live here
```

## Placeholder content

Anything marked `YOUR_...` or `PROJECT_DESCRIPTION` in `data/portfolio.ts` is a placeholder — replace it with your real information before treating the site as finished. Placeholder images are intentionally plain SVGs labeled with the file path they replace, so it's obvious what still needs a real image. `contact.calendly` is intentionally left as `""` until you add your real booking URL.

## How to add Project

{
      id: "",
      name: "",
      category: "",
      image: "",
      images: [],
      shortDescription:
        "",
      stack: [],
      featured: false,

      problem: "",
      solution: "",
      howItWorks: "",
      role: "",
      challenges: "",
      result: "",
      learned: "",

      github: "",
      demo: "",
    },