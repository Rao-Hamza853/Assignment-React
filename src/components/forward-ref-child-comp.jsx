import React from 'react'

const ForwardFefChildComp = ({passRef}) => {
  return (
    <div>
      <input ref={passRef} type="text" className="p-2 w-full rounded-md outline-none bg-gray-200 focus:bg-gray-100" placeholder="Enter Your Name" />
    </div>
  )
}

export default ForwardFefChildComp
