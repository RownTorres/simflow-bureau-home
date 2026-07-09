import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://simflowbureau.com"),
  title: {
    default: "Simflow Bureau - AI, CRM & Business Automation Agency",
    template: "%s | Simflow Bureau",
  },
  description:
    "We build AI-powered systems that capture leads, automate follow-up, and turn more prospects into customers. CRM implementation, AI employees, and workflow automation for growing businesses.",
  keywords: [
    "business automation",
    "CRM setup",
    "GoHighLevel",
    "AI employees",
    "workflow automation",
    "sales funnels",
    "lead automation",
    "Simflow Bureau",
  ],
  authors: [{ name: "Roanne Torres" }],
  creator: "Roanne Torres",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Simflow Bureau - AI, CRM & Business Automation Agency",
    description:
      "Intelligent systems that save you time, eliminate repetitive work, and turn more leads into customers.",
    url: "/",
    type: "website",
    siteName: "Simflow Bureau",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Simflow Bureau - AI, CRM & Business Automation Agency",
    description:
      "Intelligent systems that save you time, eliminate repetitive work, and turn more leads into customers.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
