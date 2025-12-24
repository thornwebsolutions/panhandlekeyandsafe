import { Metadata } from "next";
import Page from "@/components/commercial-locksmith";

export const metadata: Metadata = {
  title: "Commercial Locksmith | Business Security Solutions - Panama City, FL",
  description: "Secure your business with Panhandle Key & Safe. Master key systems, access control, and commercial lock services in Panama City. Licensed & insured.",
  openGraph: {
    title: "Commercial Locksmith | Panhandle Key & Safe",
    description: "Secure your business with Panhandle Key & Safe. Master key systems, access control, and commercial lock services in Panama City. Licensed & insured.",
  },
};

export default function CommercialLocksmithPage() {
  return <Page />;
}
