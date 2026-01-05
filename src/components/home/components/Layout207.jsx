import { Button } from "@/components/ui/Button";
import Image from "next/image";
import React from "react";
import { BiHeart, BiMap, BiStar } from "react-icons/bi";

export function Layout207() {
  return (
    <section id="relume" className="bg-brand-off-white px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          <div className="order-2 md:order-1 relative aspect-[4/3] w-full">
            <Image
              src="/images/tim-front.jpg"
              fill
              className="object-cover"
              alt="Reliable locksmith service"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="order-1 md:order-2">
            <p className="mb-3 font-semibold text-brand-red md:mb-4">Reliable</p>
            <h2 className="mb-5 text-5xl font-bold text-brand-navy-dark md:mb-6 md:text-7xl lg:text-8xl">
              Service you can count on
            </h2>
            <p className="mb-5 text-brand-charcoal md:mb-6 md:text-md">
              When you need a locksmith, you need someone who shows up and gets
              the job done right. That's what we've built our reputation on in Panama City.
            </p>
            <div className="grid grid-cols-1 gap-4 py-2">
              <div className="flex items-center">
                <div className="mr-4 flex-none">
                  <BiHeart className="size-6 text-brand-red" />
                </div>
                <p>Family-owned and operated</p>
              </div>
              <div className="flex items-center">
                <div className="mr-4 flex-none">
                  <BiMap className="size-6 text-brand-red" />
                </div>
                <p>Serving Panama City since 1984</p>
              </div>
              <div className="flex items-center">
                <div className="mr-4 flex-none">
                  <BiStar className="size-6 text-brand-red" />
                </div>
                <p>Thousands of satisfied customers</p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button title="About" href="/about">
                About
              </Button>
              <Button title="Contact" variant="secondary" href="/contact">
                Contact
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
