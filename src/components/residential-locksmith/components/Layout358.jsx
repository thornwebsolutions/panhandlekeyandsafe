import { Button } from "@/components/ui/Button";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout358() {
  return (
    <section id="relume" className="bg-brand-navy px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold text-brand-red-light md:mb-4">Access</p>
            <h2 className="rb-5 mb-5 text-5xl font-bold text-brand-off-white md:mb-6 md:text-7xl lg:text-8xl">
              Locked out of your house
            </h2>
            <p className="text-brand-off-white/80 md:text-md">
              We get you back inside without breaking anything
            </p>
          </div>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 border border-brand-off-white/20 md:grid-cols-2">
          <div className="flex flex-col justify-center bg-brand-navy p-6 md:p-8 lg:p-12">
            <div>
              <p className="mb-2 text-sm font-semibold text-brand-red-light">Fast</p>
              <h3 className="mb-5 text-4xl font-bold leading-[1.2] text-brand-off-white md:mb-6 md:text-5xl lg:text-6xl">
                We arrive quickly and work efficiently
              </h3>
              <p className="text-brand-off-white/80">
                Home lockouts happen when you least expect them. We use proven
                techniques to open your door safely, protecting your frame and
                lock. Most jobs take less than thirty minutes.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Automotive" href="/automotive-locksmith">
                Automotive
              </Button>
              <Button title="Commercial" variant="secondary-light" href="/commercial-locksmith">
                Commercial
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="/images/van.jpg"
              className="size-full object-cover"
              alt="Panhandle Key & Safe service van"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
