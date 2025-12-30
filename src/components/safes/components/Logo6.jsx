import { Button } from "@/components/ui/Button";
import React from "react";

export function Logo6() {
  return (
    <section id="relume" className="bg-brand-navy px-[5%] py-12 md:py-16 lg:py-20">
      <div className="container">
        <h2 className="mx-auto mb-3 w-full max-w-lg text-center text-4xl font-bold leading-[1.2] text-brand-off-white md:mb-4 md:text-5xl lg:text-6xl">
          Trusted safe brands
        </h2>
        <p className="mx-auto mb-8 max-w-lg text-center text-brand-off-white/80 md:mb-10 lg:mb-12">
          We carry and service the most reliable safe brands in the industry
        </p>
        <div className="grid grid-cols-3 gap-2">
          <div className="flex w-full items-center justify-center bg-brand-light-blue px-4 py-6 md:py-8">
            <img src="/images/hollon-logo.png" alt="Hollon Safes" className="h-12 w-auto object-contain md:h-16 lg:h-20" />
          </div>
          <div className="flex w-full items-center justify-center bg-brand-light-blue px-4 py-6 md:py-8">
            <img src="/images/Champion-Black.png" alt="Champion Safes" className="h-12 w-auto object-contain md:h-16 lg:h-20" />
          </div>
          <div className="flex w-full items-center justify-center bg-brand-light-blue px-4 py-6 md:py-8">
            <img src="/images/liberty.png" alt="Liberty Safe" className="h-12 w-auto object-contain md:h-16 lg:h-20" />
          </div>
        </div>
        <div className="mt-8 flex justify-center md:mt-10 lg:mt-12">
          <Button title="Order Now" href="/contact">
            Order Now
          </Button>
        </div>
      </div>
    </section>
  );
}
