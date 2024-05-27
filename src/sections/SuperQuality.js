
import React from 'react'
import Button from '../components/Button'
import { shoe8 } from '../assets/images'

const SuperQuality = () => {
    return (
        <section id="super-quality" className='max-container flex flex-col lg:flex-row md:flex-row items-center w-full'>
            <div className='flex-1'>
                <h1 className='font-montserrat font-bold text-4xl '>
                    We Provide You <span className='font-palanquin text-coral-red'>Super Quality </span> Shoes
                </h1>
                <p className='font-montserrat text-slate-gray leading-normal mt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a g</p>
                <p className='font-montserrat text-slate-gray leading-normal mt-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                <Button label="View Details" addClassName='mt-5' />
            </div>
            <div className='flex-1 justify-center items-center lg:mt-0 md:mt-0 mt-10'>
                <img src={shoe8} alt="quality-shoe" height={400} width={700} className='object-contain'/>
            </div>
        </section>
    )
}

export default SuperQuality