"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "@deemlol/next-icons"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { useMediaQuery } from 'react-responsive'

const BurgerMenu = () => {
  return (
    <div className="relative flex max-w-max flex-1 justify-start ml-4 mt-4">
      <Menu />
    </div>
  )
}

const NavMenu = () => {
  return (
    <div>
      <NavigationMenu viewport={false} className="fixed">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link href="/">Home</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link href="/projects">Projects</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link href="/about">About</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link href="/contact">Contact</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

export function NavigationMenuDemo() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  return (
    <div>
      {isDesktopOrLaptop && <NavMenu />}
      {isTabletOrMobile && <BurgerMenu />}
    </div>
  )
}
