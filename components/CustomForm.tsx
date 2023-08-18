import { CustomFormProps } from '@/types'
import React from 'react'

const CustomForm = ({ label, type, placeHolder, formId, onChange, formStyle, value, inputError, errorMessage }:CustomFormProps) => {
  return (
    <form action="" className={`${formStyle}`}>
      <label htmlFor={formId} className='text-lg flex justify-between'>
        {label}
        {inputError && <p className="text-red-500 text-xs mt-2 text-right">{errorMessage}</p>}  
      </label>
      <input 
        type={type}
        placeholder={placeHolder}
        id={formId}
        value={value}
        onChange={onChange} 
        className={`
          form-input 
          px-4 py-3
          mt-1 mb-2 
          rounded-md 
          block 
          w-full
          text-right
          text-xl ${inputError ? 'border border-red-500' : 'border-0'}`}/>
    </form>
  )
}

export default CustomForm