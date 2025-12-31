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
                src="/images/Tim and safe.jpg"
                alt="Tim"
                className="aspect-square size-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="mb-3 md:mb-4">
                <h5 className="text-md font-semibold text-brand-off-white md:text-lg">
                  Tim
                </h5>
                <h6 className="text-brand-off-white/70 md:text-md">Senior Locksmith</h6>
              </div>
              <p className="text-brand-off-white/80">
                Tim has been part of the Panhandle Key team for over 25 years. A U.S. Air Force veteran, he brings discipline and precision to every job.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start gap-5 sm:gap-y-6 md:grid-cols-2 md:gap-x-8">
            <div className="w-full overflow-hidden">
              <img
                src="/images/chris.webp"
                alt="Chris"
                className="aspect-square size-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="mb-3 md:mb-4">
                <h5 className="text-md font-semibold text-brand-off-white md:text-lg">
                  Chris
                </h5>
                <h6 className="text-brand-off-white/70 md:text-md">Senior Road Tech</h6>
              </div>
              <p className="text-brand-off-white/80">
                Chris has served our customers on the road for over 20 years. His Navy background taught him how to get the job done right, no matter the situation.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start gap-5 sm:gap-y-6 md:grid-cols-2 md:gap-x-8">
            <div className="w-full overflow-hidden">
              <img
                src="/images/nick.jpg"
                alt="Nick"
                className="aspect-square size-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="mb-3 md:mb-4">
                <h5 className="text-md font-semibold text-brand-off-white md:text-lg">
                  Nick
                </h5>
                <h6 className="text-brand-off-white/70 md:text-md">Floater</h6>
              </div>
              <p className="text-brand-off-white/80">
                Nick has been with us for over 14 years and wears a lot of hats—road tech, safe tech, and counter tech. He's our go-to guy for safe deliveries, relocations, and lock repairs.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start gap-5 sm:gap-y-6 md:grid-cols-2 md:gap-x-8">
            <div className="w-full overflow-hidden">
              <img
                src="/images/travis.jpg"
                alt="Travis"
                className="aspect-square size-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="mb-3 md:mb-4">
                <h5 className="text-md font-semibold text-brand-off-white md:text-lg">
                  Travis
                </h5>
                <h6 className="text-brand-off-white/70 md:text-md">Office Manager</h6>
              </div>
              <p className="text-brand-off-white/80">
                Travis has been with us for over 14 years and brings 24 years of locksmith experience to the table. As office manager, he keeps our road techs running smoothly.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start gap-5 sm:gap-y-6 md:grid-cols-2 md:gap-x-8">
            <div className="w-full overflow-hidden">
              <img
                src="/images/justin.jpg"
                alt="Justin"
                className="aspect-square size-full object-cover object-top"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="mb-3 md:mb-4">
                <h5 className="text-md font-semibold text-brand-off-white md:text-lg">
                  Justin
                </h5>
                <h6 className="text-brand-off-white/70 md:text-md">Counter Tech</h6>
              </div>
              <p className="text-brand-off-white/80">
                Justin is one of our newest team members, helping customers at the counter with all their lock and key needs.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start gap-5 sm:gap-y-6 md:grid-cols-2 md:gap-x-8">
            <div className="w-full overflow-hidden">
              <img
                src="/images/kai.webp"
                alt="Kai"
                className="aspect-square size-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="mb-3 md:mb-4">
                <h5 className="text-md font-semibold text-brand-off-white md:text-lg">
                  Kai
                </h5>
                <h6 className="text-brand-off-white/70 md:text-md">Counter Tech</h6>
              </div>
              <p className="text-brand-off-white/80">
                Kai is one of our newest additions to the crew, learning the trade and assisting customers at the counter.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
