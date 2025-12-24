import { Metadata } from "next";
import Page from "@/components/about";

export const metadata: Metadata = {
  title: "About Us | Panhandle Key & Safe - Panama City Locksmith Since 1984",
  description: "Family-owned locksmith serving Panama City since 1984. Meet the team behind Panhandle Key & Safe and discover our 40+ years of trusted service.",
  openGraph: {
    title: "About Us | Panhandle Key & Safe",
    description: "Family-owned locksmith serving Panama City since 1984. Meet the team behind Panhandle Key & Safe and discover our 40+ years of trusted service.",
  },
};

export default function AboutPage() {
  return <Page />;
}
