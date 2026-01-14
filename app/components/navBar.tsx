"use client"

import * as React from "react"
import { useState } from "react"
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
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className="fixed z-10 flex max-w-max flex-1 justify-start ml-4 mt-4"
      onClick={() => setIsOpen(!isOpen)}>
      <Menu />
      {isOpen ?
        <NavMenu />
        : null
      }
    </div>
  )
}

const NavMenu = () => {
  return (
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
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export function NavigationMenuDemo() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  return (
    <>
      {isDesktopOrLaptop && <NavMenu />}
      {isTabletOrMobile && <BurgerMenu />}
    </>
  )
}
