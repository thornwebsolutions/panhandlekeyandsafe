import { Button } from "@/components/ui/Button";
import React from "react";

export function Layout1() {
  return (
    <section id="relume" className="bg-brand-red px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold text-brand-off-white md:mb-4">Access</p>
            <h1 className="rb-5 mb-5 text-5xl font-bold text-brand-off-white md:mb-6 md:text-7xl lg:text-8xl">
              Master key systems for complete control
            </h1>
            <p className="text-brand-off-white/80 md:text-md">
              Manage your entire property with one system. We design and install
              master key solutions that give you control without the burden of
              carrying dozens of keys.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Contact Us" variant="primary-white" href="/contact">
                Contact Us
              </Button>
            </div>
          </div>
          <div>
            <img
              src="/images/access-control.png"
              className="w-full object-cover"
              alt="Master key systems"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
