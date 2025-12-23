import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";

export const metadata: Metadata = {
  title: "Panhandle Key & Safe | Professional Locksmith Services",
  description: "Professional locksmith services for automotive, residential, and commercial needs in Panama City, Florida.",
  icons: {
    icon: "/images/favicon.png",
  },
  openGraph: {
    title: "Panhandle Key & Safe | Professional Locksmith Services",
    description: "Professional locksmith services for automotive, residential, and commercial needs in Panama City, Florida.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Panhandle Key & Safe",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
