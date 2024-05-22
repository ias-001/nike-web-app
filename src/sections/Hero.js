import React, { useState } from 'react'
import { arrowRight } from '../assets/icons'
import Button from '../components/Button'
import ShoeCard from '../components/ShoeCard'
import { shoes, statistics } from '../utils/constant'


const Hero = () => {
  const [bigShoe, setBigShoe] = useState(shoes[0].bigShoe)
  return (
    <section id="home" className='
    w-full flex xl:flex-row flex-col min-h-screen 
    justify-center max-container gap-10'>

      <div className='relative xl:w-2/5 flex flex-col w-full 
      items-start justify-center pt-28  max-xl:padding-x'>
        <p className='text-xl font-montserrat text-coral-red'>Our Summer Collection</p>
        <h1 className='mt-10 font-palanquin text-8xl 
        max-sm:text-[72px] 
        max-sm:leading-[82px] 
        font-bold'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10 '>The New Arrivals</span>
          <br />
          <span className='text-coral-red inline-block mt-3'>Nike</span> Shoes
        </h1>
        <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>Discover stylish Nike arrivals, quality innovations and comfort and innovation for your active life.</p>
        <Button label="Buy Now" iconURL={arrowRight} />
        <div className='flex flex-wrap gap-16 justify-start items-start w-full mt-20'>
          {statistics.map(item => (
            <div key={item.label} className=''>
              <p className='font-palanquin font-bold text-4xl'>{item.value}</p>
              <p className='font-montserrat text-slate-gray'>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='relative flex flex-1 items-center justify-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
        <img
          src={bigShoe}
          height={5400}
          width={610}
          alt='shoe-collection'
          className='object-contain relative z-10'
        />
        <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] sm:px-6'>
          {shoes.map(shoe => (
            <div key={shoe.bigShoe}>
              <ShoeCard imgURL={shoe.bigShoe} changeBigShoeImg={(sh) => { setBigShoe(sh) }} bigShoeImg={bigShoe} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero