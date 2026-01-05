import { Metadata } from "next";
import Page from "@/components/commercial-locksmith";

export const metadata: Metadata = {
  title: "Commercial Locksmith | Business Security Solutions - Panama City, FL",
  description: "Secure your business with Panhandle Key & Safe. Master key systems, access control, and commercial lock services in Panama City. Licensed & insured.",
  openGraph: {
    title: "Commercial Locksmith | Panhandle Key & Safe",
    description: "Secure your business with Panhandle Key & Safe. Master key systems, access control, and commercial lock services in Panama City. Licensed & insured.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Commercial Locksmith Services - Panhandle Key & Safe",
      },
    ],
  },
};

export default function CommercialLocksmithPage() {
  return <Page />;
}
