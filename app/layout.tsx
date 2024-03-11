import "@/styles/globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter, Space_Grotesk, Open_Sans} from "next/font/google";
import { GeistSans } from 'geist/font/sans';
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { DownArrowIcon } from "@/components/Icon";
import { Github, BuyMeACoffee} from "@/components/icons";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/ui/model-toggle";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuPortal } from "@/components/ui/dropdown-menu";
import {SiteFooter} from "@/components/footer";

const clash = localFont({
  src: "../styles/ClashDisplay-Semibold.otf",
  variable: "--font-clash",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const space = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"]
});

const sourceSans = Open_Sans({
  variable: "--font-space",
  subsets: ["latin"]
});


export const metadata: Metadata = {
  title: "Sotopia",
  description:
    "A research platform for building interactive social agents.",
  metadataBase: new URL("https://sotopia.vercel.app"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const scrolled = false;
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(clash.variable, space.variable, "min-h-screen")}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <Toaster />
        <div className="relative flex min-h-screen flex-col items-center pb-10">
          <div
            className={`fixed top-0 w-full ${
              scrolled
                ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
                : "bg-white/3"
            } z-30 transition-all`}
          >
            <div className="w-full pl-3 sm:px-12 flex h-16 items-center justify-between">
              <Link href="/" className="flex items-center font-display text-4xl">
                <svg className="h-10 w-10 dark:text-sky-300 dark:drop-shadow-[0_3px_10px_#bae6fd]"
                  viewBox="0 0 300 300"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M250,200c-55.23,0-100-44.77-100-100S194.77,0,250,0"/>
                  <path d="M50,100c55.23,0,100,44.77,100,100S105.23,300,50,300"/>
                  <path d="M50,0l100,0c0,55.23-44.77,100-100,100"/>
                  <path d="M250,300l-100,0c0-55.23,44.77-100,100-100"/>
                </svg>
                <p className="dark:text-sky-400 dark:drop-shadow-[0_3px_10px_#bae6fd]">Sotopia</p>
              </Link>
              <div className="flex items-center space-x-4 sm:px-6">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <button className="group hidden max-w-fit items-center justify-center space-x-2 rounded-full border border-black bg-black px-3 py-1.5 text-sm text-white transition-colors hover:bg-white hover:text-black sm:flex">Research <DownArrowIcon/></button>
                </DropdownMenuTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuContent className="bg-black text-white">
                  <a href="https://www.sotopia.world/" className="hover:bg-white hover:text-black">
                      <DropdownMenuItem className="DropdownMenuItem hover:bg-white hover:text-black">Sotopia</DropdownMenuItem>
                  </a>
                  <Link href="/projects/sotopia-pi" className="hover:bg-white hover:text-black">
                      <DropdownMenuItem className="DropdownMenuItem hover:bg-white hover:text-black">Sotopia-π</DropdownMenuItem>
                  </Link>
                  <Link href="/projects/agent_vs_script/" className="hover:bg-white hover:text-black">
                      <DropdownMenuItem className="DropdownMenuItem hover:bg-white hover:text-black">Agents Vs Script</DropdownMenuItem>
                  </Link>
                  </DropdownMenuContent>
                </DropdownMenuPortal>
              </DropdownMenu>

                  
                {/* <a href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group hidden max-w-fit items-center justify-center space-x-2 rounded-full border border-black bg-black px-3 py-1.5 text-sm text-white transition-colors hover:bg-white hover:text-black sm:flex"
                >
                  <p>Chat in Sotopia</p>
                </a>
                <a href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group hidden max-w-fit items-center justify-center space-x-2 rounded-full border border-black bg-black px-3 py-1.5 text-sm text-white transition-colors hover:bg-white hover:text-black sm:flex"
                >
                  <p>Benchmark</p>
                </a> */}
                <Link
                  href="/about"
                  rel="noopener noreferrer"
                  className="group hidden max-w-fit items-center justify-center space-x-2 rounded-full border border-black bg-black px-3 py-1.5 text-sm text-white transition-colors hover:bg-white hover:text-black sm:flex"
                >
                  <p>About Us</p>
                </Link>
              
                <a
                  href="https://github.com/sotopia-lab/sotopia"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                    <Github className="dark:text-sky-500 dark:drop-shadow-[0_3px_10px_#bae6fd]" />
                </a>
                <ModeToggle className="dark:text-sky-500 dark:drop-shadow-[0_3px_10px_#bae6fd]" />
              </div>
            </div>
          </div>
          <main className="flex w-full flex-col items-center justify-center">
            {children}
          </main> 
          <SiteFooter />
        </div>
       
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
