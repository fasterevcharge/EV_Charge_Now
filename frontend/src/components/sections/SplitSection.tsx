import Image from "next/image";

type Props = {
  reverse?: boolean;
  image?: { src: string; alt: string; width?: number; height?: number };
  variant?: "default" | "alt" | "deep";
  children: React.ReactNode;
};

/**
 * Two-column section: content + image (reversible).
 * If no image is provided, content centers.
 */
export default function SplitSection({
  reverse = false,
  image,
  variant = "default",
  children,
}: Props) {
  return (
    <section className={`section dark variant-${variant}`}>
      <div className={`container two-col ${reverse ? "reverse" : ""}`}>
        {children}
        {image && (
          <div className="photo-card floating">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width ?? 1200}
              height={image.height ?? 900}
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
        )}
      </div>
    </section>
  );
}
