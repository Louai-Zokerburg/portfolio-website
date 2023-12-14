import React from 'react'
import Logo from './shared/logo'
import ThemeToggle from './theme-toggle'

const Topbar = () => {
  return (
    <nav className='topbar'>
        <Logo mobile={true} />
        <ThemeToggle />
    </nav>
  )
}

export default Topbar