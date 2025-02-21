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
    <section className='md:p-[70px] px-[20px] py-[70px]'>
    <div>
      <h1 className='lg:text-[3rem] md:text-[48px] text-[30px] font-[400]'>Why choose Easybank?</h1>
      <p className='md:w-[40%] font-[400] text-[16px]'>We leaverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
    </div>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 sm:gap-[5rem] gap-6'>
        {
            aboutData.map((data, index) =>{
                return <AboutCard data={data}/>
            })
        }
    </div>
  </section>
  )
}
