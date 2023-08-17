import { CustomInputProps } from '@/types'
import React from 'react'

const CustomInput = ({ placeHolder, type, inputId, onChange, value}:CustomInputProps) => {
  return (
    <input 
    type={type}
    placeholder={placeHolder}
    id={inputId}
    // With this ternary condition, I render an empty string if the value is 0
    // otherwise it won't show the placeholder 'Custom' on the input
    value={value === 0 ? '' : value}
    onChange={onChange} 
    className='
      form-input 
      px-4 py-3 
      rounded-md 
      block 
      w-full
      font-bold
      text-center
      text-xl sm:text-sm'/>
  )
}

export default CustomInput