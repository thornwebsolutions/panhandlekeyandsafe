"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Faq7() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container w-full max-w-lg">
        <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Questions
          </h2>
          <p className="md:text-md">
            Find answers about our services and how we work in Panama City
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:gap-y-12">
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              How fast can you arrive?
            </h2>
            <p>
              We respond quickly to emergencies in Panama City. Most calls get a
              locksmith at your location within thirty minutes. We keep our
              schedule open for urgent situations.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Do you service all areas?
            </h2>
            <p>
              Yes, we cover Panama City and the surrounding areas. Whether
              you're locked out at home or stranded with your car, we reach you.
              Call us to confirm service for your specific location.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              What about after hours?
            </h2>
            <p>
              We work around the clock for emergencies. Locked out at midnight
              or early morning, we're available. Our team handles urgent calls
              every day of the week.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Are your prices competitive?
            </h2>
            <p>
              We offer fair pricing without hidden fees. You get a free quote
              before any work begins. Our rates reflect quality service and
              honest business practices.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Can you help with safes?
            </h2>
            <p>
              We specialize in safe locksmith services for homes and businesses.
              Whether you need access restored or a new safe installed, we
              handle it. Our technicians know safes inside and out.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Need more help?
          </h4>
          <p className="md:text-md">Reach out to our team directly</p>
          <div className="mt-6 md:mt-8">
            <Button title="Contact" variant="secondary">
              Contact
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
