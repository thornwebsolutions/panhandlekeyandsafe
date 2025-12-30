import { Button } from "@/components/ui/Button";
import React from "react";

export function Layout4() {
  return (
    <section id="relume" className="bg-brand-off-white px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold text-brand-red md:mb-4">Owners</p>
            <h1 className="rb-5 mb-5 text-5xl font-bold text-brand-navy-dark md:mb-6 md:text-7xl lg:text-8xl">
              The people behind the locks
            </h1>
            <p className="mb-6 text-brand-charcoal md:mb-8 md:text-md">
              We built this business on a simple principle: show up, do the work
              right, and treat people the way we'd want to be treated. That's
              still how we operate.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h6 className="mb-3 text-md font-bold leading-[1.4] text-brand-navy-dark md:mb-4 md:text-xl">
                  Kimber Taylor
                </h6>
                <p className="text-brand-charcoal">
                  Kimber grew up around the shop—her mother Judy started as bookkeeper back in 2002 when Kimber was just six years old. After Judy's passing in 2023, Kimber stepped into her role and, alongside Dallas, became co-owner at the end of 2025.
                </p>
              </div>
              <div>
                <h6 className="mb-3 text-md font-bold leading-[1.4] text-brand-navy-dark md:mb-4 md:text-xl">
                  Dallas Taylor
                </h6>
                <p className="text-brand-charcoal">
                  Dallas handles safe sales and moves, manages our social media, and works as a locksmith. Together with Kimber, they're continuing the legacy of Panhandle Key.
                </p>
              </div>
            </div>
                      </div>
          <div>
            <img
              src="/images/owners.jpg"
              className="w-full object-cover"
              alt="Dallas and Kimber Taylor, owners"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
