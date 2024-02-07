// // app/components/ThemeSwitcher.tsx
// "use client";

// import {useTheme} from "next-themes";
// import { useEffect, useState } from "react";

// export function ThemeSwitcher() {
//   const [mounted, setMounted] = useState(false)
//   const { theme, setTheme } = useTheme()

//   useEffect(() => {
//     setMounted(true)
//   }, [])

//   if(!mounted) return null

//   return (
//     <div>
//       The current theme is: {theme}
//       <button className="border-2" onClick={() => setTheme('light')}>Light </button>
//       <button className="border-2" onClick={() => setTheme('dark')}>Dark</button>
//     </div>
//   )
// };


"use client"

import * as React from "react"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react";

import { Button } from "../../components/ui//button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu"

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
    useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null
  

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="h-9" size="icon">
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
// export  ThemeSwitcher;