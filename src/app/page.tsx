import React from 'react'

import { generalInfo } from '@/data'
import { Button } from '@/components/ui/button'

import orbit_3_light from '@/assets/orbit_3_light.svg'
import orbit_2_light from '@/assets/orbit_2_light.svg'
import orbit_1_light from '@/assets/orbit_1_light.svg'
import orbit_3_dark from '@/assets/orbit_3_dark.svg'
import orbit_2_dark from '@/assets/orbit_2_dark.svg'
import orbit_1_dark from '@/assets/orbit_1_dark.svg'
import Image from 'next/image'

const Home = () => {
  return (
    <section className='relative' >

      <section className='z-10 relative container flex flex-col justify-center items-center text-center lg:text-start lg:items-start h-[calc(100vh-60px)] lg:h-screen'>
        {/* Hero Conetent  */}
        <article className='mb-8 flex flex-col gap-y-2 lg:gap-y-4'>
          <h3 className='font-jetbrains font-medium text-base lg:text-lg'>{generalInfo.hero_info.greeting}</h3>
          <h1 className='font-bold text-3xl lg:text-5xl'>{generalInfo.hero_info.name}</h1>
          <h1 className='font-bold text-3xl lg:text-5xl'>{generalInfo.hero_info.role}</h1>
        </article>

        {/* Hero Intro */}
        <p className='text-sm lg:text-base lg:mr-[40%]' >{generalInfo.hero_info.intro}</p>

        {/* CTA Buttons  */}
        <div className='flex justify-center items-center gap-x-4 mt-8 lg:mt-12'>
          <Button size='lg'>
            <p className='font-semibold text-base lg:text-lg'>My projects</p>
          </Button>
          <Button variant='secondary' size='lg'>
            <p className='font-semibold text-base lg:text-lg'>My resume</p>
          </Button>
        </div>

        {/* Hero Cards  */}
        <div className='flex justify-center items-center gap-x-4 mt-8 lg:mt-12'>
          <article className='state-card'>
            <p className='font-bold text-2xl lg:text-3xl font-jetbrains'>{generalInfo.hero_info.stats.projects}+</p>
            <span>
              <p className='text-base lg:text-lg'>Built</p>
              <p className='text-base lg:text-lg'>Projects</p>
            </span>
          </article>
          <article className='state-card'>
            <p className='font-bold text-2xl lg:text-3xl font-jetbrains'>{generalInfo.hero_info.stats.experience}+</p>
            <span>
              <p className='text-base lg:text-lg'>Years</p>
              <p className='text-base lg:text-lg'>Experience</p>
            </span>
          </article>
          <article className='state-card'>
            <p className='font-bold text-2xl lg:text-3xl font-jetbrains'>{generalInfo.hero_info.stats.frameworks}+</p>
            <span>
              <p className='text-base lg:text-lg'>Langs &</p>
              <p className='text-base lg:text-lg'>Frameworks</p>
            </span>
          </article>
        </div>
      </section>

      <div className=' absolute top-0 flex justify-end items-center w-full h-screen overflow-hidden '>

        <div className='hidden dark:lg:flex h-[900px] w-[900px] justify-center items-center'>
          <Image src={orbit_3_dark} alt='orbig' className='spin-orbit-3 z-0 absolute w-[350px]' />
          <Image src={orbit_2_dark} alt='orbig' className='spin-orbit-2 z-0 absolute w-[650px]' />
          <Image src={orbit_1_dark} alt='orbig' className='spin-orbit-1 z-0 absolute w-[900px]' />
        </div>

        <div className='dark:hidden relative h-[900px] w-[900px] hidden lg:flex justify-center items-center'>
          <Image src={orbit_3_light} alt='orbig' className='spin-orbit-3 z-0 absolute w-[350px]' />
          <Image src={orbit_2_light} alt='orbig' className='spin-orbit-2 z-0 absolute w-[650px]' />
          <Image src={orbit_1_light} alt='orbig' className='spin-orbit-1 z-0 absolute w-[900px]' />
        </div>

      </div>

    </section>
  )
}

export default Home