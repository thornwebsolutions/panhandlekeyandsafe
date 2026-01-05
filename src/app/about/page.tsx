import { Metadata } from "next";
import Page from "@/components/about";

export const metadata: Metadata = {
  title: "About Us | Panhandle Key & Safe - Panama City Locksmith Since 1984",
  description: "Family-owned locksmith serving Panama City since 1984. Meet the team behind Panhandle Key & Safe and discover our 40+ years of trusted service.",
  openGraph: {
    title: "About Us | Panhandle Key & Safe",
    description: "Family-owned locksmith serving Panama City since 1984. Meet the team behind Panhandle Key & Safe and discover our 40+ years of trusted service.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "About Panhandle Key & Safe",
      },
    ],
  },
};

export default function AboutPage() {
  return <Page />;
}
