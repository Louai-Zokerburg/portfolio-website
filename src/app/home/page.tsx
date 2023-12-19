import Orbits from '@/components/shared/orbits'
import React from 'react'

const Home = () => {
  return (
    <section
      className='relative' >
      <section className=' z-10 relative container flex flex-col justify-center h-screen items-centner'>
        <h1 className='text-2xl lg:text-6xl font-bold'>Loading....</h1>
      <Orbits />

      </section>

    </section>
  )
}

export default Home