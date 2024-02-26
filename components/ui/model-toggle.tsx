"use client"
 
import * as React from "react"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"
 
import { Button } from "@/components/ui/button"
import { useEffect } from "react"

 
export function ModeToggle({ className }: { className?: string }) {
  const { setTheme, theme } = useTheme();
  const [_, startTransition] = React.useTransition();    
  useEffect(() => {
    // Set the default theme to 'dark' when the component mounts
    setTheme('light');
  }, []);

  return (
    <Button
      className={className}
      variant="ghost"
      size="icon"
      onClick={() => {
        startTransition(() => {
            setTheme(theme === 'light' ? 'dark' : 'light');
        });
    }}
    >
        <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 transition-all" />
        <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 transition-all" />
        <span className="sr-only">Toggle theme</span>
      </Button>
      
  )
}