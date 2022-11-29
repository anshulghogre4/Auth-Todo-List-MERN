import Register from "./components/registration/Register";
import "./App.css"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from "./components/registration/Login";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element = {<Login/>}/>
      <Route path="/signup" element = {<Register/>}/>
      <Route path="/dashboard" element = {<Dashboard/>}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App