"use client";

import dynamic from "next/dynamic";
import React from "react";
import { Header36 } from "./components/Header36";
import { Layout358 } from "./components/Layout358";
import { Layout213 } from "./components/Layout213";
import { Testimonial17 } from "./components/Testimonial17";
import { Cta25 } from "./components/Cta25";

const Layout415 = dynamic(
  () => import("./components/Layout415").then((mod) => mod.Layout415),
  { ssr: false }
);

export default function Page() {
  return (
    <div>
      <Header36 />
      <Layout358 />
      <Layout415 />
      <Layout213 />
      <Testimonial17 />
      <Cta25 />
    </div>
  );
}
