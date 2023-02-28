import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import SidebarDrawer from '../Sidebar/SidebarDrawer'
const Navbar = () => {
  return (
    <section className='navbar'>
      <div className='navbar__sidebarLarge' >
        <Sidebar />
      </div>
      <div className='navbar__sidebarDrawers' >
        <div className='navbar__sidebarDrawers__box' >
          <SidebarDrawer />
          <header>Hello</header>
        </div>
      </div>
    </section>
  )
}

export default Navbar