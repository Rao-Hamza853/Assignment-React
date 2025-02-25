import { Link } from "react-router"


const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-y-3">
        <h2 className="text-4xl text-center font-bold pt-5 mb-8 text-blue-600">Assignment React JSs</h2>
      <Link to="/reuse-comp"><button className="border bg-blue-500 text-white text-lg font-medium px-3 py-1 cursor-pointer">Reuse Component in Loop</button></Link>
      <Link to="/nested-array-loop"><button className="border bg-blue-500 text-white text-lg font-medium px-3 py-1 cursor-pointer">Array Nested Looping</button></Link>
      <Link to="/manage-form-inputs"><button className="border bg-blue-500 text-white text-lg font-medium px-3 py-1 cursor-pointer">Manage Form Inputs</button></Link>
      <Link to="/state-side-effect"><button className="border bg-blue-500 text-white text-lg font-medium px-3 py-1 cursor-pointer">State Side Effect</button></Link>
      <Link to="/prop-side-effect"><button className="border bg-blue-500 text-white text-lg font-medium px-3 py-1 cursor-pointer">Prop Side Effect</button></Link>
      <Link to="/life-cycle-method"><button className="border bg-blue-500 text-white text-lg font-medium px-3 py-1 cursor-pointer">Life Cycle Method</button></Link>
      <Link to="/focus-input-field"><button className="border bg-blue-500 text-white text-lg font-medium px-3 py-1 cursor-pointer">Focus Input Field</button></Link>
      <Link to="/uncontrolled-comp"><button className="border bg-blue-500 text-white text-lg font-medium px-3 py-1 cursor-pointer">Uncontrolled Comp</button></Link>
      <Link to="/useref-hook"><button className="border bg-blue-500 text-white text-lg font-medium px-3 py-1 cursor-pointer">useRef Hook</button></Link>
    </div>
  )
}

export default Home
