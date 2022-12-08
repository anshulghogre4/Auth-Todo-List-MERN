import Register from "./components/registration/Register";
import "./App.css"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from "./components/registration/Login";
import Dashboard from "./components/Dashboard";
import  {Toaster} from "react-hot-toast"

function App() {


      

  return (
    <BrowserRouter>
    <Toaster
    position="top-right"
    reverseOrder={true}
    />
    <Routes>
      <Route path="/" element = {<Login/>}/>
      <Route path="/signup" element = {<Register/>}/>
      <Route path="/dashboard" element = {<Dashboard/>}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App