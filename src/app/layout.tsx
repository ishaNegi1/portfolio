import type { Metadata } from "next";
import "./globals.css";
import "@/styles/animations.css";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.vercel.app"),

  title: {
    default: "Isha Negi | Full Stack Developer",
    template: "%s | Isha Negi",
  },

  description:
    "Full Stack Developer specializing in React, Next.js, Node.js, PostgreSQL and AI-powered web applications.",

  keywords: [
    "Isha Negi",
    "Portfolio",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "PostgreSQL",
    "AI",
    "TypeScript",
  ],

  authors: [
    {
      name: "Isha Negi",
    },
  ],

  creator: "Isha Negi",

  openGraph: {
    title: "Isha Negi | Full Stack Developer",

    description:
      "Modern Full Stack Developer Portfolio",

    url: "https://your-domain.vercel.app",

    siteName: "Isha Negi Portfolio",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/og-image.png",

        width: 1200,

        height: 630,

        alt: "Isha Negi Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Isha Negi | Full Stack Developer",

    description:
      "Modern Full Stack Developer Portfolio",

    images: ["/og-image.png"],
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
    <html lang="en" suppressHydrationWarning>
      <body>
  {children}

  <Toaster
    richColors
    position="top-right"
    theme="dark"
    closeButton
  />
</body>
    </html>
  );
}