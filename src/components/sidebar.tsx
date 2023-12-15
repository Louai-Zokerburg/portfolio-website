'use client'

import React from 'react'
import { usePathname } from 'next/navigation'


import ThemeToggle from '@/components/theme-toggle'
import Logo from '@/components/shared/logo'
import NavigationLinks from '@/components/shared/navigation-links'


const Sidebar = () => {

    const pathname = usePathname()

    return (
        <aside className='sidebar'>

            {/* Displaying the logo */}
            <Logo />


            {/* Displaying the main navigation links */}
            <NavigationLinks />


            {/* Displaying the theme toggle */}
            <ThemeToggle />
        </aside>
    )
}



export default Sidebar