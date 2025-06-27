import type { Metadata } from "next";
import { AuthProvider } from "@/components/AuthProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nyxpro - Business Solutions & Innovation",
  description:
    "Nyxpro provides cutting-edge business solutions and innovative services to help your company thrive in the digital age.",
  keywords:
    "business solutions, innovation, technology, consulting, digital transformation",
  authors: [{ name: "Nyxpro Team" }],
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
      <body className="bg-black text-white antialiased geometric-bg">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
