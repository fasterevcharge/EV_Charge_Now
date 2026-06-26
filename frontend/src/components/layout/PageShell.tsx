import Header from "./Header";
import Footer from "./Footer";

/**
 * Standard inner-page shell: cursor effect, sticky header, content, footer.
 * Use this for every page except the cinematic homepage.
 */
export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
