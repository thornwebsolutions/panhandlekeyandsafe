import { Button } from "@/components/ui/Button";
import React from "react";

export function Cta1() {
  return (
    <section id="relume" className="bg-brand-off-white px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="rb-5 mb-5 text-5xl font-bold text-brand-navy-dark md:mb-6 md:text-7xl lg:text-8xl">
              Get help from a locksmith who cares
            </h2>
            <p className="text-brand-charcoal md:text-md">
              We're ready when you need us. One call and we handle the rest.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button title="Residential" href="/residential-locksmith">Residential</Button>
              <Button title="Commercial" variant="secondary" href="/commercial-locksmith">
                Commercial
              </Button>
            </div>
          </div>
          <div>
            <img
              src="/images/batman.jpg"
              className="w-full object-cover"
              alt="Locksmith service"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
