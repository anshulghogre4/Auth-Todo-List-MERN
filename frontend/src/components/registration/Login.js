import axios from 'axios';
import React,{useState} from 'react';
import {NavLink,useNavigate} from "react-router-dom";
import { useCookies} from "react-cookie"


function Login({BASE_URL}) {
  const navigateTo = useNavigate();
      const [email,setEmail] = useState("");
      const [password, setPassword] =useState("");

     
        const submitLogin = async (e) =>{
            
          try {
            e.preventDefault();
            const data = {
              email,
              password
            };
            const resp = await axios.post(`${BASE_URL}/api/u/login`, data, {withCredentials : true});
            console.log(resp);
            // save token in session storage
           sessionStorage.setItem("token", resp.data.token);
           if (resp.data.success === true) {
            navigateTo("/dashboard");
              
            console.log(resp.data.token);
            window.alert("Login Successfull!");
           } 
           
           
           if(resp.status === 400 || resp.status === 401){
            alert("Invalid Crenditals!")
           }
          } catch (error) {
            console.log(error);
            alert("Invalid Credentials!")
          }
             
            
        }


  return (
    <>
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="text-center font-bold text-2xl">Log in</div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form onSubmit={submitLogin} className="space-y-6" action="#" method="POST">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e)=>{setEmail(e.target.value)}}
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e)=>{setPassword(e.target.value)}}
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm">
                  <a
                    href="/signup"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Don't have Account, Sign Up
                  </a>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  
                >
                  Log in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login