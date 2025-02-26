import React from 'react'
import { useFormStatus } from 'react-dom';

const UseFormStatusHook = () => {

    const handleSubmit = async()=>{
        await new Promise(res=>setTimeout(res,2000))
        console.log("Submit Clicked");    
    }

    const HandleForm = ()=>{
        const {pending} = useFormStatus()
        return(
            <div className='flex flex-col items-center gap-y-4 p-4'>
                <input type="text" placeholder="Enter your name" className="p-2 w-full rounded-md outline-none bg-gray-200 focus:bg-gray-100" />
                <input type="password" placeholder="Enter Password" className="p-2 w-full rounded-md outline-none bg-gray-200 focus:bg-gray-100" />
                <button disabled={pending} className={`${pending ? 'bg-blue-300' : 'bg-blue-500'} text-white px-3 py-1 rounded-md mt-2 text-lg font-medium ${pending ? "cursor-wait" : "cursor-pointer"} `}>{pending ? "Submitting" : "Submit"}</button>
            </div>
        )
    }
  return (
    <div className='bg-gray-200 p-8'>
        <h2 className="text-4xl font-bold mb-8 text-[#0A5EB0]">Use Form Status Hook</h2>
        <div className="bg-white w-1/4 flex flex-col rounded-xl">
          <h3 className="bg-blue-500 text-white text-xl font-semibold w-full text-center py-3 rounded-t-xl">Disable Submit Button</h3>
          <form action={handleSubmit}>
             <HandleForm/>
          </form>
        </div>
    </div>
  )
}

export default UseFormStatusHook
