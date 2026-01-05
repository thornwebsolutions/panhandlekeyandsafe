import React from "react";

export function Footer() {
  return (
    <footer id="relume" className="bg-brand-navy-dark px-[5%] py-12 md:py-18 lg:py-20">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-[4vw] gap-y-12 pb-12 md:gap-y-16 md:pb-18 lg:grid-cols-[1fr_0.5fr] lg:gap-y-4 lg:pb-20">
          <div>
            <div className="mb-6 md:mb-8">
              <a href="/">
                <img
                  src="/images/logo.svg"
                  alt="Panhandle Key & Safe Logo"
                  className="inline-block"
                  width={125}
                />
              </a>
            </div>
            <div className="mb-6 md:mb-8">
              <p className="mb-1 text-sm font-semibold text-brand-off-white">Address</p>
              <p className="mb-5 text-sm text-brand-off-white/80 md:mb-6">1316 Jenks Ave, Panama City, FL</p>
              <p className="mb-1 text-sm font-semibold text-brand-off-white">Contact</p>
              <a
                href="tel:+18507693030"
                className="block text-sm text-brand-red-light hover:text-brand-red"
              >
                (850) 769-3030
              </a>
              <a
                href="mailto:panhandlekey1@yahoo.com"
                className="block text-sm text-brand-red-light hover:text-brand-red"
              >
                panhandlekey1@yahoo.com
              </a>
              <p className="mb-1 mt-5 text-sm font-semibold text-brand-off-white md:mt-6">Hours</p>
              <p className="text-sm text-brand-off-white/80">Mon-Fri: 7:30 AM - 5:00 PM</p>
              <p className="text-sm text-brand-off-white/80">Sat-Sun: Closed</p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start gap-x-6 gap-y-10 md:grid-cols-2 md:gap-x-8 md:gap-y-4">
            <ul>
              <li className="py-2 text-sm font-semibold">
                <a href="/about" className="text-brand-off-white hover:text-brand-red transition-colors">About</a>
              </li>
              <li className="py-2 text-sm font-semibold">
                <a href="/automotive-locksmith" className="text-brand-off-white hover:text-brand-red transition-colors">Automotive</a>
              </li>
              <li className="py-2 text-sm font-semibold">
                <a href="/residential-locksmith" className="text-brand-off-white hover:text-brand-red transition-colors">Residential</a>
              </li>
              <li className="py-2 text-sm font-semibold">
                <a href="/commercial-locksmith" className="text-brand-off-white hover:text-brand-red transition-colors">Commercial</a>
              </li>
              <li className="py-2 text-sm font-semibold">
                <a href="/safes" className="text-brand-off-white hover:text-brand-red transition-colors">Safes</a>
              </li>
            </ul>
            <ul>
              <li className="py-2 text-sm font-semibold">
                <a href="/safes" className="text-brand-off-white hover:text-brand-red transition-colors">Safe services</a>
              </li>
              <li className="py-2 text-sm font-semibold">
                <a href="/commercial-locksmith" className="text-brand-off-white hover:text-brand-red transition-colors">Master key systems</a>
              </li>
              <li className="py-2 text-sm font-semibold">
                <a href="/residential-locksmith" className="text-brand-off-white hover:text-brand-red transition-colors">Key duplication</a>
              </li>
              <li className="py-2 text-sm font-semibold">
                <a href="/residential-locksmith" className="text-brand-off-white hover:text-brand-red transition-colors">Lock repair</a>
              </li>
              <li className="py-2 text-sm font-semibold">
                <a href="/contact" className="text-brand-off-white hover:text-brand-red transition-colors">Contact us</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="h-px w-full bg-brand-navy-light" />
        <div className="flex flex-col-reverse items-start justify-between pb-4 pt-6 text-sm md:flex-row md:items-center md:pb-0 md:pt-8">
          <p className="mt-8 text-brand-off-white/70 md:mt-0">© 2026 Panhandle Key & Safe. All rights reserved.</p>
          <a
            href="https://www.thornwebsolutions.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-off-white/70 hover:text-brand-off-white transition-colors"
          >
            Website by Thorn Web Solutions
          </a>
        </div>
      </div>
    </footer>
  );
}
