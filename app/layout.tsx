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
    "A platform for building interactive social agents.",
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
      <body className={cn(clash.variable, space.variable)}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <Toaster />
        
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
              {/* <a href="http://arxiv.org/abs/2310.11667"
                target="_blank"
                rel="noopener noreferrer"
                className="group hidden max-w-fit items-center justify-center space-x-2 rounded-full border border-black bg-black px-3 py-1.5 text-sm text-white transition-colors hover:bg-white hover:text-black sm:flex"
              >
                <p>Research</p>
              </a> */}
                
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <button className="group hidden max-w-fit items-center justify-center space-x-2 rounded-full border border-black bg-black px-3 py-1.5 text-sm text-white transition-colors hover:bg-white hover:text-black sm:flex">Research <DownArrowIcon/></button>
                </DropdownMenuTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuContent className="bg-black text-white">
                  <a href="https://www.sotopia.world/" className="hover:bg-white hover:text-black">
                      <DropdownMenuItem className="DropdownMenuItem hover:bg-white hover:text-black">Sotopia</DropdownMenuItem>
                  </a>
                  <a href="https://www.sotopia.world/" className="hover:bg-white hover:text-black">
                      <DropdownMenuItem className="DropdownMenuItem hover:bg-white hover:text-black">Sotopia-pi</DropdownMenuItem>
                  </a>
                  <a href="https://www.sotopia.world/" className="hover:bg-white hover:text-black">
                      <DropdownMenuItem className="DropdownMenuItem hover:bg-white hover:text-black">Agents Vs Script</DropdownMenuItem>
                  </a>
                  </DropdownMenuContent>
                </DropdownMenuPortal>
              </DropdownMenu>
                
              <a href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="group hidden max-w-fit items-center justify-center space-x-2 rounded-full border border-black bg-black px-3 py-1.5 text-sm text-white transition-colors hover:bg-white hover:text-black sm:flex"
              >
                <p>Chat Now</p>
              </a>
              <a href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="group hidden max-w-fit items-center justify-center space-x-2 rounded-full border border-black bg-black px-3 py-1.5 text-sm text-white transition-colors hover:bg-white hover:text-black sm:flex"
              >
                <p>Benchmark</p>
              </a>
              <a
                href="/about"
                rel="noopener noreferrer"
                className="group hidden max-w-fit items-center justify-center space-x-2 rounded-full border border-black bg-black px-3 py-1.5 text-sm text-white transition-colors hover:bg-white hover:text-black sm:flex"
              >
                <p>About Us</p>
              </a>
             
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
        {/* <div className="absolute w-full py-5 text-center">
          <div className="flex items-center justify-center space-x-4 mt-2">
          <p className="text-gray-500">
            <Image
              src="/ltilogo.png"
              alt="Language Technologies Institute, Carnegie Mellon University"
              width={150}
              height={50}
            />
            </p>
          </div>
        </div> */}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
