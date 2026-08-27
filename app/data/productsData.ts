export interface PricingTier {
  name: string;
  badge?: string;
  isPopular?: boolean;
  description: string;
  seatsInfo: string;
  standalonePriceMonthly: number;
  standalonePriceAnnual?: number;
  standalonePriceUnit?: string;
  crmDiscountMonthly: number;
  crmDiscountAnnual?: number;
  crmDiscountUnit?: string;
  extraSeatPriceStandalone?: number;
  extraSeatPriceCrm?: number;
  isSeatPerUser?: boolean;
  features: string[];
  ctaText?: string;
}

export interface CompetitorComparisonRow {
  feature: string;
  competitors: { name: string; value: string }[];
  axaStandalone: string;
  axaCrmDiscount: string;
}

export interface ProductAddon {
  name: string;
  price: string;
  description: string;
  icon?: string;
}

export interface ProductData {
  id: string;
  tag: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  heroHeadline: string;
  heroPitch: string;
  description: string;
  image: string;
  alt: string;
  valueProposition: string[];
  pricingModelType: "crm-dual" | "crm-tier" | "standard";
  crmDiscountPercentage: number;
  tiers: PricingTier[];
  competitorComparison?: {
    title: string;
    description: string;
    competitorNames: string[];
    rows: CompetitorComparisonRow[];
  };
  addons?: ProductAddon[];
  technicalDirectives: {
    title: string;
    items: { heading: string; detail: string }[];
  };
  faqs: { question: string; answer: string }[];
}

