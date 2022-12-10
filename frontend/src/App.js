import Register from "./components/registration/Register";
import "./App.css"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from "./components/registration/Login";
import Dashboard from "./components/Dashboard";
import  {Toaster} from "react-hot-toast"

function App() {

    const BASE_URL = "https://auth-todo-list-mern-production-e11d.up.railway.app";
      

  return (
    <BrowserRouter>
    <Toaster
    position="top-right"
    reverseOrder={true}
    />
    <Routes>
      <Route path="/" element = {<Login  BASE_URL={BASE_URL} />}/>
      <Route path="/signup" element = {<Register  BASE_URL={BASE_URL} />}/>
      <Route path="/dashboard" element = {<Dashboard/>}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App