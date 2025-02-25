import React, { useRef, useState } from "react";

const FocusInput = () => {
    const inputRef = useRef(null)
    const [isEditable, setIsEditable] = useState(false)

    const focusInputField = ()=>{
        setIsEditable(true)
        inputRef.current.focus()
    }

  return (
      <div className="bg-white w-1/4 flex flex-col rounded-xl">
        <h3 className="bg-blue-500 text-white text-xl font-semibold w-full text-center py-3 rounded-t-xl">
          Focus Input Field
        </h3>
        <div className="p-4 space-y-5 mt-3 mb-5">
          <input
            ref={inputRef}
            type="text"
            placeholder="Enter Your Name"
            readOnly={!isEditable}
            className={`border p-2 rounded-md w-full transition ${
              isEditable
                ? "border-none outline-none bg-gray-200"
                : "border-none outline-none text-black/95 font-semibold bg-gray-100"
            }`}
          />
          <button onClick={focusInputField} className="px-3 py-1 bg-blue-500 text-lg text-white font-medium rounded-md w-fit cursor-pointer">
            Focus
          </button>
        </div>
      </div>
  );
};

export default FocusInput;
