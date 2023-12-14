'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

import { FaRegAddressCard, FaCode } from "react-icons/fa"
import { FaHouse } from "react-icons/fa6"
const NavigationLinks = () => {

    const pathname = usePathname()
    return (
        <ul className='nav-links'>
            <Link href='/' className={`nav-link ${pathname === '/' && 'selected-nav-link'}`}>
                <FaHouse size={24} />
                <p className='font-semibold text-sm'>Home</p>
            </Link>


            <Link href='/about' className={`nav-link ${pathname === '/about' && 'selected-nav-link'}`}>
                <FaRegAddressCard size={24} />
                <p className='font-semibold text-sm'>About</p>
            </Link>


            <Link href='/projects' className={`nav-link ${pathname.includes('/projects') && 'selected-nav-link'}`}>
                <FaCode size={24} />
                <p className='font-semibold text-sm'>Project</p>
            </Link>

        </ul>
    )
}

export default NavigationLinks