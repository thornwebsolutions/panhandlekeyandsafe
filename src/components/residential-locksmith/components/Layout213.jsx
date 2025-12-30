import { Button } from "@/components/ui/Button";
import React from "react";

export function Layout213() {
  return (
    <section id="relume" className="bg-brand-navy-dark px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <img
              src="/images/key wall 2.jpg"
              className="w-full object-cover"
              alt="Wall of keys"
            />
          </div>
          <div className="order-1 md:order-2">
            <div className="mb-5 md:mb-6">
              <img
                src="/images/icons/doorknob.png"
                className="size-20"
                alt="Doorknob"
              />
            </div>
            <h2 className="mb-5 text-5xl font-bold text-brand-off-white md:mb-6 md:text-7xl lg:text-8xl">
              Keys for every lock
            </h2>
            <p className="text-brand-off-white/80 md:text-md">
              From standard house keys to high-security options, we cut and program keys for virtually any lock. Our wall of blanks means we likely have the key you need in stock and ready to go.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button title="Request Quote" href="/contact">
                Request Quote
              </Button>
              <Button title="Safe Services" variant="secondary-light" href="/safes">
                Safe Services
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
