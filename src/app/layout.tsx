import type { Metadata } from "next";
import { AuthProvider } from "@/components/AuthProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nyxpro - IT Consulting and Services",
  description:
    "Nyxpro is a cutting-edge IT consulting and services company specializing in software development, AI automation, and intelligent technology solutions to transform your business.",
  keywords:
    "IT consulting, software development, AI automation, artificial intelligence, machine learning, digital transformation, technology services",
  authors: [{ name: "Nyxpro IT Consulting and Services" }],
  openGraph: {
    title: "Nyxpro - IT Consulting and Services",
    description:
      "Transform your business with cutting-edge IT consulting, software development, and AI automation solutions.",
    url: "https://nyxpro.us",
    siteName: "Nyxpro IT Consulting and Services",
    type: "website",
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
