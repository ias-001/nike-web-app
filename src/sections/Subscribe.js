import React from 'react'
import SubsbcribeMail from '../components/SubsbcribeMail'

const Subscribe = () => {
  return (
    // <section id="subscribe" className='max-container w-full flex items-center justify-evenly max-lg:flex-col gap-16'>
    <section id="subscribe" className='max-container flex justify-between items-center max-lg:flex-col gap-10'>

      <h1 className='flex-1 font-palanquin text-4xl font-bold'>Sign Up for <span className='text-coral-red'>Updates</span> & Newsletter</h1>

      <div className='lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full'>
        <SubsbcribeMail />
      </div>
    </section>
  )
}

export default Subscribe