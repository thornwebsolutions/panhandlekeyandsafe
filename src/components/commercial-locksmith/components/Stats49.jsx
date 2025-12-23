import { Button } from "@/components/ui/Button";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Stats49() {
  return (
    <section id="results" className="bg-brand-off-white px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 lg:mb-20 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold text-brand-red md:mb-4">Results</p>
            <h2 className="text-5xl font-bold text-brand-navy-dark md:text-7xl lg:text-8xl">
              Numbers that show our commitment
            </h2>
          </div>
          <div>
            <p className="text-brand-charcoal md:text-md">
              We've secured hundreds of commercial properties across Panama
              City. Our response times are measured in minutes, not hours. Years
              of experience mean we know what works and what doesn't.
            </p>
                      </div>
        </div>
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
          <div className="border border-brand-light-blue bg-brand-white p-8 text-center">
            <p className="mb-2 text-10xl font-bold leading-[1.3] text-brand-red md:text-[4rem] lg:text-[5rem]">
              1000s
            </p>
            <h3 className="text-md font-bold leading-[1.4] text-brand-navy-dark md:text-xl">
              Locks installed
            </h3>
          </div>
          <div className="border border-brand-light-blue bg-brand-white p-8 text-center">
            <p className="mb-2 text-10xl font-bold leading-[1.3] text-brand-red md:text-[4rem] lg:text-[5rem]">
              100%
            </p>
            <h3 className="text-md font-bold leading-[1.4] text-brand-navy-dark md:text-xl">
              Licensed & insured
            </h3>
          </div>
          <div className="border border-brand-light-blue bg-brand-white p-8 text-center">
            <p className="mb-2 text-10xl font-bold leading-[1.3] text-brand-red md:text-[4rem] lg:text-[5rem]">
              40+
            </p>
            <h3 className="text-md font-bold leading-[1.4] text-brand-navy-dark md:text-xl">
              Years trusted
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
