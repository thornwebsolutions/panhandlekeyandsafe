import { Button } from "@/components/ui/Button";
import React from "react";

export function Layout41() {
  return (
    <section id="relume" className="bg-brand-red px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold text-brand-off-white md:mb-4">Locked</p>
            <h2 className="text-5xl font-bold text-brand-off-white md:text-7xl lg:text-8xl">
              Car lockout help
            </h2>
          </div>
          <div>
            <p className="text-brand-off-white/80 md:text-md">
              Stranded outside your vehicle? We unlock any make or model fast.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Contact Us" variant="primary-white" href="/contact">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
