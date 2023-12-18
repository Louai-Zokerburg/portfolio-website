import { TProject } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const ProjectCard = ({ project, mini }: { project: TProject, mini?: boolean }) => {

    const [firstWord, ...restOfTitle] = project.title.split(' ')
    return (
        <Link href={`/projects/${project.id}`} className='bg-accent-color-light/50 dark:bg-accent-color-dark/50 dark:hover:bg-accent-color-dark hover:bg-accent-color-light hover:translate-y-[-8px] rounded-2xl p-4 flex flex-col justify-start items-start gap-y-5  duration-300'>
            <Image src={project.images.cover} alt={`${project.title} cover image`} className='rounded-md w-full aspect-video' />

            <h3 className='font-semibold text-xl'>
                <span className='text-primary-color'>{firstWord + ' '}</span>
                {restOfTitle.join(' ')}
            </h3>

            {
                !mini &&
                (<p className='text-xs lg:text-sm'>
                    {project.description.substring(0, 180) + '.....'}
                </p>)
            }

            <ul className='list-none flex justify-start items-center w-full flex-wrap gap-x-1 gap-y-[6px]'>
                {
                    project.technologies.map(tech => (
                        <li key={tech} className='px-3 py-[6px] font-medium font-jetbrains bg-bg-color-light/60 dark:bg-bg-color-dark/60 rounded-full text-[10px]'>
                            {tech}
                        </li>
                    ))
                }
            </ul>
        </Link>
    )
}

export default ProjectCard