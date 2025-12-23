"use client";

import { Button } from "@/components/ui/Button";
import {
  Checkbox,
  Input,
  Label,
  Textarea,
} from "@relume_io/relume-ui";
import React from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";

export function Contact6() {
  return (
    <section id="relume" className="bg-brand-off-white px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid grid-cols-1 items-start gap-y-12 md:grid-flow-row md:grid-cols-2 md:gap-x-12 lg:grid-flow-col lg:gap-x-20 lg:gap-y-16">
        <div>
          <div className="mb-6 md:mb-8">
            <p className="mb-3 font-semibold text-brand-red md:mb-4">Get in touch</p>
            <h2 className="mb-5 text-5xl font-bold text-brand-navy-dark md:mb-6 md:text-7xl lg:text-8xl">
              Contact us
            </h2>
            <p className="text-brand-charcoal md:text-md">
              Have a question or need service? Reach out and we'll get back to you promptly.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 py-2">
            <div className="flex items-center gap-4">
              <BiEnvelope className="size-6 flex-none text-brand-red" />
              <p className="text-brand-charcoal">panhandlekey1@yahoo.com</p>
            </div>
            <div className="flex items-center gap-4">
              <BiPhone className="size-6 flex-none text-brand-red" />
              <p className="text-brand-charcoal">(850) 769-3030</p>
            </div>
            <div className="flex items-center gap-4">
              <BiMap className="size-6 flex-none text-brand-red" />
              <p className="text-brand-charcoal">1316 Jenks Ave, Panama City, FL</p>
            </div>
          </div>
        </div>
        <form className="grid max-w-lg grid-cols-1 grid-rows-[auto_auto] gap-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="grid w-full items-center">
              <Label htmlFor="firstName" className="mb-2">
                First name
              </Label>
              <Input type="text" id="firstName" />
            </div>
            <div className="grid w-full items-center">
              <Label htmlFor="lastName" className="mb-2">
                Last name
              </Label>
              <Input type="text" id="lastName" />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="grid w-full items-center">
              <Label htmlFor="email" className="mb-2">
                Email
              </Label>
              <Input type="email" id="email" />
            </div>
            <div className="grid w-full items-center">
              <Label htmlFor="phone" className="mb-2">
                Phone number
              </Label>
              <Input type="text" id="phone" />
            </div>
          </div>
          <div className="grid w-full items-center">
            <Label htmlFor="message" className="mb-2">
              Message
            </Label>
            <Textarea
              id="message"
              placeholder="Type your message..."
              className="min-h-[11.25rem] overflow-auto"
            />
          </div>
          <div className="mb-3 flex items-center space-x-2 text-sm md:mb-4">
            <Checkbox id="terms" />
            <Label htmlFor="terms" className="cursor-pointer">
              I accept the Terms
            </Label>
          </div>
          <div>
            <Button title="Submit">Submit</Button>
          </div>
        </form>
      </div>
    </section>
  );
}
