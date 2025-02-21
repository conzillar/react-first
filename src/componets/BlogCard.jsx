import React from 'react'

export default function BlogCard({ data }) {
  return (
    <div className='shadow-lg shawdow-[#B3B4BF] w-[100%] md:w-[45%]'>
      <img src={data.image} alt="" className='' />
      <h2 className='text-[15px] font-[700]'>{data.title}</h2>
      <p> {data.link} </p>
      <p className='w-[100%] text-[13px] font-[500] px-[10px] leading-[20px]'> {data.desc} </p>
    </div>
  )
}
