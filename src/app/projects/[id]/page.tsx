import Orbits from '@/components/shared/orbits'
import ProjectTitle from '@/components/shared/project-title'
import React from 'react'

import { projectsInfo } from '@/data'
import { TProject } from '@/types'
import Image from 'next/image'
import ProjectCard from '@/components/project-card'
import Link from 'next/link'

import { FaArrowLeft } from "react-icons/fa";
import { Button } from '@/components/ui/button'
import SectionTitle from '@/components/shared/section-title'

const SingleProject = ({ params }: { params: { id: string } }) => {

    const project: TProject = projectsInfo.find(project => project.id === params.id)!
    const otherProjects: TProject[] = projectsInfo.filter(project => project.id !== params.id)!



    return (
        <section className='relative' >

            <section className=' z-10 relative container flex flex-col justify-center items-start'>



                <ProjectTitle title={project.title} sourceCode={project.source_code} liveDemo={project.live_demo} />

                <article className='w-full px-4 lg:px-8 py-8 rounded-t-2xl mt-8 bg-secondary-color-light dark:bg-secondary-color-dark flex flex-col justify-start items-start gap-y-8'>
                    <Image src={project.images.cover} alt='project cover image' className=' w-full rounded-xl' />

                    <span className='h-[5px] w-full bg-accent-color-light dark:bg-accent-color-dark rounded-full'></span>

                    <div className='text-sm lg:text-base w-full flex flex-col lg:flex-row lg:justify-between  justify-start items-start'>
                        <div className='lg:w-2/3'>

                            <div className='mb-8'>
                                <SectionTitle title='Project Description' />

                                <p className='pl-4'>{project.description}</p>
                            </div>

                            <div className='mb-8'>
                                <SectionTitle title='Project Features' />
                                <ul className='pl-4'>
                                    {
                                        project.features.map((feature, index) => <li key={index} className='my-2'>{(index + 1).toString() + ' . ' + feature}</li>)
                                    }
                                </ul>

                            </div>
                        </div>

                        <div className='mb-8'>
                            <SectionTitle title='Project Technologies' />

                            <ul className='pl-4'>
                                {
                                    project.technologies.map((tech, index) => <li key={index} className='my-2'>{(index + 1).toString() + ' . ' + tech}</li>)
                                }
                            </ul>

                        </div>
                    </div>

                    <SectionTitle title='Other Projects' />

                    <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                        {
                            otherProjects.map(project => (

                                <ProjectCard key={project.id} project={project} mini={true} />
                            ))
                        }
                    </div>
                </article>
            </section>

            <Orbits mini={true} />
        </section>
    )
}

export default SingleProject