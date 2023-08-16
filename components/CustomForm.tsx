import { CustomFormProps } from '@/types'
import React from 'react'

const CustomForm = ({ label, type, placeHolder, formId, onChange, formStyle, value }:CustomFormProps) => {
  return (
    <form action="" className={`${formStyle}`}>
      <label htmlFor={formId} className='text-lg'>{label}</label>
      <input 
        type={type}
        placeholder={placeHolder}
        id={formId}
        value={value}
        onChange={onChange} 
        className='
          form-input 
          px-4 py-3
          mt-1 mb-2 
          rounded-md 
          block 
          w-full
          text-right
          text-xl'/>
    </form>
  )
}

export default CustomForm