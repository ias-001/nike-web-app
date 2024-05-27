import React from 'react'

const ServiceItem = (props) => {
    const { imgURL, label, subtext } = props;

    return (
        <div className='bg-white shadow-3xl flex-1 w-full sm:w-[350px] sm:min-w-[350px] rounded-[20px] px-10 py-16'>
            <div className='w-11 h-11 flex items-center justify-center bg-coral-red rounded-full'>
                <img src={imgURL} height={25} width={25} />
            </div>
            <h3 className='font-palanquin mt-5 font-bold leading-normal text-coral-red text-3xl'>{label}</h3>
            <p className='font-montserrat mt-3 leading-normal text-slate-gray text-lg'>{subtext}</p>
        </div>
    )

}

export default ServiceItem