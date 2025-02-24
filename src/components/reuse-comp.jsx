import React from 'react'

const ReuseComp = ({data}) => {
  return (
    <div className='bg-white rounded-md'>
      <h3 className='bg-blue-500 pl-4 py-2 rounded-t-md text-white text-lg font-semibold'>User Data {data.id}</h3>
      <div className='p-4'>
        <h4 className='text-lg font-medium'>Name: <span className='font-normal'>{data.name}</span></h4>
        <h4 className='text-lg font-medium'>Age: <span className='font-normal'>{data.age}</span></h4>
        <h4 className='text-lg font-medium'>Email: <span className='font-normal'>{data.email}</span></h4>
      </div>
    </div>
  )
}

export default ReuseComp
