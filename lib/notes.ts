export interface Note {
  slug: string;
  emoji: string;
  title: string;
  date: string; // ISO date, shown in sidebar + note header
  pinned?: boolean;
  spotifyEmbed?: string; // e.g. "album/35RAdg..." or "playlist/3cEYpj..." — renders a Spotify embed under the note content
  content: string; // markdown
}

export const notes: Note[] = [
  {
    slug: "about-me",
    emoji: "👋",
    title: "about me",
    date: "2026-06-12",
    pinned: true,
    content: `
hi, i'm sagar amruth.

**vibemarketer and aura farmer for brands and creators living at the intersection of tech and media.**

I produce cool AI content for a living. Been at it for about four years now, working closely with some of India's biggest AI creators.

I'm just genuinely curious about AI. I run experiments, fail, try again, and somewhere in that loop the actual work gets done.

Built a fully automated AI news channel producing content at a scale that didn't really exist before. Recognised by YouTube at Davos WEF.

That ended up getting the attention of companies like OpenAI, Intel, NVIDIA, Meta, and Microsoft. Now I run campaigns for them and a bunch of others.

## by the numbers

- **100M+** monthly views
- **300M+** total reach
- **3M+** followers — for Varun Mayya (India's biggest AI creator) & Overpowered AI
`,
  },
  {
    slug: "work",
    emoji: "🛠️",
    title: "work",
    date: "2026-06-11",
    content: `
## Built the Biggest AI Avatar (Recognised by YouTube)

Started experimenting with AI avatars in early 2023, before they became mainstream. The project now reaches 60–100M views monthly, making it one of the largest AI wrapper projects from India.

\`ai avatars\` · \`60-100M views/mo\` · \`2023–present\`

## Viral AI Campaigns w/ OpenAI

Led viral AI campaigns in collaboration with OpenAI, producing content that reached millions — individual videos hitting 1.7M, 1.4M, and 1.1M views. The collaboration post garnered 40,000+ likes.

\`openai\` · \`viral content\` · \`40K+ likes\`

## Brand Campaigns — Google, NVIDIA, Intel, Adobe AI

Created viral AI campaigns for major tech brands. The NVIDIA campaign alone hit 8.1M views. Worked across Google for India, Intel AI PCs, Adobe AI tools, and more.

\`google\` · \`nvidia\` · \`intel\` · \`adobe\`

## Netflix-Level Documentary Using AI Tools

Created a Netflix-quality documentary of the Indus Valley Report using AI tools — acclaimed by one of India's largest VCs. Went from zero video editing knowledge to producing this in just 3 weeks. 1M+ views on YouTube.

\`documentary\` · \`ai-produced\` · \`1M+ views\`

## Long-Form YouTube Content Producer & Management

Produced and managed long-form YouTube content across multiple channels with hundreds of thousands of views per video. Topics span AI, startups, career advice, and deep dives on tech companies.

\`youtube\` · \`long-form\` · \`content strategy\`

## India's Most Intellectual AI Podcasts

Produced podcast episodes featuring Sam Altman (CEO OpenAI), Satya Nadella (CEO Microsoft), Sundar Pichai (CEO Google), Mustafa Suleyman (CEO Microsoft AI), Ed McLaughlin (CTO Mastercard), Emad Mostaque (Stable Diffusion), and Shantanu Narayen (CEO Adobe).

\`podcasts\` · \`tech CEOs\` · \`ai\`

## Brand Collaborations

IBM · OpenAI · Meta · Google · Amazon · Intel · Microsoft · TATA · Gemini · YouTube · Google Play · Adobe · NVIDIA · NPCI · Airtel · Swiggy · Motorola · OPPO · ITC Limited
`,
  },
  {
    slug: "what-people-say",
    emoji: "💬",
    title: "what people say",
    date: "2026-06-10",
    content: `
> Sagar is our secret weapon. He spots trending topics, transforms my voice notes into perfect scripts using AI trained on my style, and constantly innovates our content systems. He spent a year perfecting our AI voice models word by word. That dedication to detail while thinking at scale — that's what makes Sagar irreplaceable.

**— Varun Mayya**

> It's difficult to both come up with viral content ideas and lead video production as well. I don't know how Sagar manages it.

**— Tanmay Bhat** — India's No.1 Comedian, Social Media Celebrity & AI Creator
`,
  },
  {
    slug: "core-values",
    emoji: "🧭",
    title: "core values",
    date: "2026-06-09",
    content: `
- kindness unlocks doors that smartness alone never will.
- you can't think your way out of a courage deficit. the important thing is to take the next step.
- your imagination is the bottleneck that limits the good you can create in the world.
- be so prolific you don't recognize yourself.
- who do you want to share this life with? everything else can be derived from that question.
- don't chase prestige. just do what you love, and let prestige take care of itself.
- the social reality you inherited is not the one you must inhabit for the rest of your life.
- when someone changes your life, don't just say thank you. pass it on.
- write stupid, edit smart. the frontier of dumb is where new smart things are born.
- emptying your cup is about refusing to be in denial. let life surprise you.
- be the person you wish you had in your life. that is the epiphany. for yourself. for others.
- how do you expect others to believe in you when you don't believe in yourself?
- no matter where you are in life, you always have more to learn and see.
- see life with childlike wonder. believe in magic.
`,
  },
  {
    slug: "blog",
    emoji: "✍️",
    title: "blog",
    date: "2026-06-08",
    content: `
Things I'm reading, thinking about, and curating. A mix of AI, content creation, technology, and the future of media.

## The Rise of AI Avatars in Content Creation — *coming soon*

A deep dive into how AI avatars are reshaping the creator economy — and what I learned building the biggest one.

## My AI Tool Stack for Video Production — *coming soon*

The 20+ tools I use daily to create content at scale — from scripting to final edit.

## What I Learned Working with OpenAI — *coming soon*

Lessons from collaborating with one of the world's leading AI companies on viral campaigns.

## From Zero to Netflix-Quality in 3 Weeks — *coming soon*

How I went from knowing nothing about video editing to producing documentaries that VCs praised.

*more posts coming soon.*
`,
  },
  {
    slug: "music",
    emoji: "🎧",
    title: "music",
    date: "2026-06-07",
    spotifyEmbed: "album/35RAdgZ15y062MlUZ5feIX",
    content: `
what's usually playing while the work gets done.
`,
  },
  {
    slug: "links",
    emoji: "🔗",
    title: "links",
    date: "2026-06-05",
    content: `
the fastest way to reach me:

- twitter / x: [x.com/sagartheamruth](https://x.com/sagartheamruth)
- instagram: [instagram.com/thesagaramruth](https://instagram.com/thesagaramruth)
- email: [sagaramruth1212@gmail.com](mailto:sagaramruth1212@gmail.com)
`,
  },
];

export function getNote(slug: string): Note | undefined {
  return notes.find((n) => n.slug === slug);
}

export function sortedNotes(): Note[] {
  return [...notes].sort((a, b) => {
    if (!!a.pinned !== !!b.pinned) return a.pinned ? -1 : 1;
    return b.date.localeCompare(a.date);
  });
}

export function previewText(note: Note): string {
  const line = note.content
    .split("\n")
    .map((l) => l.trim())
    .find((l) => l.length > 0 && !l.startsWith("#"));
  return (line ?? "").replace(/[*_`#>\[\]]/g, "").slice(0, 80);
}

export function formatDate(iso: string): string {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
