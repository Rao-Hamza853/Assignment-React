import { Link } from "react-router"
import { MdArrowOutward } from "react-icons/md";


const Home = () => {
  return (
    <div className="bg-gray-200 h-screen">
        <h2 className="text-4xl text-center font-bold pt-5 mb-8 text-[#0A5EB0]">Assignment React JS</h2>
        <div className="grid grid-cols-3 mx-[150px] gap-4">
          <div className='p-4 bg-white shadow-md rounded-lg border border-gray-200 space-y-3'>
            <h3 className="text-2xl font-semibold text-blue-00">Reuse Component in Loop</h3>
            <Link to="/reuse-comp"><button className="border bg-blue-500 text-white text-lg font-medium px-1.5 py-0.5 cursor-pointer rounded-lg hover:bg-white hover:text-blue-500 flex items-center gap-x-1"  >Go to task <MdArrowOutward /></button></Link>
          </div>
          <div className='p-4 bg-white shadow-md rounded-lg border border-gray-200 space-y-3'>
            <h3 className="text-2xl font-semibold text-blue-00">Array Nested Looping</h3>
            <Link to="/nested-array-loop"><button className="border bg-blue-500 text-white text-lg font-medium px-1.5 py-0.5 cursor-pointer rounded-lg hover:bg-white hover:text-blue-500 flex items-center gap-x-1"  >Go to task <MdArrowOutward /></button></Link>
          </div>
          <div className='p-4 bg-white shadow-md rounded-lg border border-gray-200 space-y-3'>
            <h3 className="text-2xl font-semibold text-blue-00">Manage Form Inputs</h3>
            <Link to="/manage-form-inputs"><button className="border bg-blue-500 text-white text-lg font-medium px-1.5 py-0.5 cursor-pointer rounded-lg hover:bg-white hover:text-blue-500 flex items-center gap-x-1"  >Go to task <MdArrowOutward /></button></Link>
          </div>
          <div className='p-4 bg-white shadow-md rounded-lg border border-gray-200 space-y-3'>
            <h3 className="text-2xl font-semibold text-blue-00">Fetch API</h3>
            <Link to="/fetch-api"><button className="border bg-blue-500 text-white text-lg font-medium px-1.5 py-0.5 cursor-pointer rounded-lg hover:bg-white hover:text-blue-500 flex items-center gap-x-1"  >Go to task <MdArrowOutward /></button></Link>
          </div>
          <div className='p-4 bg-white shadow-md rounded-lg border border-gray-200 space-y-3'>
            <h3 className="text-2xl font-semibold text-blue-00">State Side Effect</h3>
            <Link to="/state-side-effect"><button className="border bg-blue-500 text-white text-lg font-medium px-1.5 py-0.5 cursor-pointer rounded-lg hover:bg-white hover:text-blue-500 flex items-center gap-x-1"  >Go to task <MdArrowOutward /></button></Link>
          </div>
          <div className='p-4 bg-white shadow-md rounded-lg border border-gray-200 space-y-3'>
            <h3 className="text-2xl font-semibold text-blue-00">Prop Side Effect</h3>
            <Link to="/prop-side-effect"><button className="border bg-blue-500 text-white text-lg font-medium px-1.5 py-0.5 cursor-pointer rounded-lg hover:bg-white hover:text-blue-500 flex items-center gap-x-1"  >Go to task <MdArrowOutward /></button></Link>
          </div>
          <div className='p-4 bg-white shadow-md rounded-lg border border-gray-200 space-y-3'>
            <h3 className="text-2xl font-semibold text-blue-00">Life Cycle Method</h3>
            <Link to="/life-cycle-method"><button className="border bg-blue-500 text-white text-lg font-medium px-1.5 py-0.5 cursor-pointer rounded-lg hover:bg-white hover:text-blue-500 flex items-center gap-x-1"  >Go to task <MdArrowOutward /></button></Link>
          </div>
          <div className='p-4 bg-white shadow-md rounded-lg border border-gray-200 space-y-3'>
            <h3 className="text-2xl font-semibold text-blue-00">Focus Input Field</h3>
            <Link to="/useref-hook"><button className="border bg-blue-500 text-white text-lg font-medium px-1.5 py-0.5 cursor-pointer rounded-lg hover:bg-white hover:text-blue-500 flex items-center gap-x-1"  >Go to task <MdArrowOutward /></button></Link>
          </div>
          <div className='p-4 bg-white shadow-md rounded-lg border border-gray-200 space-y-3'>
            <h3 className="text-2xl font-semibold text-blue-00">Uncontrolled Component</h3>
            <Link to="/useref-hook"><button className="border bg-blue-500 text-white text-lg font-medium px-1.5 py-0.5 cursor-pointer rounded-lg hover:bg-white hover:text-blue-500 flex items-center gap-x-1"  >Go to task <MdArrowOutward /></button></Link>
          </div>
          <div className='p-4 bg-white shadow-md rounded-lg border border-gray-200 space-y-3'>
            <h3 className="text-2xl font-semibold text-blue-00">Pass Function As Props</h3>
            <Link to="/last-three-tasks"><button className="border bg-blue-500 text-white text-lg font-medium px-1.5 py-0.5 cursor-pointer rounded-lg hover:bg-white hover:text-blue-500 flex items-center gap-x-1"  >Go to task <MdArrowOutward /></button></Link>
          </div>
          <div className='p-4 bg-white shadow-md rounded-lg border border-gray-200 space-y-3'>
            <h3 className="text-2xl font-semibold text-blue-00">Forward Ref in React</h3>
            <Link to="/last-three-tasks"><button className="border bg-blue-500 text-white text-lg font-medium px-1.5 py-0.5 cursor-pointer rounded-lg hover:bg-white hover:text-blue-500 flex items-center gap-x-1"  >Go to task <MdArrowOutward /></button></Link>
          </div>
          <div className='p-4 bg-white shadow-md rounded-lg border border-gray-200 space-y-3'>
            <h3 className="text-2xl font-semibold text-blue-00">Use Form Status Hook</h3>
            <Link to="/last-three-tasks"><button className="border bg-blue-500 text-white text-lg font-medium px-1.5 py-0.5 cursor-pointer rounded-lg hover:bg-white hover:text-blue-500 flex items-center gap-x-1"  >Go to task <MdArrowOutward /></button></Link>
          </div>
        </div> 
      {/* <Link to="/nested-array-loop"><button className="border bg-blue-500 text-white text-lg font-medium px-3 py-1 cursor-pointer">Array Nested Looping</button></Link>
      <Link to="/manage-form-inputs"><button className="border bg-blue-500 text-white text-lg font-medium px-3 py-1 cursor-pointer">Manage Form Inputs</button></Link>
      <Link to="/fetch-api"><button className="border bg-blue-500 text-white text-lg font-medium px-3 py-1 cursor-pointer">Fetch API</button></Link>
      <Link to="/state-side-effect"><button className="border bg-blue-500 text-white text-lg font-medium px-3 py-1 cursor-pointer">State Side Effect</button></Link>
      <Link to="/prop-side-effect"><button className="border bg-blue-500 text-white text-lg font-medium px-3 py-1 cursor-pointer">Prop Side Effect</button></Link>
      <Link to="/life-cycle-method"><button className="border bg-blue-500 text-white text-lg font-medium px-3 py-1 cursor-pointer">Life Cycle Method</button></Link>
      <Link to="/useref-hook"><button className="border bg-blue-500 text-white text-lg font-medium px-3 py-1 cursor-pointer">Focus Input Field</button></Link>
      <Link to="/useref-hook"><button className="border bg-blue-500 text-white text-lg font-medium px-3 py-1 cursor-pointer">Uncontrolled Component</button></Link>
      <Link to="/last-three-tasks"><button className="border bg-blue-500 text-white text-lg font-medium px-3 py-1 cursor-pointer">Pass Function As Props</button></Link>
      <Link to="/last-three-tasks"><button className="border bg-blue-500 text-white text-lg font-medium px-3 py-1 cursor-pointer">Forward Ref</button></Link>
      <Link to="/last-three-tasks"><button className="border bg-blue-500 text-white text-lg font-medium px-3 py-1 cursor-pointer">Use Form Status Hook</button></Link> */}
    </div>
  )
}

export default Home
