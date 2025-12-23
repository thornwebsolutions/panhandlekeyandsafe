import { Button } from "@/components/ui/Button";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout198() {
  return (
    <section id="relume" className="bg-brand-navy px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <img
              src="/images/batman.jpg"
              className="w-full object-cover"
              alt="Emergency locksmith service"
            />
          </div>
          <div className="order-1 md:order-2">
            <p className="mb-3 font-semibold text-brand-red-light md:mb-4">Emergency</p>
            <h2 className="mb-5 text-5xl font-bold text-brand-off-white md:mb-6 md:text-7xl lg:text-8xl">
              Fast lockout response when you need it
            </h2>
            <p className="mb-6 text-brand-off-white/80 md:mb-8 md:text-md">
              Locked out of your office or retail space? We arrive quickly and
              get you back inside without damage. Our emergency rekeying handles
              situations where keys are lost or security is compromised.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 lg:grid-cols-2">
              <div>
                <h6 className="mb-3 text-md font-bold leading-[1.4] text-brand-off-white md:mb-4 md:text-xl">
                  Rapid arrival
                </h6>
                <p className="text-brand-off-white/80">No damage to doors or locks during entry</p>
              </div>
              <div>
                <h6 className="mb-3 text-md font-bold leading-[1.4] text-brand-off-white md:mb-4 md:text-xl">
                  Complete rekeying
                </h6>
                <p className="text-brand-off-white/80">New keys issued and old ones rendered useless</p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button title="Contact Us" href="/contact">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
