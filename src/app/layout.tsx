
export const metadata = {
  title: "Free State Tax Returns",
  description: "Convert your Federal return into a State return using AI — for free."
};

import "./globals.css";
import Image from "next/image";
import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <div className="header-inner">
            <Image
              src="/logo.png"
              alt="Free State Tax Returns"
              width={140}
              height={140}
              style={{ height: "56px", width: "auto" }}
              priority
            />
          </div>
        </header>

        {children}

        <footer className="footer">
          <div className="footer-inner">
            <div>© 2025 Free State Tax Return, Inc., Patent Pending Technology</div>
            <nav className="footer-nav">
              <Link href="/privacy">Privacy Policy</Link>
              <span>•</span>
              <Link href="/terms">Terms &amp; Conditions</Link>
              <span>•</span>
              <a href="https://freestatetaxreturn.com/blog" target="_blank" rel="noopener">Blog</a>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
