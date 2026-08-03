export const problemCards = [
  {
    icon: "🏎",
    title: "Racing Teams",
    tone: "racing",
    points: [
      "Weeks spent finding sponsors",
      "Low response rates",
      "Generic proposals",
      "Poor visibility",
    ],
  },
  {
    icon: "💼",
    title: "Sponsors",
    tone: "electric",
    points: [
      "Thousands of teams",
      "Difficult discovery",
      "No prediction of ROI",
      "Weak brand alignment",
    ],
  },
  {
    icon: "🏁",
    title: "Organizers",
    tone: "silver",
    points: ["Manual matchmaking", "Time-consuming negotiations", "Limited analytics"],
  },
] as const;

export const visionSignals = [
  "Brand Values",
  "Audience",
  "Budget",
  "Geography",
  "Past Success",
  "Motorsport Category",
] as const;

export type AiTool = {
  name: string;
  purpose: string[];
  output?: string;
};

export const aiStrategy: {
  step: string;
  flag: string;
  title: string;
  goal: string;
  groups: { label?: string; tools: AiTool[] }[];
  human: string;
}[] = [
  {
    step: "01",
    flag: "🏁",
    title: "Introduction",
    goal: "Building the foundation of the product identity.",
    groups: [
      {
        tools: [
          {
            name: "Perplexity AI",
            purpose: ["Finding the product name"],
            output: "Generated multiple naming ideas and refined SponsorSphere.",
          },
          {
            name: "ColorMagic",
            purpose: ["Brand colour exploration"],
            output: "Generated racing-inspired colour palettes.",
          },
          {
            name: "Logo.com",
            purpose: ["Logo exploration"],
            output: "Initial logo concepts and visual directions.",
          },
          {
            name: "UBrand",
            purpose: ["Brand guidelines"],
            output: "Typography, colour consistency and branding principles.",
          },
        ],
      },
    ],
    human:
      "Validated the final product name, selected the visual identity, refined branding, and ensured consistency across the experience.",
  },
  {
    step: "02",
    flag: "🚩",
    title: "Problem Statement",
    goal: "Understanding the business problem before designing solutions.",
    groups: [
      {
        tools: [
          {
            name: "ChatGPT",
            purpose: [
              "Identify business problem",
              "Understand project context",
              "Define business goals",
              "Define target audience",
            ],
            output: "Structured problem statement and project objectives.",
          },
        ],
      },
    ],
    human:
      "Validated assumptions, refined scope, and aligned the problem with business needs and user expectations.",
  },
  {
    step: "03",
    flag: "🔍",
    title: "Research",
    goal: "Listening before deciding — user reality and market reality.",
    groups: [
      {
        label: "User Research",
        tools: [
          {
            name: "ChatGPT",
            purpose: ["Research objectives", "Qualitative insights", "Value proposition"],
            output: "Research framework and synthesized findings.",
          },
          {
            name: "FounderPal",
            purpose: ["Persona creation"],
            output: "Initial user personas based on research inputs.",
          },
        ],
      },
      {
        label: "Market Research",
        tools: [
          {
            name: "Wordkraft",
            purpose: ["Research objectives"],
            output: "Structured market research documentation.",
          },
          {
            name: "Instant Personas",
            purpose: ["Competitive analysis — SWOT analysis"],
            output: "Generated competitive strengths, weaknesses, opportunities and threats.",
          },
          {
            name: "Miro AI",
            purpose: ["Affinity mapping"],
            output: "Grouped research insights and patterns.",
          },
          {
            name: "ChatGPT",
            purpose: ["Key findings"],
            output: "Summarized research observations and opportunities.",
          },
        ],
      },
    ],
    human:
      "Validated all findings, identified meaningful patterns, prioritized opportunities, and translated research into actionable UX insights.",
  },
  {
    step: "04",
    flag: "🧭",
    title: "Define",
    goal: "Structuring the product experience.",
    groups: [
      {
        tools: [
          { name: "Whimsical", purpose: ["User flow"] },
          { name: "Visily", purpose: ["Information architecture"] },
          { name: "Miro", purpose: ["Card sorting"] },
          { name: "ChatGPT", purpose: ["Journey mapping"] },
        ],
      },
    ],
    human:
      "Reviewed information architecture, simplified navigation, optimized user flows, and ensured task completion aligned with user goals.",
  },
  {
    step: "05",
    flag: "💡",
    title: "Ideation & Planning",
    goal: "Expanding the solution space before narrowing it.",
    groups: [
      {
        tools: [
          {
            name: "Ideamap AI",
            purpose: ["Brainstorming", "Feature ideas", "Solution exploration", "Mind mapping"],
            output: "Multiple solution concepts and feature prioritization.",
          },
        ],
      },
    ],
    human:
      "Selected the strongest concepts, prioritized features based on business value and user impact, and refined the product roadmap.",
  },
  {
    step: "06",
    flag: "🏎",
    title: "Design Process",
    goal: "Turning structure into a product people can feel.",
    groups: [
      {
        tools: [
          { name: "Uizard", purpose: ["Wireframing"], output: "Rapid low-fidelity wireframes." },
          {
            name: "Motiff",
            purpose: ["Visual design"],
            output: "Early UI explorations and interface styling.",
          },
        ],
      },
    ],
    human:
      "Designed the final interfaces, interaction patterns, accessibility improvements, visual hierarchy, and prototype validation.",
  },
];

