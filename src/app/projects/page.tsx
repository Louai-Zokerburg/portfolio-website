import Orbits from '@/components/shared/orbits'
import PageTitle from '@/components/shared/page-title'
import Link from 'next/link'
import React from 'react'

const Projects = () => {
    return (
        <section className='relative' >

            <section className=' z-10 relative container flex flex-col justify-center items-start'>
            <PageTitle title='My Reccent Projects' />

            <article className='w-full px-4 lg:px-8 py-8 rounded-t-2xl mt-8 bg-secondary-color-light dark:bg-secondary-color-dark'>
                <Link href='projects/12'>Hello</Link>
            </article>                
            </section>

            <Orbits mini={true} />
        </section>
    )
}

export default Projects