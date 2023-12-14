import Image from 'next/image'
import Link from 'next/link'

import logo from '@/assets/logo.svg'


type PropTypes = {
    mobile?: boolean
}

const Logo = ({ mobile = false }: PropTypes) => {
    return (
        <Link href='/'>
            <Image src={logo} alt='logo' className={`${mobile ? 'w-[32px]' : 'w-[40px]'} dark:invert-white`} />
        </Link>
    )
}

export default Logo