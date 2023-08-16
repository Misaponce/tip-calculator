import { CustomInputProps } from '@/types'
import React from 'react'

const CustomInput = ({ placeHolder, type, inputId, onChange}:CustomInputProps) => {
  return (
    <input 
    type={type}
    placeholder={placeHolder}
    id={inputId}
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