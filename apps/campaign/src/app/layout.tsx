import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import { GeistSans } from "geist/font/sans";

import Footer from "@/components/Footer";

import "./globals.css";

export { meta as metadata } from "./metadata";

export const viewport: Viewport = {
  themeColor: "black",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={GeistSans.className}>
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
