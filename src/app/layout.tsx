import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aayushi Kumar | Software Engineer",
  description:
    "Aayushi Kumar is a software engineer with 9+ years of experience building backend systems, cloud infrastructure, and web applications. Explore projects, architecture, and engineering decisions.",
  keywords: [
    "Aayushi Kumar",
    "Software Engineer",
    "Backend Engineer",
    "Cloud Engineering",
    "AWS",
    "Next.js",
    "TypeScript",
    "Software Architecture",
  ],
  authors: [{ name: "Aayushi Kumar" }],
  openGraph: {
    title: "Aayushi Kumar | Software Engineer",
    description:
      "Software engineer with 9+ years of experience building backend systems, cloud infrastructure, and web applications.",
    type: "website",
    siteName: "Aayushi Kumar",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aayushi Kumar | Software Engineer",
    description:
      "Backend systems, cloud infrastructure, and web applications.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
