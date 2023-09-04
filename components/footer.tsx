"use client";

import { LogoFooter } from "@/config/logoFooter";
import { navigation } from "@/config/site";
import Link from "next/link";
import {
  Edit,
  Facebook,
  Instagram,
  Mail,
  Phone,
  User,
  Youtube,
} from "lucide-react";
import ContactForm from "./contactForm";

export function Footer() {
  return (
    <div className="mt-16">
      <svg
        viewBox="0 0 100 10"
        height="100%"
        width="100%"
        preserveAspectRatio="none"
        className="block"
      >
        <polygon points="100,10 100,0 0,10" className="fill-amber-200" />
      </svg>
      <div className="flex flex-col pt-10 bg-amber-200">
        <div className="flex justify-center pb-8">
          <LogoFooter />
        </div>
        <div className="flex justify-center px-8 pb-8">
          <div className="flex flex-col">
            <ul className="pb-4 text-2xl font-semibold">Pages</ul>
            {navigation.map((item, index) => (
              <li key={index} className="pb-4 list-none last:pb-0">
                <Link href={item.href} className="text-xl font-light">
                  {item.name}
                </Link>
              </li>
            ))}
          </div>
          <div className="p-16" />
          <div className="flex flex-col">
            <ul className="pb-4 text-2xl font-semibold">Social</ul>
            <li className="pb-4 list-none">
              <Youtube size={28} />
            </li>
            <li className="pb-4 list-none">
              <Instagram size={28} />
            </li>
            <li className="pb-4 list-none">
              <Facebook size={28} />
            </li>
          </div>
        </div>
        <div className="max-w-lg px-4 pb-4 sm:container">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
