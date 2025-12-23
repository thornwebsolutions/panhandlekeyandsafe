"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout522() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Why</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Why choose us
            </h2>
            <p className="md:text-md">
              We stand behind our work and our people
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <div className="relative p-6 sm:col-span-2 md:p-8 lg:p-12">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-black/50" />
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                className="size-full object-cover"
                alt="Relume placeholder image"
              />
            </div>
            <div className="relative z-10">
              <p className="mb-2 inline-block text-sm font-semibold text-text-alternative">
                Licensed
              </p>
              <h3 className="mb-5 text-4xl font-bold leading-[1.2] text-text-alternative md:mb-6 md:text-5xl lg:text-6xl">
                Fully licensed and insured for all locksmith work in Florida
              </h3>
              <p className="text-text-alternative">Services</p>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <Button variant="secondary-alt">Learn</Button>
                <Button
                  iconRight={<RxChevronRight />}
                  variant="link-alt"
                  size="link"
                >
                  Button
                </Button>
              </div>
            </div>
          </div>
          <div className="relative flex flex-col p-6 md:p-8 lg:p-6">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-black/50" />
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                className="size-full object-cover"
                alt="Relume placeholder image"
              />
            </div>
            <div className="relative z-10 flex flex-1 flex-col justify-between">
              <div className="mb-3 md:mb-4">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon-white.svg"
                  className="size-12"
                  alt="Relume logo"
                />
              </div>
              <h3 className="mb-2 text-xl font-bold text-text-alternative md:text-2xl">
                Fast response
              </h3>
              <p className="text-text-alternative">
                Most emergencies handled within thirty minutes
              </p>
              <div className="mt-5 flex items-center md:mt-6">
                <Button
                  iconRight={<RxChevronRight />}
                  variant="link-alt"
                  size="link"
                >
                  Learn
                </Button>
              </div>
            </div>
          </div>
          <div className="relative flex flex-col p-6 md:p-8 lg:p-6">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-black/50" />
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                className="size-full object-cover"
                alt="Relume placeholder image"
              />
            </div>
            <div className="relative z-10 flex flex-1 flex-col justify-between">
              <div className="mb-3 md:mb-4">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon-white.svg"
                  className="size-12"
                  alt="Relume logo"
                />
              </div>
              <h3 className="mb-2 text-xl font-bold text-text-alternative md:text-2xl">
                Local experts
              </h3>
              <p className="text-text-alternative">
                Panama City locksmith specialists with years of experience
              </p>
              <div className="mt-5 flex items-center md:mt-6">
                <Button
                  iconRight={<RxChevronRight />}
                  variant="link-alt"
                  size="link"
                >
                  Learn
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
