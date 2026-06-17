import RevealText from "@/components/motion/RevealText";
import MagneticButton from "@/components/motion/MagneticButton";
import type { CTA } from "./PageHero";

type Props = {
  title: string;
  body?: string;
  cta: CTA;
};

/**
 * Closing CTA band — yellow-glow radial bg, centered text and magnetic CTA.
 */
export default function CTABand({ title, body, cta }: Props) {
  return (
    <section className="cta-band dark">
      <div className="container cta-band-inner">
        <RevealText as="h2" className="huge">
          {title}
        </RevealText>
        {body && (
          <RevealText as="p" delay={0.2}>
            {body}
          </RevealText>
        )}
        <MagneticButton href={cta.href} className="cta-magnetic large">
          {cta.label}
        </MagneticButton>
      </div>
    </section>
  );
}
