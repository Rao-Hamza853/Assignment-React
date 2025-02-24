import React from 'react'
import { userData } from '../constants/constant'
import ReuseComp from './reuse-comp'
const ReuseCompInLoop = () => {
  return (
    <div className="bg-gray-200 h-screen px-20">
        <h2 className="text-4xl text-center font-bold pt-5 mb-8 text-[#0A5EB0]">Reuse Component in Loop</h2>
      <div className='grid grid-cols-3 gap-3.5'>
      {
        userData.map((item)=>(
            <ReuseComp data={item} key={item.id}/>
        ))
      }
      </div>
    </div>
  )
}

export default ReuseCompInLoop
