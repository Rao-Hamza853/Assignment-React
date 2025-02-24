import React from 'react'
import { categories } from '../constants/constant1'
const NestedArrayLoop = () => {
  return (
    <div className='bg-gray-200 px-14'>
       <h2 className="text-4xl text-center font-bold pt-5 mb-8 text-[#0A5EB0]">Array Nested Looping</h2>
       {
        categories.map((item,index)=>(
            <div key={index} className='pb-8'>
                <h3 className='text-4xl font-bold text-blue-600 py-4'>{item.category}</h3>
                <div className='grid grid-cols-3 gap-3'>
                {
                    item.products.map((prod,index)=>(
                    <div className='bg-white rounded-md'>
                        <h3 className='bg-blue-500 pl-4 py-2 rounded-t-md text-white text-lg font-semibold'>{prod.name}</h3>
                        <div className='p-4 flex justify-between'>
                            <div className='flex flex-col gap-y-2'>
                                <h4 className='text-lg font-medium'>Brand: <span className='font-normal'>{prod.brand}</span></h4>
                                <h4 className='text-lg font-medium'>Price: <span className='font-normal'>{prod.price} $</span></h4>
                                <h4 className='text-lg font-medium'>Stock: <span className='font-normal'>{prod.stock}</span></h4>
                            </div>
                            <img className='size-28' src={prod.imgSrc} alt="" />
                        </div>
                    </div>
                    ))
                }
                </div>
            </div>
        ))
       }
    </div>
  )
}

export default NestedArrayLoop
