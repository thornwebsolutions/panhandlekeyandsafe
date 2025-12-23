import React from "react";

export function Team16() {
  return (
    <section id="team" className="bg-brand-navy-dark px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid grid-cols-1 items-start md:grid-flow-row md:gap-x-12 lg:gap-x-20">
        <div className="rb-12 mb-12 max-w-lg md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold text-brand-red-light md:mb-4">Team</p>
          <h2 className="rb-5 mb-5 text-5xl font-bold text-brand-off-white md:mb-6 md:text-7xl lg:text-8xl">
            Our crew
          </h2>
          <p className="text-brand-off-white/80 md:text-md">
            Every person here knows their trade and takes pride in it.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-8 lg:gap-16">
          <div className="grid grid-cols-1 items-start gap-5 sm:gap-y-6 md:grid-cols-2 md:gap-x-8">
            <div className="w-full overflow-hidden">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Team member"
                className="aspect-square size-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="mb-3 md:mb-4">
                <h5 className="text-md font-semibold text-brand-off-white md:text-lg">
                  James Cortez
                </h5>
                <h6 className="text-brand-off-white/70 md:text-md">Automotive specialist</h6>
              </div>
              <p className="text-brand-off-white/80">
                Certified in all major vehicle lock systems and key programming.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start gap-5 sm:gap-y-6 md:grid-cols-2 md:gap-x-8">
            <div className="w-full overflow-hidden">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Team member"
                className="aspect-square size-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="mb-3 md:mb-4">
                <h5 className="text-md font-semibold text-brand-off-white md:text-lg">
                  David Martinez
                </h5>
                <h6 className="text-brand-off-white/70 md:text-md">Residential expert</h6>
              </div>
              <p className="text-brand-off-white/80">
                Handles residential lockouts and installations with precision
                and care.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start gap-5 sm:gap-y-6 md:grid-cols-2 md:gap-x-8">
            <div className="w-full overflow-hidden">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Team member"
                className="aspect-square size-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="mb-3 md:mb-4">
                <h5 className="text-md font-semibold text-brand-off-white md:text-lg">
                  Elena Vasquez
                </h5>
                <h6 className="text-brand-off-white/70 md:text-md">Commercial lead</h6>
              </div>
              <p className="text-brand-off-white/80">
                Specializes in commercial security systems and access control
                solutions.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start gap-5 sm:gap-y-6 md:grid-cols-2 md:gap-x-8">
            <div className="w-full overflow-hidden">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Team member"
                className="aspect-square size-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="mb-3 md:mb-4">
                <h5 className="text-md font-semibold text-brand-off-white md:text-lg">
                  Robert Chen
                </h5>
                <h6 className="text-brand-off-white/70 md:text-md">Safe technician</h6>
              </div>
              <p className="text-brand-off-white/80">
                Expert in safe opening, repair, and installation for all types.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
