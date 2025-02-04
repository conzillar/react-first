import React from 'react'

export default function AboutCard({data}) {
  return (
    <div>
        <img src={data.image} alt="" className='py-[20px]' />
        <h2 className='text-[17px] font-[600]'>{data.title}</h2>
        <p className='w-[100%] font-[400] text-[16px]'>{data.desc}</p>
    </div>
  )
}