export const aiAccelerated = [
  "Research synthesis",
  "Naming",
  "Branding",
  "Personas",
  "Brainstorming",
  "Information Architecture",
  "Journey Mapping",
  "Wireframing",
  "Visual exploration",
  "Documentation",
] as const;

export const humanDesigned = [
  "Product Strategy",
  "UX Decisions",
  "Prioritization",
  "User Empathy",
  "Interaction Design",
  "Visual Design",
  "Accessibility",
  "Usability",
  "Product Thinking",
  "Final Validation",
] as const;

export const competitiveFindings = [
  "Most platforms focus on managing sponsorships after partnerships are formed rather than helping users discover the right opportunities.",
  "AI is primarily used for analytics and reporting, with very limited support for intelligent sponsor–team matching.",
  "Existing workflows rely heavily on manual searching, filtering, and relationship management.",
  "Collaboration is often fragmented across multiple tools, creating unnecessary context switching.",
  "None of the evaluated solutions provide a motorsport-first sponsorship experience powered by AI.",
] as const;

export const designOpportunity = [
  "Intelligent sponsor discovery",
  "AI-powered recommendations",
  "Predictive partnership insights",
  "Centralized collaboration",
  "End-to-end sponsorship lifecycle management",
  "Motorsport-focused workflows",
] as const;


export const telemetry = [
  {
    label: "Competitive Analysis",
    value: "9 platforms",
    note: "Benchmarked sponsorship marketplaces, sports CRMs and ad-tech matching tools.",
    bar: 82,
  },
  {
    label: "Secondary Research",
    value: "40+ sources",
    note: "Industry reports, motorsport commercial studies, sponsorship ROI literature.",
    bar: 74,
  },
  {
    label: "Pain Points",
    value: "60 → 7 themes",
    note: "Raw frustrations clustered into seven recurring failure patterns.",
    bar: 91,
  },
  {
    label: "User Needs",
    value: "3 personas",
    note: "Team manager, brand sponsorship lead, event organiser.",
    bar: 68,
  },
  {
    label: "Market Trends",
    value: "Data-led deals",
    note: "Sponsorship decisions shifting from relationships to measurable audience fit.",
    bar: 77,
  },
  {
    label: "Stakeholder Insights",
    value: "Trust > volume",
    note: "Decision-makers wanted fewer, better-explained opportunities.",
    bar: 88,
  },
] as const;

