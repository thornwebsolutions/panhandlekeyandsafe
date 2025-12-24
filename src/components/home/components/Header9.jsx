import { Button } from "@/components/ui/Button";
import Image from "next/image";
import React from "react";

export function Header9() {
  return (
    <section id="relume" className="bg-brand-off-white flex h-svh min-h-svh flex-col">
      <div className="relative flex-1">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/grand-opening.jpg"
            alt="Panhandle Key & Safe grand opening"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </div>
      <div className="px-[5%]">
        <div className="container relative z-10">
          <div className="grid grid-rows-1 items-start gap-y-5 py-12 md:grid-cols-2 md:gap-x-12 md:gap-y-8 md:py-18 lg:gap-x-20 lg:gap-y-16 lg:py-20">
            <div>
              <h1 className="text-6xl font-bold text-brand-navy-dark md:text-9xl lg:text-10xl">
                Trusted local locksmith
              </h1>
            </div>
            <div>
              <p className="text-base text-brand-charcoal md:text-md">
                Panama City's premier locksmith since day one, serving our
                community with integrity
              </p>
              <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                <Button title="Call Now" href="tel:+18507693030">Call Now</Button>
                <Button title="The Team" variant="secondary" href="/about">
                  The Team
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
