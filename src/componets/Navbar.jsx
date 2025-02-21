import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { LuMenu, LuSquareMenu } from "react-icons/lu";
import { IoCloseOutline } from 'react-icons/io5';

export default function Navbar() {

  const [navOpen, setNavOpen] = useState(false)

  return (
    <div className=''>
      <nav className='flex bg-[#FFFFFF] h-[70px] px-[50px] py-[20px] justify-between cursor-pointer text-center align-center'>
        <div>
          <img src="logo 1.svg" alt="" />
        </div>
        <ul className='hidden md:flex gap-[2rem] lg:justify-center'>
          <li className='text-[#9698BA]'>
            <Link to="/">Home</Link>
          </li>
          <li className='text-[#9698BA]'>
            <Link to="/about">About</Link>
          </li>
          <li className='text-[#9698BA]'>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>

        {
          navOpen &&
          <ul className='flex flex-col gap-[2rem] fixed bg-red-200 left-[50%] top-[50%] translate-x-[-50%] translate-y-[-100%] py-[60px] w-[50%] z-[1]'>
            <li className='text-[#9698BA]' onClick={() => setNavOpen(false)}>
              <Link to="/">Home</Link>
            </li>
            <li className='text-[#9698BA]' onClick={() => setNavOpen(false)}>
              <Link to="/about">About</Link>
            </li>
            <li className='text-[#9698BA]' onClick={() => setNavOpen(false)}>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        }
        <button className='h-[40px] px-5 hidden md:block rounded-[20px] bg-gradient-to-r from-[#30D067] to-[#2BB9CF] text-white'>Request Invite</button>

        {
          navOpen ?
          <IoCloseOutline onClick={() => setNavOpen(false)} className='md:hidden  text-[30px] text-gray-500' />
          :
          <LuMenu onClick={() => setNavOpen(true)} className='md:hidden  text-[30px] text-gray-500' />
        }
      </nav>
    </div>
  )
}
