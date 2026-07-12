import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Isha Negi | Full Stack Developer",

  description:
    "Full Stack Developer specializing in React, Next.js, Node.js, PostgreSQL and AI-powered applications.",

  keywords: [
    "Isha Negi",
    "Portfolio",
    "Full Stack Developer",
    "Next.js",
    "React",
    "Node.js",
    "TypeScript",
  ],

  authors: [
    {
      name: "Isha Negi",
    },
  ],

  creator: "Isha Negi",

  openGraph: {
    title: "Isha Negi Portfolio",
    description:
      "Modern Full Stack Developer Portfolio",
    type: "website",
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}