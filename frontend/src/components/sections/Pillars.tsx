import FeatureGrid, { type FeatureItem } from "./FeatureGrid";

/** Icons stay in code (not content/site.ts) — they're tied to the visual system. */
const ICONS: Record<string, React.ReactNode> = {
  fast: (
    <svg viewBox="0 0 24 24" fill="none">
      <path
        d="M13 2L4 14H11L10 22L20 9H13L13 2Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  pin: (
    <svg viewBox="0 0 24 24" fill="none">
      <path
        d="M12 21C12 21 18 14.5 18 10.5C18 7.5 15.5 5 12 5C8.5 5 6 7.5 6 10.5C6 14.5 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10.5" r="2" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  ),
  trophy: (
    <svg viewBox="0 0 24 24" fill="none">
      <path
        d="M7 11V7M11 11V7M7 9H11M9 11V14C9 16.2 10.8 18 13 18H14C16.2 18 18 16.2 18 14V11"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M15 3L17 5L21 1"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  card: (
    <svg viewBox="0 0 24 24" fill="none">
      <rect x="3" y="6" width="10" height="12" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M13 10H21M13 14H21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="17" cy="10" r="1" fill="currentColor" />
      <circle cx="17" cy="14" r="1" fill="currentColor" />
    </svg>
  ),
};

const PILLARS: FeatureItem[] = [
  {
    title: "Fast Charging",
    body: "Up to 360 kW — 0–80% in about 22 minutes on compatible vehicles.",
    icon: ICONS.fast,
  },
  {
    title: "Find Stations",
    body: "Locate Faster EV ChargeNow destinations in the places you already visit.",
    icon: ICONS.pin,
  },
  {
    title: "Built for Everyday Life",
    body: "Charging integrated into shopping, dining, work, and errands.",
    icon: ICONS.trophy,
  },
  {
    title: "Tap to Pay",
    body: "No app, no account, no membership. Plug in, tap, drive on.",
    icon: ICONS.card,
  },
];

export default function Pillars() {
  return (
    <FeatureGrid
      eyebrow="Four Pillars"
      title="Built on what drivers actually need."
      items={PILLARS}
      columns={4}
    />
  );
}
