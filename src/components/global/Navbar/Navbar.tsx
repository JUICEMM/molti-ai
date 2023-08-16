import React from 'react'
import NavbarHeader from './NavbarHeader'
import NavbarMenu from './NavbarMenu'
import NavbarUserAvator from './NavbarUserAvator'

const Navbar = () => {
  return (
    <nav className='fixed w-full flex bg-white backdrop-blur'>
      <div className='w-[90%] mx-auto flex'>
        <NavbarHeader />
        <NavbarMenu />
        <NavbarUserAvator />
      </div>
    </nav>
  )
}

export default Navbar
