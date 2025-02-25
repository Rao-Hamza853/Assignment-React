import React, { useState } from 'react'
import PropSideChildComp from './prop-side-child-comp'

const PropSideEffect = () => {
    const [status,setStatus] = useState(true)
  return (
    <div className='bg-gray-200 h-screen'>
      <h2 className="text-4xl text-center font-bold pt-5 mb-8 text-[#0A5EB0]">Handle Prop Side Effect with useEffect</h2>
      <div className='bg-white w-1/4 flex flex-col mx-auto pb- rounded-xl'>
          <h3 className='bg-blue-500 text-white text-xl font-semibold w-full text-center py-3 rounded-t-xl'>Detect Status</h3>
          <div className='p-4 space-y-5 mt-3 mb-5'>
            <h3 className='text-xl font-medium'>Parent Component</h3>
            <span className='text-lg font-medium text-[#0A5EB0] pr-3'>Status:</span>
            <span className='text-xl font-bold'>{status ? "Successful" : "Failed"}</span>
            <button onClick={()=>setStatus(!status)} className='px-3 py-1 bg-blue-500 text-lg text-white font-medium rounded-md w-fit cursor-pointer block mt-5'>Change Status</button>
            <hr  className='opacity-40 mx-8 my-8' />
            <PropSideChildComp status={status}/>
          </div>
      </div>
    </div>
  )
}

export default PropSideEffect
