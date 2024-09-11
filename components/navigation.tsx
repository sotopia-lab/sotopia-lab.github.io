"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Datasets",
    href: "https://huggingface.co/collections/cmu-lti/sotopia-65f312c1bd04a8c4a9225e5b",
    description:
      "A collection of datasets related to Sotopia hosted on Hugging Face.",
  },
  {
    title: "Chat Now",
    href: "https://chat.sotopia.world",
    description: "Chat with Sotopia now!",
  },
  {
    title: "View Episodes",
    href: "https://sotopia.world/episodes",
    description: "View all episodes of Sotopia.",
  },
  {
    title: "Benchmark",
    href: "/",
    description: "Benchmark for Sotopia.",
  },
  {
    title: "About Us",
    href: "/about",
    description:
      "Learn more about the team behind Sotopia.",
  },
  
]

export function NavigationMenuSotopia() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Research</NavigationMenuTrigger>
          <NavigationMenuContent className="bg-black text-white">
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 text-white p-6 no-underline outline-none focus:shadow-md"
                    href="/sotopia-website/projects/sotopia"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Sotopia
                    </div>
                    <p className="text-sm leading-tight text-white">
                      The platform for realistic simulations of social interactions.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/sotopia-website/projects/sotopia-pi" title="Sotopia-π">
                Training socially-intelligent agents in Sotopia.
              </ListItem>
              <ListItem href="/sotopia-website/projects/agent_vs_script/" title="Agents Vs Script">
                Realistic social simulations require information asymmetry.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
          <NavigationMenuContent className="bg-black text-white">
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Documentation
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
