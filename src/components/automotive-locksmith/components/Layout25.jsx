import { Button } from "@/components/ui/Button";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout25() {
  return (
    <section id="new-keys" className="bg-brand-off-white px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold text-brand-red md:mb-4">Keys</p>
            <h2 className="mb-5 text-5xl font-bold text-brand-navy-dark md:mb-6 md:text-7xl lg:text-8xl">
              New keys made while you wait
            </h2>
            <p className="mb-6 text-brand-charcoal md:mb-8 md:text-md">
              Lost your keys or need a spare? We cut and program them on the
              spot. Transponder keys, smart fobs, standard cuts—we handle it
              all.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h3 className="mb-2 text-5xl font-bold text-brand-red md:text-7xl lg:text-8xl">
                  Fast
                </h3>
                <p className="text-brand-charcoal">Most keys ready in minutes, not days</p>
              </div>
              <div>
                <h3 className="mb-2 text-5xl font-bold text-brand-red md:text-7xl lg:text-8xl">
                  Complete
                </h3>
                <p className="text-brand-charcoal">All makes and models covered</p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Order Now" href="/contact">
                Order Now
              </Button>
            </div>
          </div>
          <img
            src="/images/key-cutter.png"
            className="w-full object-cover"
            alt="Key cutting services"
          />
        </div>
      </div>
    </section>
  );
}
