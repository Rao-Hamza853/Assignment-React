import React, { useRef } from 'react'

const UncontrolledComp = () => {
    const userRef = useRef(null)
    const passRef = useRef(null)

    const handleFormWithUseRef = (event)=>{
        console.log("Handle Form with useRef");
        event.preventDefault()
        const user = userRef.current.value
        const password = passRef.current.value
        console.log("User Name: ",user);
        console.log("Password: ",password);
        userRef.current.value = ""
        passRef.current.value = ""
    }
  return (
      <div className="bg-white w-1/4 flex flex-col rounded-xl">
        <h3 className="bg-blue-500 text-white text-xl font-semibold w-full text-center py-3 rounded-t-xl">Uncontrolled Component</h3>
        <form action="" onSubmit={handleFormWithUseRef} className="flex flex-col items-center gap-y-4 p-4 my-4">
            <input type="text" ref={userRef} placeholder="Enter your name" className="p-2 w-full rounded-md outline-none bg-gray-200 focus:bg-gray-100" />
            <input type="password" ref={passRef} placeholder="Enter Password" className="p-2 w-full rounded-md outline-none bg-gray-200 focus:bg-gray-100" />
            <button className="bg-blue-500 text-white px-3 py-1 rounded-md mt-2 text-lg font-medium">Submit</button>
        </form>
      </div>
  )
}

export default UncontrolledComp
