import { Metadata } from "next";
import Page from "@/components/residential-locksmith";

export const metadata: Metadata = {
  title: "Residential Locksmith | Home Lock Services - Panama City, FL",
  description: "Protect your home with Panhandle Key & Safe. Lock installation, rekeying, and emergency lockout services in Panama City, FL. Call (850) 769-3030.",
  openGraph: {
    title: "Residential Locksmith | Panhandle Key & Safe",
    description: "Protect your home with Panhandle Key & Safe. Lock installation, rekeying, and emergency lockout services in Panama City, FL. Call (850) 769-3030.",
  },
};

export default function ResidentialLocksmithPage() {
  return <Page />;
}
