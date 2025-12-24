import { Button } from "@/components/ui/Button";
import Image from "next/image";
import React from "react";

export function Cta31() {
  return (
    <section id="relume" className="bg-brand-navy px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container flex flex-col items-center">
        <div className="mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold text-brand-off-white md:mb-6 md:text-7xl lg:text-8xl">
            Need a locksmith right now?
          </h2>
          <p className="text-brand-off-white/80 md:text-md">
            Don't wait. Call us and we'll get moving. Fast, reliable, and ready
            for whatever you're facing.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
            <Button title="Call Now" href="tel:+18507693030">Call Now</Button>
            <Button title="Email Us" variant="secondary-light" href="/contact">
              Email Us
            </Button>
          </div>
        </div>
        <div className="relative aspect-[16/9] w-full">
          <Image
            src="/images/van.jpg"
            fill
            className="object-cover"
            alt="Panhandle Key & Safe service van"
            sizes="100vw"
          />
        </div>
      </div>
    </section>
  );
}
