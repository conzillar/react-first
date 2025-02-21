import React from 'react'

export default function Home() {
  return (
    <section className='flex flex-col-reverse md:flex-row bg-[#F3F4F6] w-full h-full md:p-[70px] p-[20px] justify-between items-center'>
    <div className='name lg:w-[40%] md:text-left text-center'>
      <h1 className='text-[30px] md:text-[48px] font-[600]'>Next generation digital banking</h1>
      <p className='py-3'>Take your financial life online. Your easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
      <button className='h-[42px] px-4 rounded-[50px] bg-gradient-to-r from-[#30D067] to-[#2BB9CF] text-white'>Request Invite</button>
    </div>
    <img src="image.png" alt="" className='md:w-[45%] w-[80%]' />
  </section>
  )
}
