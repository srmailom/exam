'use client'

import React, { useState } from 'react'

const Activity4 = () => {
    const [size, setSize] = useState(50)
    const [color, setColor] = useState('#D1D5DB')

    const generateRandomColor = () => {
        const hexCharColor = "0123456789ABCDEF"

        let color = "#"

        for( let i=0; i<6; i++){
            color += hexCharColor[Math.floor(Math.random()*16)]
        }

        return color
    }

    const handleButtonGrow = () => {
        setSize(size*2)
        setColor(generateRandomColor())
    }
  return (
    <div className='flex items-center justify-center h-screen'>
        <button onClick={handleButtonGrow} 
        style={{
            backgroundColor: color,
            width: size,
            height: size,
            fontSize: '14px',
            transition : 'all 0.3s ease',
        }}
        >
            GROW
        </button>        
    </div>
  )
}

export default Activity4