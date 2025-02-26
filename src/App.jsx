import { Route, Routes } from "react-router"
import Home from "./pages/home"
import ReuseCompInLoop from "./components/reuse-comp-in-loop"
import NestedArrayLoop from "./components/nested-array-loop"
import ManageFormInputs from "./components/manage-form-inputs"
import StateSideEffect from "./components/state-side-effect"
import PropSideEffect from "./components/prop-side-effect"
import LifeCycleMethods from "./components/life-cycle-methods"
import FocusInput from "./components/focus-input"
import UncontrolledComp from "./components/uncontrolled-comp"
import UseRefHook from "./components/useRef-hook"
import PassFuncAsProps from "./components/pass-func-as-props"
import LastThreeTasks from "./components/last-three-tasks"
import FetchAPI from "./components/fetch-API"

const App = ()=>{
  return(
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/reuse-comp" element={<ReuseCompInLoop/>} />
      <Route path="/nested-array-loop" element={<NestedArrayLoop/>} />
      <Route path="/manage-form-inputs" element={<ManageFormInputs/>} />
      <Route path="/fetch-api" element={<FetchAPI/>} />
      <Route path="/state-side-effect" element={<StateSideEffect/>} />
      <Route path="/prop-side-effect" element={<PropSideEffect/>} />
      <Route path="/life-cycle-method" element={<LifeCycleMethods/>} />
      <Route path="/useref-hook" element={<UseRefHook/>} />
      <Route path="/last-three-tasks" element={<LastThreeTasks/>} />
    </Routes>
  )
}
export default App