import React from 'react'
import NavigationLinks from './shared/navigation-links'

const BottomNav = () => {
  return (
    <nav className='bottom-nav'>
        <NavigationLinks mobile={true} />
    </nav>
  )
}

export default BottomNav