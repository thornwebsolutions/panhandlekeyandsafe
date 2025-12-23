"use client";

import dynamic from "next/dynamic";
import React from "react";
import { Header9 } from "./components/Header9";
import { Layout4 } from "./components/Layout4";
import { Team16 } from "./components/Team16";
import { Cta25 } from "./components/Cta25";

const Timeline10 = dynamic(
  () => import("./components/Timeline10").then((mod) => mod.Timeline10),
  { ssr: false }
);

export default function Page() {
  return (
    <div>
      <Header9 />
      <Timeline10 />
      <Layout4 />
      <Team16 />
      <Cta25 />
    </div>
  );
}
