import Link from 'next/link'
import React from 'react'

import Orbits from '@/components/shared/orbits'
import PageTitle from '@/components/shared/page-title'

import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

const Projects = () => {
    return (
        <section className='relative' >

            <section className=' z-10 relative container flex flex-col justify-center items-start'>
                <PageTitle title='My Reccent Projects' />

                <article className='w-full px-4 lg:px-8 py-8 rounded-t-2xl mt-8 bg-secondary-color-light dark:bg-secondary-color-dark'>
                    <Tabs defaultValue="account" className="w-full">
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
                </article>
            </section>

            <Orbits mini={true} />
        </section>
    )
}

export default Projects