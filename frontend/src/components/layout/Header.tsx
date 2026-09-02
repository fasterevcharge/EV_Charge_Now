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
            src="/sun-symbol.png"
            alt={brand.name}
            width={48}
            height={48}
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

        <Link href="/get-in-touch" className="cta-outline light">
          Get in Touch
        </Link>
      </div>
    </header>
  );
}
