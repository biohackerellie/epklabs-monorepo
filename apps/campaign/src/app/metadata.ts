import type { Metadata } from "next";

export const meta: Metadata = {
  metadataBase: new URL("https://elliekerns.com"),
  title: "Ellie Kerns for Montana",
  description: "Ellie Kerns is running for Montana House District 53.",
  category: "politics",
  keywords: [
    "Ellie Kerns",
    "Montana",
    "politics",
    "elections",
    "2024",
    "Demecratic Socialist",
    "LGBTQIA+",
  ],
  authors: [{ name: "Ellie Kerns", url: "https://github.com/biohackerellie" }],
  creator: "Ellie Kerns",
  publisher: "Ellie Kerns",

  openGraph: {
    title: "Ellie Kerns for Montana",
    description: "Ellie Kerns is running for Montana House District 53.",
    url: "https://elliekerns.com",
    siteName: "Ellie Kerns for Montana",
    images: ["/images/epk.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Ellie Kerns for Montana",
    description: "Ellie Kerns is running for Montana House District 53.",
    images: ["/images/epk.png"],
    creator: "@biohacker_ellie",
  },
  appleWebApp: {
    title: "Ellie Kerns for Montana",
    statusBarStyle: "black-translucent",
  },
};
