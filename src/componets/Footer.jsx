import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaSquareYoutube } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      <footer className='flex flex-col md:flex-row gap-[3rem] bg-[#2D314D] px-[70px] py-[30px] justify-between items-center'>
        <div className=''>
          <img src="logo 1.svg" alt="" className='filter invert-[20%] pb-[30px]' />
          <div className='flex gap-[10px] text-white'>
            <FaFacebook />
            <FaSquareYoutube />
            <FaTwitter />
            <IoLogoWhatsapp />
            <FaInstagram />
          </div>
        </div>
        <div className='flex gap-[35px]'>
          <div className='text-white flex flex-col'>
            <a href="">About us</a>
            <a href="">Contact</a>
            <a href="">Blog</a>
          </div>
          <div className='text-white flex flex-col'>
            <a href="Careers">Careers</a>
            <a href="Support">Support</a>
            <a href="Privacy Policy">Privacy Policy</a>
          </div>
        </div>
       <div className='flex flex-col items-center justify-center md:items-start gap-3'>
       <button className='h-[42px] w-[65%] rounded-[50px] bg-gradient-to-r from-[#30D067] to-[#2BB9CF] text-white'>Request Invite</button>
       <p className='text-white'>© Easybank. All Rights Reserved</p>
       </div>
      </footer>
    </div>
  )
}
