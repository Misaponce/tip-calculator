import { CustomDisplayProps } from '@/types'
import React from 'react'

const CustomDisplay = ({ displayText, displayNum }:CustomDisplayProps) => {
  return (
    <div className='flex justify-between items-center my-3'>
        <div className='flex flex-col'>
            <h3 className='text-lg font-semibold'>{displayText}</h3>
            <span className='text-sm opacity-50'>/ person</span>
        </div>
        <span className='text-4xl font-bold display-num'>${displayNum}</span>
    </div>
  )
}

export default CustomDisplay