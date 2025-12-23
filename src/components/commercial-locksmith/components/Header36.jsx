import { Button } from "@/components/ui/Button";
import React from "react";

export function Header36() {
  return (
    <section
      id="relume"
      className="bg-brand-off-white grid grid-cols-1 items-center gap-y-16 pt-16 md:pt-24 lg:grid-cols-2 lg:pt-0"
    >
      <div className="mx-[5%] sm:max-w-md md:justify-self-start lg:ml-[5vw] lg:mr-20 lg:justify-self-end">
        <h1 className="mb-5 text-6xl font-bold text-brand-navy-dark md:mb-6 md:text-9xl lg:text-10xl">
          Business security matters
        </h1>
        <p className="text-brand-charcoal md:text-md">
          Protect your commercial property with professional locksmith services
          from Local Premium Locksmith
        </p>
        <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
          <Button title="Call Now" href="tel:+18507693030">Call Now</Button>
          <Button title="Our Results" variant="secondary" href="#results">
            Our Results
          </Button>
        </div>
      </div>
      <div>
        <img
          src="/images/commercial.jpg"
          alt="Commercial locksmith services"
          className="w-full object-cover lg:h-screen lg:max-h-[60rem]"
        />
      </div>
    </section>
  );
}
