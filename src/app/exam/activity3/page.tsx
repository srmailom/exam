'use client'

import React, { useEffect, useState } from 'react'

const Activity3 = () => {
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [sum, setSum] = useState(0)

    const handleChangeNum1 = (event: any) => {
        setNum1(parseInt(event.target.value))
    }

    const handleChangeNum2 = (event: any) => {
        setNum2(parseInt(event.target.value))
    }

    const handleReset = () => {
        setNum1(0)
        setNum2(0)
    }

    useEffect(() => {
        setSum(num1 + num2)
    }, [num1, num2])
  return (
    <div className='m-10 space-y-2'>
        <div>
            <label htmlFor="num1">First Number: </label>
            <input type="number" value={num1} onChange={handleChangeNum1} className='border border-solid p-1 w-10%' />
        </div>
        <div>
            <label htmlFor="num2">Second Number: </label>
            <input type="number" value={num2} onChange={handleChangeNum2} className='border border-solid p-1 w-10%' />
        </div>
        <div>
            <label  className='font-bold text-lg' htmlFor="sum">Sum: {sum}</label>
        </div>
        <div>
            <button onClick={handleReset} className='bg-gray-300 rounded-lg w-[10%] p-1'>Reset</button>
        </div>
    </div>
  )
}

export default Activity3