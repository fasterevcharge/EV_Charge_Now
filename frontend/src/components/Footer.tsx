import Link from "next/link";

const columns = [
  {
    title: "Company",
    links: ["About", "Careers", "Newsroom", "Contact"],
  },
  {
    title: "Solutions",
    links: ["Fleet", "Workplace", "Commercial", "Multifamily"],
  },
  {
    title: "Drivers",
    links: ["Find Stations", "Mobile App", "Pricing", "Support"],
  },
  {
    title: "Resources",
    links: ["Blog", "Case Studies", "Documentation", "Help Center"],
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
                <li key={l}>
                  <Link href="#">{l}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>© {new Date().getFullYear()} Faster EV Charge Now</span>
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
