"use client";

import { Logo } from "@/config/logo";
import MobileNav from "./mobileNav";

const Navbar = () => {
  return (
      <nav className="flex justify-between">
        <div>
          <Logo />
        </div>
        <div className="">
          <MobileNav />
        </div>
      </nav>
  );
};

export default Navbar;
