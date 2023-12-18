import { TField } from '@/types'
import React from 'react'
import { FaCode } from 'react-icons/fa'

const FielCard = ({field}: {field: TField}) => {
  return (
    <article className='flex flex-col justify-start items-center gap-y-6 text-center rounded-xl py-6 px-4 duration-300 hover:translate-y-[-8px]  bg-accent-color-light/60 hover:bg-accent-color-light dark:bg-accent-color-dark/60 dark:hover:bg-accent-color-dark'>
                            <span className='flex justify-center items-center w-12 h-12 bg-primary-color text-black rounded-full'>
                               <FaCode size={28}/>
                            </span>
                            <h3 className='font-bold text-lg lg:text-xl'>{field.title}</h3>
                            <p className='text-xs lg:text-sm'>
                                {field.description}
                            </p>

                            {
                                field.skills.map(skill => (
                                    <div className='w-full flex flex-col justify-center items-center my-4 gap-y-1'>
                                        <div className='flex justify-between items-center  w-full'>
                                            <div className='flex justify-start items-center gap-x-1'>
                                            {/* <FaChevronRight size={12} /> */}
                                            <p className='font-semibold text-xs lg:text-sm'>&#x2022; {' ' + skill.name}</p>
                                            </div>
                                            <p className='font-bold text-xs lg:text-sm' >{skill.level.label}</p>
                                        </div>
                                        <div className='w-full flex justify-start items-center bg-bg-color-light dark:bg-bg-color-dark h-[6px] rounded-full'>
                                            <div style={{width: skill.level.value + '%'}} className={` bg-primary-color rounded-full h-[6px]`}></div>
                                        </div>
                                    </div>
                                ))
                            }
                        </article>
  )
}

export default FielCard