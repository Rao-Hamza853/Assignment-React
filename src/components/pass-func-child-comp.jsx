import React from 'react'

const PassFuncChildComp = ({funcProps}) => {
  return (
      <div className="bg-white w-1/2 flex flex-col rounded-xl">
            <h3 className="bg-blue-500 text-white text-xl font-semibold w-full text-center py-3 rounded-t-xl">Show Alert</h3>
            <div className='p-4'>
                <p className='text-lg font-medium'>This will show an alert on button clicked</p>
                <button onClick={funcProps} className="bg-red-500 text-white px-3 py-1 rounded-md mt-2 text-lg font-medium w-fit">Alert</button>
            </div>
      </div>
  )
}

export default PassFuncChildComp
