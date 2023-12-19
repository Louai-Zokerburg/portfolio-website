import Link from 'next/link'
import React from 'react'

import Orbits from '@/components/shared/orbits'
import PageTitle from '@/components/shared/page-title'


import ProjectCard from '@/components/project-card'

import { projectsInfo } from '@/data'
import MotionSection from '@/components/shared/motion-section'

const Projects = () => {
    return (
        <MotionSection
            initial={{ opacity: 0, translateY: 25 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5 }}
            className='relative' >

            <section className=' z-10 relative container flex flex-col justify-center items-start'>
                <PageTitle title='My Reccent Projects' />

                <div className='w-full px-4 lg:px-8 py-8 grid gap-6 rounded-t-2xl mt-8 bg-secondary-color-light dark:bg-secondary-color-dark grid-cols-1 md:grid-cols-2'>
                    {
                        projectsInfo.map(project => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                            />
                        ))
                    }

                </div>
            </section>

            <Orbits mini={true} />
        </MotionSection>
    )
}

export default Projects





/**
 * { <Tabs defaultValue="account" className="w-full">
                        <TabsList className="grid w-full grid-cols-4">
                            <TabsTrigger value="all">All projects</TabsTrigger>
                            <TabsTrigger value="mern">MERN projects</TabsTrigger>
                            <TabsTrigger value="next.js">Next.js projects</TabsTrigger>
                            <TabsTrigger value="apis">Backend APIs</TabsTrigger>
                        </TabsList>

                        <TabsContent value="all">
                            <h3>All Projects</h3>
                        </TabsContent>
                        <TabsContent value="mern">
                            <h3>MERN Projects</h3>
                        </TabsContent>
                        <TabsContent value="next.js">
                            <h3>Next.js Projects</h3>
                        </TabsContent>
                        <TabsContent value="apis">
                            <h3>Backend APIs</h3>
                        </TabsContent>
                    </Tabs> 
 */