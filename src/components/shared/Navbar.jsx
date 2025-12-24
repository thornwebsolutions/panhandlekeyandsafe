"use client";

import { Button } from "@/components/ui/Button";
import { useMediaQuery } from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { RxChevronDown } from "react-icons/rx";

const useRelume = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 991px)");
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const openOnMobileDropdownMenu = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  const openOnDesktopDropdownMenu = () => {
    !isMobile && setIsDropdownOpen(true);
  };
  const closeOnDesktopDropdownMenu = () => {
    !isMobile && setIsDropdownOpen(false);
  };
  const animateMobileMenu = isMobileMenuOpen ? "open" : "close";
  const animateMobileMenuButtonSpan = isMobileMenuOpen
    ? ["open", "rotatePhase"]
    : "closed";
  const animateDropdownMenu = isDropdownOpen ? "open" : "close";
  const animateDropdownMenuIcon = isDropdownOpen ? "rotated" : "initial";
  return {
    toggleMobileMenu,
    openOnDesktopDropdownMenu,
    closeOnDesktopDropdownMenu,
    openOnMobileDropdownMenu,
    animateMobileMenu,
    animateMobileMenuButtonSpan,
    animateDropdownMenu,
    animateDropdownMenuIcon,
  };
};

export function Navbar() {
  const useActive = useRelume();
  return (
    <section
      id="relume"
      className="relative z-[999] flex min-h-16 w-full items-center bg-brand-navy-dark px-[5%] md:min-h-18"
    >
      <div className="mx-auto flex size-full max-w-full items-center justify-between">
        <a href="/" style={{ padding: "0 0.5rem" }}>
          <img
            src="/images/logo.svg"
            alt="Panhandle Key & Safe Logo"
            className="w-[60px] md:w-[75px]"
          />
        </a>
        <div className="absolute hidden h-screen overflow-auto bg-brand-navy-dark px-[5%] pb-24 pt-4 md:pb-0 lg:static lg:ml-6 lg:flex lg:h-auto lg:flex-1 lg:items-center lg:justify-between lg:bg-none lg:px-0 lg:pt-0">
          <div className="flex flex-col items-center lg:flex-row">
            <a
              href="/"
              className="relative block w-auto py-3 text-md text-brand-off-white hover:text-brand-red lg:inline-block lg:px-4 lg:py-6 lg:text-base"
            >
              Home
            </a>
            <a
              href="/about"
              className="relative block w-auto py-3 text-md text-brand-off-white hover:text-brand-red lg:inline-block lg:px-4 lg:py-6 lg:text-base"
            >
              About
            </a>
            <div
              onMouseEnter={useActive.openOnDesktopDropdownMenu}
              onMouseLeave={useActive.closeOnDesktopDropdownMenu}
            >
              <button
                className="relative flex w-full items-center justify-between whitespace-nowrap py-3 text-md text-brand-off-white hover:text-brand-red lg:w-auto lg:justify-start lg:gap-2 lg:px-4 lg:py-6 lg:text-base"
                onClick={useActive.openOnMobileDropdownMenu}
              >
                <span>Services</span>
                <motion.span
                  animate={useActive.animateDropdownMenuIcon}
                  variants={{
                    rotated: { rotate: 180 },
                    initial: { rotate: 0 },
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <RxChevronDown />
                </motion.span>
              </button>
              <AnimatePresence>
                <motion.nav
                  variants={{
                    open: {
                      opacity: 1,
                      height: "var(--height-open, auto)",
                      display: "block",
                    },
                    close: {
                      opacity: 0,
                      height: "var(--height-close, 0)",
                      display: "none",
                    },
                  }}
                  animate={useActive.animateDropdownMenu}
                  initial="close"
                  exit="close"
                  transition={{ duration: 0.2 }}
                  className="bottom-auto left-0 top-full w-full min-w-full max-w-full overflow-hidden bg-brand-navy-dark lg:absolute lg:w-screen lg:px-[5%] lg:[--height-close:auto]"
                >
                  <div className="mx-auto flex size-full max-w-full items-center justify-between">
                    <div className="flex w-full flex-col lg:flex-row">
                      <div className="grid flex-1 grid-cols-1 content-start items-start gap-x-8 gap-y-2 py-4 md:grid-cols-2 md:gap-y-6 md:py-8 lg:auto-cols-fr lg:grid-cols-4 lg:content-stretch lg:items-stretch lg:gap-y-0">
                        <a
                          href="/automotive-locksmith"
                          className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2 hover:bg-brand-navy rounded"
                        >
                          <div className="flex size-6 flex-col items-center justify-center">
                            <img
                              src="/images/icons/auto.png"
                              alt="Automotive icon"
                              className="shrink-0 size-6"
                            />
                          </div>
                          <div className="flex flex-col items-start justify-center">
                            <h5 className="font-semibold text-brand-off-white">Automotive</h5>
                            <p className="hidden text-sm text-brand-off-white/70 md:block">
                              Car lockouts and key replacement
                            </p>
                          </div>
                        </a>
                        <a
                          href="/residential-locksmith"
                          className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2 hover:bg-brand-navy rounded"
                        >
                          <div className="flex size-6 flex-col items-center justify-center">
                            <img
                              src="/images/icons/residential.png"
                              alt="Residential icon"
                              className="shrink-0 size-6"
                            />
                          </div>
                          <div className="flex flex-col items-start justify-center">
                            <h5 className="font-semibold text-brand-off-white">Residential</h5>
                            <p className="hidden text-sm text-brand-off-white/70 md:block">
                              Home security and entry solutions
                            </p>
                          </div>
                        </a>
                        <a
                          href="/commercial-locksmith"
                          className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2 hover:bg-brand-navy rounded"
                        >
                          <div className="flex size-6 flex-col items-center justify-center">
                            <img
                              src="/images/icons/commercial.png"
                              alt="Commercial icon"
                              className="shrink-0 size-6"
                            />
                          </div>
                          <div className="flex flex-col items-start justify-center">
                            <h5 className="font-semibold text-brand-off-white">Commercial</h5>
                            <p className="hidden text-sm text-brand-off-white/70 md:block">
                              Business security solutions
                            </p>
                          </div>
                        </a>
                        <a
                          href="/safes"
                          className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2 hover:bg-brand-navy rounded"
                        >
                          <div className="flex size-6 flex-col items-center justify-center">
                            <img
                              src="/images/icons/safe.png"
                              alt="Safes icon"
                              className="shrink-0 size-6"
                            />
                          </div>
                          <div className="flex flex-col items-start justify-center">
                            <h5 className="font-semibold text-brand-off-white">Safes</h5>
                            <p className="hidden text-sm text-brand-off-white/70 md:block">
                              Safe opening and installation
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                                  </motion.nav>
              </AnimatePresence>
            </div>
            <a
              href="/contact"
              className="relative block w-auto py-3 text-md text-brand-off-white hover:text-brand-red lg:inline-block lg:px-4 lg:py-6 lg:text-base"
            >
              Contact
            </a>
          </div>
          <div className="hidden items-center gap-4 lg:flex">
            <Button title="Call Now" size="sm" href="tel:+18507693030">
              Call Now
            </Button>
          </div>
        </div>
        <button
          className="-mr-2 flex size-12 cursor-pointer flex-col items-center justify-center lg:hidden"
          onClick={useActive.toggleMobileMenu}
        >
          <motion.span
            className="my-[3px] h-0.5 w-6 bg-brand-off-white"
            animate={useActive.animateMobileMenuButtonSpan}
            variants={{
              open: { translateY: 8, transition: { delay: 0.1 } },
              rotatePhase: { rotate: -45, transition: { delay: 0.2 } },
              closed: {
                translateY: 0,
                rotate: 0,
                transition: { duration: 0.2 },
              },
            }}
          />
          <motion.span
            className="my-[3px] h-0.5 w-6 bg-brand-off-white"
            animate={useActive.animateMobileMenu}
            variants={{
              open: { width: 0, transition: { duration: 0.1 } },
              closed: {
                width: "1.5rem",
                transition: { delay: 0.3, duration: 0.2 },
              },
            }}
          />
          <motion.span
            className="my-[3px] h-0.5 w-6 bg-brand-off-white"
            animate={useActive.animateMobileMenuButtonSpan}
            variants={{
              open: { translateY: -8, transition: { delay: 0.1 } },
              rotatePhase: { rotate: 45, transition: { delay: 0.2 } },
              closed: {
                translateY: 0,
                rotate: 0,
                transition: { duration: 0.2 },
              },
            }}
          />
        </button>
      </div>
      <AnimatePresence>
        <motion.div
          variants={{ open: { height: "100dvh" }, close: { height: "auto" } }}
          animate={useActive.animateMobileMenu}
          initial="close"
          exit="close"
          className="absolute left-0 right-0 top-full w-full overflow-hidden lg:hidden"
          transition={{ duration: 0.4 }}
        >
          <motion.div
            variants={{ open: { y: 0 }, close: { y: "-100%" } }}
            animate={useActive.animateMobileMenu}
            initial="close"
            exit="close"
            transition={{ duration: 0.4 }}
            className="absolute left-0 right-0 top-0 block h-dvh overflow-auto border-b border-brand-light-blue bg-brand-off-white px-[5%] pb-8 pt-4"
          >
            <div className="flex flex-col">
              <a href="/" className="block py-3 text-md text-brand-navy-dark">
                Home
              </a>
              <a href="/about" className="block py-3 text-md text-brand-navy-dark">
                About
              </a>
              <div>
                <button
                  className="relative flex w-full items-center justify-between whitespace-nowrap py-3 text-md text-brand-navy-dark lg:w-auto lg:justify-start lg:gap-2 lg:px-4 lg:py-6 lg:text-base"
                  onClick={useActive.openOnMobileDropdownMenu}
                >
                  <span>Services</span>
                  <motion.span
                    animate={useActive.animateDropdownMenuIcon}
                    variants={{
                      rotated: { rotate: 180 },
                      initial: { rotate: 0 },
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <RxChevronDown />
                  </motion.span>
                </button>
                <AnimatePresence>
                  <motion.nav
                    variants={{
                      open: {
                        opacity: 1,
                        height: "var(--height-open, auto)",
                        display: "block",
                      },
                      close: {
                        opacity: 0,
                        height: "var(--height-close, 0)",
                        display: "none",
                      },
                    }}
                    animate={useActive.animateDropdownMenu}
                    initial="close"
                    exit="close"
                    transition={{ duration: 0.2 }}
                    className="bottom-auto left-0 top-full w-full min-w-full max-w-full overflow-hidden bg-brand-off-white lg:absolute lg:w-screen lg:border-b lg:border-brand-light-blue lg:px-[5%] lg:[--height-close:auto]"
                  >
                    <div className="mx-auto flex size-full max-w-full items-center justify-between">
                      <div className="flex w-full flex-col lg:flex-row">
                        <div className="grid flex-1 grid-cols-1 content-start items-start gap-x-8 gap-y-2 py-4 md:grid-cols-2 md:gap-y-6 md:py-8 lg:auto-cols-fr lg:grid-cols-4 lg:content-stretch lg:items-stretch lg:gap-y-0">
                          <a
                            href="/automotive-locksmith"
                            className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                          >
                            <div className="flex size-6 flex-col items-center justify-center">
                              <img
                                src="/images/icons/auto.png"
                                alt="Automotive icon"
                                className="shrink-0 size-6"
                              />
                            </div>
                            <div className="flex flex-col items-start justify-center">
                              <h5 className="font-semibold">Automotive</h5>
                              <p className="hidden text-sm md:block">
                                Car lockouts and key replacement
                              </p>
                            </div>
                          </a>
                          <a
                            href="/residential-locksmith"
                            className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                          >
                            <div className="flex size-6 flex-col items-center justify-center">
                              <img
                                src="/images/icons/residential.png"
                                alt="Residential icon"
                                className="shrink-0 size-6"
                              />
                            </div>
                            <div className="flex flex-col items-start justify-center">
                              <h5 className="font-semibold">Residential</h5>
                              <p className="hidden text-sm md:block">
                                Home security and entry solutions
                              </p>
                            </div>
                          </a>
                          <a
                            href="/commercial-locksmith"
                            className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                          >
                            <div className="flex size-6 flex-col items-center justify-center">
                              <img
                                src="/images/icons/commercial.png"
                                alt="Commercial icon"
                                className="shrink-0 size-6"
                              />
                            </div>
                            <div className="flex flex-col items-start justify-center">
                              <h5 className="font-semibold">Commercial</h5>
                              <p className="hidden text-sm md:block">
                                Business security solutions
                              </p>
                            </div>
                          </a>
                          <a
                            href="/safes"
                            className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                          >
                            <div className="flex size-6 flex-col items-center justify-center">
                              <img
                                src="/images/icons/safe.png"
                                alt="Safes icon"
                                className="shrink-0 size-6"
                              />
                            </div>
                            <div className="flex flex-col items-start justify-center">
                              <h5 className="font-semibold">Safes</h5>
                              <p className="hidden text-sm md:block">
                                Safe opening and installation
                              </p>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.nav>
                </AnimatePresence>
              </div>
              <a href="/contact" className="block py-3 text-md text-brand-navy-dark">
                Contact
              </a>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
