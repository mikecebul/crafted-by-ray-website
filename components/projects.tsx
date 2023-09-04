"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="sm:container"
    >
      <h2 className="pt-16 pb-8 text-3xl font-semibold text-center md:font-bold md:text-4xl">
        YouTube Videos
      </h2>
      <div className="flex flex-col items-center gap-8 py-4 md:flex-row max-w-7xl">
        {Array(3)
          .fill(null)
          .map((project, index) => (
            <div className="flex flex-col items-center" key={index}>
              <Image
                src="/thumbnail_1.png"
                width={1920}
                height={1080}
                alt="YouTube video preview"
                className="object-cover w-full rounded-t-lg"
              />
              <div className="p-8 rounded-b-lg bg-amber-200">
                <p className="text-2xl font-semibold">DIY Wooden Card Box</p>
                <p className="pt-4 text-lg font-light">
                  Looking for rustic or boho wedding decor? Watch me turn three
                  1x4 pine boards into a...
                </p>
                <div className="flex justify-start pt-8">
                  <Link
                    href="#"
                    className={cn(
                      buttonVariants({ variant: "primary" }),
                      "min-w-[12rem]"
                    )}
                  >
                    See More
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </motion.div>
  );
}
