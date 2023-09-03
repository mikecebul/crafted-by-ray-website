"use client";

import * as React from "react";
import Link from "next/link";

import { cn, isActiveRoute } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { usePathname } from "next/navigation";
import { navigation } from "@/config/site";
import { buttonVariants } from "./ui/button";

export function DesktopNav() {
  const currentPathName = usePathname();

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navigation.map((item) => (
          <NavigationMenuItem key={item.name}>
            <Link href={item.href} legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(buttonVariants({ variant: "navLink" }), {
                  "border-b-2 border-b-brand border-opacity-100 rounded-b-none text-":
                    isActiveRoute(currentPathName as string, item.href),
                })}
              >
                {item.name}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
