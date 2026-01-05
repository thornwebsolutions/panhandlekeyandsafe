import React from "react";
import { BiSolidStar } from "react-icons/bi";

export function Testimonial17() {
  return (
    <section id="relume" className="bg-brand-navy-dark px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-5xl font-bold text-brand-off-white md:mb-6 md:text-7xl lg:text-8xl">
            What clients say
          </h2>
          <p className="text-brand-off-white/80 md:text-md">Trusted by Panama City businesses</p>
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
                "I stopped in to look at safes and was greeted by Karen. They have a large selection of nice safes to choose from. I will definitely recommend them to anyone."
              </blockquote>
            </div>
            <div className="mt-5 flex w-full flex-col items-start md:mt-6 md:w-fit md:flex-row md:items-center">
              <div>
                <p className="font-semibold text-brand-navy-dark">Steve S.</p>
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
                "They opened my safe! The dial lock messed up and they got the serial number to get the combo from the factory. Great service!"
              </blockquote>
            </div>
            <div className="mt-5 flex w-full flex-col items-start md:mt-6 md:w-fit md:flex-row md:items-center">
              <div>
                <p className="font-semibold text-brand-navy-dark">Harvey B.</p>
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
                "Fast and friendly service. Keys were made for me while I waited, very fast. Really happy with them."
              </blockquote>
            </div>
            <div className="mt-5 flex w-full flex-col items-start md:mt-6 md:w-fit md:flex-row md:items-center">
              <div>
                <p className="font-semibold text-brand-navy-dark">Robert Owens</p>
                <p className="text-brand-navy-light">Google Review</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
