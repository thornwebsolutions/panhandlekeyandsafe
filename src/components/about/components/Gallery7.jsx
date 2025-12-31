import React from "react";

export function Gallery7() {
  return (
    <section id="our-story" className="bg-brand-navy px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid auto-cols-fr justify-center gap-6 md:grid-cols-2 md:gap-8">
          <div className="w-full col-start-1 col-end-2 row-start-1 row-end-3">
            <div className="relative size-full pt-[100%]">
              <img
                src="/images/old-1.jpg"
                alt="Original Panhandle Key storefront"
                className="absolute inset-0 size-full object-cover"
              />
            </div>
          </div>
          <div className="w-full">
            <div className="relative size-full pt-[56.25%]">
              <img
                src="/images/old-2.webp"
                alt="Early days of Panhandle Key"
                className="absolute inset-0 size-full object-cover"
              />
            </div>
          </div>
          <div className="w-full">
            <div className="relative size-full pt-[56.25%]">
              <img
                src="/images/store front.jpg"
                alt="Panhandle Key storefront"
                className="absolute inset-0 size-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
