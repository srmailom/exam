'use client'
import { useState } from 'react'

const Activity2 = () => {
    const [count, setCount] = useState(0)

    const handleIncreament = () => {
        setCount(count + 1)
    }

    const handleDecreament = () => {
        setCount(count - 1)
    }

    const handleReset = () => {
        setCount(0)
    }
  return (
    <div className='m-10'>
        <div className='space-x-2'>
            <button className='bg-blue-300 px-4 w-[10%]' onClick={handleIncreament}> Increament </button>
            <button className='bg-red-300 px-4 w-[10%]' onClick={handleDecreament}> Decreament </button>
            <button className='bg-gray-300 px-4 w-[10%]' onClick={handleReset}> Reset </button>
        </div>
        <div className='mt-4'>
            <label htmlFor="coubt">Count: </label>
            {count} {count % 2 == 0? "Even" : "Odd"}
        </div>
    </div>
  )
}

export default Activity2
