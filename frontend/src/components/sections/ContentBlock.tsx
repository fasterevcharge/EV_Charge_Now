import RevealText from "@/components/motion/RevealText";

type Props = {
  eyebrow?: string;
  title: string;
  body?: string;
  bullets?: readonly string[];
  align?: "left" | "center";
  children?: React.ReactNode;
};

/**
 * Generic content block: eyebrow + reveal title + body/bullets/children.
 * The workhorse text section used across pages.
 */
export default function ContentBlock({
  eyebrow,
  title,
  body,
  bullets,
  align = "left",
  children,
}: Props) {
  return (
    <div className={`content-block align-${align}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <RevealText as="h2" className="big">
        {title}
      </RevealText>
      {body && (
        <RevealText as="p" delay={0.15}>
          {body}
        </RevealText>
      )}
      {bullets && (
        <ul className="bullet-list">
          {bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      )}
      {children}
    </div>
  );
}
