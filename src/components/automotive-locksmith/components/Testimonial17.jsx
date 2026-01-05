import React from "react";
import { BiSolidStar } from "react-icons/bi";

export function Testimonial17() {
  return (
    <section id="relume" className="bg-brand-navy-dark px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-5xl font-bold text-brand-off-white md:mb-6 md:text-7xl lg:text-8xl">
            Real customers
          </h2>
          <p className="text-brand-off-white/80 md:text-md">What people say about us</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex w-full flex-col items-start justify-between border border-brand-navy bg-brand-light-blue p-6 md:p-8">
            <div className="rb-5 mb-5 md:mb-6">
              <div className="mb-5 flex md:mb-6">
                <BiSolidStar className="mr-1 size-6 text-brand-red" />
                <BiSolidStar className="mr-1 size-6 text-brand-red" />
                <BiSolidStar className="mr-1 size-6 text-brand-red" />
                <BiSolidStar className="mr-1 size-6 text-brand-red" />
                <BiSolidStar className="mr-1 size-6 text-brand-red" />
              </div>
              <blockquote className="text-brand-charcoal md:text-md">
                "I was quoted $220 to $280 by several competitors to get a keyless remote replaced. I walked out with a new key and keyless remote for less than a fifth of the price!"
              </blockquote>
            </div>
            <div className="mt-5 flex w-full flex-col items-start md:mt-6 md:w-fit md:flex-row md:items-center">
              <div>
                <p className="font-semibold text-brand-navy-dark">Kimberly H.</p>
                <p className="text-brand-navy-light">Google Review</p>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-start justify-between border border-brand-navy bg-brand-light-blue p-6 md:p-8">
            <div className="rb-5 mb-5 md:mb-6">
              <div className="mb-5 flex md:mb-6">
                <BiSolidStar className="mr-1 size-6 text-brand-red" />
                <BiSolidStar className="mr-1 size-6 text-brand-red" />
                <BiSolidStar className="mr-1 size-6 text-brand-red" />
                <BiSolidStar className="mr-1 size-6 text-brand-red" />
                <BiSolidStar className="mr-1 size-6 text-brand-red" />
              </div>
              <blockquote className="text-brand-charcoal md:text-md">
                "Quick, courteous, save-the-day service. When my last remaining key bounced out of the ignition of my motorcycle at 55 mph, I thought I was in trouble but they helped."
              </blockquote>
            </div>
            <div className="mt-5 flex w-full flex-col items-start md:mt-6 md:w-fit md:flex-row md:items-center">
              <div>
                <p className="font-semibold text-brand-navy-dark">Michael</p>
                <p className="text-brand-navy-light">Google Review</p>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-start justify-between border border-brand-navy bg-brand-light-blue p-6 md:p-8">
            <div className="rb-5 mb-5 md:mb-6">
              <div className="mb-5 flex md:mb-6">
                <BiSolidStar className="mr-1 size-6 text-brand-red" />
                <BiSolidStar className="mr-1 size-6 text-brand-red" />
                <BiSolidStar className="mr-1 size-6 text-brand-red" />
                <BiSolidStar className="mr-1 size-6 text-brand-red" />
                <BiSolidStar className="mr-1 size-6 text-brand-red" />
              </div>
              <blockquote className="text-brand-charcoal md:text-md">
                "I've been coming here for years. I used to have a lot of Over The Road trucks and would always come here to get all my spare keys. Their prices are very fair."
              </blockquote>
            </div>
            <div className="mt-5 flex w-full flex-col items-start md:mt-6 md:w-fit md:flex-row md:items-center">
              <div>
                <p className="font-semibold text-brand-navy-dark">Wayne R.</p>
                <p className="text-brand-navy-light">Google Review</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
