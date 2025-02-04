import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
        <nav className='flex bg-[#FFFFFF] h-[70px] px-[50px] py-[20px] justify-between text-center align-center'>
        <div>
          <img src="logo 1.svg" alt="" />
        </div>
        <ul className='flex gap-[2rem]'>
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
        <button className='h-[40px] w-[10%] rounded-[20px] bg-gradient-to-r from-[#30D067] to-[#2BB9CF] text-white'>Request Invite</button>
      </nav>
    </div>
  )
}
