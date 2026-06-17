import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "Industries", href: "#industries" },
  { label: "Products", href: "#products" },
  { label: "Partners", href: "#partners" },
  { label: "Drivers", href: "#drivers" },
  { label: "Resources", href: "#resources" },
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="utility-bar">
        <div className="container utility-inner">
          <nav className="utility-links">
            <Link href="#shop">Shop</Link>
            <Link href="#stations">Find Stations</Link>
            <Link href="#support">Support</Link>
          </nav>
        </div>
      </div>

      <div className="main-nav">
        <div className="container main-nav-inner">
          <Link href="/" className="brand">
            <Image
              src="/logo.jpg"
              alt="Faster EV Charge Now"
              width={180}
              height={56}
              priority
            />
          </Link>

          <nav className="primary-nav">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href}>
                {item.label}
                <span className="caret">▾</span>
              </Link>
            ))}
          </nav>

          <Link href="#contact" className="cta-outline">
            Connect With an Expert
          </Link>
        </div>
      </div>
    </header>
  );
}
