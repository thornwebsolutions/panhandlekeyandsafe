"use client";

import { Button } from "@/components/ui/Button";
import { useMediaQuery } from "@relume_io/relume-ui";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { BiLockOpenAlt, BiLockAlt, BiKey, BiWrench } from "react-icons/bi";

const useRelume = ({ featureSections }) => {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: isMobile ? ["20% start", "end end"] : ["start start", "end end"],
  });
  const totalSections = featureSections.length;
  const transforms = (index) => {
    const sectionScrollStart = index / totalSections;
    const sectionScrollEnd = (index + 1) / totalSections;
    const rotate = useTransform(
      scrollYProgress,
      [sectionScrollStart, sectionScrollEnd],
      index === totalSections - 1 ? [9, 9] : [0 + index * 3, -30],
    );
    const translateY = useTransform(
      scrollYProgress,
      [sectionScrollStart, sectionScrollEnd],
      index === totalSections - 1 ? [undefined, undefined] : ["0vh", "-100vh"],
    );
    const translateX = useTransform(
      scrollYProgress,
      [sectionScrollStart, sectionScrollEnd],
      index === totalSections - 1 ? [undefined, undefined] : ["0vw", "-10vw"],
    );
    const style = {
      rotate,
      translateY,
      translateX,
      zIndex: totalSections - index,
    };
    return { style };
  };
  return {
    containerRef,
    transforms,
  };
};

export function Layout415() {
  const useActive = useRelume({
    featureSections: [
      {
        title: "Lock Outs",
        description:
          "Locked out of your home? We provide fast, reliable emergency lockout service to get you back inside without damage.",
      },
      {
        title: "Lock Installation",
        description:
          "Upgrade your home security with professional lock installation. We install deadbolts, knob locks, and smart locks.",
      },
      {
        title: "Rekeying",
        description:
          "Moving into a new home? Rekeying gives you fresh keys without replacing the entire lock. Fast and affordable.",
      },
      {
        title: "Lock Repair",
        description:
          "Sticky lock? Broken mechanism? We diagnose and repair all types of residential locks to restore smooth operation.",
      },
    ],
  });
  return (
    <section
      id="services"
      ref={useActive.containerRef}
      className="bg-brand-off-white px-[5%]"
    >
      <div className="container">
        <div className="relative h-[300svh] lg:h-[300vh]">
          <div className="static grid h-full grid-cols-1 content-start items-center gap-x-20 gap-y-16 py-16 md:sticky md:top-0 md:h-svh md:grid-cols-2 md:content-normal md:py-0 lg:h-screen">
            <div>
              <p className="mb-3 font-semibold text-brand-red md:mb-4">Upgrade</p>
              <h2 className="rb-5 mb-5 text-5xl font-bold text-brand-navy-dark md:mb-6 md:text-7xl lg:text-8xl">
                Rekey or replace your locks
              </h2>
              <p className="text-brand-charcoal md:text-md">
                Keys wear down. Locks accumulate damage. We assess what you have
                and recommend the right move forward.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <Button title="Contact Us" href="/contact">
                  Contact Us
                </Button>
              </div>
            </div>
            <div className="sticky top-[25%] flex min-h-[24.5rem] flex-col items-center justify-center md:relative md:top-0 md:min-h-[auto]">
              <motion.div
                className="absolute mx-6 flex flex-col justify-between border border-brand-light-blue bg-brand-white p-8 md:ml-0"
                style={useActive.transforms(0).style}
              >
                <div className="rb-6 mb-6 md:mb-8">
                  <BiLockOpenAlt className="size-12 text-brand-red" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-brand-navy-dark md:mb-4 md:text-2xl">
                  Lock Outs
                </h3>
                <p className="text-brand-charcoal">
                  Locked out of your home? We provide fast, reliable emergency
                  lockout service to get you back inside without damage.
                </p>
              </motion.div>
              <motion.div
                className="absolute mx-6 flex flex-col justify-between border border-brand-light-blue bg-brand-white p-8 md:ml-0"
                style={useActive.transforms(1).style}
              >
                <div className="rb-6 mb-6 md:mb-8">
                  <BiLockAlt className="size-12 text-brand-red" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-brand-navy-dark md:mb-4 md:text-2xl">
                  Lock Installation
                </h3>
                <p className="text-brand-charcoal">
                  Upgrade your home security with professional lock installation.
                  We install deadbolts, knob locks, and smart locks.
                </p>
              </motion.div>
              <motion.div
                className="absolute mx-6 flex flex-col justify-between border border-brand-light-blue bg-brand-white p-8 md:ml-0"
                style={useActive.transforms(2).style}
              >
                <div className="rb-6 mb-6 md:mb-8">
                  <BiKey className="size-12 text-brand-red" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-brand-navy-dark md:mb-4 md:text-2xl">
                  Rekeying
                </h3>
                <p className="text-brand-charcoal">
                  Moving into a new home? Rekeying gives you fresh keys without
                  replacing the entire lock. Fast and affordable.
                </p>
              </motion.div>
              <motion.div
                className="absolute mx-6 flex flex-col justify-between border border-brand-light-blue bg-brand-white p-8 md:ml-0"
                style={useActive.transforms(3).style}
              >
                <div className="rb-6 mb-6 md:mb-8">
                  <BiWrench className="size-12 text-brand-red" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-brand-navy-dark md:mb-4 md:text-2xl">
                  Lock Repair
                </h3>
                <p className="text-brand-charcoal">
                  Sticky lock? Broken mechanism? We diagnose and repair all types
                  of residential locks to restore smooth operation.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 mt-[100vh]" />
    </section>
  );
}
