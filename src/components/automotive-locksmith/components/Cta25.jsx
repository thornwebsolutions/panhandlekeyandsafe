import { Button } from "@/components/ui/Button";
import React from "react";

export function Cta25() {
  return (
    <section id="relume" className="bg-brand-red px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg text-center">
        <h2 className="rb-5 mb-5 text-5xl font-bold text-brand-off-white md:mb-6 md:text-7xl lg:text-8xl">
          Don't stay locked out
        </h2>
        <p className="text-brand-off-white/80 md:text-md">
          We answer the phone and we come out. Simple as that.
        </p>
        <div className="mt-6 flex items-center justify-center gap-4 md:mt-8">
          <Button title="Call Now" variant="primary-white" href="tel:+18507693030">Call Now</Button>
        </div>
      </div>
    </section>
  );
}
