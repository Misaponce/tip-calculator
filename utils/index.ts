
export const handleBillInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const billAmount = event.target.value;
    const parseBill = parseFloat(billAmount)
    // console.log('bill amount', billAmount)
    return parseBill;
}

export const handlePeopleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const numOfPeople = event.target.value;
    const parseNumOfPeople = parseInt(numOfPeople)
    // console.log('people to split the bill', numOfPeople)
    return parseNumOfPeople;
}

export const handleCustomTipInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const customTip = event.target.value;
    const parseCustomTip = parseFloat(customTip)
    // console.log('custom tip', customTip)
    return parseCustomTip;
}
