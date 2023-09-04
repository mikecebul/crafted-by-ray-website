import React from "react";
import { HeroCTA } from "./heroCTA";
import ContactForm from "./contactForm";
import HeroContactForm from "./heroContactForm";

export default function Hero() {
  return (
    <div className="relative flex items-center justify-start px-4 py-[120px] md:container xl:pl-48">
      <HeroCTA />
      <div className="top-0 right-0 z-20 hidden lg:block lg:absolute xl:right-16">
        <HeroContactForm />
      </div>
    </div>
  );
}
