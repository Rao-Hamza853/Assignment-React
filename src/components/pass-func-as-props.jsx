import React from 'react'
import PassFuncChildComp from './pass-func-child-comp'

const PassFuncAsProps = () => {
    
    const showAlert = ()=>{
        alert("Button Clicked")
    }

  return (
    <div className='p-8'> 
       <h2 className="text-4xl font-bold mb-8 text-[#0A5EB0]">Pass Function As Props</h2>
       <PassFuncChildComp funcProps={showAlert} /> 
    </div>
  )
}

export default PassFuncAsProps
