import React from 'react'
import { reviews } from '../utils/constant'
import Reviews from '../components/Reviews'

const CustomerReview = () => {
  return (
    <section id="reviews" className='justify-center max-container'>
      <div className='justify-center items-center'>
        <h1 className='text-center font-palanquin text-4xl font-bold'>
          What Our <span className='text-coral-red'>Customers</span> Say?
        </h1>
        <p className='text-center m-auto mt-4 max-w-lg info-text'>Hear Genuine Stories from out satisfied customers about their exceptional experience with us.</p>
      </div>
      <div className='flex mt-10 items-center gap-10 justify-evenly'>
        {reviews.map(review => (
          <Reviews key={review.customerName} {...review} />
        ))}
      </div>

    </section>
  )
}

export default CustomerReview