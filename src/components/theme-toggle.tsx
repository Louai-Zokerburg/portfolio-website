"use client"

import { FiSun, FiMoon } from "react-icons/fi";

import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"


export default function ThemeToggle() {
    const { setTheme, theme } = useTheme()

    return (
        <Button className="rounded-md" variant='ghost' size='icon' onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
            <FiMoon className="block dark:hidden" size={24} />
            <FiSun className="hidden dark:block"  size={24}/>
        </Button>

    )
}
