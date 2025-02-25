import { useEffect, useState } from "react"

const LifeCycleMethods = ()=>{
    const [show, setShow] = useState(true)


        const LifeCycleChild = () => {
        const [count, setCount] = useState(0)

        useEffect(()=>{
            console.log("Component Mounted");
        },[])

        useEffect(()=>{
            if(count !== 0){
                console.log("Component Updated");
            }
        },[count])

        useEffect(()=>{
            return()=>{
                console.log("Component Unmounted");
            }
        },[])

        return (
            <div className='bg-white w-1/4 flex flex-col mx-auto pb- rounded-xl'>
                <h3 className='bg-blue-500 text-white text-xl font-semibold w-full text-center py-3 rounded-t-xl'>Life Cycle Methods</h3>
                <div className='p-4 space-y-5 mt-3 mb-5'>
                    <h3 className='text-lg font-medium'>Increment Counter</h3>
                    <div className='flex items-center justify-evenly'>
                        <button onClick={()=>setCount(count + 1)} className='px-3 py-1 bg-blue-500 text-lg text-white font-medium rounded-md w-fit cursor-pointer'>count++</button>
                        <p className='text-lg font-medium'>Value: <span className='text-2xl font-semibold text-blue-75'>{count}</span></p>
                    </div>
                </div>
            </div>
          )
      }
    return(
        <div className='bg-gray-200 h-screen'>
            <h2 className="text-4xl text-center font-bold pt-5 mb-8 text-[#0A5EB0]">useEffect Hook for Life Cycle Method</h2>
            <button onClick={()=>setShow(!show)} className='px-3 py-1 bg-red-500 text-lg mx-auto block my-8 text-white font-medium rounded-md w-fit cursor-pointer'>Toggle Component</button>
            { show && <LifeCycleChild/> }
        </div>
    )
}
export default LifeCycleMethods

// import React, { useEffect, useState } from 'react'

// export const LifeCycleChild = () => {
//     const [count, setCount] = useState(0)

//     useEffect(()=>{
//         console.log("Component Mounted");
//     },[])

//     useEffect(()=>{
//         if(count !== 0){
//             console.log("Component Updated");
//         }
//     },[count])

//   return (
//     <div className='bg-gray-200 h-screen'>
//       <h2 className="text-4xl text-center font-bold pt-5 mb-8 text-[#0A5EB0]">useEffect Hook for Life Cycle Method</h2>
//       <div className='bg-white w-1/4 flex flex-col mx-auto pb- rounded-xl'>
//           <h3 className='bg-blue-500 text-white text-xl font-semibold w-full text-center py-3 rounded-t-xl'>Life Cycle Methods</h3>
//           <div className='p-4 space-y-5 mt-3 mb-5'>
//             <h3 className='text-lg font-medium'>Increment Counter</h3>
//             <div className='flex items-center justify-evenly'>
//                 <button onClick={()=>setCount(count + 1)} className='px-3 py-1 bg-blue-500 text-lg text-white font-medium rounded-md w-fit cursor-pointer'>count++</button>
//                 <p className='text-lg font-medium'>Value: <span className='text-2xl font-semibold text-blue-75'>{count}</span></p>
//             </div>
//           </div>
//       </div>
//     </div>
//   )
// }

// export default LifeCycleMethods
