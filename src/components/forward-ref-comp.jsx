import React, { useRef } from 'react'
import ForwardFefChildComp from './forward-ref-child-comp'

const ForwardRefComp = () => {
    const inputRef = useRef()
    const handleInput = ()=>{
        inputRef.current.focus()
        inputRef.current.value = "Rao Hamza"
        inputRef.current.style.backgroundColor= "#f3f4f6"
        inputRef.current.style.outline= "none"
    }
  return (
    <div className='p-8 -mt-7'>
       <h2 className="text-4xl font-bold mb-8 text-[#0A5EB0]">Forward Ref</h2>
       <div className="bg-white w-1/4 flex flex-col rounded-xl">
            <h3 className="bg-blue-500 text-white text-xl font-semibold w-full text-center py-3 rounded-t-xl">Focus Input Field</h3>
            <div className='p-4'>
                <ForwardFefChildComp passRef={inputRef} />
                <button onClick={handleInput} className='bg-red-500 text-white px-3 py-1 rounded-md mt-5 text-lg font-medium w-fit'>update input field</button>
            </div>
       </div>
    </div>
  )
}

export default ForwardRefComp
