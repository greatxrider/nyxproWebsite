import type { Metadata } from "next";
import { AuthProvider } from "@/components/AuthProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "NYXPRO",
  description:
    "Nyxpro is a cutting-edge AI agency specializing in AI automation, healthcare medical billing, data entry, accounting, and intelligent technology solutions to transform your business.",
  keywords:
    "AI agency, AI automation, artificial intelligence, machine learning, healthcare medical billing, digital transformation, AI solutions",
  authors: [{ name: "Nyxpro AI Agency" }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    other: [
      {
        rel: "android-chrome",
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
      },
      {
        rel: "android-chrome",
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
      },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Nyxpro - AI Agency | AI-Powered Solutions",
    description:
      "Transform your business with cutting-edge AI automation, healthcare medical billing, and intelligent technology solutions.",
    url: "https://nyxpro.us",
    siteName: "Nyxpro AI Agency",
    type: "website",
    images: [
      {
        url: "/Logo/nyxproLogo.jpg",
        width: 1200,
        height: 630,
        alt: "Nyxpro - AI-Powered Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nyxpro - AI Agency | AI-Powered Solutions",
    description:
      "Transform your business with cutting-edge AI automation, healthcare medical billing, and intelligent technology solutions.",
    images: ["/Logo/nyxproLogo.jpg"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-black text-white antialiased neural-bg">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
