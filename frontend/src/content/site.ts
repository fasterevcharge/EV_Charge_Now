/**
 * Single source of truth for all site copy.
 * Edit this file to change any text — pages and sections read from here.
 * Content based on EV ChargeNow Website Copy + Content Brief PDFs.
 */

export const brand = {
  name: "EV ChargeNow",
  wordmark: "FASTER",        // visual wordmark in hero
  tagline: "EV CHARGE NOW",  // wordmark subtitle
  email: "evchargenow@gmail.com",
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
    eyebrow: "⚡ Everyday Destinations",
    title: "Charging Infrastructure for Everyday Destinations.",
    subtitle:
      "EV ChargeNow delivers fast, reliable electric vehicle charging where people already live, work, shop, and gather — transforming underutilized parking assets into valuable community infrastructure.",
    primaryCta: { label: "Find Charging", href: "/drivers" },
    secondaryCta: { label: "Partner With Us", href: "/property-owners" },
  },
  simple: {
    eyebrow: "⚡ Charging Made Simple",
    title: "Plug in. Tap to pay. Drive on.",
    bullets: [
      "No app downloads.",
      "No account creation.",
      "No membership fees.",
      "Simply plug in, tap to pay, and start charging.",
    ],
  },
  fast: {
    eyebrow: "⚡ Fast Charging When You Need It",
    title: "Up to 320 kW. 0–80% in about 30 minutes.",
    body:
      "Our chargers deliver up to 320 kilowatts of power, allowing many compatible electric vehicles to charge from 0–80% in approximately 30 minutes. Spend less time waiting and more time getting where you need to go.",
  },
  twoSides: {
    eyebrow: "⚡ Built for both sides",
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
        body: "Turn underutilized parking into revenue-generating infrastructure.",
        href: "/property-owners",
        cta: "For Property Owners →",
      },
    ],
  },
  mission: {
    eyebrow: "⚡ Our Mission",
    title: "Make charging a seamless part of everyday life.",
    body:
      "EV ChargeNow exists to make electric vehicle charging a seamless part of everyday life. By building fast, reliable charging destinations where people already live, work, shop, and gather, we serve drivers, strengthen local businesses, and help communities prepare for an electric future.",
  },
  vision: {
    eyebrow: "⚡ Our Vision",
    title: "Charging as intuitive and accessible as parking.",
    body:
      "We envision a future where charging is as intuitive and accessible as parking. Through a growing network of community-centered charging destinations, EV ChargeNow is transforming underutilized spaces into valuable infrastructure that powers mobility and supports local economies.",
  },
} as const;

