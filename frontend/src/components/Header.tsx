import Image from "next/image";
import Link from "next/link";

type Props = { floating?: boolean };

export default function Header({ floating = false }: Props) {
  return (
    <header className={`site-header ${floating ? "floating" : ""}`}>
      <div className="container main-nav-inner">
        <Link href="/" className="brand">
          <Image
            src="/logo.jpg"
            alt="Faster EV Charge Now"
            width={160}
            height={50}
            priority
          />
        </Link>

        <nav className="primary-nav">
          <Link href="#industries">Industries</Link>
          <Link href="#products">Products</Link>
          <Link href="#partners">Partners</Link>
          <Link href="#drivers">Drivers</Link>
          <Link href="#resources">Resources</Link>
        </nav>

        <Link href="#contact" className="cta-outline light">
          Connect
        </Link>
      </div>
    </header>
  );
}
