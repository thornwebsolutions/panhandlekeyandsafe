import { Button } from "@/components/ui/Button";
import Image from "next/image";
import React, { Fragment } from "react";

export function Stats53() {
  return (
    <section id="relume" className="bg-brand-navy-dark px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 lg:mb-20 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold text-brand-red-light md:mb-4">Numbers</p>
            <h2 className="text-5xl font-bold text-brand-off-white md:text-7xl lg:text-8xl">
              What we've built in Panama City
            </h2>
          </div>
          <div>
            <p className="text-brand-off-white/80 md:text-md">
              Years matter in this work. We've earned trust through consistent
              service and real results. The numbers tell the story of a
              locksmith company that shows up and delivers.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Residential" href="/residential-locksmith">
                Residential
              </Button>
              <Button title="Commercial" variant="secondary-light" href="/commercial-locksmith">
                Commercial
              </Button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Fragment>
            <div className="first:group first:is-first flex flex-col justify-center border border-brand-navy-light p-8 text-center first:flex first:flex-col first:md:col-span-2 first:md:row-span-1 first:lg:col-span-1 first:lg:row-span-2 [&:nth-last-child(2)]:order-last [&:nth-last-child(2)]:md:order-none">
              <p className="mb-2 text-10xl font-bold leading-[1.3] text-brand-red md:text-[3rem] lg:text-[4rem]">
                10,000+
              </p>
              <h3 className="text-md font-bold leading-[1.4] text-brand-off-white md:text-xl">
                Locks serviced
              </h3>
            </div>
          </Fragment>
          <Fragment>
            <div className="relative aspect-[3/2] w-full">
              <Image
                src="/images/old-2.webp"
                fill
                className="object-cover"
                alt="Panhandle Key & Safe history"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          </Fragment>
          <Fragment>
            <div className="first:group first:is-first flex flex-col justify-center border border-brand-navy-light p-8 text-center first:flex first:flex-col first:md:col-span-2 first:md:row-span-1 first:lg:col-span-1 first:lg:row-span-2 [&:nth-last-child(2)]:order-last [&:nth-last-child(2)]:md:order-none">
              <p className="mb-2 text-10xl font-bold leading-[1.3] text-brand-red md:text-[3rem] lg:text-[4rem]">
                5,000+
              </p>
              <h3 className="text-md font-bold leading-[1.4] text-brand-off-white md:text-xl">
                Keys made
              </h3>
            </div>
          </Fragment>
          <Fragment>
            <div className="first:group first:is-first flex flex-col justify-center border border-brand-navy-light p-8 text-center first:flex first:flex-col first:md:col-span-2 first:md:row-span-1 first:lg:col-span-1 first:lg:row-span-2 [&:nth-last-child(2)]:order-last [&:nth-last-child(2)]:md:order-none">
              <p className="mb-2 text-10xl font-bold leading-[1.3] text-brand-red md:text-[3rem] lg:text-[4rem]">
                500+
              </p>
              <h3 className="text-md font-bold leading-[1.4] text-brand-off-white md:text-xl">
                Safes opened
              </h3>
            </div>
          </Fragment>
          <Fragment>
            <div className="relative aspect-[3/2] w-full">
              <Image
                src="/images/new.jpg"
                fill
                className="object-cover"
                alt="Panhandle Key & Safe today"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          </Fragment>
        </div>
      </div>
    </section>
  );
}