export const PRODUCTS_DATA: Record<string, ProductData> = {
  "axa-pass": {
    id: "axa-pass",
    tag: "/CREDENTIAL SECURITY",
    title: "AXA PASS",
    shortTitle: "Axa Pass",
    subtitle: "Enterprise Zero-Knowledge Password & Vault Management",
    heroHeadline: "Market-Killer Credential Security",
    heroPitch:
      "Enterprise-grade zero-knowledge encryption that undercuts 1Password, Bitwarden, and Dashlane directly — with an automatic 50% discount for AXA CRM subscribers.",
    description:
      "Enterprise-grade security for credentials. Provides encrypted, role-based password sharing, secure note storage, and automated credential rotation, keeping company data safe while granting controlled team access.",
    image: "/axapass.svg",
    alt: "Axa Pass Vault Preview",
    valueProposition: [
      "Zero-Knowledge Client-Side AES-256 & Argon2id Encryption",
      "Integrated TOTP Authenticator Generator (No paywalls)",
      "1-Click Shared Credentials Direct to Sales & Ops CRM",
      "Cryptographic Audit Logs & Emergency Access Recovery",
    ],
    pricingModelType: "crm-dual",
    crmDiscountPercentage: 50,
    tiers: [
      {
        name: "Personal / Starter",
        badge: "STARTER",
        description: "For individuals, founders and micro teams needing rock-solid security.",
        seatsInfo: "Includes 2 Seats ($3 / seat / mo standalone)",
        standalonePriceMonthly: 6,
        standalonePriceAnnual: 5,
        crmDiscountMonthly: 3,
        crmDiscountAnnual: 2.5,
        features: [
          "Unlimited Encrypted Vault Storage (AES-256)",
          "Cross-Device Auto-Sync (Desktop, Web, Mobile)",
          "Integrated TOTP Authenticator Generator",
          "Secure Emergency Access Recovery",
          "Zero-Knowledge Client Encryption",
          "Biometric / Passkey Login Support",
        ],
        ctaText: "Get Starter",
      },
      {
        name: "Business Team",
        badge: "MOST POPULAR",
        isPopular: true,
        description: "Built for scaling teams needing granular role permissions and CRM credentials.",
        seatsInfo: "Up to 10 Seats ($3 / seat / mo standalone)",
        standalonePriceMonthly: 30,
        standalonePriceAnnual: 25,
        crmDiscountMonthly: 15,
        crmDiscountAnnual: 12.5,
        features: [
          "Everything in Personal / Starter, plus:",
          "Shared Team Vaults & Granular Access Controls",
          "Master Admin Key & Cryptographic Audit Logs",
          "One-Click Shared Credentials (CRM Integration)",
          "Priority Support & Fast Response Time",
          "Role-Based Permission Matrix (Admin, Member, Read-Only)",
        ],
        ctaText: "Start Business Team",
      },
      {
        name: "Enterprise",
        badge: "SCALE",
        description: "For organizations requiring custom SSO, compliance audit logs and dedicated SLA.",
        seatsInfo: "10+ Seats (Priced per seat / month)",
        standalonePriceMonthly: 3.0,
        standalonePriceAnnual: 2.5,
        standalonePriceUnit: "/ seat / mo",
        crmDiscountMonthly: 1.5,
        crmDiscountAnnual: 1.25,
        crmDiscountUnit: "/ seat / mo",
        features: [
          "Everything in Business Team, plus:",
          "Custom SSO / SAML 2.0 & Okta Integration",
          "Self-Hosted / Private Vault Option",
          "Dedicated Security Account Manager",
          "Custom SLA & Compliance Export Logs",
          "Continuous Vulnerability & Penetration Reports",
        ],
        ctaText: "Deploy Enterprise",
      },
    ],
    competitorComparison: {
      title: "AXAPASS Standalone vs Competitors vs CRM Bundle",
      description:
        "Why pay $8.99/seat when you can get superior cryptographic vaults for $3/seat standalone or $1.50/seat with AXA CRM?",
      competitorNames: ["1Password", "Bitwarden", "Dashlane"],
      rows: [
        {
          feature: "Price per Seat (Monthly)",
          competitors: [
            { name: "1Password", value: "$8.99 / seat" },
            { name: "Bitwarden", value: "$4.00 / seat" },
            { name: "Dashlane", value: "$8.00 / seat" },
          ],
          axaStandalone: "$3.00 / seat",
          axaCrmDiscount: "$1.50 / seat (50% OFF)",
        },
        {
          feature: "10-User Team Monthly Cost",
          competitors: [
            { name: "1Password", value: "$89.90 / mo" },
            { name: "Bitwarden", value: "$40.00 / mo" },
            { name: "Dashlane", value: "$80.00 / mo" },
          ],
          axaStandalone: "$30.00 / mo",
          axaCrmDiscount: "$15.00 / mo (50% OFF)",
        },
        {
          feature: "Built-in TOTP Authenticator",
          competitors: [
            { name: "1Password", value: "Included" },
            { name: "Bitwarden", value: "Locked on Premium" },
            { name: "Dashlane", value: "Included" },
          ],
          axaStandalone: "Included in All Plans",
          axaCrmDiscount: "Included in All Plans",
        },
        {
          feature: "Native CRM Credential Sharing",
          competitors: [
            { name: "1Password", value: "No" },
            { name: "Bitwarden", value: "No" },
            { name: "Dashlane", value: "No" },
          ],
          axaStandalone: "1-Click Direct Sync",
          axaCrmDiscount: "1-Click Direct Sync",
        },
        {
          feature: "Self-Hosted / Private Vault Option",
          competitors: [
            { name: "1Password", value: "No" },
            { name: "Bitwarden", value: "Complex Setup" },
            { name: "Dashlane", value: "No" },
          ],
          axaStandalone: "Available on Enterprise",
          axaCrmDiscount: "Available on Enterprise",
        },
      ],
    },
    technicalDirectives: {
      title: "Technical Directives & Architectural Economics",
      items: [
        {
          heading: "Dynamic Discount Rule (Billing API)",
          detail:
            "When rendering Axapass checkout or pricing portal, checks crm_subscription_status === 'active'. Applies CRM_BUNDLE_50OFF coupon automatically, displaying standard pricing crossed out with live discount updates.",
        },
        {
          heading: "Churn Protection Rule (Auto-Adjustment)",
          detail:
            "If a client cancels their main CRM subscription, Axapass accounts remain active and automatically transition from the discounted tier ($15/mo) back to the standard rate ($30/mo) on the next billing cycle.",
        },
        {
          heading: "Zero-Compute Margin Protection",
          detail:
            "Storing encrypted cryptographic hashes and strings in PostgreSQL consumes negligible server resources, maintaining 98%+ gross margins across all standalone and bundle tiers.",
        },
      ],
    },
    faqs: [
      {
        question: "How does the 50% CRM bundle discount work?",
        answer:
          "If you have an active AXA CRM subscription, your AXA Pass account automatically receives a 50% discount at checkout and on all subsequent billing cycles.",
      },
      {
        question: "Can I use AXA Pass without AXA CRM?",
        answer:
          "Yes! Standalone pricing starts at just $6/mo for 2 seats ($3/seat/mo), which is still 25% cheaper than Bitwarden and nearly 70% cheaper than 1Password.",
      },
      {
        question: "Is my data zero-knowledge encrypted?",
        answer:
          "Absolutely. All encryption keys and vault data are encrypted client-side using AES-256 and Argon2id before ever leaving your device. Even our engineers cannot access your vault contents.",
      },
    ],
  },

  "axa-crm": {
    id: "axa-crm",
    tag: "/SALES & PIPELINE",
    title: "AXA CRM",
    shortTitle: "Axa CRM",
    subtitle: "Customer Relationship & Intelligent Sales Pipeline Management",
    heroHeadline: "Simple, Honest Pricing for High-Growth Sales",
    heroPitch:
      "Full visibility over sales pipelines, automated email sequences, and customer lifecycles. No hidden fees or arbitrary seat penalties.",
    description:
      "Intelligent sales pipeline and contact management. Gives your team end-to-end visibility over deals, contact histories, automated follow-ups, and sales metrics, helping move leads faster with custom pipelines and revenue forecasts.",
    image: "/axacrm.svg",
    alt: "Axa CRM Dashboard Preview",
    valueProposition: [
      "Visual Drag-and-Drop Deal Pipelines & Stage Automation",
      "2-Way Email Sync & Custom Automated Follow-up Sequences",
      "Unlimited Custom Fields & Full REST / Webhook API Access",
      "Unlocks 50% OFF all other AXA Suite products",
    ],
    pricingModelType: "crm-tier",
    crmDiscountPercentage: 0,
    tiers: [
      {
        name: "Personal",
        badge: "STARTER",
        description: "Perfect for solo entrepreneurs and early-stage founders closing initial deals.",
        seatsInfo: "Includes 2 Seats (+$50/mo per extra seat)",
        standalonePriceMonthly: 100,
        standalonePriceAnnual: 85,
        crmDiscountMonthly: 100,
        crmDiscountAnnual: 85,
        extraSeatPriceStandalone: 50,
        features: [
          "10,000 Active Contacts Included",
          "10 GB File & Document Storage",
          "Unlimited Custom Fields & Filters",
          "2-Way Email Sync (Gmail / Outlook)",
          "Full Automated Workflows & Triggers",
          "Basic Reporting & Pipeline Metrics",
        ],
        ctaText: "Get Started",
      },
      {
        name: "Team",
        badge: "GROWING TEAMS",
        description: "Built for scaling sales teams from 3 to 9 seats with high volume pipelines.",
        seatsInfo: "3 to 9 Seats ($50 / user / month)",
        standalonePriceMonthly: 50,
        standalonePriceAnnual: 42,
        standalonePriceUnit: "/ user / mo",
        crmDiscountMonthly: 50,
        crmDiscountAnnual: 42,
        crmDiscountUnit: "/ user / mo",
        isSeatPerUser: true,
        features: [
          "Everything in Personal, plus:",
          "10,000 Contacts per User Seat",
          "25 GB File Storage Pooled",
          "Unlimited Multi-Stage Workflows",
          "Advanced Pipeline Stage Automations",
          "Full API Access & Developer Keys",
          "Team Performance Dashboards",
        ],
        ctaText: "Get Started",
      },
      {
        name: "Growth",
        badge: "POPULAR (BEST VALUE)",
        isPopular: true,
        description: "Our premier tier for established teams needing high contact volume and priority limits.",
        seatsInfo: "Includes 10 Seats (+$35/mo per extra seat)",
        standalonePriceMonthly: 350,
        standalonePriceAnnual: 295,
        crmDiscountMonthly: 350,
        crmDiscountAnnual: 295,
        extraSeatPriceStandalone: 35,
        features: [
          "Everything in Team, plus:",
          "50,000 Contacts Included by Default",
          "50 GB High-Speed File Storage",
          "Dedicated High-Throughput API Limits",
          "Priority 24/7 Support & SLA Guarantee",
          "Custom Webhooks & Real-Time Events",
          "Advanced Sales Forecasting & Attribution",
        ],
        ctaText: "Upgrade to Growth",
      },
    ],
    addons: [
      {
        name: "+100 GB Extra File Storage",
        price: "+$15 / month",
        description: "High-performance encrypted cloud storage for proposals, contract attachments, and media assets.",
      },
      {
        name: "+10,000 Extra Contacts",
        price: "+$20 / month",
        description: "Instantly expand your addressable CRM contact database with zero pipeline interruptions.",
      },
      {
        name: "Extra API Batch Credits",
        price: "+$30 / month",
        description: "High-concurrency webhook and bulk ingestion credits for custom internal tool connections.",
      },
    ],
    technicalDirectives: {
      title: "Billing Logic & Margin Guardrails",
      items: [
        {
          heading: "The '8-Seat Auto-Upgrade' Rule",
          detail:
            "When adding an 8th seat on the Team tier ($50 × 8 = $400/mo), the UI triggers an automated optimization banner: 'Save $50/mo! Upgrade to the Growth Plan to get 10 seats for $350/mo.'",
        },
        {
          heading: "Usage Enforcement (Soft vs Hard Caps)",
          detail:
            "Soft caps notify clients at 90% storage or contact volume without service disruption. Third-party communication costs (WhatsApp, SMS, Email) connect to customer's own Twilio/SendGrid/Resend API keys for 100% margin protection.",
        },
        {
          heading: "Annual Billing Discount Engine (15% Savings)",
          detail:
            "Annual billing is enabled by default to secure upfront capital ($85/mo for Personal, $42/seat for Team, $295/mo for Growth).",
        },
      ],
    },
    faqs: [
      {
        question: "Does subscribing to AXA CRM give me discounts on other AXA products?",
        answer:
          "Yes! An active AXA CRM subscription grants you 50% OFF AXA Workspace, AXA Pass, AXA Signature, and AXA Calendar across all tiers.",
      },
      {
        question: "What happens if I exceed 10,000 contacts?",
        answer:
          "We operate on a soft-cap model: when you reach 90% capacity, you receive an automated notice with options to add 10,000 extra contacts for $20/mo or upgrade seamlessly.",
      },
      {
        question: "Can I bring my own Twilio and SendGrid API keys?",
        answer:
          "Yes! Native integration fields let you plug in your own API keys for SMS and email campaigns, ensuring zero markups or hidden fees on message volume.",
      },
    ],
  },

  "axa-workspace": {
    id: "axa-workspace",
    tag: "/COLLABORATION SUITE",
    title: "AXA WORKSPACE",
    shortTitle: "Axa Workspace",
    subtitle: "Unified Team Collaboration, Docs, Real-Time Chat & HD Video",
    heroHeadline: "Replace Google, Slack & Zoom With One Flat Rate",
    heroPitch:
      "Stop paying $30-$50+ per seat across Google Workspace, Slack Pro, and Zoom. AXA Workspace combines custom email, docs, team channels, and meetings into one unified hub.",
    description:
      "Your company’s central command center. Axa Workspace combines real-time documents, team chat, task management, and file storage into one seamless interface. Built to eliminate tab-switching fatigue and keep async teams fully synchronized.",
    image: "/axaworkspace.svg",
    alt: "Axa Workspace Preview",
    valueProposition: [
      "Custom Business Email (you@yourcompany.com)",
      "Real-Time Collaborative Docs, Sheets & Presentations",
      "Slack-Style Team Channels & Async Direct Messages",
      "Unlimited HD Video Meetings (100 Participants, No Time Limits)",
    ],
    pricingModelType: "crm-dual",
    crmDiscountPercentage: 50,
    tiers: [
      {
        name: "Starter",
        badge: "STARTER SUITE",
        description: "Complete email, docs, channels and video for micro businesses and startups.",
        seatsInfo: "Up to 5 Seats ($6 / seat / mo standalone)",
        standalonePriceMonthly: 30,
        standalonePriceAnnual: 25,
        crmDiscountMonthly: 15,
        crmDiscountAnnual: 12.5,
        features: [
          "Custom Business Email (you@yourcompany.com)",
          "AXA Docs, Sheets & Presentations (Real-Time Collab)",
          "AXA Channels (Slack-Style Real-time Team Chat)",
          "HD Video Meetings (100 Participants, No Time Limits)",
          "500 GB Shared Cloud Storage",
          "Mobile, Web, & Desktop Application Access",
        ],
        ctaText: "Start Starter",
      },
      {
        name: "Business",
        badge: "MOST POPULAR",
        isPopular: true,
        description: "Flat-rate powerhouse for 10-person teams with generous storage and CRM sync.",
        seatsInfo: "Flat 10 Seats (+$6/mo extra seat standalone | +$3/mo CRM)",
        standalonePriceMonthly: 60,
        standalonePriceAnnual: 50,
        crmDiscountMonthly: 30,
        crmDiscountAnnual: 25,
        extraSeatPriceStandalone: 6,
        extraSeatPriceCrm: 3,
        features: [
          "Everything in Starter, plus:",
          "1 TB Cloud Storage Dedicated Per User",
          "Unlimited Video Call Recording & Transcripts",
          "Advanced Admin Controls & Security Policies",
          "One-Click CRM Contact & Deal Sync Inside Docs & Chat",
          "Granular File Permissions & External Guest Sharing",
        ],
        ctaText: "Start Business Suite",
      },
      {
        name: "Enterprise",
        badge: "SCALE",
        description: "High-throughput workspace for enterprise organizations requiring dedicated infrastructure.",
        seatsInfo: "100+ Seats ($5 / seat standalone | $2.50 / seat CRM)",
        standalonePriceMonthly: 5.0,
        standalonePriceAnnual: 4.2,
        standalonePriceUnit: "/ seat / mo",
        crmDiscountMonthly: 2.5,
        crmDiscountAnnual: 2.0,
        crmDiscountUnit: "/ seat / mo",
        features: [
          "Everything in Business, plus:",
          "Dedicated S3 / MinIO Storage Cluster",
          "Custom SSO, SAML 2.0 & SCIM User Provisioning",
          "99.99% Guaranteed Service Uptime SLA",
          "24/7 Priority Dedicated Engineer Support",
          "Enterprise Compliance & eDiscovery Audit Vault",
        ],
        ctaText: "Deploy Enterprise",
      },
    ],
    competitorComparison: {
      title: "The Competitor Stack vs AXA Workspace",
      description:
        "Compare fragmented multi-subscription costs against our all-in-one unified workspace platform.",
      competitorNames: ["Google / MSFT ($14/u) + Slack Pro ($8.75/u) + Zoom ($15/u)"],
      rows: [
        {
          feature: "Business Email & Docs",
          competitors: [{ name: "Combined Stack", value: "Google Workspace / M365 ($14/user)" }],
          axaStandalone: "Included",
          axaCrmDiscount: "Included",
        },
        {
          feature: "Team Messaging & Channels",
          competitors: [{ name: "Combined Stack", value: "Slack Pro ($8.75/user)" }],
          axaStandalone: "Included",
          axaCrmDiscount: "Included",
        },
        {
          feature: "Video Meetings & Calls",
          competitors: [{ name: "Combined Stack", value: "Zoom Pro / Google Meet" }],
          axaStandalone: "Included (No Time Limits)",
          axaCrmDiscount: "Included (No Time Limits)",
        },
        {
          feature: "Storage per User",
          competitors: [{ name: "Combined Stack", value: "2 TB pooled" }],
          axaStandalone: "1 TB Included per User",
          axaCrmDiscount: "1 TB Included per User",
        },
        {
          feature: "10 Users Total Cost",
          competitors: [{ name: "Combined Stack", value: "~$225 to $350 / month" }],
          axaStandalone: "$60 / month ($6/user)",
          axaCrmDiscount: "$30 / month ($3/user)",
        },
        {
          feature: "20 Users Total Cost",
          competitors: [{ name: "Combined Stack", value: "~$450 to $700 / month" }],
          axaStandalone: "$120 / month ($6/user)",
          axaCrmDiscount: "$60 / month ($3/user)",
        },
      ],
    },
    technicalDirectives: {
      title: "Technical Directives & Storage Economics",
      items: [
        {
          heading: "CRM Bundle Auto-Applied Rule",
          detail:
            "Validates user crm_active status on auth. Automatically applies 50% discount coupon ($60/mo -> $30/mo for 10 users) with dynamic price updates.",
        },
        {
          heading: "Deep Native CRM Deal Linking",
          detail:
            "Enables users to link CRM deal pipelines directly into AXA Workspace chat channels and auto-generate client documentation populated with CRM lead attributes.",
        },
        {
          heading: "Storage Overhead Protection",
          detail:
            "Leverages S3-compatible object storage (DigitalOcean Spaces / MinIO). 1 TB costs ~$20, leaving >90% gross profit margins for a 10-person team paying $30/mo.",
        },
      ],
    },
    faqs: [
      {
        question: "Can I migrate my existing emails from Google Workspace or Office 365?",
        answer:
          "Yes! AXA Workspace includes automated 1-click IMAP/POP3 email and calendar migration tools to seamlessly transfer your messages, folders, and calendar entries.",
      },
      {
        question: "How do the video meetings compare to Zoom?",
        answer:
          "AXA Meetings supports up to 100 participants with zero time limits, screen sharing, meeting recording, and chat integration without needing a separate video subscription.",
      },
      {
        question: "How does the CRM discount apply?",
        answer:
          "When you subscribe to AXA CRM, the 10-seat AXA Workspace Business plan drops from $60/mo down to just $30/mo ($3/seat/mo).",
      },
    ],
  },

  "axa-sign": {
    id: "axa-sign",
    tag: "/DIGITAL CONTRACTS",
    title: "AXA SIGN",
    shortTitle: "Axa Sign",
    subtitle: "Legally Binding E-Signatures, Contract Workflows & Audit Certificates",
    heroHeadline: "Unlimited Digital Signatures Without Highway Robbery",
    heroPitch:
      "DocuSign and PandaDoc charge exorbitant rates with strict envelope limits. AXA Signature delivers unlimited signing, custom document templates, and tamper-proof audit trails for a fraction of the cost.",
    description:
      "Legally binding digital signatures and contracts. Features audit-trailed e-signatures, custom document templates, and real-time status tracking to close deals and execute agreements faster.",
    image: "/axasign.svg",
    alt: "Axa Sign Preview",
    valueProposition: [
      "Unlimited Document Signing & Envelope Sends",
      "Tamper-Proof SHA-256 Audit Trail & Legal Certificates",
      "1-Click Auto-Fill Contracts from CRM Deals & Contacts",
      "Automated Reminder Sequences for Unsigned Documents",
    ],
    pricingModelType: "crm-dual",
    crmDiscountPercentage: 50,
    tiers: [
      {
        name: "Personal / Freelancer",
        badge: "SOLO",
        description: "For solo founders and contractors sending professional contracts and proposals.",
        seatsInfo: "1 Seat ($10/mo standalone | $5/mo CRM)",
        standalonePriceMonthly: 10,
        standalonePriceAnnual: 8.5,
        crmDiscountMonthly: 5,
        crmDiscountAnnual: 4.25,
        features: [
          "Unlimited Document Signing & Envelopes",
          "Tamper-Proof Audit Trail & Legal Certificates",
          "Mobile & Web Drawing / Typing Signature Pad",
          "Reusable Document Templates (Up to 5)",
          "PDF Export & Download with Cryptographic Seal",
        ],
        ctaText: "Get Personal Plan",
      },
      {
        name: "Business Team",
        badge: "MOST POPULAR",
        isPopular: true,
        description: "For sales and operations teams needing unlimited templates, branding and CRM deal autofill.",
        seatsInfo: "Up to 10 Seats (+$8/mo extra seat standalone | +$4/mo CRM)",
        standalonePriceMonthly: 80,
        standalonePriceAnnual: 68,
        crmDiscountMonthly: 40,
        crmDiscountAnnual: 34,
        extraSeatPriceStandalone: 8,
        extraSeatPriceCrm: 4,
        features: [
          "Everything in Personal, plus:",
          "Unlimited Reusable Document Templates",
          "Team Branding & Custom Logo on Signing Pages",
          "Auto-Fill Contracts Directly from CRM Contacts & Deals",
          "Automated Reminder Sequences for Unsigned Docs",
          "Multi-Party Signing Order & Workflow Routing",
        ],
        ctaText: "Start Business Team",
      },
      {
        name: "Enterprise",
        badge: "SCALE",
        description: "For high-volume transaction teams with custom API signing and regulatory requirements.",
        seatsInfo: "10+ Seats ($6 / seat standalone | $3 / seat CRM)",
        standalonePriceMonthly: 6.0,
        standalonePriceAnnual: 5.0,
        standalonePriceUnit: "/ seat / mo",
        crmDiscountMonthly: 3.0,
        crmDiscountAnnual: 2.5,
        crmDiscountUnit: "/ seat / mo",
        features: [
          "Everything in Business, plus:",
          "Custom API Signing Endpoints & Webhooks",
          "Dedicated PDF Rendering Node Clusters",
          "Tailored Legal & Compliance Long-Term Archiving",
          "Custom SLA & Dedicated Solutions Architect",
          "Custom Font & Document Watermarking Engine",
        ],
        ctaText: "Deploy Enterprise",
      },
    ],
    competitorComparison: {
      title: "Competitor Stack vs AXA Signature",
      description:
        "Stop paying $49/seat for basic integrations and strict envelope caps.",
      competitorNames: ["DocuSign (Standard)", "PandaDoc (Business)"],
      rows: [
        {
          feature: "Price per Seat (Monthly)",
          competitors: [
            { name: "DocuSign", value: "$25 to $40 / seat" },
            { name: "PandaDoc", value: "$49 / seat" },
          ],
          axaStandalone: "$8 / seat",
          axaCrmDiscount: "$4 / seat (50% OFF)",
        },
        {
          feature: "10-User Team (Monthly)",
          competitors: [
            { name: "DocuSign", value: "$250 to $400 / mo" },
            { name: "PandaDoc", value: "$490 / mo" },
          ],
          axaStandalone: "$80 / mo",
          axaCrmDiscount: "$40 / mo (50% OFF)",
        },
        {
          feature: "Signature Envelopes Cap",
          competitors: [
            { name: "DocuSign", value: "100 / year strict cap" },
            { name: "PandaDoc", value: "Unlimited" },
          ],
          axaStandalone: "Unlimited (Zero Caps)",
          axaCrmDiscount: "Unlimited (Zero Caps)",
        },
        {
          feature: "CRM Deal Auto-Fill",
          competitors: [
            { name: "DocuSign", value: "High-Tier Add-on" },
            { name: "PandaDoc", value: "Locked on $49 plan" },
          ],
          axaStandalone: "Included",
          axaCrmDiscount: "Included",
        },
        {
          feature: "Audit Trail & Legal Certificate",
          competitors: [
            { name: "DocuSign", value: "Included" },
            { name: "PandaDoc", value: "Included" },
          ],
          axaStandalone: "Included & Sealed",
          axaCrmDiscount: "Included & Sealed",
        },
      ],
    },
    technicalDirectives: {
      title: "Technical Directives & PDF Margin Economics",
      items: [
        {
          heading: "Native CRM 1-Click Deal Trigger",
          detail:
            "Builds a 1-click 'Send AXA Signature Contract' inside the CRM deal pipeline that populates contact names, deal values, and company names into template placeholders instantly.",
        },
        {
          heading: "Storage & Webhook Economics",
          detail:
            "Signed PDFs and SHA-256 cryptographic audit trails are stored in object storage at pennies per thousand contracts, sustaining gross margins well above 97%.",
        },
        {
          heading: "Auto-Apply 50% CRM Discount",
          detail:
            "Auth middleware detects active CRM subscription and dynamically drops Business Team from $80/mo to $40/mo with strike-through badges.",
        },
      ],
    },
    faqs: [
      {
        question: "Are AXA Signatures legally binding?",
        answer:
          "Yes! AXA Signature complies with ESIGN, UETA, and European eIDAS regulations, generating tamper-proof cryptographic audit certificates with IP addresses, timestamps, and hash validation.",
      },
      {
        question: "Is there a limit on how many contracts I can send?",
        answer:
          "No! Unlike DocuSign's 100 envelope/year cap, all AXA Signature tiers include unlimited document envelopes.",
      },
      {
        question: "How does the CRM contract auto-fill work?",
        answer:
          "You can trigger contracts straight from any CRM deal card. The system maps client name, email, company, and deal amount straight into contract fields automatically.",
      },
    ],
  },

  "axa-book": {
    id: "axa-book",
    tag: "/CALENDAR & SCHEDULING",
    title: "AXA CALENDAR",
    shortTitle: "Axa Calendar / Book",
    subtitle: "Automated Scheduling, Round-Robin Lead Routing & Meeting Workflows",
    heroHeadline: "Market-Killing Scheduling & Round-Robin Routing",
    heroPitch:
      "Calendly forces sales teams onto $20/seat tiers for basic round-robin routing, and Chilipiper charges $30–$45/seat. AXA Calendar gives you unlimited booking links, multi-host meetings, and deep CRM synchronization at $6/seat or $3/seat with CRM bundle.",
    description:
      "Automated scheduling and calendar management. Syncs directly with team calendars to offer custom booking links, automated email/SMS reminders, intake forms, and payment collection.",
    image: "/axabook.svg",
    alt: "Axa Book Calendar Preview",
    valueProposition: [
      "Unlimited Event Types & Custom Booking Page URLs",
      "Round-Robin Sales Lead Distribution & Qualification Forms",
      "Instant CRM Contact & Deal Creation upon Meeting Booking",
      "Automated Multi-Channel Reminders (Email, SMS & WhatsApp)",
    ],
    pricingModelType: "crm-dual",
    crmDiscountPercentage: 50,
    tiers: [
      {
        name: "Solo Pro",
        badge: "SOLO",
        description: "For professionals, consultants and advisors needing clean appointment booking.",
        seatsInfo: "1 Seat ($8/mo standalone | $4/mo CRM)",
        standalonePriceMonthly: 8,
        standalonePriceAnnual: 6.8,
        crmDiscountMonthly: 4,
        crmDiscountAnnual: 3.4,
        features: [
          "Unlimited Event Types & Booking Pages",
          "Multi-Calendar 2-Way Sync (Google, Outlook, Apple)",
          "Automated Email Reminders & Follow-Ups",
          "Custom Branding & Post-Booking Redirect URLs",
          "Payment Gateway Integration (Stripe)",
          "Timezone Auto-Detection & Buffer Times",
        ],
        ctaText: "Get Solo Pro",
      },
      {
        name: "Business Team",
        badge: "MOST POPULAR",
        isPopular: true,
        description: "For sales teams requiring round-robin distribution, lead qualification, and SMS reminders.",
        seatsInfo: "Up to 10 Seats (+$6/mo extra seat standalone | +$3/mo CRM)",
        standalonePriceMonthly: 60,
        standalonePriceAnnual: 51,
        crmDiscountMonthly: 30,
        crmDiscountAnnual: 25.5,
        extraSeatPriceStandalone: 6,
        extraSeatPriceCrm: 3,
        features: [
          "Everything in Solo Pro, plus:",
          "Round-Robin Sales Meeting Distribution",
          "Form-Based Lead Routing & Qualification Rules",
          "Collective & Group Meetings (Multi-Host)",
          "Auto-Create CRM Contacts & Deals on Booking",
          "Automated SMS & WhatsApp Meeting Reminders",
        ],
        ctaText: "Start Business Team",
      },
      {
        name: "Enterprise",
        badge: "SCALE",
        description: "For enterprise sales organizations with custom geography routing and dedicated SLAs.",
        seatsInfo: "100+ Seats ($4 / seat standalone | $2 / seat CRM)",
        standalonePriceMonthly: 4.0,
        standalonePriceAnnual: 3.4,
        standalonePriceUnit: "/ seat / mo",
        crmDiscountMonthly: 2.0,
        crmDiscountAnnual: 1.7,
        crmDiscountUnit: "/ seat / mo",
        features: [
          "Everything in Business, plus:",
          "Custom Domain & Whitelabel Portals",
          "Advanced Routing Engine (Geography / Account Tier)",
          "Dedicated High-Concurrency Availability Cache Nodes",
          "24/7 SLA & Enterprise Onboarding Specialist",
          "Audit Logging & Single Sign-On (SSO / SAML)",
        ],
        ctaText: "Deploy Enterprise",
      },
    ],
    competitorComparison: {
      title: "Competitor Pricing vs AXA Calendar",
      description:
        "Get advanced round-robin lead routing without paying $20–$45 per seat.",
      competitorNames: ["Calendly (Teams)", "Chilipiper (Form Concierge)"],
      rows: [
        {
          feature: "Price per Seat (Monthly)",
          competitors: [
            { name: "Calendly", value: "$20 / seat" },
            { name: "Chilipiper", value: "$30 to $45 / seat + platform fee" },
          ],
          axaStandalone: "$6 / seat",
          axaCrmDiscount: "$3 / seat (50% OFF)",
        },
        {
          feature: "10-User Team (Monthly)",
          competitors: [
            { name: "Calendly", value: "$200 / mo" },
            { name: "Chilipiper", value: "$400+ / mo" },
          ],
          axaStandalone: "$60 / mo",
          axaCrmDiscount: "$30 / mo (50% OFF)",
        },
        {
          feature: "Event Types Limit",
          competitors: [
            { name: "Calendly", value: "Unlimited" },
            { name: "Chilipiper", value: "Unlimited" },
          ],
          axaStandalone: "Unlimited",
          axaCrmDiscount: "Unlimited",
        },
        {
          feature: "Round-Robin Lead Routing",
          competitors: [
            { name: "Calendly", value: "Locked on Teams ($20/seat)" },
            { name: "Chilipiper", value: "Included" },
          ],
          axaStandalone: "Included in Business",
          axaCrmDiscount: "Included in Business",
        },
        {
          feature: "CRM Auto-Creation & Pipeline Sync",
          competitors: [
            { name: "Calendly", value: "Basic / Limited" },
            { name: "Chilipiper", value: "Included" },
          ],
          axaStandalone: "Native Deep Sync",
          axaCrmDiscount: "Native Deep Sync",
        },
        {
          feature: "SMS Meeting Reminders",
          competitors: [
            { name: "Calendly", value: "Capped / Add-on credits" },
            { name: "Chilipiper", value: "Included" },
          ],
          axaStandalone: "Included",
          axaCrmDiscount: "Included",
        },
      ],
    },
    technicalDirectives: {
      title: "Technical Directives & Pipeline Triggers",
      items: [
        {
          heading: "Instant CRM Deal Pipeline Trigger",
          detail:
            "When a prospect books a call via AXA Calendar: (1) Creates/updates contact in AXA CRM, (2) Auto-assigns rep via round-robin distribution, (3) Automatically moves CRM Deal stage to 'Meeting Scheduled'.",
        },
        {
          heading: "Zero-Compute Slot Architecture",
          detail:
            "Availability queries and ICS metadata stored in PostgreSQL require negligible compute, keeping hosting costs under $1/mo for 10 users and delivering 99% gross margins.",
        },
        {
          heading: "Auto-Apply CRM Discount",
          detail:
            "Middleware checks crm_active status, dynamically applying 50% discount ($60/mo -> $30/mo for 10 seats) across all checkout widgets.",
        },
      ],
    },
    faqs: [
      {
        question: "How does round-robin meeting distribution work?",
        answer:
          "When a lead books on a team page, AXA Calendar automatically checks each sales rep's calendar availability and evenly assigns meetings based on your chosen algorithm (equal distribution, priority weight, or availability).",
      },
      {
        question: "Can I collect payments for bookings?",
        answer:
          "Yes! AXA Calendar integrates directly with Stripe so you can charge consultation fees, deposits, or session costs before a booking is confirmed.",
      },
      {
        question: "How does the calendar sync with AXA CRM?",
        answer:
          "Any booked appointment automatically updates contact records, logs notes, and sets the stage in your AXA CRM pipeline in real-time.",
      },
    ],
  },
};
