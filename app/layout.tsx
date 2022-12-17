import "./globals.css";
import { Nav } from "../components";
import AnimatePresence from "../components/AnimatePresence";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <header>
          <Nav />
        </header>
        <main>
          <AnimatePresence>{children}</AnimatePresence>
        </main>
      </body>
    </html>
  );
}
