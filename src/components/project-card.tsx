import { TProject } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const ProjectCard = ({ project, mini }: { project: TProject, mini?: boolean }) => {

    const [firstWord, ...restOfTitle] = project.title.split(' ')
    return (
        <Link href={`/projects/${project.id}`} className='bg-accent-color-light dark:bg-accent-color-dark rounded-lg p-4 flex flex-col justify-start items-start gap-y-5 hover:translate-y-[-8px] duration-300'>
            <Image src={project.images.cover} alt={`${project.title} cover image`} className='rounded-md w-full bg-center aspect-video' />

            <h3 className='font-semibold text-xl'>
                <span className='text-primary-color'>{firstWord + ' '}</span>
                {restOfTitle.join(' ')}
            </h3>

            <p className='text-xs lg:text-sm'>
                {project.description.substring(0, 150) + '.....'}
            </p>

            <ul className='list-none flex justify-start items-center w-full flex-wrap gap-1'>


                {
                    project.technologies.map(tech => (
                        <li className='px-3 py-2 bg-bg-color-light/60 dark:bg-bg-color-dark/60 rounded-full text-xs'>
                            {tech}
                        </li>
                    ))
                }
            </ul>
        </Link>
    )
}

export default ProjectCard