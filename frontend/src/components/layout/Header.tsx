import Image from "next/image";
import Link from "next/link";
import { brand, nav } from "@/content/site";

type Props = { floating?: boolean };

export default function Header({ floating = false }: Props) {
  return (
    <header className={`site-header ${floating ? "floating" : ""}`}>
      <div className="container main-nav-inner">
        <Link href="/" className="brand" aria-label={brand.name}>
          <Image
            src="/logo.jpg"
            alt={brand.name}
            width={160}
            height={50}
            priority
          />
        </Link>

        <nav className="primary-nav">
          {nav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="cta-outline light">
          Get in Touch
        </Link>
      </div>
    </header>
  );
}
