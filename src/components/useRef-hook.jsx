import React from 'react'
import FocusInput from './focus-input'
import UncontrolledComp from './uncontrolled-comp'
import PassFuncAsProps from './pass-func-as-props'

const UseRefHook = () => {
  return (
    <div className="bg-gray-200 h-screen">
        <h2 className="text-4xl text-center font-bold pt-5 mb-8 text-[#0A5EB0]">useRef Hook</h2>
        <div className='flex flex-row justify-evenly'>
            <FocusInput/>
            <UncontrolledComp/>
        </div>
    </div>
  )
}

export default UseRefHook
