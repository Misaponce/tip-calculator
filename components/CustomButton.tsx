import { CustomButtonProps } from '@/types'
import React from 'react'

const CustomButton = ({ text, value, classType, onClick }:CustomButtonProps) => {

  return (
    <button 
        className={`btn-${classType} 
        px-10 sm:px-1 py-1 
        rounded-md 
        font-semibold 
        w-full 
        text-center
        `} 
        value={value}
        onClick={() => onClick(value)} //pass the value that the function expects 
    >
        {text}
    </button>
  )
}

export default CustomButton