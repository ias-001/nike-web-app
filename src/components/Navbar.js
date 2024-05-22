import React from 'react'

import { headerLogo } from '../assets/images'
import { navLinks } from '../utils/constant'
import { hamburger } from '../assets/icons'

const Navbar = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className="flex justify-between items-center max-container">
        <a href='/'>
          <img src={headerLogo} alt='logo' width={130} height={29} />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((link, index) => (
            <li>
              <a href={link.href} className='font-montserrat leading-normal text-lg text-slate-gray'>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='hidden max-lg:block'>
          <img
            src={hamburger}
            height={25}
            width={25}
          />
        </div>
      </nav>
    </header >
  )
}

export default Navbar