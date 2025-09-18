import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PageTransition from "./components/PageTransition";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://mannjadwani.in";
const siteName = "Mann Jadwani";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mann Jadwani - Portfolio | AI, Product & Full-Stack",
    template: "%s | Mann Jadwani",
  },
  description:
    "Tech builder and AI product lead turning ambitious ideas into scalable products. Full‑stack, AI, automation, and data platforms.",
  keywords: [
    "Mann Jadwani",
    "AI",
    "Product",
    "Full-Stack Developer",
    "Next.js",
    "React",
    "Automation",
    "NeuralARC",
    "DebtCircle",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    title: "Mann Jadwani - Portfolio",
    description:
      "AI, product and full‑stack engineering. Projects across automation, data platforms and blockchain.",
    images: [
      {
        url: "/vercel.svg",
        width: 1200,
        height: 630,
        alt: "Mann Jadwani Portfolio",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mann Jadwani - Portfolio",
    description:
      "AI, product and full‑stack engineering. Projects across automation, data platforms and blockchain.",
    images: ["/vercel.svg"],
    creator: "@mannjadwani",
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteName,
    url: siteUrl,
    jobTitle: "Head of Tech, Product Builder",
    worksFor: {
      "@type": "Organization",
      name: "NeuralARC",
    },
    sameAs: [
      "https://www.linkedin.com/in/mann-jadwani-3415b4238/",
      "https://github.com/mannjadwani",
      "https://instagram.com/developer_mannjadwani",
    ],
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <PageTransition>
        {children}
        </PageTransition>
      </body>
    </html>
  );
}
