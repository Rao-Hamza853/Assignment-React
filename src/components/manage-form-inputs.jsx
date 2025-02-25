import React, { useState } from 'react'

const ManageFormInputs = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const clearFunction = ()=>{
        setName('')
        setEmail('')
    }
  return (
    <div className='bg-gray-200 h-screen'>
        <h2 className="text-4xl text-center font-bold pt-5 mb-8 text-[#0A5EB0]">Display Real Time Changes</h2>
        <div className='bg-white w-1/4 flex flex-col mx-auto pb-2 rounded-xl'>
            <h3 className='bg-blue-500 text-white text-xl font-semibold w-full text-center py-3 rounded-t-xl'>Display Input Changes</h3>
            <div className='p-4 space-y-1.5'>
                <p className='text-lg font-medium'>Name:</p>
                <input className='p-1 bg-gray-100 w-full outline-none rounded-md' onChange={(event)=>setName(event.target.value)} value={name} type="text" placeholder='enter your name' /> 
            </div>
            <div className='p-4 space-y-1.5 -mt-2'>
                <p className='text-lg font-medium'>Email:</p>
                <input className='p-1 bg-gray-100 w-full outline-none rounded-md' onChange={(event)=>setEmail(event.target.value)} value={email} type="email" placeholder='enter email address' /> 
            </div>
            <button onClick={clearFunction} className='bg-blue-500 w-fit px-3 py-1 mt-1 text-white ml-66 rounded-md font-medium'>Clear</button>
            <div className='p-4'>
                <p className='text-lg font-medium text-[#0A5EB0]'>Your Name:</p>
                <input className='p-1 bg-gray-100 w-full outline-none rounded-md text-xl font-medium caret-transparent' type="text" value={name} /> 
            </div>
            <div className='p-4'>
                <p className='text-lg font-medium text-[#0A5EB0]'>Your Email:</p>
                <input className='p-1 bg-gray-100 w-full outline-none rounded-md text-xl font-medium caret-transparent' type="text" value={email} /> 
            </div>
        </div>
        {/* <input onChange={(event)=>setName(event.target.value)} type="text" placeholder='Enter Your Name' />  
        <input onChange={(event)=>setEmail(event.target.value)} type="text" placeholder='Enter Email Address' />  
        <p>{name}</p>
        <p>{email}</p> */}
    </div>
  )
}

export default ManageFormInputs
