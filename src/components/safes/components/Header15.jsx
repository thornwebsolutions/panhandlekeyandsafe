import { Button } from "@/components/ui/Button";
import React from "react";

export function Header15() {
  return (
    <section id="relume" className="bg-brand-off-white px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 grid grid-cols-1 items-start gap-x-12 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-y-8 lg:mb-20 lg:gap-x-20 lg:gap-y-16">
          <div>
            <h1 className="text-6xl font-bold text-brand-navy-dark md:text-9xl lg:text-10xl">
              Safe Sales & Service
            </h1>
          </div>
          <div>
            <p className="text-brand-charcoal md:text-md">
              Buy the Newest Safe on the Market With Panhandle Key & Safe right here in Panama City Florida!
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button title="Call Now" href="tel:+18507693030">Call Now</Button>
              <Button title="View Safes" variant="secondary" href="#safes-gallery">
                View Safes
              </Button>
            </div>
          </div>
        </div>
        <div>
          <img
            src="/images/safe 2.jpg"
            className="w-full max-h-[400px] md:max-h-[500px] object-cover"
            alt="Safe services"
          />
        </div>
      </div>
    </section>
  );
}
