"use client";

import { Button } from "@/components/ui/Button";
import {
  Checkbox,
  Input,
  Label,
  Textarea,
} from "@relume_io/relume-ui";
import React, { useState } from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";

export function Contact6() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    terms: false,
  });
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.terms) {
      setErrorMessage("Please accept the terms to continue.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
        terms: false,
      });
    } catch (error) {
      setErrorMessage(error.message);
      setStatus("error");
    }
  };

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

        {status === "success" ? (
          <div className="flex max-w-lg flex-col items-center justify-center rounded-lg bg-green-50 p-8 text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold text-brand-navy-dark">Message Sent!</h3>
            <p className="mb-4 text-brand-charcoal">
              Thank you for reaching out. We'll get back to you as soon as possible.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="text-brand-red hover:underline"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid max-w-lg grid-cols-1 grid-rows-[auto_auto] gap-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="grid w-full items-center">
                <Label htmlFor="firstName" className="mb-2">
                  First name
                </Label>
                <Input
                  type="text"
                  id="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="grid w-full items-center">
                <Label htmlFor="lastName" className="mb-2">
                  Last name
                </Label>
                <Input
                  type="text"
                  id="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="grid w-full items-center">
                <Label htmlFor="email" className="mb-2">
                  Email
                </Label>
                <Input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="grid w-full items-center">
                <Label htmlFor="phone" className="mb-2">
                  Phone number
                </Label>
                <Input
                  type="text"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
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
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3 flex items-center space-x-2 text-sm md:mb-4">
              <Checkbox
                id="terms"
                checked={formData.terms}
                onCheckedChange={(checked) =>
                  setFormData((prev) => ({ ...prev, terms: checked }))
                }
              />
              <Label htmlFor="terms" className="cursor-pointer">
                I accept the Terms
              </Label>
            </div>

            {status === "error" && (
              <div className="rounded-lg bg-red-50 p-3 text-sm text-red-600">
                {errorMessage}
              </div>
            )}

            <div>
              <Button
                title={status === "loading" ? "Sending..." : "Submit"}
                type="submit"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Sending..." : "Submit"}
              </Button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
