import Orbits from '@/components/shared/orbits'
import PageTitle from '@/components/shared/page-title'
import SectionTitle from '@/components/shared/section-title'
import Image from 'next/image'
import React from 'react'

import { FaCode, FaChevronRight, FaLink } from "react-icons/fa";
import { PiCertificateBold } from "react-icons/pi";


import me from '@/assets/images/me.png'
import { certefications, fieldsInfo, generalInfo } from '@/data'
import FielCard from '@/components/field-card'
import Link from 'next/link'

const About = () => {
    return (
        <section className='relative' >

            <section className=' z-10 relative container flex flex-col justify-center items-start'>
                <PageTitle title='About me & my Skills' />

                <article className='w-full px-4 lg:px-8 py-8 rounded-t-2xl mt-8 bg-secondary-color-light dark:bg-secondary-color-dark flex flex-col justify-start items-start gap-y-8'>

                    <article className='flex flex-col justify-start items-start gap-4 lg:flex-row lg:justify-between lg:items-stretch'>

                        <Image className='lg:w-1/2 z-5 aspect-auto rounded-lg' src={me} alt='My Image Picture' />
                        {/* <div className='relative group lg:w-1/2  overflow-hidden rounded-lg'>
                            <span className='rounded-lg z-1 w-full h-full absolute top-0 left-0 group-hover:translate-x-[16px] duration-300   group-hover:translate-y-[16px] bg-primary-color'></span>
                        </div> */}
                        <div className='lg:w-1/2 flex flex-col justify-around items-start'>
                            <SectionTitle title='About Me' />

                            <p className=' leading-loose text-sm lg:text-base'>{generalInfo.about_info.bio}</p>
                        </div>
                    </article>

                    <SectionTitle title='My Skills' />

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-4'>

                        {
                            fieldsInfo.map(field => (
                                <FielCard field={field} />
                            ))
                        }
                    </div>
                    <SectionTitle title='My Certifications' />

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-4'>

                        {
                            certefications.map(cert => (
                                <Link href={cert.credential_url} target='_blank' className='flex flex-col justify-center items-start gap-y-6 rounded-xl p-4 duration-300 hover:translate-y-[-8px]  bg-accent-color-light/60 hover:bg-accent-color-light dark:bg-accent-color-dark/60 dark:hover:bg-accent-color-dark'>
                                    <div className='w-full flex justify-between items-center'>
                                        <PiCertificateBold size={48} color='#CB76FF' />
                                        <FaLink size={18} />
                                    </div>
                                    <div>
                                        <p className='text-xs lg:text-sm'>I have Successfully Completed</p>
                                        <h3 className='text-base lg:text-lg '>{cert.title}</h3>
                                    </div>
                                    <div>

                                        <p className='text-xs lg:text-sm'>On</p>
                                        <p  className='text-sm lg:text-base'>{cert.date}</p>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                </article>

            </section>

            <Orbits mini={true} />
        </section>
    )
}

export default About