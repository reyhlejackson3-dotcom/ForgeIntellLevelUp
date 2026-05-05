// ============================================================
// FORGE QUEST — GAME DATA
// All levels, tasks, stat rewards
// ============================================================

const STATS = {
  hustle:    { label: "Hustle",    emoji: "⚡", color: "#FF6B35", desc: "Outreach & Sales Activity" },
  expertise: { label: "Expertise", emoji: "🧠", color: "#6C63FF", desc: "Knowledge & Credibility" },
  authority: { label: "Authority", emoji: "💼", color: "#00D9A0", desc: "Brand & Reputation" },
  pipeline:  { label: "Pipeline",  emoji: "🔗", color: "#FFB700", desc: "Deals & Relationships" },
  systems:   { label: "Systems",   emoji: "⚙️",  color: "#FF4DA6", desc: "Automation & Efficiency" }
};

const LEVELS = [
  {
    id: 1,
    title: "Boot Up",
    subtitle: "Get your foundation locked in",
    emoji: "🔧",
    difficulty: "Starter",
    difficultyRank: 1,
    timeframe: "2–3 Days",
    color: "#00D9A0",
    locked: false,
    tasks: [
      {
        id: "1a",
        title: "Set Up Your Offer Doc",
        desc: "Write a 1-page PDF or Google Doc that clearly explains what Forge Intell AI does, who it's for, what you charge, and what results they get. This is your sales weapon.",
        statRewards: { expertise: 2, systems: 1 },
        moneyReward: 0,
        emoji: "📄"
      },
      {
        id: "1b",
        title: "Define Your Niche Target",
        desc: "Pick ONE industry you're going after first — contractors, med spas, real estate agents, etc. Write down 20 business names in that niche in your area or online.",
        statRewards: { hustle: 1, pipeline: 2 },
        moneyReward: 0,
        emoji: "🎯"
      },
      {
        id: "1c",
        title: "Set Up CRM or Hit List",
        desc: "Create a simple spreadsheet or free CRM (HubSpot free tier) to track: Business name, contact info, outreach date, status. This is your war room.",
        statRewards: { systems: 2, pipeline: 1 },
        moneyReward: 0,
        emoji: "📊"
      }
    ]
  },
  {
    id: 2,
    title: "First Contact",
    subtitle: "Start real conversations with real people",
    emoji: "📡",
    difficulty: "Easy",
    difficultyRank: 2,
    timeframe: "3–5 Days",
    color: "#FFB700",
    locked: true,
    tasks: [
      {
        id: "2a",
        title: "Send 10 Cold DMs or Emails",
        desc: "Reach out to 10 businesses from your hit list. Keep it short: who you are, what you do, one question. No pitch walls. Just start conversations.",
        statRewards: { hustle: 3 },
        moneyReward: 0,
        emoji: "✉️"
      },
      {
        id: "2b",
        title: "Book Your First Discovery Call",
        desc: "Get at least ONE prospect on a call — even if it's a friend's business. Practice your questions. Record it (with permission). Review it after.",
        statRewards: { hustle: 2, pipeline: 2 },
        moneyReward: 0,
        emoji: "📞"
      }
    ]
  },
  {
    id: 3,
    title: "Social Signal",
    subtitle: "Make Forge Intell AI visible online",
    emoji: "📢",
    difficulty: "Easy",
    difficultyRank: 2,
    timeframe: "3–4 Days",
    color: "#6C63FF",
    locked: true,
    tasks: [
      {
        id: "3a",
        title: "Post Your Origin Story",
        desc: "Write and publish a LinkedIn post about WHY you started Forge Intell AI. Be honest. Be human. No AI buzzwords. Just your real reason. This builds authority fast.",
        statRewards: { authority: 3 },
        moneyReward: 0,
        emoji: "🗣️"
      },
      {
        id: "3b",
        title: "Post One Piece of Value Content",
        desc: "Share something useful — a tip about automation, a common mistake businesses make, a before/after of a workflow. Make them think 'I need this person.'",
        statRewards: { authority: 2, expertise: 1 },
        moneyReward: 0,
        emoji: "💡"
      },
      {
        id: "3c",
        title: "Optimize LinkedIn Profile",
        desc: "Update your headline to mention AI automation. Add Forge Intell AI as your company. Write a banner or about section that speaks to your niche. Profile = 24/7 salesperson.",
        statRewards: { authority: 2, systems: 1 },
        moneyReward: 0,
        emoji: "🪪"
      }
    ]
  },
  {
    id: 4,
    title: "First Dollar",
    subtitle: "Close your first paid deal",
    emoji: "💵",
    difficulty: "Medium",
    difficultyRank: 3,
    timeframe: "1–2 Weeks",
    color: "#FF6B35",
    locked: true,
    tasks: [
      {
        id: "4a",
        title: "Send 30 More Outreach Messages",
        desc: "Volume is the game right now. Send 30 more cold DMs, emails, or LinkedIn messages. Try 2–3 different angles. Track what gets replies. Hustle = data.",
        statRewards: { hustle: 4 },
        moneyReward: 0,
        emoji: "🚀"
      },
      {
        id: "4b",
        title: "Close Your First Paid Client",
        desc: "Land any paying client — even a small discovery/audit package at $250–$500. Real money = real business. Mark what they paid below as your reward.",
        statRewards: { hustle: 2, pipeline: 3, expertise: 1 },
        moneyReward: 500,
        emoji: "🤝"
      }
    ]
  },
  {
    id: 5,
    title: "Deliver the Goods",
    subtitle: "Execute, impress, and get proof",
    emoji: "⚙️",
    difficulty: "Medium",
    difficultyRank: 3,
    timeframe: "1–2 Weeks",
    color: "#FF4DA6",
    locked: true,
    tasks: [
      {
        id: "5a",
        title: "Deliver Your First Project",
        desc: "Complete the work for your first client. Document every step — screenshots, Loom videos, results. Build a delivery template you'll reuse forever.",
        statRewards: { expertise: 2, systems: 3 },
        moneyReward: 0,
        emoji: "📦"
      },
      {
        id: "5b",
        title: "Get a Written Testimonial",
        desc: "Ask your client for a 2–3 sentence testimonial: what was the problem, what did Forge Intell build, what changed. Post it on LinkedIn. This is fuel.",
        statRewards: { authority: 3, pipeline: 1 },
        moneyReward: 0,
        emoji: "⭐"
      }
    ]
  },
  {
    id: 6,
    title: "Pipeline Builder",
    subtitle: "Get 5 active conversations going at once",
    emoji: "🔗",
    difficulty: "Medium",
    difficultyRank: 3,
    timeframe: "1 Week",
    color: "#00D9A0",
    locked: true,
    tasks: [
      {
        id: "6a",
        title: "50 Total Outreach Messages Sent",
        desc: "Track it in your CRM. Send until you hit 50 total across your journey. This is your momentum milestone. The law of averages is working in your favor.",
        statRewards: { hustle: 4, pipeline: 2 },
        moneyReward: 0,
        emoji: "📬"
      },
      {
        id: "6b",
        title: "Have 5 Active Leads in Pipeline",
        desc: "5 real humans who have responded and expressed some interest — even 'tell me more.' Log them in your CRM with next steps for each.",
        statRewards: { pipeline: 4 },
        moneyReward: 0,
        emoji: "📈"
      }
    ]
  },
  {
    id: 7,
    title: "Stack the Wins",
    subtitle: "Close deals 2 & 3",
    emoji: "🏆",
    difficulty: "Hard",
    difficultyRank: 4,
    timeframe: "2–3 Weeks",
    color: "#FFB700",
    locked: true,
    tasks: [
      {
        id: "7a",
        title: "Close Client #2",
        desc: "Second client means you're not a one-hit wonder. Aim for a bigger package this time — $750–$1,500. You have a testimonial now. Use it.",
        statRewards: { pipeline: 3, hustle: 2 },
        moneyReward: 1000,
        emoji: "💰"
      },
      {
        id: "7b",
        title: "Close Client #3",
        desc: "Three clients makes you a business. Aim for at least $1,000 this time. If they want ongoing help, pitch a small monthly retainer ($300–$500/mo).",
        statRewards: { pipeline: 3, hustle: 2, authority: 1 },
        moneyReward: 1000,
        emoji: "🎯"
      }
    ]
  },
  {
    id: 8,
    title: "Machine Mode",
    subtitle: "Build systems so delivery gets easier",
    emoji: "🤖",
    difficulty: "Hard",
    difficultyRank: 4,
    timeframe: "1 Week",
    color: "#6C63FF",
    locked: true,
    tasks: [
      {
        id: "8a",
        title: "Build a Reusable Onboarding Template",
        desc: "Create a standard onboarding doc/flow: welcome message, intake form, timeline, what you need from them. Copy-paste this for every client going forward.",
        statRewards: { systems: 4 },
        moneyReward: 0,
        emoji: "📋"
      },
      {
        id: "8b",
        title: "Build or Document 2 Core Service Workflows",
        desc: "Document your two most-delivered services step by step. Think: what do you build, how long, what tools, what output. This is your franchise playbook.",
        statRewards: { systems: 3, expertise: 2 },
        moneyReward: 0,
        emoji: "🗂️"
      }
    ]
  },
  {
    id: 9,
    title: "Referral Engine",
    subtitle: "Make your clients bring you clients",
    emoji: "🔁",
    difficulty: "Hard",
    difficultyRank: 4,
    timeframe: "1–2 Weeks",
    color: "#FF6B35",
    locked: true,
    tasks: [
      {
        id: "9a",
        title: "Ask Every Client for a Referral",
        desc: "Send a simple message: 'If you know anyone who'd benefit from what we built for you, I'd love an intro.' Do this for every past client. One message = potential thousands.",
        statRewards: { pipeline: 3, hustle: 1 },
        moneyReward: 0,
        emoji: "💬"
      },
      {
        id: "9b",
        title: "Land One Referral Client",
        desc: "Close a client who came from a referral. These are the warmest leads you'll ever get. Price confidently — referrals expect to pay.",
        statRewards: { pipeline: 3, authority: 2 },
        moneyReward: 1500,
        emoji: "🌟"
      }
    ]
  },
  {
    id: 10,
    title: "Monthly Recurring",
    subtitle: "Land your first retainer client",
    emoji: "📅",
    difficulty: "Hard",
    difficultyRank: 4,
    timeframe: "2 Weeks",
    color: "#FF4DA6",
    locked: true,
    tasks: [
      {
        id: "10a",
        title: "Package a Monthly Retainer Offer",
        desc: "Create a retainer package: what they get monthly, how many hours or deliverables, what it costs ($500–$1,500/mo). Write it up as a one-pager or Notion doc.",
        statRewards: { systems: 2, expertise: 2 },
        moneyReward: 0,
        emoji: "📦"
      },
      {
        id: "10b",
        title: "Close Your First Retainer",
        desc: "Get one client on a recurring monthly plan. Even $500/mo is $6K/year in predictable revenue. This is the business model that scales.",
        statRewards: { pipeline: 4, authority: 2 },
        moneyReward: 500,
        emoji: "🔒"
      }
    ]
  },
  {
    id: 11,
    title: "Content Machine",
    subtitle: "Post consistently and attract inbound",
    emoji: "📱",
    difficulty: "Hard",
    difficultyRank: 4,
    timeframe: "2 Weeks",
    color: "#00D9A0",
    locked: true,
    tasks: [
      {
        id: "11a",
        title: "Post 10 Pieces of Content Total",
        desc: "Across LinkedIn or any platform — 10 posts total in your journey so far. Tips, results, stories, hot takes on automation. Authority compounds. Start the streak.",
        statRewards: { authority: 4, expertise: 1 },
        moneyReward: 0,
        emoji: "✍️"
      },
      {
        id: "11b",
        title: "Get One Inbound Lead from Content",
        desc: "Someone reaches out because of something you posted — not because you messaged them first. This is the tipping point of authority.",
        statRewards: { authority: 4, pipeline: 2 },
        moneyReward: 0,
        emoji: "📥"
      }
    ]
  },
  {
    id: 12,
    title: "Case Study Drop",
    subtitle: "Turn a win into a marketing asset",
    emoji: "📰",
    difficulty: "Expert",
    difficultyRank: 5,
    timeframe: "1 Week",
    color: "#FFB700",
    locked: true,
    tasks: [
      {
        id: "12a",
        title: "Write a Full Case Study",
        desc: "Pick your best client result. Write: the problem, what you built, the results (numbers if possible), their quote. Post it on LinkedIn and add it to your website.",
        statRewards: { authority: 4, expertise: 2 },
        moneyReward: 0,
        emoji: "📖"
      },
      {
        id: "12b",
        title: "Close a Deal Using the Case Study",
        desc: "Send the case study to a cold or warm prospect as proof. Close them. Authority-driven sales feel completely different — they come to you pre-sold.",
        statRewards: { authority: 2, pipeline: 3 },
        moneyReward: 2000,
        emoji: "💼"
      }
    ]
  },
  {
    id: 13,
    title: "Price Hike",
    subtitle: "Raise your rates — you've earned it",
    emoji: "📈",
    difficulty: "Expert",
    difficultyRank: 5,
    timeframe: "1 Week",
    color: "#6C63FF",
    locked: true,
    tasks: [
      {
        id: "13a",
        title: "Raise Your Project Rate by 25%",
        desc: "Update your offer doc with your new pricing. You have proof, testimonials, and a track record. Charge more. The next client pays the new price.",
        statRewards: { expertise: 2, authority: 2 },
        moneyReward: 0,
        emoji: "💹"
      },
      {
        id: "13b",
        title: "Close a Client at the New Rate",
        desc: "Someone pays your raised price without negotiating it down. This is the moment you stop thinking of yourself as cheap and start thinking like a premium service.",
        statRewards: { pipeline: 2, authority: 3, hustle: 1 },
        moneyReward: 2500,
        emoji: "🤑"
      }
    ]
  },
  {
    id: 14,
    title: "Automation Arsenal",
    subtitle: "Automate your own business ops",
    emoji: "🤖",
    difficulty: "Expert",
    difficultyRank: 5,
    timeframe: "1 Week",
    color: "#FF6B35",
    locked: true,
    tasks: [
      {
        id: "14a",
        title: "Automate Your Lead Follow-Up",
        desc: "Build a simple automated follow-up sequence (email or CRM automation) so no lead ever goes cold because you forgot to reply. Eat your own cooking.",
        statRewards: { systems: 4, hustle: 1 },
        moneyReward: 0,
        emoji: "⚡"
      },
      {
        id: "14b",
        title: "Automate Your Client Reporting",
        desc: "Build a recurring report or dashboard for your retainer clients so they see results without you having to manually update them. Less time = more clients.",
        statRewards: { systems: 4, expertise: 1 },
        moneyReward: 0,
        emoji: "📊"
      }
    ]
  },
  {
    id: 15,
    title: "The $10K Month",
    subtitle: "Hit $10,000 in a single month",
    emoji: "🔥",
    difficulty: "Expert",
    difficultyRank: 5,
    timeframe: "Ongoing",
    color: "#FF4DA6",
    locked: true,
    tasks: [
      {
        id: "15a",
        title: "Stack Retainers to $3K+ MRR",
        desc: "Get enough retainer clients that you're making $3,000+ per month in predictable recurring revenue. This is your floor, not your ceiling.",
        statRewards: { pipeline: 4, systems: 2 },
        moneyReward: 3000,
        emoji: "🔁"
      },
      {
        id: "15b",
        title: "Close a $5K+ Single Project",
        desc: "Land a project priced at $5,000 or above. Full build, full scope, premium price. You have the portfolio. You have the proof. Go get it.",
        statRewards: { pipeline: 3, authority: 3, expertise: 2 },
        moneyReward: 5000,
        emoji: "🏆"
      },
      {
        id: "15c",
        title: "Hit $10,000 in Total Monthly Revenue",
        desc: "Between projects and retainers, your monthly revenue hits $10,000. Screenshot it. This is the moment everything you built paid off. BOSS LEVEL.",
        statRewards: { hustle: 3, pipeline: 3, authority: 3, systems: 2, expertise: 2 },
        moneyReward: 10000,
        emoji: "👑"
      }
    ]
  }
];
