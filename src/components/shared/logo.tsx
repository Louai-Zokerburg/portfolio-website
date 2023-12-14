import Image from 'next/image'
import Link from 'next/link'

import logo from '@/assets/logo.svg'


const Logo = () => {
    return (
        <Link href='/'>
            <Image src={logo} alt='logo' className='w-[40px] dark:invert-white' />
        </Link>
    )
}

export default Logo