// -----------------------------------------------------------------------------
// DRIVERS
// -----------------------------------------------------------------------------
export const drivers = {
  hero: {
    eyebrow: "⚡ For Drivers",
    title: "Fast, Convenient Charging.",
    subtitle:
      "Charge your vehicle while you shop, dine, work, or run errands. EV ChargeNow makes charging a natural part of your day.",
    primaryCta: { label: "Find Stations", href: "#stations" },
  },
  whereLife: {
    eyebrow: "⚡ Where life happens",
    title: "Charge Where Your Life Happens.",
    body:
      "Whether you're grabbing groceries, meeting friends, visiting local businesses, or commuting to work, EV ChargeNow allows you to recharge while doing the things you already planned to do.",
  },
  fast: {
    eyebrow: "⚡ Fast Charging",
    title: "Fast Charging That Fits Your Schedule.",
    body:
      "Our chargers deliver up to 320 kilowatts of charging power, allowing many compatible electric vehicles to reach 80% charge in approximately 30 minutes.",
  },
  noBarriers: {
    eyebrow: "⚡ No barriers",
    title: "No App. No Membership. No Account Required.",
    body: "Charging should be simple. Plug in. Tap to pay. Start charging. That's it.",
  },
  benefits: {
    eyebrow: "⚡ Four Benefits",
    title: "Built for the Way People Actually Drive.",
    items: [
      {
        title: "Performance Without Wait",
        body: "Up to 320 kilowatts of fast charging power designed for speed and reliability.",
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
    eyebrow: "⚡ Three Simple Steps",
    title: "Charging in Three Simple Steps.",
    items: [
      { num: "01", title: "Arrive", body: "You're already where you need to be." },
      { num: "02", title: "Plug In", body: "No setup. No learning curve." },
      { num: "03", title: "Live Your Time", body: "Shop, work, dine, or relax while your vehicle charges." },
    ],
  },
  overlap: {
    eyebrow: "⚡ Charging is the overlap",
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
    eyebrow: "⚡ For Property Owners",
    title: "Turn Parking Into Revenue Infrastructure.",
    subtitle:
      "EV ChargeNow helps property owners convert underutilized parking assets into long-term revenue opportunities while enhancing property attractiveness for tenants and visitors.",
    primaryCta: { label: "Partner With Us", href: "/contact" },
  },
  benefits: [
    {
      eyebrow: "⚡ New Revenue",
      title: "Generate New Revenue From Existing Assets.",
      body:
        "Electric vehicle charging transforms parking spaces from static infrastructure into revenue-generating assets. Monetize what already exists without changing your property's primary function.",
    },
    {
      eyebrow: "⚡ Foot Traffic",
      title: "Increase Foot Traffic and Dwell Time.",
      body:
        "Drivers typically remain on-site while charging, creating additional opportunities for engagement with nearby businesses and amenities.",
      bullets: [
        "Increased retail activity.",
        "Greater restaurant and service usage.",
        "Enhanced visibility for tenants.",
        "Increased repeat visitation.",
      ],
    },
    {
      eyebrow: "⚡ Property Appeal",
      title: "Enhance Property Appeal.",
      body:
        "Electric vehicle charging infrastructure aligns properties with evolving tenant and consumer expectations.",
      bullets: [
        "Sustainability readiness.",
        "Modern asset positioning.",
        "Competitive differentiation.",
        "Increased property appeal.",
      ],
    },
  ],
  partnership: {
    eyebrow: "⚡ Flexible Partnership",
    title: "A Flexible Partnership Model.",
    body:
      "Every property is different. EV ChargeNow works with property owners to develop partnership structures that align with site characteristics, usage patterns, and long-term goals. Property owners may benefit from charging activity, increased visitation, and new opportunities created through electric vehicle infrastructure.",
  },
  future: {
    eyebrow: "⚡ Future-Ready",
    title: "Future-Ready Infrastructure.",
    body:
      "As electric vehicle adoption continues to grow, charging infrastructure helps properties remain relevant, competitive, and prepared for the future of transportation.",
  },
  closing:
    "Transform underutilized parking into infrastructure that serves drivers, supports businesses, and creates long-term value.",
} as const;

// -----------------------------------------------------------------------------
// ABOUT
// -----------------------------------------------------------------------------
export const about = {
  hero: {
    eyebrow: "⚡ About EV ChargeNow",
    title: "Building Infrastructure for Everyday Life.",
    subtitle:
      "EV ChargeNow is helping communities prepare for an electric future by bringing fast, reliable charging to the places people already visit every day.",
  },
  story: {
    eyebrow: "⚡ Our Story",
    title: "Charging should be as accessible as parking.",
    paragraphs: [
      "Electric vehicle adoption is accelerating, but charging infrastructure has not always kept pace with how people actually move through their daily lives.",
      "EV ChargeNow was founded on a simple belief: charging should be as accessible and intuitive as parking.",
      "By developing fast-charging destinations in places people already live, work, shop, and gather, we create value for drivers, support local businesses, and help communities transition toward a more connected transportation future.",
    ],
  },
  mission: {
    eyebrow: "⚡ Mission",
    title: "Make EV charging a seamless part of everyday life.",
    body: "To make electric vehicle charging a seamless part of everyday life.",
  },
  vision: {
    eyebrow: "⚡ Vision",
    title: "A network that powers communities.",
    body:
      "To build a network of community-centered charging destinations that powers mobility, supports local economies, and prepares communities for an electrified future.",
  },
} as const;

// -----------------------------------------------------------------------------
// CONTACT
// -----------------------------------------------------------------------------
export const contact = {
  hero: {
    eyebrow: "⚡ Get in touch",
    title: "Let's Build the Future of Charging Together.",
    subtitle:
      "Whether you're interested in hosting charging infrastructure, exploring partnership opportunities, or learning more about EV ChargeNow, we'd love to hear from you.",
  },
  cards: [
    {
      title: "Property Owners",
      body: "Interested in bringing electric vehicle charging to your property? Our team can evaluate your site and discuss partnership opportunities, infrastructure requirements, and potential revenue models.",
      cta: { label: "Partner With Us", href: `mailto:${brand.email}?subject=Property%20Partnership%20Inquiry` },
    },
    {
      title: "General Inquiries",
      body: "Questions about EV ChargeNow, future locations, or partnership opportunities? We'll get back to you.",
      cta: { label: "Contact Our Team", href: `mailto:${brand.email}` },
    },
  ],
  email: brand.email,
} as const;

// -----------------------------------------------------------------------------
// Marquee ticker items (shared across pages)
// -----------------------------------------------------------------------------
export const ticker = [
  "320 KW FAST CHARGE",
  "NO APP REQUIRED",
  "TAP TO PAY",
  "0–80% IN ~30 MIN",
  "COMMUNITY-CENTERED",
  "BROAD EV COMPATIBILITY",
] as const;
