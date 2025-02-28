import type { Metadata } from "next";
import { Arsenal } from "next/font/google";
import "./globals.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const arsenal = Arsenal({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-arsenal',
});

export const metadata: Metadata = {
  title: "IBIEA 2025",
  description: "IBIEA 2025 - International Business Innovation and Excellence Awards 2025",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${arsenal.variable} font-arsenal antialiased overflow-x-hidden`}
      >
        <Nav />
        <main className="bg-[#F6E3DB]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
