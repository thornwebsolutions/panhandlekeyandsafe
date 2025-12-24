import { Metadata } from "next";
import Page from "@/components/contact";

export const metadata: Metadata = {
  title: "Contact Us | Panhandle Key & Safe - Panama City, FL Locksmith",
  description: "Contact Panhandle Key & Safe for locksmith services in Panama City, FL. Call (850) 769-3030 or visit us at 1316 Jenks Ave. Fast, reliable service.",
  openGraph: {
    title: "Contact Us | Panhandle Key & Safe",
    description: "Contact Panhandle Key & Safe for locksmith services in Panama City, FL. Call (850) 769-3030 or visit us at 1316 Jenks Ave. Fast, reliable service.",
  },
};

export default function ContactPage() {
  return <Page />;
}
