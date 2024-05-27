import React from 'react'

const Button = (props) => {
    const { label, iconURL, addClassName } = props;
    return (
        <button className={`flex justify-center items-center px-7 py-4 border 
        font-montserrat text-lg leading-none bg-coral-red text-white border-coral-red rounded-full ${addClassName}`}>
            {label}
            {iconURL && <img src={iconURL} alt='btn-icon' className='ml-2 rounded-full w-5 h-5 ' />}
        </button>
    )
}

export default Button