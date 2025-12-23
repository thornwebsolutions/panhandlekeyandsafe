import { Button } from "@/components/ui/Button";
import React from "react";

export function Header9() {
  return (
    <section id="relume" className="bg-[#3B496E] flex h-svh min-h-svh flex-col">
      <div className="relative flex-1">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/new.jpg"
            alt="Panhandle Key & Safe storefront"
            className="absolute inset-0 size-full object-cover"
          />
        </div>
      </div>
      <div className="px-[5%]">
        <div className="container relative z-10">
          <div className="grid grid-rows-1 items-start gap-y-5 py-12 md:grid-cols-2 md:gap-x-12 md:gap-y-8 md:py-18 lg:gap-x-20 lg:gap-y-16 lg:py-20">
            <div>
              <h1 className="text-6xl font-bold text-brand-off-white md:text-9xl lg:text-10xl">
                A trusted name since 1984
              </h1>
            </div>
            <div>
              <p className="text-base text-brand-off-white/80 md:text-md">
                For more than four decades, this locally owned business has kept
                Panama City's homes, businesses, and vehicles secure with
                dependable locksmith and safe services.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                <Button title="Contact Us" href="/contact">Contact Us</Button>
                <Button title="Our Story" variant="secondary-light" href="#timeline">
                  Our Story
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
