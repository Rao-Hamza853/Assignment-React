import { Route, Routes } from "react-router"
import Home from "./pages/home"
import ReusePage from "./pages/reuse-page"
import NestedArrayPage from "./pages/nested-array-page"

const App = ()=>{
  return(
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/reuse-page" element={<ReusePage/>} />
      <Route path="/nested-array-page" element={<NestedArrayPage/>} />
    </Routes>
  )
}
export default App