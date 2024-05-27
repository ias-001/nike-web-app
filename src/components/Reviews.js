import React from 'react'
import { star } from '../assets/icons'

const Reviews = (props) => {
    const { imgURL, customerName, rating, feedback, } = props
    return (
        <div className='flex flex-1 flex-col items-center justify-center p-10'>
            <img src={imgURL} height={120} width={120} className='object-contain rounded-full' />
            <p className='info-text max-w-sm mt-5 text-center'>{feedback}</p>
            <div className='flex mt-3 items-center'>
                <img src={star} height={25} width={25} />
                <p className='text-slate-gray ml-2 text-xl font-montserrat'>{`(${rating})`}</p>
            </div>
        </div>
    )
}

export default Reviews