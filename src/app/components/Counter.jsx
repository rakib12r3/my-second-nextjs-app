'use client'
import React, { useState } from 'react';

const Counter = () => {
  console.log('counter component render');
  const [count, setCount] = useState(0)
  const handleIncreas = ()=>{
    console.log("Increase button click");
    setCount(count + 1)
    
  }
  
  return (
    <div>
      <h2 className='text-4xl font-bold mb-4'>Counte: {count}</h2>
      <button onClick={handleIncreas} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded'>Increase</button>
    </div>
  );
};

export default Counter;