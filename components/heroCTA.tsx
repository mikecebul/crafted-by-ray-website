"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

export const HeroCTA = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.1 }}
      className="relative md:max-w-md"
    >
      <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
        Custom <span className="block sm:inline">Woodworking</span>
      </h1>
      <svg
        className="absolute top-[35px] left-[25px] md:top-[55px] md:left-[58px]"
        width="78"
        height="10"
        viewBox="0 0 78 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.76434 4.38295C2.76434 4.38295 55.1851 -1.77082 75.996 7.49152"
          stroke="#F59E0B"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>

      <p className="pt-4 md:text-xl">
        A small family business in{" "}
        <span className="block sm:inline">Charlevoix, MI.</span>
      </p>
      <div className="pt-10 pb-2">
        <Link
          href="#"
          className={cn(
            buttonVariants({ variant: "primary" }),
            "min-w-[12rem]"
          )}
        >
          See My Work
        </Link>
      </div>
    </motion.div>
  );
};
