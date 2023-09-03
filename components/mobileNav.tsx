import React from 'react'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'
import { Logo } from '@/config/logo'
import { Menu } from 'lucide-react'
import { navigation } from '@/config/site'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { buttonVariants } from './ui/button'

export default function MobileNav() {
  return (
    <Sheet>
    <SheetTrigger>
      <Menu size={32} />
    </SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>
          <Logo />
        </SheetTitle>
        <SheetDescription></SheetDescription>
      </SheetHeader>

      <div className="flex flex-col space-y-4 text-2xl font-bold text-black">
        {navigation.map((item, index) => (
          <Link href={item.href} key={index} className={cn(buttonVariants({variant: "link"}))}>
            {item.name}
          </Link>
        ))}
      </div>
    </SheetContent>
  </Sheet>
  )
}
