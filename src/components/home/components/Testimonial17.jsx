import React from "react";
import { BiSolidStar } from "react-icons/bi";

export function Testimonial17() {
  return (
    <section id="relume" className="bg-brand-off-white px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-5xl font-bold text-brand-navy-dark md:mb-6 md:text-7xl lg:text-8xl">
            What clients say
          </h2>
          <p className="text-brand-charcoal md:text-md">Real feedback from real people</p>
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
                "They got me into my car in ten minutes flat, professional and
                honest about the cost."
              </blockquote>
            </div>
            <div className="mt-5 flex w-full flex-col items-start md:mt-6 md:w-fit md:flex-row md:items-center">
              <div>
                <p className="font-semibold text-brand-navy-dark">Marcus Webb</p>
                <p className="text-brand-navy-light">Vehicle owner, Panama City</p>
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
                "Our office lock was broken and they had us secure again before
                lunch. That's the kind of service you remember."
              </blockquote>
            </div>
            <div className="mt-5 flex w-full flex-col items-start md:mt-6 md:w-fit md:flex-row md:items-center">
              <div>
                <p className="font-semibold text-brand-navy-dark">Sarah Mitchell</p>
                <p className="text-brand-navy-light">Business manager, downtown</p>
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
                "Called at 2 AM with a lockout and they arrived in twenty
                minutes. No complaints, just gratitude."
              </blockquote>
            </div>
            <div className="mt-5 flex w-full flex-col items-start md:mt-6 md:w-fit md:flex-row md:items-center">
              <div>
                <p className="font-semibold text-brand-navy-dark">James Rodriguez</p>
                <p className="text-brand-navy-light">Homeowner, Panama City</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
