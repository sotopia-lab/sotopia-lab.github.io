import "@/styles/globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter, Space_Grotesk} from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Github, BuyMeACoffee } from "@/components/icons";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "sonner";

const clash = localFont({
  src: "../styles/ClashDisplay-Semibold.otf",
  variable: "--font-clash",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const space = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Spirals",
  description:
    "Generate beautiful AI spiral art with one click. Powered by Vercel and Replicate.",
  metadataBase: new URL("https://spirals.vercel.app"),
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
        <Toaster />
        
        {/* <div className="fixed h-screen w-full" /> */}
        <div
          className={`fixed top-0 w-full ${
            scrolled
              ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
              : "bg-white/3"
          } z-30 transition-all`}
        >
          <div className="w-full pl-3 sm:px-12 flex h-16 max-w-screen-xl items-center justify-between">
            <Link href="/" className="flex items-center font-display text-2xl ">
              <svg className="h-5 w-5"
                viewBox="0 0 300 300"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M250,200c-55.23,0-100-44.77-100-100S194.77,0,250,0"/>
                <path d="M50,100c55.23,0,100,44.77,100,100S105.23,300,50,300"/>
                <path d="M50,0l100,0c0,55.23-44.77,100-100,100"/>
                <path d="M250,300l-100,0c0-55.23,44.77-100,100-100"/>
              </svg>
              <p>Sotopia</p>
            </Link>
            <div className="flex items-center space-x-4 sm:px-6">
              <a href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="group hidden max-w-fit items-center justify-center space-x-2 rounded-full border border-black bg-transparent px-3 py-1.5 text-sm text-black transition-colors hover:bg-white hover:text-black sm:flex"
              >
                <p>Paper</p>
              </a>
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="group hidden max-w-fit items-center justify-center space-x-2 rounded-full border border-black bg-black px-3 py-1.5 text-sm text-white transition-colors hover:bg-white hover:text-black sm:flex"
              >
                <p>Documentation</p>
              </a>
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="group sm:hidden max-w-fit items-center justify-center space-x-2 rounded-full border border-black bg-black px-3 py-1.5 text-sm text-white transition-colors hover:bg-white hover:text-black"
              >
                <p>Doc</p>
              </a>
              <a
                href="https://github.com/sotopia-lab/sotopia"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github />
              </a>
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
        <Analytics />
      </body>
    </html>
  );
}