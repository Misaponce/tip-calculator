'use client'

import React, { useState } from 'react'
import { CustomButton, CustomDisplay, CustomForm, CustomInput } from '.'
import { handleBillInputChange, handlePeopleInputChange, handleCustomTipInput} from '@/utils'

const Card = () => {

  const initialBillAmount = 0;
  const initialNumOfPeople = 0;
  const initialCustomTip = 0;
  const initialTipAmount = 0;
  const initialTotal = 0;

  const [billAmount, setBillAmount] = useState(initialBillAmount);
  const [numOfPeople, setNumOfPeople] = useState(initialNumOfPeople);
  const [customTip, setCustomTip] = useState(initialCustomTip);
  const [tipAmount, setTipAmount] = useState(initialTipAmount);
  const [total, setTotal] = useState(initialTotal);

  // Handling errors
  const [billInputError, setBillInputError] = useState(false);
  const [peopleInputError, setPeopleInputError] = useState(false);
  const [customTipError, setCustomTipError] = useState(false);

  const handleBillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const amount = handleBillInputChange(event);

    if (amount < 0 ) {
      setBillInputError(true)
    } else {
      setBillInputError(false)
      setBillAmount(amount);
    }
  };

  const handlePeopleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const people = handlePeopleInputChange(event);

    if (people < 1) {
      setPeopleInputError(true);
    } else {
      setPeopleInputError(false);
      setNumOfPeople(people);
    }
  };
  
  const handleCustomTipChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const tip = handleCustomTipInput(event);

    if (tip < 0) {
      setCustomTipError(true)
    } else {
      setCustomTip(tip);
      // calling function when customtip amount changes
      calculateTotalBill(tip)
    }
  };


  const calculateTotalBill = (value: number) => {

    const tip = (billAmount / numOfPeople) * (value / 100);
    const totalAmount = (billAmount / numOfPeople) + tip;

    //Validating if num of people or bill amount grater than zero
    if (numOfPeople <= 0 || billAmount <= 0) {
      setPeopleInputError(true)
      setBillInputError(true)
    }  else {
      setPeopleInputError(false)
      setBillInputError(false)
      setTipAmount(parseFloat(tip.toFixed(2)));
      setTotal(parseFloat(totalAmount.toFixed(2)));
    }

  }

  const resetValues = () => {
    setBillAmount(initialBillAmount);
    setNumOfPeople(initialNumOfPeople);
    setCustomTip(initialCustomTip);
    setTipAmount(initialTipAmount);
    setTotal(initialTotal);
  };


  return (
    <div className='w-full sm:w-[850px] flex flex-col sm:flex-row flex-grow sm:gap-2 rounded-t-2xl sm:rounded-2xl mt-5 mb-5 p-4 card'>
        <div className='tip-container flex-1 flex flex-col justify-center rounded-t-2xl sm:rounded-2xl'>
          <CustomForm 
            label='Bill'
            type='number'
            placeHolder='0'
            formId='billInput'
            value={billAmount}
            inputError={billInputError}
            errorMessage={"Positive values only"}
            onChange={handleBillChange}
            formStyle='block px-6'
          />
          <h2 className='px-6 mt-5 mb-1 text-lg' id='select-tip'>
            Select Tip %
          </h2>
          {/* Tip Buttons */}
          <div className='px-6 py-2 mb-4 grid grid-cols-2 sm:grid-cols-3 gap-2'>
            <CustomButton 
              text='5%'
              value={5}
              classType='tip'
              onClick={calculateTotalBill}
            />
            <CustomButton 
              text='10%'
              value={10}
              classType='tip'
              onClick={calculateTotalBill}
            />
            <CustomButton 
              text='15%'
              value={15}
              classType='tip'
              onClick={calculateTotalBill}
            />
            <CustomButton 
              text='25%'
              value={25}
              classType='tip'
              onClick={calculateTotalBill}
            />
            <CustomButton 
              text='50%'
              value={50}
              classType='tip'
              onClick={calculateTotalBill}
            />
            <CustomInput 
              placeHolder='Custom'
              inputId='select-tip'
              type='number'
              value={customTip}
              inputError={customTipError}
              onChange={handleCustomTipChange}
            />
          </div>
          {/* Custom people input */}
          <CustomForm 
            label='Number of People'
            type='number'
            value={numOfPeople}
            placeHolder='1'
            formId='peopleInput'
            inputError={peopleInputError}
            errorMessage={"Can't be zero"}
            onChange={handlePeopleChange}
            formStyle='px-6'
          />
        </div>
        <div className='result-container flex-1 flex flex-col justify-between rounded-xl my-4 sm:my-0 mx-6 sm:mx-0 px-6 sm:px-10 py-6 sm:py-8'>
            {/* Total Display */}
            <div className='display-result-container flex flex-col sm:gap-5'>
              <CustomDisplay
                displayText='Tip Amount'
                displayNum={tipAmount} 
              />
              <CustomDisplay 
                displayText='Total'
                displayNum={total} 
              />
            </div>
            {/* Reset Button */}
            <button 
            className='btn-reset px-10 sm:px-1 py-1 rounded-md font-semibold w-full text-center'
              onClick={resetValues}
            >
              RESET
            </button>
        </div>
    </div>
  )
}

export default Card