import React from 'react'
import { offer } from '../assets/images'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'

const SpecialOffers = () => {
  return (
    <section id="super-quality" className='flex justify-wrap-items-center items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div>
        <img src={offer} height={500} width={600} />
      </div>
      <div className='flex-1'>
        <h1 className='font-palanquin font-bold text-4xl'> <span className='font-palanquin text-coral-red'>Special</span> Offer</h1>
        <p className='font-montserrat text-slate-gray info-text mt-5'>Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.</p>
        <p className='font-montserrat text-slate-gray info-text mt-5'>Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional</p>
        <div className='flex gap-6 mt-8 items-center pl-5'>
          <Button label="Shop More" iconURL = {arrowRight}/>
          <Button label="Learn More" addClassName='bg-white border-black text-black' />
        </div>
      </div>
    </section>
  )
}

export default SpecialOffers