"use client"

import * as React from "react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sotopia } from "@/components/icons";
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

const project_constants = [
  {
    title: "Sotopia",
    href: "/projects/sotopia",
    description: "The platform for realistic simulations of social interactions.",
  },
  {
    title: "Sotopia-RL",
    href: "/projects/sotopia-rl",
    description: "Designing RL specifically for social intelligence.",
  },
  {
    title: "Sotopia-π",
    href: "/projects/sotopia-pi",
    description: "Training socially-intelligent agents in Sotopia.",
  },
  {
    title: "Agents Vs Script",
    href: "/projects/agent_vs_script",
    description: "Realistic social simulations require information asymmetry.",
  },
  {
    title: "AI-LieDar",
    href: "https://arxiv.org/abs/2409.09013",
    description: "Examine the trade-off between utility and truthfulness in LLM agents",
  },
  {
    title: "HAICOSYSTEM",
    href: "https://haicosystem.org",
    description: "AI safety in interactions between users, AI, and environments",
  },
]

import Link, { LinkProps } from "next/link"
import { useRouter } from "next/navigation"
import { ViewVerticalIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import { Twitter } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { constants } from "buffer";

export function MobileNav() {
  const [open, setOpen] = React.useState(false)
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <svg
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
          >
            <path
              d="M3 5H11"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M3 12H16"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M3 19H21"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <MobileLink
          href="/"
          className="flex items-center"
          onOpenChange={setOpen}
        >
          <Sotopia className="mr-2 h-2 w-2 pb-10 pr-10" />
          <span className="text-2xl font-bold">Sotopia</span>
        </MobileLink>
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-2">
          <div className="flex flex-col space-y-3 pb-5">
            <MobileLink href="/projects/sotopia" onOpenChange={setOpen}>
              <span className="text-2xl font-bold">Research</span>
            </MobileLink>
            {project_constants.map((project) => (
              <MobileLink
                key={project.title}
                href={project.href}
                onOpenChange={setOpen}
                className="text-lg font-bold pl-3"
              >
                {project.title}
              </MobileLink>
            ))}
          </div>
          <div className="flex flex-col space-y-2">
            <span className="text-2xl font-bold">Resources</span>
              {components.map((component) => (
                <MobileLink
                  key={component.title}
                  href={component.href}
                  onOpenChange={setOpen}
                  className="text-lg font-bold pl-3"
                >
                  {component.title}
                </MobileLink>
              ))}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
  className?: string
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  const router = useRouter()
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString())
        onOpenChange?.(false)
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  )
}

export function MainNav() {
  return (
    <NavigationMenu className="hidden md:block">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Research</NavigationMenuTrigger>
          <NavigationMenuContent className="bg-black text-white">
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 text-white p-6 no-underline outline-none focus:shadow-md"
                    href="/projects/sotopia"
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
              {project_constants.slice(1).map((project) => (
                <ListItem
                  key={project.title}
                  title={project.title}
                  href={project.href}
                >
                  {project.description}
                </ListItem>
              ))}
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
          <Link href="https://docs.sotopia.world/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Documentation
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export function NavigationMenuSotopia() {
  return (
    <div>
      <MainNav />
      <MobileNav />
    </div>
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
