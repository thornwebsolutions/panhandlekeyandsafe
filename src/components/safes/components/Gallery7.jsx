import React from "react";

export function Gallery7() {
  return (
    <section id="safes-gallery" className="bg-brand-off-white px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-5xl font-bold text-brand-navy-dark md:mb-6 md:text-7xl lg:text-8xl">
            Browse Our Safes
          </h2>
          <p className="text-brand-charcoal md:text-md">Find the perfect safe for your home or business</p>
        </div>
        <div className="grid auto-cols-fr justify-center gap-6 md:grid-cols-2 md:gap-8">
          <div className="w-full col-start-1 col-end-2 row-start-1 row-end-3">
            <div className="relative size-full pt-[100%]">
              <img
                src="/images/safes-4.webp"
                alt="Safe services"
                className="absolute inset-0 size-full object-cover"
              />
            </div>
          </div>
          <div className="w-full">
            <div className="relative size-full pt-[56.25%]">
              <img
                src="/images/safes.jpg"
                alt="Safe locksmith services"
                className="absolute inset-0 size-full object-cover"
              />
            </div>
          </div>
          <div className="w-full">
            <div className="relative size-full pt-[56.25%]">
              <img
                src="/images/safes-5.jpg"
                alt="Safe installation"
                className="absolute inset-0 size-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
