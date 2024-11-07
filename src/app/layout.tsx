import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <header className="Header">
      <div className="GoToHome">
        <Link href="/">
          <p>양명게시판</p>
        </Link>
      </div>
    </header>
  );

  const footer = (
    <footer>
      <div className="Footer">
        <p>yangmyung</p>
      </div>
    </footer>
  );

  return (
    <html className="Page">
      <head/>
      <body className="Body">
        <div>{header}</div>
        <div>{children}</div>
        <div>{footer}</div>
      </body>
    </html>
  );
}