export const decisions = [
  {
    id: "01",
    title: "AI Match Dashboard",
    hook: "Search-first → recommendation-first",
    problem:
      "Racing teams spent significant time manually searching for sponsors, often sending generic proposals with little understanding of sponsor expectations. Sponsors had no efficient way to discover teams aligned with their brand objectives.",
    decision:
      "I made the AI Match Dashboard the first experience users see after logging in. Instead of asking users to search manually, the platform immediately presents personalised sponsorship recommendations based on business goals, audience fit, motorsport category, budget and historical partnerships.",
    reasoning:
      "Research showed users valued reducing effort more than having more search options. Rather than overwhelming users with filters and long lists, I shifted the experience from search-first to recommendation-first, letting AI surface the most relevant opportunities immediately.",
    impact: [
      "Reduced cognitive load",
      "Faster sponsor discovery",
      "Personalised recommendations",
      "Quicker decision-making",
      "Improved first-time user experience",
    ],
  },
  {
    id: "02",
    title: "Sponsor Profile Experience",
    hook: "A profile that behaves like a decision tool",
    problem:
      "Sponsors needed more than a logo and company description to evaluate potential partnerships. They wanted confidence that the collaboration would deliver value.",
    decision:
      "Each sponsor profile was designed as a decision-support dashboard rather than a simple company page — company details, audience demographics, sponsorship history, preferred racing categories, investment range and AI-generated compatibility insights in a single view.",
    reasoning:
      "Users shouldn't have to navigate across multiple screens to gather essential information. Consolidating critical data into one structured layout makes evaluation faster and better informed.",
    impact: [
      "Reduced navigation effort",
      "Increased information clarity",
      "Better sponsorship evaluation",
      "Higher confidence during decision-making",
    ],
  },
  {
    id: "03",
    title: "AI Recommendation Cards",
    hook: "Explainable AI, not a black box",
    problem:
      "Users often questioned why certain sponsorship opportunities appeared in their results. Without transparency, recommendations could feel random or unreliable.",
    decision:
      "Each recommendation card includes an AI confidence score with contextual explanations highlighting the strongest matching factors: shared audience interests, geographic alignment, previous sponsorship success, budget compatibility and motorsport category relevance.",
    reasoning:
      "AI should explain its reasoning rather than operate as a black box. Clear explanations help users understand the recommendation and build trust in the platform.",
    impact: [
      "Increased trust in AI",
      "Greater transparency",
      "Easier comparison of opportunities",
      "More confident user decisions",
    ],
  },
  {
    id: "04",
    title: "Collaboration Workspace",
    hook: "One place instead of five tabs",
    problem:
      "Most sponsorship discussions happen across emails, spreadsheets and messaging platforms, leading to fragmented communication and lost context.",
    decision:
      "I designed a centralised collaboration workspace where teams and sponsors communicate, share documents, track discussions and manage partnership progress in one place.",
    reasoning:
      "Reducing context switching improves productivity. Keeping conversations, files and sponsorship details together creates smoother collaboration and less friction.",
    impact: [
      "Simplified communication",
      "Reduced context switching",
      "Better collaboration",
      "Improved workflow efficiency",
    ],
  },
  {
    id: "05",
    title: "Analytics Dashboard",
    hook: "Insights over raw data",
    problem:
      "Users struggled to determine whether sponsorship efforts were delivering meaningful results. Without clear metrics it was difficult to justify investment or optimise future partnerships.",
    decision:
      "The analytics dashboard prioritises actionable insights over raw data. Engagement, audience reach, ROI indicators, partnership performance and AI-generated recommendations are surfaced prominently with simple visualisations.",
    reasoning:
      "Decision-makers need insights, not dashboards filled with numbers. The design highlights what needs attention first and lets users explore deeper metrics only when needed.",
    impact: [
      "Faster business decisions",
      "Improved visibility into performance",
      "Easier ROI evaluation",
      "More strategic planning",
    ],
  },
  {
    id: "06",
    title: "AI Throughout the UX Process",
    hook: "AI as co-pilot, never the driver",
    problem:
      "Traditional UX workflows involve repetitive manual tasks — drafting personas, organising research, writing UX copy, creating multiple design explorations. Essential, but time-intensive.",
    decision:
      "Rather than using AI as a replacement for design, I integrated it selectively across the UX process to accelerate repetitive tasks while keeping strategic decisions human-led. AI supported research synthesis, persona generation, ideation, UX writing and early design exploration.",
    reasoning:
      "The value of AI lies in accelerating execution, not replacing critical thinking. Automating repetitive activities freed time for solving user problems, validating ideas and refining the experience.",
    impact: [
      "Faster research synthesis",
      "Quicker design iterations",
      "More exploration in less time",
      "Consistent UX writing",
      "Human-centered decisions throughout",
    ],
  },
] as const;

