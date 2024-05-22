import React from 'react'
import { star } from '../assets/icons'

const PopulorProductCard = (props) => {
  const { imgURL,
    name,
    price, } = props
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full max-sm:flex-row'>
      <img src={imgURL} alt={name} className='h-[280px] w-[280px]' />
      <div className='max-sm:ml-5'>
        <div className='flex mt-8'>
          <img src={star} height={20} width={20} alt='rating' />
          <p className='font-montserrat text-xl text-bold ml-2'>(4.0)</p>
        </div>
        <div className='flex flex-col mt-5'>
          <p className='font-palanquin font-bold text-2xl leading-normal'>{name}</p>
          <p className='mt-2 text-coral-red font-semibold font-montserrat text-xl'>{price}</p>
        </div>
      </div>
    </div>
  )
}

export default PopulorProductCard