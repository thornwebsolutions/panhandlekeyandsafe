import { Button } from "@/components/ui/Button";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout246() {
  return (
    <section id="relume" className="bg-brand-navy-dark px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 lg:mb-20 lg:gap-x-20">
          <div>
            <h2 className="text-4xl font-bold leading-[1.2] text-brand-off-white md:text-5xl lg:text-6xl">
              Safe security you can trust
            </h2>
          </div>
          <div>
            <p className="text-brand-off-white/80 md:text-md">
              A locked safe means nothing if you cannot open it when you need
              to. We service all safe types and brands. Our locksmiths know the
              work and do it right.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 lg:gap-x-12">
          <div>
            <div className="mb-5 md:mb-6">
              <img
                src="/images/icons/open-safe.png"
                className="size-12"
                alt="Safe opening icon"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold text-brand-off-white md:mb-4 md:text-2xl">
              Safe opening and repair
            </h3>
            <p className="text-brand-off-white/80">We open safes without damage and fix what is broken.</p>
          </div>
          <div>
            <div className="mb-5 md:mb-6">
              <img
                src="/images/icons/install.png"
                className="size-12"
                alt="Safe installation icon"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold text-brand-off-white md:mb-4 md:text-2xl">
              Safe installation and relocation
            </h3>
            <p className="text-brand-off-white/80">Moving a safe takes skill and the right equipment.</p>
          </div>
          <div>
            <div className="mb-5 md:mb-6">
              <img
                src="/images/icons/emergency.png"
                className="size-12"
                alt="Emergency safe access icon"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold text-brand-off-white md:mb-4 md:text-2xl">
              Emergency safe access
            </h3>
            <p className="text-brand-off-white/80">Locked out of your safe? We come fast and get you in.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
