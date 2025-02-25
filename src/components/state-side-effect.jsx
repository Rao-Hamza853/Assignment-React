import React, { useEffect, useState } from 'react'

const StateSideEffect = () => {
    const [count, setCount] = useState(0)
    const [count1, setCount1] = useState(0)

    // const handleIncrement = () => {
    //     setCount(count + 1);
    //     // console.log('Increment', count);
    // }
    // const handleDecrement = () => {
    //     setCount(count - 1);
    //     // console.log('Decrement', count);
    // }

    useEffect(()=>{
        console.log("Increment",count);
    },[count])

    useEffect(()=>{
        console.log("Decrement",count1);
    },[count1])
  return (
    <div className='bg-gray-200 h-screen'>
      <h2 className="text-4xl text-center font-bold pt-5 mb-8 text-[#0A5EB0]">Handle State Side Effect with useEffect</h2>
      <div className='bg-white w-1/4 flex flex-col mx-auto pb-8 rounded-xl'>
          <h3 className='bg-blue-500 text-white text-xl font-semibold w-full text-center py-3 rounded-t-xl'>Counter</h3>
          <div className='p-4 space-y-5 mt-3 mb-5'>
            <h3 className='text-lg font-medium'>Increment Counter</h3>
            <div className='flex items-center justify-evenly'>
                <button onClick={()=>setCount(count + 1)} className='px-3 py-1 bg-blue-500 text-lg text-white font-medium rounded-md w-fit cursor-pointer'>count++</button>
                <p className='text-lg font-medium'>Value: <span className='text-2xl font-semibold text-blue-75'>{count}</span></p>
            </div>
          </div>
          <hr className='opacity-40 mx-10'/>
          <div className='p-4 space-y-5 mt-5'>
            <h3 className='text-lg font-medium'>Decrement Counter</h3>
            <div className='flex items-center justify-evenly'>
                <button onClick={()=>setCount1(count1 - 1)} className='px-3 py-1 bg-blue-500 text-lg text-white font-medium rounded-md w-fit cursor-pointer'>count --</button>
                <p className='text-lg font-medium'>Value: <span className='text-2xl font-semibold text-blue-75'>{count1}</span></p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default StateSideEffect
