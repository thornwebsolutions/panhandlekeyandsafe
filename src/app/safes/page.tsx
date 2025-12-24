import { Metadata } from "next";
import Page from "@/components/safes";

export const metadata: Metadata = {
  title: "Safe Services | Safe Opening & Installation - Panama City, FL",
  description: "Safe locksmith services in Panama City. Safe opening, installation, combination changes & repairs. Authorized Hollon dealer. Call (850) 769-3030.",
  openGraph: {
    title: "Safe Services | Panhandle Key & Safe",
    description: "Safe locksmith services in Panama City. Safe opening, installation, combination changes & repairs. Authorized Hollon dealer. Call (850) 769-3030.",
  },
};

export default function SafesPage() {
  return <Page />;
}