export const screens = [
  {
    name: "AI Match Dashboard",
    purpose:
      "The intelligent starting point for discovering sponsorship opportunities tailored to team goals, audience fit, and partnership potential.",
    focus: "Reduce manual searching through AI-powered recommendations.",
  },
  {
    name: "Smart Recommendations",
    purpose:
      "Rank sponsorship opportunities based on compatibility, confidence, audience alignment, and business objectives.",
    focus: "Increase trust through explainable AI recommendations.",
  },
  {
    name: "Sponsor Profiles",
    purpose:
      "Present complete sponsor information, including brand values, investment range, audience demographics, and partnership history.",
    focus: "Enable informed evaluation without navigating across multiple screens.",
  },
  {
    name: "Team Analytics",
    purpose:
      "Provide performance metrics, audience insights, and sponsorship history to help sponsors evaluate racing teams.",
    focus: "Support evidence-based sponsorship decisions.",
  },
  {
    name: "Communication Workspace",
    purpose:
      "Centralize discussions, proposal reviews, approvals, and shared documents throughout the sponsorship lifecycle.",
    focus: "Reduce context switching and streamline collaboration.",
  },
  {
    name: "AI Insights Panel",
    purpose:
      "Deliver predictive insights, opportunity forecasts, and strategic recommendations powered by AI.",
    focus: "Help users make proactive sponsorship decisions with confidence.",
  },
] as const;

export const strategy = [
  {
    flag: "🏁",
    week: "Week 1",
    title: "Understanding the Track",
    phase: "Introduction",
    items: ["Problem Statement", "Project Goals", "Business Objectives"],
    deliverables: ["Project Brief", "Problem Statement", "Goals"],
  },
  {
    flag: "🏎",
    week: "Weeks 2–3",
    title: "Reading the Track",
    phase: "Research",
    items: [
      "Secondary Research",
      "Competitive Analysis",
      "User Research",
      "Stakeholder Interviews",
      "Pain Point Analysis",
    ],
    deliverables: ["Research Report", "Competitive Benchmark", "User Needs"],
  },
  {
    flag: "🏁",
    week: "Week 3",
    title: "Choosing the Racing Line",
    phase: "Define & Ideation",
    items: [
      "Affinity Mapping",
      "User Personas",
      "Journey Maps",
      "Feature Prioritization",
      "Information Architecture",
    ],
    deliverables: ["Personas", "Journey Maps", "IA", "Feature Matrix"],
  },
  {
    flag: "🏆",
    week: "Weeks 4–5",
    title: "Building the Machine",
    phase: "Design Process",
    items: [
      "Wireframes",
      "User Flows",
      "High Fidelity UI",
      "Design System",
      "Prototype",
      "AI-assisted Design",
    ],
    deliverables: ["Wireframes", "UI Screens", "Prototype"],
  },
] as const;


export const gauges = [
  { label: "Time Saved", read: "High", value: 88 },
  { label: "Efficiency", read: "Optimized", value: 82 },
  { label: "Productivity", read: "Accelerated", value: 90 },
  { label: "Innovation", read: "Improved", value: 78 },
  { label: "Design Velocity", read: "Human-led", value: 85 },
] as const;

export const buildStages = [
  { label: "Information Architecture", note: "Mapping every entity — teams, sponsors, events, deals — before a single pixel." },
  { label: "User Flow", note: "Login → recommendation → evaluation → conversation → agreement, in the fewest steps." },
  { label: "Low Fidelity", note: "Three dashboard structures sketched, tested against the recommendation-first bet." },
  { label: "Mid Fidelity", note: "Density, hierarchy and scan patterns resolved before visual polish." },
  { label: "High Fidelity", note: "Carbon-dark UI with electric accents; contrast validated for accessibility." },
  { label: "Design System", note: "Tokens, cards, data viz and AI-explanation patterns as reusable components." },
  { label: "Prototype", note: "Clickable end-to-end journey used for validation and stakeholder walkthroughs." },
] as const;
