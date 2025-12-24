import { Metadata } from "next";
import Page from "@/components/automotive-locksmith";

export const metadata: Metadata = {
  title: "Automotive Locksmith | Car Lockouts & Key Replacement - Panama City, FL",
  description: "Car lockout? Lost keys? Panhandle Key & Safe provides fast automotive locksmith services in Panama City. All makes and models. Call (850) 769-3030.",
  openGraph: {
    title: "Automotive Locksmith | Panhandle Key & Safe",
    description: "Car lockout? Lost keys? Panhandle Key & Safe provides fast automotive locksmith services in Panama City. All makes and models. Call (850) 769-3030.",
  },
};

export default function AutomotiveLocksmithPage() {
  return <Page />;
}
