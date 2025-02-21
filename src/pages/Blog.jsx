import React from 'react'
import BlogCard from '../componets/BlogCard'

export default function Blog() {

  const blogData = [
    {
      image: "image-currency.jpg",
      title: "By Claire Robinson",
      link: "Recieve money in any currency with no fees",
      desc: "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single …",
    },
    {
      image: "image-restaurant.jpg",
      title: "By Claire Robinson",
      link: "Recieve money in any currency with no fees",
      desc: "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single …",
    },
    {
      image: "image-plane.jpg",
      title: "By Claire Robinson",
      link: "Recieve money in any currency with no fees",
      desc: "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single …",
    },
    {
      image: "image-confetti.jpg",
      title: "By Claire Robinson",
      link: "Recieve money in any currency with no fees",
      desc: "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single …",
    },
  ]

  return (
    <section className=' bg-[#F3F4F6] py-[2rem] h-[full] md:px-[20px] md:py-[2rem] md:h-full'>
      <div className=' py-[20px] text-center md:py-[30px] md:text-left md:ml-[2.5rem]'>
        <h1 className='text-[#9F98A6] text-[30px]'>Latest Articles</h1>
      </div>
      <div className='grid grid-cols-1 md:flex gap-[20px]  px-[40px] '>
        {
          blogData.map((data, index) => {
            return <BlogCard data={data} key={index} />
          })
        }
        {/* <BlogCard />
      <BlogCard />
      <BlogCard /> */}
        {/* <div className='shadow-lg shadow-[#B3B4BF] w-[45%]'>
        <img src="image-currency.jpg" alt="" className='' />
        <h2 className='text-[15px] font-[700]'>By Claire Robinson</h2>
        <p>Recieve money in any currency with no fees</p>
        <p className='w-[100%] text-[13px] font-[500] px-[10px] leading-[20px]'>The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single …</p>
      </div>
     
      <div className='shadow-lg shawdow-[#B3B4BF] w-[45%]'>
        <img src="image-plane.jpg" alt="" className='' />
        <h2 className='text-[15px] font-[700]'>By Claire Robinson</h2>
        <p>Recieve money in any currency with no fees</p>
        <p className='w-[100%]text-[18px]  px-[10px] leading-[20px]'>The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single …</p>
      </div>
      <div className='shadow-lg shawdow-[#B3B4BF] w-[45%]'>
        <img src="image-confetti.jpg" alt="" className='' />
        <h2 className='text-[15px] font-[700]'>By Claire Robinson</h2>
        <p>Recieve money in any currency with no fees</p>
        <p className='w-[100%] text-[13px] font-[500] px-[10px] leading-[20px]'>The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single …</p>
      </div> */}
      </div>
    </section>
  )
}
