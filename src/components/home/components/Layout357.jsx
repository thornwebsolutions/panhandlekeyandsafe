import { Button } from "@/components/ui/Button";
import Image from "next/image";
import React, { Fragment } from "react";

export function Layout357() {
  return (
    <section id="relume">
      <div className="sticky top-0">
        <Fragment>
          <div className="relative -top-32 h-0" />
          <div className="relative border-t border-brand-navy bg-brand-navy pb-8 md:pb-14 lg:sticky lg:pb-0 top-0 lg:mb-48">
            <div className="px-[5%]">
              <div className="container">
                <a href="/automotive-locksmith" className="flex h-16 w-full items-center underline text-brand-off-white">
                  <span className="mr-5 font-semibold md:mr-6 md:text-md">
                    01
                  </span>
                  <h1 className="font-semibold md:text-md">Automotive locks</h1>
                </a>
                <div className="py-8 md:py-10 lg:py-12">
                  <div className="grid grid-cols-1 gap-y-12 md:items-center md:gap-x-12 lg:grid-cols-2 lg:gap-x-20">
                    <div>
                      <p className="mb-3 font-semibold text-brand-red-light md:mb-4">Vehicles</p>
                      <h2 className="rb-5 mb-5 text-5xl font-bold text-brand-off-white md:mb-6 md:text-7xl lg:text-8xl">
                        Car lockouts and key replacement work
                      </h2>
                      <p className="text-brand-off-white/80 md:text-md">
                        Locked out of your car or lost the keys? We get you back
                        on the road fast. No job too small, no vehicle too
                        complicated.
                      </p>
                      <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                        <Button title="Automotive Services" href="/automotive-locksmith">
                          Automotive Services
                        </Button>
                      </div>
                    </div>
                    <div className="relative h-[25rem] w-full sm:h-[30rem] lg:h-[60vh]">
                      <Image
                        src="/images/auto.jpg"
                        fill
                        className="object-cover"
                        alt="Automotive locksmith services"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
        <Fragment>
          <div className="relative -top-32 h-0" />
          <div className="relative border-t border-brand-navy bg-brand-navy pb-8 md:pb-14 lg:sticky lg:pb-0 lg:top-16 lg:-mt-32 lg:mb-32">
            <div className="px-[5%]">
              <div className="container">
                <a href="/residential-locksmith" className="flex h-16 w-full items-center underline text-brand-off-white">
                  <span className="mr-5 font-semibold md:mr-6 md:text-md">
                    02
                  </span>
                  <h1 className="font-semibold md:text-md">
                    Residential locks
                  </h1>
                </a>
                <div className="py-8 md:py-10 lg:py-12">
                  <div className="grid grid-cols-1 gap-y-12 md:items-center md:gap-x-12 lg:grid-cols-2 lg:gap-x-20">
                    <div>
                      <p className="mb-3 font-semibold text-brand-red-light md:mb-4">Homes</p>
                      <h2 className="rb-5 mb-5 text-5xl font-bold text-brand-off-white md:mb-6 md:text-7xl lg:text-8xl">
                        Home security and lock solutions
                      </h2>
                      <p className="text-brand-off-white/80 md:text-md">
                        Keep your home safe with professional lock installation,
                        rekeying, and emergency services. We protect what matters.
                      </p>
                      <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                        <Button title="Residential Services" href="/residential-locksmith">
                          Residential Services
                        </Button>
                      </div>
                    </div>
                    <div className="relative h-[25rem] w-full sm:h-[30rem] lg:h-[60vh]">
                      <Image
                        src="/images/residential-2.jpg"
                        fill
                        className="object-cover"
                        alt="Residential locksmith services"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
        <Fragment>
          <div className="relative -top-32 h-0" />
          <div className="relative border-t border-brand-navy bg-brand-navy pb-8 md:pb-14 lg:sticky lg:pb-0 lg:top-32 lg:-mt-16 lg:mb-16">
            <div className="px-[5%]">
              <div className="container">
                <a href="/commercial-locksmith" className="flex h-16 w-full items-center underline text-brand-off-white">
                  <span className="mr-5 font-semibold md:mr-6 md:text-md">
                    03
                  </span>
                  <h1 className="font-semibold md:text-md">Commercial locks</h1>
                </a>
                <div className="py-8 md:py-10 lg:py-12">
                  <div className="grid grid-cols-1 gap-y-12 md:items-center md:gap-x-12 lg:grid-cols-2 lg:gap-x-20">
                    <div>
                      <p className="mb-3 font-semibold text-brand-red-light md:mb-4">Business</p>
                      <h2 className="rb-5 mb-5 text-5xl font-bold text-brand-off-white md:mb-6 md:text-7xl lg:text-8xl">
                        Commercial security solutions
                      </h2>
                      <p className="text-brand-off-white/80 md:text-md">
                        Protect your business with high-security locks, access control,
                        and master key systems. We secure your assets.
                      </p>
                      <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                        <Button title="Commercial Services" href="/commercial-locksmith">
                          Commercial Services
                        </Button>
                      </div>
                    </div>
                    <div className="relative h-[25rem] w-full sm:h-[30rem] lg:h-[60vh]">
                      <Image
                        src="/images/commercial.jpg"
                        fill
                        className="object-cover"
                        alt="Commercial locksmith services"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
        <Fragment>
          <div className="relative -top-32 h-0" />
          <div className="relative border-t border-brand-navy bg-brand-navy pb-8 md:pb-14 lg:sticky lg:pb-0 lg:top-0 lg:mb-16">
            <div className="px-[5%]">
              <div className="container">
                <a href="/safes" className="flex h-16 w-full items-center underline text-brand-off-white">
                  <span className="mr-5 font-semibold md:mr-6 md:text-md">
                    04
                  </span>
                  <h1 className="font-semibold md:text-md">Safe locks</h1>
                </a>
                <div className="py-8 md:py-10 lg:py-12">
                  <div className="grid grid-cols-1 gap-y-12 md:items-center md:gap-x-12 lg:grid-cols-2 lg:gap-x-20">
                    <div>
                      <p className="mb-3 font-semibold text-brand-red-light md:mb-4">Safes</p>
                      <h2 className="rb-5 mb-5 text-5xl font-bold text-brand-off-white md:mb-6 md:text-7xl lg:text-8xl">
                        Safe opening and installation
                      </h2>
                      <p className="text-brand-off-white/80 md:text-md">
                        Locked out of your safe or need a new one installed?
                        We handle all types of safes with precision and care.
                      </p>
                      <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                        <Button title="Safe Services" href="/safes">
                          Safe Services
                        </Button>
                      </div>
                    </div>
                    <div className="relative h-[25rem] w-full sm:h-[30rem] lg:h-[60vh]">
                      <Image
                        src="/images/safes.jpg"
                        fill
                        className="object-cover"
                        alt="Safe locksmith services"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      </div>
    </section>
  );
}
