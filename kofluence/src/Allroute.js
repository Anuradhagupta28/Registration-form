import { Route, Routes } from "react-router-dom"
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Dashboard from "./Components/Dashboard";
function AllRoute(){
return(
    <div>
        <Routes>
        <Route path='/' element={<Signup/>}/>
   < Route path='/login' element={<Login/>}/>
           <Route path="/dashboard" element={<Dashboard/>} /> 
        </Routes>
    </div>
)
}
export default AllRoute;