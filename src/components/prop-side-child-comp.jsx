import React, { useEffect } from 'react'

const PropSideChildComp = ({status}) => {
    useEffect(()=>{
        if(status){
            console.log("Status Successful");
        }
        else{
            console.log("Status Failed");
            
        }
    },[status])
  return (
    <div>
      <div className='p- space-y-5 mt-3 mb-5'>
            <h3 className='text-xl font-medium'>Child Component</h3>
            <span className='text-lg font-medium text-[#0A5EB0] pr-3'>Status:</span>
            <span className='text-xl font-bold'>{status ? "Successful" : "Failed"}</span>
          </div>
    </div>
  )
}

export default PropSideChildComp
