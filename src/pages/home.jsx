import { Link } from "react-router"


const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center">
        <h2 className="text-4xl text-center font-bold pt-5 mb-8 text-blue-600">Assignment React JSs</h2>
      <Link to="/reuse-page"><button className="border bg-blue-500 text-white text-lg font-medium px-3 py-1 cursor-pointer">Reuse Component in Loop</button></Link>
      <Link to="/nested-array-page"><button className="border bg-blue-500 text-white text-lg font-medium px-3 py-1 cursor-pointer">Reuse Component in Loop</button></Link>
    </div>
  )
}

export default Home
