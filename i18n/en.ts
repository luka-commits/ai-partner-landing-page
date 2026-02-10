import type { Translations } from "./de";

export const en: Translations = {
  meta: {
    title: "AI Partner | From Idea to Running System",
    description: "AI systems and automations for SMEs that want to grow.",
  },

  app: {
    skipToContent: "Skip to main content",
  },

  navbar: {
    brand: "Flouence",
    services: "Services",
    about: "About Us",
    faq: "FAQ",
    newsletterTooltip: "Get AI updates",
    newsletterAriaLabel: "Get AI updates",
    cta: "Discover Your AI Potential",
  },

  hero: {
    headline: "Scale Your Business",
    headlineHighlight: "with AI Systems",
    subheadline: "We find your bottlenecks, build AI systems that pay off, and bring your team up to speed.",
    dashboardLive: "Live AI Dashboard",
    brandName: "Flouence",
    brandSub: "AI Systems",
    metricRevenue: "Total Revenue",
    metricPipeline: "Pipeline Value",
    metricCalls: "Booked Calls",
    vsLastMonth: "vs. last month",
    systemsDeployed: "AI Systems deployed",
    weeklyGrowth: "Weekly Growth",
    cta: "Discover Your AI Potential",
  },

  socialProof: {
    label: "Works with your tools",
  },

  compare: {
    heading: "From Experiments to Results.",
    subheading: "The difference isn't in the tool. It's in the system behind it.",
    voiceBadge: "Live AI Assistant",
    voiceCta: "Why read when you can just ask?",
    voiceSubtext: "No more scrolling through endless pages. Just ask what you want to know \u2014 our AI assistant knows our services and gives you the answers that matter to you.",
    voiceFeatures: [
      "Which service fits me?",
      "What does it all cost?",
      "Where should I start?",
    ],
    voiceDisclaimer: "Free \u00b7 No signup \u00b7 Available now",
    problems: [
      {
        problem: "I don't know where to start with AI \u2013 everything feels overwhelming",
        intro: "We analyze your processes and find out where the biggest leverage lies.",
        bullets: [
          "Analysis of your existing workflows and pain points",
          "Identification of the top 3 areas with the highest AI potential",
          "Clear roadmap with concrete next steps",
        ],
        highlightValue: "Result:",
        highlightLabel: "You know exactly where to start.",
      },
      {
        problem: "My team wastes 15+ hours per week on copy-paste and manual data entry",
        intro: "We automate the repetitive tasks so your team can focus on what matters.",
        bullets: [
          "Automation of data transfers between systems",
          "Smart templates and auto-fill for recurring inputs",
          "Real-time synchronization instead of manual updates",
        ],
        highlightValue: "80\u201390%",
        highlightLabel: "time saved on repetitive tasks",
      },
      {
        problem: "We only respond to leads after 3\u20134 hours \u2013 50% are lost before we reply",
        intro: "Every lead gets an instant response \u2014 around the clock.",
        bullets: [
          "Automatic first response in under 60 seconds",
          "Smart qualification: Who's ready to buy, who needs nurturing?",
          "Seamless handoff to the right contact person",
        ],
        highlightValue: "24/7",
        highlightLabel: "active, even at night and on weekends",
      },
      {
        problem: "Our tools and processes are siloed \u2013 nothing talks to each other, everything is patchwork",
        intro: "We connect everything into one system that grows stronger with every project.",
        bullets: [
          "Central data connection between all your tools",
          "Automated data flows without manual back-and-forth",
          "Infrastructure that scales naturally with new tools",
        ],
        highlightValue: "1 System",
        highlightLabel: "instead of 10 isolated solutions",
      },
      {
        problem: "My team depends on me \u2013 nothing runs without me, I'm the bottleneck",
        intro: "Your team gets clear processes and smart support \u2014 you keep the overview.",
        bullets: [
          "Documented workflows that everyone on the team understands",
          "AI-powered decision support for recurring questions",
          "Automatic escalation only for real exceptions",
        ],
        highlightValue: "You",
        highlightLabel: "keep control without being the bottleneck",
      },
    ],
  },

  services: {
    heading: "From Understanding to Implementation",
    subheading: "Whether workshop, audit, or full implementation \u2013 we meet you where you are and take you to the next level.",
    workshop: {
      title: "AI Workshop",
      badge: "60 Min | Online | Live",
      headline: "Your team understands AI \u2013 and is ready to apply it.",
      sections: {
        whatYouLearn: "What you learn",
        format: "The format",
        result: "The result",
      },
      whatYouLearnItems: [
        { lead: "Why AI is now essential", desc: "Market context, competition, your opportunity (not hype, but business necessity)" },
        { lead: "Immediately actionable AI tools", desc: "Concrete use cases with 80-90% time savings (email drafts, meeting summaries, data analysis)" },
        { lead: "AI as company infrastructure", desc: "From individual tools to automated systems that run 24/7" },
        { lead: "Transform customer work", desc: "How AI reduces your response time from hours to seconds and boosts conversion by 400%" },
      ],
      formatItems: [
        { lead: "1 hour online", desc: "compact, hands-on, tailored to your industry" },
        { lead: "Live demos", desc: "no theory, but real workflows in action" },
        { lead: "Immediate actions", desc: "every participant leaves with at least one idea they can implement the next day" },
      ],
      resultItems: [
        { lead: "Your team understands AI and is ready to apply it" },
        { lead: "You see exactly where AI has the biggest leverage in your business" },
        { lead: "Natural bridge to the deeper AI Audit", desc: "if desired" },
      ],
      cta: "Request Workshop",
    },
    audit: {
      title: "AI Audit",
      badge: "2-8 Weeks | Intensive Support",
      headline: "Find the biggest opportunities \u2013 with hard numbers.",
      processIntro: "6-step process for complete diagnosis:",
      sections: {
        whatHappens: "What happens",
        whatYouGet: "What you get",
        result: "The result",
      },
      steps: [
        { title: "Diagnosis", desc: "Identifying your most expensive problem (not 'just automate something')" },
        { title: "Process Mapping", desc: "Understanding what really happens (not the idealized version)" },
        { title: "Atomic Breakdown", desc: "Every process is broken down into smallest parts and checked for AI suitability" },
        { title: "Prioritization", desc: "Impact matrix: Quick Wins (immediately actionable) vs. Big Swings (long-term)" },
        { title: "ROI Calculation", desc: "Hard numbers: What does inaction cost? What does the solution deliver?" },
        { title: "Roadmap", desc: "3-phase plan with clear timelines and priorities" },
      ],
      metrics: [
        { value: "20-40 pages", label: "AI Readiness Report" },
        { value: "Top 5-10", label: "Use cases prioritized" },
      ],
      deliverables: [
        { lead: "Concrete numbers", desc: 'e.g. "$1,040,000 lost revenue due to slow lead response"' },
        { lead: "Live presentation", desc: "60-90 min walkthrough with your team" },
      ],
      resultItems: [
        { lead: "You know exactly where AI has the biggest leverage for you" },
        { lead: "Clear roadmap for the next 6-12 months" },
        { lead: "Implementation is the logical next step", desc: "with clear numbers" },
      ],
      cta: "Request Audit",
    },
    implementation: {
      title: "Implementation",
      badge: "4-24 Weeks | Custom-built",
      headline: "Custom solutions for your business.",
      description: "Individually developed AI systems based on your AI Audit. Typical projects: AI agents, process automation, knowledge management, multi-agent systems, lead qualification, customer service AI.",
      sections: {
        process: "The process",
        coreConcept: "The AI Core Concept",
        advantage: "The advantage",
        deliverables: "What you get",
        postGoLive: "After Go-Live",
      },
      processItems: [
        { lead: "Iterative development", desc: "Sprint-based with weekly checkpoints and live demos" },
        { lead: "Quick wins first", desc: "2-3 quick successes in the first 4-8 weeks (showing immediate ROI)" },
        { lead: "Then big swings", desc: "More complex systems that bring fundamental transformation" },
      ],
      coreConceptIntro: "We don't build isolated tools, but a 5-layer infrastructure that becomes more powerful with every project:",
      layers: [
        { name: "Data Foundation", desc: "Single source of truth for all data" },
        { name: "Intelligence Engine", desc: "Your SOPs and business logic become executable code" },
        { name: "Orchestration", desc: "Agents work together as a system, not in isolation" },
        { name: "Integration Framework", desc: "Connections to your tools \u2013 built once, used many times" },
        { name: "Command Center", desc: "Dashboard for ROI tracking and system monitoring" },
      ],
      advantageItems: [
        { lead: "Every project gets cheaper", desc: "Integrations already exist" },
        { lead: "Every project gets more powerful", desc: "Builds on existing layers" },
        { lead: "You're not dependent on individual tools", desc: "You own the infrastructure" },
      ],
      phases: [
        { duration: "4-8 wk", label: "Phase 1: Quick Wins", desc: "2-3 quick ROI proofs" },
        { duration: "8-24 wk", label: "Phase 2: Big Swings", desc: "Fundamental process transformation" },
        { duration: "Ongoing", label: "Phase 3: Scaling", desc: "Infrastructure expansion" },
      ],
      timeline: "Timeline: 4-24 weeks (depending on scope)",
      retainer: {
        title: "Monthly Retainer (recommended)",
        items: [
          "Maintenance, monitoring, optimization",
          "New features and enhancements based on learnings",
          "Ensuring the system continuously improves",
        ],
        price: "$1,000 \u2013 $5,000",
        priceSuffix: "/month (depending on system complexity)",
      },
      cta: "Discuss Project",
    },
  },

  about: {
    eyebrow: "Who's behind this?",
    name: "Luka Knieling",
    quote: '"We don\'t build concepts. We build systems. The difference between success and failure with AI isn\'t the tool \u2013 it\'s the implementation into your team\'s real daily workflow."',
    bio: "I help SMEs cut through the AI noise and focus on the 2-3 levers that save real time and real money. My approach is pragmatic, honest, and always aimed at making your team independent of me.",
    portraitAlt: "Portrait of Luka Knieling, founder of AI Partner",
    stats: {
      jobSuccess: "Job Success",
      topRated: "Top Rated",
      topRatedPlatform: "on Upwork",
      projects: "Projects completed",
    },
  },

  calendar: {
    heading: "Find your biggest AI lever. In 15 minutes.",
    subheading: "Together we identify the AI opportunity with the highest ROI and the concrete next step.",
    footer: "15 Minutes | Free | No Commitment",
    loading: "Loading calendar...",
  },

  newsletter: {
    badge: "AI Updates",
    headingPart1: "Not ready yet?",
    headingPart2: "Stay tuned.",
    description: "Get hands-on AI insights, automation tips, and case studies straight to your inbox. No spam, just substance.",
    placeholder: "your@email.com",
    submit: "Subscribe",
    success: "Thanks! We'll note that \u2014 the newsletter starts soon.",
    disclaimer: "No spam. Unsubscribe anytime. Max. 2 emails per month.",
  },

  faq: {
    heading: "Frequently Asked Questions",
    previewAlt: "Preview image for selected question",
    items: [
      {
        title: "Is my company the right size for this?",
        description: "Ideal are teams between 20-100 employees. Large enough for real processes, but agile enough to adopt AI quickly. Under 20? Talk to us, sometimes it still fits. Over 100? You probably need an internal AI department.",
        imageAlt: "Illustration for question: Is my company the right size for this?",
      },
      {
        title: "In what order do we do this?",
        description: "Workshop \u2192 Audit \u2192 Implementation is the recommended path. But not mandatory. Already know where the leverage is? Jump straight to the Audit. Want to build right away? Straight to Implementation. Unsure? Workshop first.",
        imageAlt: "Illustration for question: In what order do we do this?",
      },
      {
        title: "What does it cost?",
        description: "Workshop: from \u20AC950 | Audit: fixed price based on scope | Implementation: project-dependent. In the free strategy call, we clarify where you stand and what makes sense. No surprises, full transparency.",
        imageAlt: "Illustration for question: What does it cost?",
      },
      {
        title: "How quickly will I see results?",
        description: "First quick wins (e.g. leads answered 40% faster) often within 4-6 weeks. A complete implementation of complex systems takes about 3-6 months.",
        imageAlt: "Illustration for question: How quickly will I see results?",
      },
      {
        title: "Do I need technical knowledge?",
        description: "No. We handle the entire technical implementation. You don't need coding skills or AI expertise. All we need is an understanding of your processes — and we work that out together.",
        imageAlt: "Illustration for question: Do I need technical knowledge?",
      },
      {
        title: "What happens after implementation?",
        description: "You receive complete documentation and training. We optionally offer ongoing support and optimization. The systems belong to you — no vendor lock-in, no hidden dependencies.",
        imageAlt: "Illustration for question: What happens after implementation?",
      },
      {
        title: "Which tools and platforms do you use?",
        description: "We work platform-independently and choose the tools that best fit your stack. From OpenAI to n8n to custom solutions — we use whatever makes the most sense for your business.",
        imageAlt: "Illustration for question: Which tools and platforms do you use?",
      },
    ],
  },

  footer: {
    brand: "FLOUENCE",
    description: "We build AI systems and automations for SMEs that want to grow. Without having to double their team.",
    servicesHeading: "Services",
    serviceItems: ["AI Workshop", "AI Audit", "Implementation"],
    legalHeading: "Legal",
    imprint: "Imprint",
    privacy: "Privacy Policy",
    copyright: "Flouence SME Consulting. All rights reserved.",
  },

  voiceInput: {
    listening: "Listening...",
    clickToSpeak: "Click to speak",
    connecting: "Connecting to AI assistant...",
  },

  legal: {
    backToHome: "Back to homepage",
    imprint: {
      title: "Legal Notice",
      sections: [
        {
          heading: "Information pursuant to § 5 DDG",
          content: "Flouence SME Consulting\nLuka Knieling\nWiesmahdstraße 4b\n82131 Gauting\nGermany",
        },
        {
          heading: "Contact",
          content: "Email: luka@flouence.com\nPhone: +49 176 83300657",
        },
        {
          heading: "Responsible for content pursuant to § 18 para. 2 MStV",
          content: "Luka Knieling\nWiesmahdstraße 4b\n82131 Gauting",
        },
        {
          heading: "EU Dispute Resolution",
          content: "The European Commission provides a platform for online dispute resolution (ODR): https://ec.europa.eu/consumers/odr/\nYou can find our email address in the legal notice above.",
        },
        {
          heading: "Consumer Dispute Resolution",
          content: "We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.",
        },
        {
          heading: "Liability for Content",
          content: "As a service provider, we are responsible for our own content on these pages in accordance with § 7 para. 1 DDG under general law. According to §§ 8 to 10 DDG, however, we are not obligated as a service provider to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.\n\nObligations to remove or block the use of information under general law remain unaffected. However, liability in this regard is only possible from the point in time at which a concrete infringement of the law becomes known. If we become aware of any such infringements, we will remove the relevant content immediately.",
        },
        {
          heading: "Liability for Links",
          content: "Our website contains links to external third-party websites over whose content we have no influence. Therefore, we cannot accept any liability for this third-party content. The respective provider or operator of the linked pages is always responsible for the content of the linked pages.\n\nThe linked pages were checked for possible legal violations at the time of linking. Illegal content was not recognizable at the time of linking. Permanent monitoring of the content of the linked pages is not reasonable without concrete evidence of a violation of the law. If we become aware of any infringements, we will remove such links immediately.",
        },
        {
          heading: "Copyright",
          content: "The content and works created by the site operators on these pages are subject to German copyright law. Duplication, processing, distribution, and any kind of exploitation beyond the limits of copyright law require the written consent of the respective author or creator.\n\nDownloads and copies of this site are only permitted for private, non-commercial use. Insofar as the content on this site was not created by the operator, the copyrights of third parties are respected. Should you nevertheless become aware of a copyright infringement, please inform us accordingly. If we become aware of any infringements, we will remove such content immediately.",
        },
      ],
    },
    privacy: {
      title: "Privacy Policy",
      sections: [
        {
          heading: "1. Data Controller",
          content: "Flouence SME Consulting\nLuka Knieling\nWiesmahdstraße 4b\n82131 Gauting\nGermany\n\nEmail: luka@flouence.com\nPhone: +49 176 83300657",
        },
        {
          heading: "2. Overview of Data Processing",
          content: "We only process personal data to the extent necessary to provide a functional website and our content and services. Personal data is generally only processed with the user's consent. An exception applies in cases where prior consent cannot be obtained for practical reasons and the processing of the data is permitted by law.",
        },
        {
          heading: "3. Hosting",
          content: "This website is hosted by Vercel Inc. (340 S Lemon Ave #4133, Walnut, CA 91789, USA). When you visit our website, the server automatically collects your IP address, browser type, operating system, referrer URL, time of access, and the page accessed.\n\nProcessing is based on Art. 6 para. 1 lit. f GDPR (legitimate interest in reliable website operation). For more information, see Vercel's privacy policy: https://vercel.com/legal/privacy-policy",
        },
        {
          heading: "4. SSL/TLS Encryption",
          content: "This site uses SSL or TLS encryption for security reasons and to protect the transmission of confidential content. You can recognize an encrypted connection by the browser's address bar changing from \"http://\" to \"https://\" and by the lock icon in your browser bar.",
        },
        {
          heading: "5. General Data Protection Information",
          content: "The legal basis for processing personal data is, where we obtain consent, Art. 6 para. 1 lit. a GDPR. For processing necessary for the performance of a contract, Art. 6 para. 1 lit. b GDPR serves as the legal basis. For processing necessary for the purposes of legitimate interests, Art. 6 para. 1 lit. f GDPR is the legal basis.\n\nPersonal data is deleted or blocked as soon as the purpose of storage ceases to apply and no statutory retention periods apply.",
        },
        {
          heading: "6. Cookies",
          content: "Our website uses technically necessary cookies to ensure the functionality of the website (e.g., language settings). These cookies are stored on the basis of Art. 6 para. 1 lit. f GDPR, as we have a legitimate interest in the technically error-free provision of our website.\n\nYou can configure your browser to inform you about the setting of cookies and only allow cookies on a case-by-case basis. Disabling cookies may limit the functionality of this website.",
        },
        {
          heading: "7. Contact via Email",
          content: "If you contact us by email, the data you provide (e.g., name, email address, content of the inquiry) will be stored by us to process your request. Processing is based on Art. 6 para. 1 lit. b GDPR (pre-contractual measures) or Art. 6 para. 1 lit. f GDPR (legitimate interest in processing inquiries).\n\nThe data will be deleted once it is no longer necessary for achieving the purpose.",
        },
        {
          heading: "8. Newsletter",
          content: "If you subscribe to our newsletter, your email address will be stored for sending the newsletter. Processing is based on your consent pursuant to Art. 6 para. 1 lit. a GDPR.\n\nYou can unsubscribe from the newsletter at any time. You will find an unsubscribe link in every newsletter. After unsubscribing, your email address will be immediately deleted from the distribution list.",
        },
        {
          heading: "9. Embedded Content (Cal.com)",
          content: "On our website, we use Cal.com for appointment scheduling. When using the calendar widget, data is transmitted to Cal.com Inc. This includes the booking data you enter (name, email, selected appointment).\n\nThe integration is based on Art. 6 para. 1 lit. b GDPR (contract initiation) and Art. 6 para. 1 lit. f GDPR (legitimate interest in efficient scheduling). For more information, see Cal.com's privacy policy: https://cal.com/privacy",
        },
        {
          heading: "10. Rights of Data Subjects",
          content: "You have the following rights with regard to your personal data:\n\n- Right of access (Art. 15 GDPR)\n- Right to rectification (Art. 16 GDPR)\n- Right to erasure (Art. 17 GDPR)\n- Right to restriction of processing (Art. 18 GDPR)\n- Right to data portability (Art. 20 GDPR)\n- Right to object to processing (Art. 21 GDPR)\n\nYou also have the right to lodge a complaint with a data protection supervisory authority about the processing of your personal data by us.",
        },
        {
          heading: "11. Changes to This Privacy Policy",
          content: "We reserve the right to update this privacy policy to ensure it always complies with current legal requirements or to implement changes to our services in the privacy policy. The new privacy policy will apply to your next visit.\n\nLast updated: February 2025",
        },
      ],
    },
  },
} as const;
