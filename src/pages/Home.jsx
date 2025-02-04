import React from 'react'

export default function Home() {
  return (
    <section className='flex bg-[#F3F4F6] w-full h-full p-[70px] justify-between items-center'>
    <div className='name w-[40%]'>
      <h1 className='text-[4rem] '>Next generation digital banking</h1>
      <p>Take your financial life online. Your easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
      <button className='h-[42px] w-[25%] rounded-[50px] bg-gradient-to-r from-[#30D067] to-[#2BB9CF] text-white'>Request Invite</button>
    </div>
    <img src="image.png" alt="" className='w-[45%]' />
  </section>
  )
}
