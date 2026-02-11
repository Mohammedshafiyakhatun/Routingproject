import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./Components/Home";
import Dashboard from "./Components/Dashboard";
import {Login} from "./Components/Login";


function App() {
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/dashboard" element={<Dashboard/>}></Route>
  </Routes>
  </BrowserRouter>
  
}

export default App
