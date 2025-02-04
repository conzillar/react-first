import React from 'react'
import AboutCard from '../componets/AboutCard'

export default function About() {

    const aboutData = [
        {
            image:"img.svg",
            title:"Online Banking",
            desc:"Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world"
        },
        {
            image:"img1.svg",
            title:"Simple Budgeting",
            desc:"Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world"
        },
        {
            image:"img2.svg",
            title:"Fast Onboarding",
            desc:"Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world"
        },
        {
            image:"img3.svg",
            title:"Open Api",
            desc:"Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world"
        }
    ]

  return (
    <section className='p-[70px]'>
    <div>
      <h1 className='text-[3rem] font-[400]'>Why choose Easybank?</h1>
      <p className='w-[40%] font-[400] text-[16px]'>We leaverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
    </div>
    <div className='flex justify-between gap-[5rem]'>
        {
            aboutData.map((data, index) =>{
                return <AboutCard data={data}/>
            })
        }
    </div>
  </section>
  )
}
