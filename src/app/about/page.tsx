import Orbits from '@/components/shared/orbits'
import PageTitle from '@/components/shared/page-title'
import React from 'react'

const About = () => {
    return (
        <section className='relative' >

            <section className=' z-10 relative container flex flex-col justify-center items-start'>
            <PageTitle title='About me & my Skills' />

            <article className='w-full px-4 lg:px-8 py-8 rounded-t-2xl mt-8 bg-secondary-color-light dark:bg-secondary-color-dark'>
                <p>hello</p>
                <p>hello</p>
                <p>hello</p>
                <p>hello</p>
                <p>hello</p>
                <p>hello</p>
                <p>hello</p>
                <p>hello</p>
                <p>hello</p>
                <p>hello</p>
                <p>hello</p>
                <p>hello</p>
                <p>hello</p>
                <p>hello</p>
                <p>hello</p>
                <p>hello</p>
                <p>hello</p>
                <p>hello</p>
                <p>hello</p>
                <p>hello</p>
                <p>hello</p>
                <p>hello</p>
            </article>                
            </section>

            <Orbits mini={true} />
        </section>
    )
}

export default About