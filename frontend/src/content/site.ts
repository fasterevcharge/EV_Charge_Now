/**
 * Single source of truth for all site copy.
 * Edit this file to change any text — pages and sections read from here.
 * Content based on Faster EV ChargeNow Website Copy + Content Brief PDFs.
 */

export const brand = {
  name: "Faster EV ChargeNow",
  wordmark: "FASTER",        // visual wordmark in hero
  tagline: "EV CHARGE NOW",  // wordmark subtitle
  email: "info@fasterevchargenow.com",
} as const;

export const nav = [
  { label: "Drivers", href: "/drivers" },
  { label: "Property Owners", href: "/property-owners" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

// -----------------------------------------------------------------------------
// HOME
// -----------------------------------------------------------------------------
export const home = {
  hero: {
    eyebrow: "Everyday Destinations",
    title: "Charging Infrastructure for Everyday Destinations.",
    subtitle:
      "Faster EV ChargeNow delivers fast, reliable electric vehicle charging where people already live, work, shop, and gather — transforming underutilized parking assets into valuable community infrastructure.",
    primaryCta: { label: "Partner With Us", href: "/property-owners" },
  },
  simple: {
    eyebrow: "Charging Made Simple",
    title: "Plug in. Tap to pay. Drive on.",
    bullets: [
      "No app downloads.",
      "No account creation.",
      "No membership fees.",
      "Simply plug in, tap to pay, and start charging.",
    ],
  },
  fast: {
    eyebrow: "Fast Charging When You Need It",
    title: "Up to 360 kW. 0–80% in about 30 minutes.",
    body:
      "Our chargers deliver up to 360 kW of power, allowing many compatible electric vehicles to charge from 0–80% in approximately 30 minutes. Spend less time waiting and more time getting where you need to go.",
  },
  twoSides: {
    eyebrow: "Built for both sides",
    title: "Built for Drivers. Valuable for Property Owners.",
    cards: [
      {
        title: "Drivers",
        body: "Fast, convenient charging where you already spend your time.",
        href: "/drivers",
        cta: "For Drivers →",
      },
      {
        title: "Property Owners",
        body: "Turn underutilized parking into revenue-generating infrastructure — at zero cost to you.",
        href: "/property-owners",
        cta: "For Property Owners →",
      },
    ],
  },
  mission: {
    eyebrow: "Our Mission",
    title: "Make charging a seamless part of everyday life.",
    body:
      "Faster EV ChargeNow exists to make electric vehicle charging a seamless part of everyday life. By building fast, reliable charging destinations where people already live, work, shop, and gather, we serve drivers, strengthen local businesses, and help communities prepare for an electric future.",
  },
  vision: {
    eyebrow: "Our Vision",
    title: "Charging as intuitive and accessible as parking.",
    body:
      "We envision a future where charging is as intuitive and accessible as parking. Through a growing network of community-centered charging destinations, Faster EV ChargeNow is transforming underutilized spaces into valuable infrastructure that powers mobility and supports local economies.",
  },
} as const;

// -----------------------------------------------------------------------------
// DRIVERS
// -----------------------------------------------------------------------------
export const drivers = {
  hero: {
    eyebrow: "For Drivers",
    title: "Fast, Convenient Charging.",
    subtitle:
      "Charge your vehicle while you shop, dine, work, or run errands. Faster EV ChargeNow makes charging a natural part of your day.",
  },
  whereLife: {
    eyebrow: "Where life happens",
    title: "Charge Where Your Life Happens.",
    body:
      "Whether you're grabbing groceries, meeting friends, visiting local businesses, or commuting to work, Faster EV ChargeNow allows you to recharge while doing the things you already planned to do.",
  },
  fast: {
    eyebrow: "Fast Charging",
    title: "Fast Charging That Fits Your Schedule.",
    body:
      "Our chargers deliver up to 360 kW of charging power, allowing many compatible electric vehicles to reach 80% charge in approximately 30 minutes.",
  },
  benefits: {
    eyebrow: "Four Benefits",
    title: "Built for the Way People Actually Drive.",
    items: [
      {
        title: "Performance Without Wait",
        body: "Up to 360 kW of fast charging power designed for speed and reliability.",
      },
      {
        title: "Charging Where Life Happens",
        body: "Convenient locations integrated into the places people already visit every day.",
      },
      {
        title: "Frictionless Start to Finish",
        body: "Simple payment options and an intuitive charging experience from arrival to departure.",
      },
      {
        title: "Broad Vehicle Compatibility",
        body: "Designed to support nearly all modern electric vehicles.",
      },
    ],
  },
  steps: {
    eyebrow: "Three Simple Steps",
    title: "Charging in Three Simple Steps.",
    items: [
      { num: "01", title: "Arrive", body: "You're already where you need to be." },
      { num: "02", title: "Plug In", body: "No setup. No learning curve." },
      { num: "03", title: "Live Your Time", body: "Shop, work, dine, or relax while your vehicle charges." },
    ],
  },
  overlap: {
    eyebrow: "Charging is the overlap",
    title: "Charging Is Not the Destination. It's the Overlap.",
    items: [
      { range: "15–30 Minutes", body: "Groceries, coffee runs, and quick errands." },
      { range: "30–60 Minutes", body: "Restaurants, appointments, and shopping trips." },
      { range: "60+ Minutes", body: "Work, recreation, and extended visits." },
    ],
  },
} as const;

// -----------------------------------------------------------------------------
// PROPERTY OWNERS
// -----------------------------------------------------------------------------
export const propertyOwners = {
  hero: {
    eyebrow: "For Property Owners",
    title: "Turn idle parking into a revenue stream — we install and operate the chargers, you collect an ongoing share of what they earn.",
    subtitle: "Simple for you. Fully managed by us.",
    primaryCta: { label: "Partner With Us", href: "/get-in-touch?type=Property+Owner+%26+Site+Host+Partnership" },
  },
  benefits: [
    {
      eyebrow: "How It Works",
      title: "Zero Cost to You.",
      body:
        "Faster EV ChargeNow funds and installs 100% of the design, permitting, construction, and equipment — you contribute the parking space. In return, you receive an ongoing share of the charging revenue, with no maintenance, staffing, or day-to-day responsibility on your end.",
    },
    {
      eyebrow: "New Revenue",
      title: "Generate New Revenue From Existing Assets.",
      body:
        "Electric vehicle charging transforms parking spaces from static infrastructure into revenue-generating assets. Monetize what already exists without changing your property's primary function.",
    },
    {
      eyebrow: "Foot Traffic",
      title: "Increase Foot Traffic and Dwell Time.",
      body:
        "Drivers typically remain on-site while charging, creating additional opportunities for engagement with nearby businesses and amenities. DC fast-charging sessions typically run 20–40 minutes — time drivers spend at your property rather than elsewhere.",
      bullets: [
        "Increased retail activity.",
        "Greater restaurant and service usage.",
        "Enhanced visibility for tenants.",
        "Increased repeat visitation.",
      ],
    },
    {
      eyebrow: "Property Appeal",
      title: "Enhance Property Appeal.",
      body:
        "Electric vehicle charging infrastructure aligns properties with evolving tenant and consumer expectations. Charging amenities are increasingly requested by national retail and restaurant tenants during lease negotiations — making EV infrastructure a competitive point in tenant retention, not just a sustainability checkbox.",
      bullets: [
        "Sustainability readiness.",
        "Modern asset positioning.",
        "Competitive differentiation.",
        "Increased property appeal.",
      ],
    },
    {
      eyebrow: "Built for Speed",
      title: "The Fastest Charging Available.",
      body:
        "Our DC charging stations are 360 kW, among the highest-powered charging available today — keeping sessions short (20–40 minutes) and turnover high. Industry research (JD Power's 2026 EV Experience study) finds that charging speed is one of the most common frustrations EV drivers report, and that satisfaction rises sharply with newer, faster networks.",
    },
  ],
  partnership: {
    eyebrow: "Flexible Partnership",
    title: "A Flexible Partnership Model.",
    body:
      "Charger count, site design, and revenue terms are built around your property, not a standard template — funded, installed, and operated by us, with no cost or operating burden on your end.",
  },
  future: {
    eyebrow: "Future-Ready",
    title: "Future-Ready Infrastructure.",
    body:
      "California has set a goal of 100% zero-emission vehicle sales by 2035, with major automakers making parallel commitments to go all-electric on a similar timeline. Properties with charging infrastructure in place today are positioned ahead of that curve — turning underutilized parking into infrastructure that serves drivers, supports businesses, and creates long-term value.",
  },
  closing:
    "Transform underutilized parking into infrastructure that serves drivers, supports businesses, and creates long-term value.",
} as const;

// -----------------------------------------------------------------------------
// ABOUT
// -----------------------------------------------------------------------------
export const about = {
  hero: {
    eyebrow: "About Faster EV ChargeNow",
    title: "Building Infrastructure for Everyday Life.",
    subtitle:
      "Faster EV ChargeNow brings fast, reliable EV charging to the places people already visit every day — creating a better charging experience for drivers, and a new revenue opportunity for the properties that host it.",
  },
  story: {
    eyebrow: "Our Story",
    title: "Charging should be as accessible as parking.",
    paragraphs: [
      "Electric vehicle adoption is accelerating, but charging infrastructure hasn't always kept pace with how people actually move through their daily lives. Founded in 2021, Faster EV ChargeNow was built on a simple belief: charging should be as accessible and intuitive as parking — and fast enough that it doesn't cost people their afternoon. Our chargers deliver up to 360 kW, among the fastest speeds available today.",
      "By developing fast-charging destinations in the places people already live, work, shop, and gather, we create a better experience for drivers and a new revenue stream for the property owners who host us.",
    ],
  },
  mission: {
    eyebrow: "Mission",
    title: "Fast charging for drivers. New revenue for the properties that host it.",
    body: "One network, built for both.",
  },
  vision: {
    eyebrow: "Vision",
    title: "A network that powers communities.",
    body:
      "California has set a goal of 100% zero-emission vehicle sales by 2035 — we're building the charging network that goal depends on. Our vision is a growing network of charging destinations that gives drivers power when they need it and gives the properties that host us a lasting source of revenue — powering mobility and local economies together.",
  },
} as const;

// -----------------------------------------------------------------------------
// CONTACT
// -----------------------------------------------------------------------------
export const contact = {
  hero: {
    eyebrow: "Get in touch",
    title: "Let's Build the Future of Charging Together.",
    subtitle:
      "Whether you're interested in hosting charging infrastructure, exploring partnership opportunities, or learning more about Faster EV ChargeNow, we'd love to hear from you.",
  },
  cards: [
    {
      title: "Property Owners & Site Hosts",
      body: "Interested in bringing electric vehicle charging to your property? Our team can evaluate your site and discuss partnership opportunities, infrastructure requirements, and potential revenue models.",
      cta: { label: "Partner With Us", href: "/get-in-touch?type=Property+Owner+%26+Site+Host+Partnership" },
    },
    {
      title: "Driver Support",
      body: "Questions about charging your vehicle, locating stations, payments, or your charging experience? Our team is here to help.",
      cta: { label: "Get Driver Support", href: "/get-in-touch?type=Driver+Support" },
    },
    {
      title: "Maintenance & Support",
      body: "Need to report a station issue or request technical assistance? Reach our maintenance and support team directly.",
      cta: { label: "Request Support", href: "/get-in-touch?type=Maintenance+%26+Technical+Support" },
    },
    {
      title: "Business Partnerships",
      body: "Exploring investment, strategic partnership, or development opportunities with Faster EV ChargeNow? Let's connect.",
      cta: { label: "Start a Conversation", href: "/get-in-touch?type=Investor+%26+Strategic+Partnership" },
    },
    {
      title: "Media & Community Relations",
      body: "Press inquiries, community programs, and partnership opportunities with local organizations and stakeholders.",
      cta: { label: "Reach Our Team", href: "/get-in-touch?type=Media+%26+Community+Relations" },
    },
    {
      title: "General Inquiries",
      body: "Questions about Faster EV ChargeNow, future locations, or anything else? We'll get back to you.",
      cta: { label: "Contact Our Team", href: "/get-in-touch?type=General+Question" },
    },
  ],
  email: brand.email,
} as const;

// -----------------------------------------------------------------------------
// GET IN TOUCH — hidden intake form
// -----------------------------------------------------------------------------
export const inquiry = {
  hero: {
    eyebrow: "Get in touch",
    title: "How Can We Help?",
    subtitle:
      "We're here to help. Whether you're looking to host EV charging, need support, or want to learn more about Faster EV ChargeNow, we'd love to hear from you.",
  },
  types: [
    "Property Owner & Site Host Partnership",
    "Driver Support",
    "Maintenance & Technical Support",
    "Investor & Strategic Partnership",
    "Media & Community Relations",
    "General Question",
  ],
  // Default field guidance; overridden when the Property Owner type is selected
  // to subtly capture the details the acquisition team needs.
  placeholders: {
    default: {
      subject: 'Example: "Interested in EV charging for a shopping center"',
      message: "How can we help you?",
    },
    propertyOwner: {
      subject: 'Example: "Retail center with 250 parking spaces in Torrance"',
      message:
        "Tell us about your property, number of parking spaces, location, and any questions you have about hosting EV charging",
    },
  },
  propertyOwnerType: "Property Owner & Site Host Partnership",
} as const;

// -----------------------------------------------------------------------------
// Marquee ticker items (shared across pages)
// -----------------------------------------------------------------------------
export const ticker = [
  "360 kW FAST CHARGE",
  "NO APP REQUIRED",
  "TAP TO PAY",
  "0–80% IN 30 MIN",
  "COMMUNITY-CENTERED",
  "BROAD EV COMPATIBILITY",
] as const;
