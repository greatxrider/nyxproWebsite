import type { Metadata } from "next";
import { AuthProvider } from "@/components/AuthProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nyxpro - AI Agency & IT Consulting",
  description:
    "Nyxpro is a cutting-edge AI agency specializing in IT consulting, software development, and intelligent automation solutions to transform your business.",
  keywords:
    "AI agency, IT consulting, software development, AI automation, artificial intelligence, machine learning, digital transformation",
  authors: [{ name: "Nyxpro AI Team" }],
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
