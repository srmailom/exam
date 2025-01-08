'use client'
import React, { useEffect, useState } from "react";

export default function Home() {
  const [size, setSize] = useState(60)
  const [color, setColor] = useState('#D1D5DB')
  
  const generateRandomColor = () => {
    const hexCharacter = '0123456789ABCDEF'

    let color = '#'

    for (let i = 0; i < 6 ; i++){
      color += hexCharacter[Math.floor(Math.random() * 16)]
    }
    return color
  }

  const handleGrow = () => {
    setSize(size * 2)
    setColor(generateRandomColor())
    console.log(color)
    console.log(size)
  }

  return (

    //Activity 4
    <div className="flex items-center justify-center h-screen">
      <button
      style={{
          backgroundColor: color, 
          width: `${size}px`,
          height: `${size}px`,
          fontSize: '14px',
          transition: 'all 0.3s ease'
        }} 
        onClick={handleGrow}>
       GROW
      </button>
    </div>
  );
}
