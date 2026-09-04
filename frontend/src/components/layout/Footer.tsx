import Link from "next/link";
import { brand, nav, contact } from "@/content/site";

const columns = [
  {
    title: "Faster EV ChargeNow",
    links: nav.map((n) => ({ label: n.label, href: n.href })),
  },
  {
    title: "Drivers",
    links: [
      { label: "How it works", href: "/drivers#steps" },
      { label: "Find stations", href: "/drivers#stations" },
      { label: "Vehicle compatibility", href: "/drivers#benefits" },
    ],
  },
  {
    title: "Property Owners",
    links: [
      { label: "Revenue model", href: "/property-owners#revenue" },
      { label: "Partnership", href: "/property-owners#partnership" },
      { label: "Get evaluated", href: "/contact" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "Get in Touch", href: "/get-in-touch" },
      { label: contact.email, href: "/get-in-touch" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        {columns.map((col) => (
          <div key={col.title} className="footer-col">
            <h4>{col.title}</h4>
            <ul>
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>© {new Date().getFullYear()} {brand.name}</span>
          <div className="legal-links">
            <Link href="#">Privacy</Link>
            <Link href="#">Terms</Link>
            <Link href="#">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
