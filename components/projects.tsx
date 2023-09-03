"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <motion.div
      className=""
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      <h2 className="pt-16 text-3xl font-semibold text-center">
        YouTube Videos
      </h2>
      <div className="flex flex-col max-w-2xl space-y-8 py-4">
        {Array(3)
          .fill(null)
          .map((project, index) => (
            <div className="flex flex-col items-center" key={index}>
              <Image
                src="/thumbnail_1.png"
                width={1920}
                height={1080}
                alt="YouTube video preview"
                className="object-cover w-full"
              />
              <div className="p-8 bg-amber-200">
                <p className="text-2xl font-semibold">DIY Wooden Card Box</p>
                <p className="pt-4 text-lg font-light">
                  Looking for rustic or boho wedding decor? Watch me turn three
                  1x4 pine boards into a...
                </p>
                <div className="flex justify-center pt-4">
                  <Link
                    href="#"
                    className="px-8 py-2 border-2 border-black rounded-full font-lg semibold text-"
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
