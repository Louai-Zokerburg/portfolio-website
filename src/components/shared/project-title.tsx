import Link from "next/link";
import { Button } from "../ui/button";

import { FaArrowLeft, FaGithub, FaLink } from "react-icons/fa";

const ProjectTitle = ({ title, sourceCode, liveDemo }: { title: string, sourceCode: string, liveDemo: string }) => {

    const [firstWord, ...restOfTitle] = title.split(' ');

    return (
        <div className="flex flex-col justify-start items-start gap-y-[3vh] lg:gap-y-[9vh] w-full mt-[2vh] lg:mt-[6vh]">

            <Link href='/projects' >
                <Button variant='ghost' size='icon' className="lg:hidden">
                    <FaArrowLeft size={20} />
                </Button>
                <Button variant='ghost' size='sm' className="hidden lg:flex justify-center items-center gap-x-2">
                    <FaArrowLeft size={20} />
                    <p className='font-semibold text-sm lg:text-base'>Back</p>
                </Button>
            </Link>

            <div className="flex justify-between items-start w-full ">


                <article className='flex flex-col justify-center items-start gap-y-2 '>
                    <h1 className='font-bold text-2xl lg:text-4xl'>
                        <span className="text-primary-color">{firstWord + ' '}</span>
                        {restOfTitle.join(' ')}
                    </h1>
                    <span className='h-[3px] rounded-full w-[15%] bg-primary-color'></span>
                </article>

                <div className="flex justify-center items-center gap-x-2">
                    <Link href={sourceCode} target="_blank">
                        <Button variant='secondary' size='icon' className="lg:hidden">
                            <FaGithub size={20} />
                        </Button>
                        <Button variant='secondary' className="hidden lg:flex justify-center items-center gap-x-2">
                            <FaGithub size={20} />
                            <p className='font-medium text-sm lg:text-base'>Source code</p>
                        </Button>
                    </Link>
                    <Link href={liveDemo} target="_blank">
                        <Button variant='primary' size='icon' className="lg:hidden">
                            <FaLink size={20} />
                        </Button>
                        <Button variant='primary' className="hidden lg:flex justify-center items-center gap-x-2">
                            <FaLink size={20} />
                            <p className='font-semibold text-sm lg:text-base'>Live demo</p>
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProjectTitle