"use client";

import { Logo } from "@/config/logo";
import MobileNav from "./mobileNav";
import { useMediaQuery } from "usehooks-ts";
import { DesktopNav } from "./desktopNav";

const Navbar = () => {
  const mobile = useMediaQuery("(max-width: 640px)");
  return (
    <nav className="flex items-start justify-between px-4 pt-8 sm:container">
      <div>
        <Logo />
      </div>
      <div className="">{mobile ? <MobileNav /> : <DesktopNav />}</div>
    </nav>
  );
};

export default Navbar;
