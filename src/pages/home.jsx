import { Link } from "react-router"
import { MdArrowOutward } from "react-icons/md";
import { tasks } from "../constants/constant2";

const Home = () => { 

  return (
    <div className="bg-gray-200 h-screen">
        <h2 className="text-4xl text-center font-bold pt-5 mb-8 text-[#0A5EB0]">Assignment React JS</h2>
        <div className="grid grid-cols-3 mx-40 gap-4">
          {
            tasks.map((task,index)=>(
              <div className='p-4 bg-white shadow-md rounded-lg border border-gray-200 space-y-3'>
                <h3 className="text-2xl font-semibold text-blue-00">{task.title}</h3>
                <Link to={task.path}><button className="border bg-blue-500 text-white text-lg font-medium px-1.5 py-0.5 cursor-pointer rounded-lg hover:bg-white hover:text-blue-500 flex items-center gap-x-1"  >Go to task <MdArrowOutward /></button></Link>
              </div>
            ))
          }
        </div> 
    </div>
  )
}

export default Home
