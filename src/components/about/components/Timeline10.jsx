"use client";

import { Button } from "@/components/ui/Button";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { Fragment, useRef } from "react";
import { RxChevronRight } from "react-icons/rx";

const Circle = () => {
  const circleRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: circleRef,
    offset: ["end end", "end center"],
  });
  const backgroundColor = {
    backgroundColor: useTransform(scrollYProgress, [0.85, 1], ["#5A6A8A", "#3B496E"]),
  };
  return (
    <motion.div
      ref={circleRef}
      style={backgroundColor}
      className="z-20 mt-9 size-[0.9375rem] rounded-full shadow-[0_0_0_8px_#FEF6EB] md:mt-12"
    />
  );
};

export function Timeline10() {
  return (
    <section id="timeline" className="bg-brand-navy px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="mb-12 text-center md:mb-18 lg:mb-20">
            <div className="relative z-10 w-full max-w-lg">
              <p className="mb-3 font-semibold text-brand-red-light md:mb-4">Milestones</p>
              <h2 className="mb-5 text-5xl font-bold text-brand-off-white md:mb-6 md:text-7xl lg:text-8xl">
                How we built something that matters
              </h2>
              <p className="text-brand-off-white/80 md:text-md">
                We started with one simple idea: be the locksmith Panama City
                could depend on. Every lock we've opened, every door we've
                secured, every customer we've helped has shaped who we are
                today.
              </p>
              <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
                <Button title="Our Team" href="#team">
                  Our Team
                </Button>
                <Button title="Call Now" variant="secondary-light" href="tel:+18507693030">
                  Call Now
                </Button>
              </div>
            </div>
          </div>
          <div className="relative grid grid-cols-1 justify-items-center gap-12 md:gap-20">
            <div className="absolute flex h-full w-8 flex-col items-center justify-self-start md:justify-self-auto">
              <div className="absolute z-10 h-16 w-1 bg-gradient-to-b from-background-primary to-transparent" />
              <div className="sticky top-0 mt-[-50vh] h-[50vh] w-[3px] bg-brand-red" />
              <div className="h-full w-[3px] bg-neutral-lighter" />
              <div className="absolute bottom-0 z-0 h-16 w-1 bg-gradient-to-b from-transparent to-background-primary" />
              <div className="absolute top-[-50vh] h-[50vh] w-full bg-brand-navy" />
            </div>
            <div className="grid grid-cols-[max-content_1fr] items-start justify-items-center gap-4 md:grid-cols-[1fr_max-content_1fr] md:gap-8 lg:gap-12">
              <Fragment>
                <div className="hidden w-full md:block" />
                <div className="flex h-full w-8 justify-center">
                  <Circle />
                </div>
                <div className="z-20 flex flex-col border border-brand-navy-light bg-brand-light-blue p-6 md:p-8">
                  <h3 className="mb-5 text-4xl font-bold leading-[1.2] text-brand-red md:mb-6 md:text-5xl lg:text-6xl">
                    2005
                  </h3>
                  <h4 className="mb-3 text-xl font-bold text-brand-navy-dark md:mb-4 md:text-2xl">
                    The beginning
                  </h4>
                  <p className="text-brand-charcoal">
                    We opened our first location with nothing but tools,
                    determination, and a commitment to honest work. Panama City
                    needed a locksmith who showed up and got the job done right.
                  </p>
                </div>
              </Fragment>
            </div>
            <div className="grid grid-cols-[max-content_1fr] items-start justify-items-center gap-4 md:grid-cols-[1fr_max-content_1fr] md:gap-8 lg:gap-12">
              <Fragment>
                <div className="z-20 flex flex-col border border-brand-navy-light bg-brand-light-blue p-6 md:p-8">
                  <h3 className="mb-5 text-4xl font-bold leading-[1.2] text-brand-red md:mb-6 md:text-5xl lg:text-6xl">
                    2010
                  </h3>
                  <h4 className="mb-3 text-xl font-bold text-brand-navy-dark md:mb-4 md:text-2xl">
                    Expanding our reach
                  </h4>
                  <p className="text-brand-charcoal">
                    Word spread fast. We added automotive services and hired our
                    first team members. The demand was there because people knew
                    we wouldn't cut corners.
                  </p>
                </div>
                <div className="order-first flex h-full w-8 justify-center md:order-none">
                  <Circle />
                </div>
                <div className="hidden w-full md:block" />
              </Fragment>
            </div>
            <div className="grid grid-cols-[max-content_1fr] items-start justify-items-center gap-4 md:grid-cols-[1fr_max-content_1fr] md:gap-8 lg:gap-12">
              <Fragment>
                <div className="hidden w-full md:block" />
                <div className="flex h-full w-8 justify-center">
                  <Circle />
                </div>
                <div className="z-20 flex flex-col border border-brand-navy-light bg-brand-light-blue p-6 md:p-8">
                  <h3 className="mb-5 text-4xl font-bold leading-[1.2] text-brand-red md:mb-6 md:text-5xl lg:text-6xl">
                    2015
                  </h3>
                  <h4 className="mb-3 text-xl font-bold text-brand-navy-dark md:mb-4 md:text-2xl">
                    Going commercial
                  </h4>
                  <p className="text-brand-charcoal">
                    Businesses started calling. We built our commercial
                    locksmith division to serve Panama City's growing commercial
                    sector with the same precision and reliability.
                  </p>
                </div>
              </Fragment>
            </div>
            <div className="grid grid-cols-[max-content_1fr] items-start justify-items-center gap-4 md:grid-cols-[1fr_max-content_1fr] md:gap-8 lg:gap-12">
              <Fragment>
                <div className="z-20 flex flex-col border border-brand-navy-light bg-brand-light-blue p-6 md:p-8">
                  <h3 className="mb-5 text-4xl font-bold leading-[1.2] text-brand-red md:mb-6 md:text-5xl lg:text-6xl">
                    2020
                  </h3>
                  <h4 className="mb-3 text-xl font-bold text-brand-navy-dark md:mb-4 md:text-2xl">
                    Where we stand now
                  </h4>
                  <p className="text-brand-charcoal">
                    Two decades in, we're still the same operation that started
                    in 2005. Trusted by families, businesses, and car owners
                    across Panama City. Still doing it right.
                  </p>
                </div>
                <div className="order-first flex h-full w-8 justify-center md:order-none">
                  <Circle />
                </div>
                <div className="hidden w-full md:block" />
              </Fragment>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
