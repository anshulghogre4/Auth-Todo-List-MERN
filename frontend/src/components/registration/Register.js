import React,{useState} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import axios   from "axios"; 
import {toast} from "react-hot-toast";


function Register({BASE_URL}) {
          const navigateTo = useNavigate();
        const [userDetails,setUserDetails] = useState({
          firstName : "",
          lastName : "",
          email: "",
          password : ""
        })
          let user,uservalue;

        const  handleDetails = (ele) =>{
          user = ele.target.name;
          uservalue = ele.target.value;
          setUserDetails({...userDetails,[user]:uservalue});
        };

        const handleSubmit = async (e) => {
          e.preventDefault();
          const { firstName, lastName, email, password} = userDetails;

          const data = {
            firstName,
             lastName,
              email,
               password
          }

            if (!firstName || !lastName || ! email || !password) {
                alert("Please fill all fields");
                return;
            };

            if (password.length < 8) {
                alert("password should be atleast of 8 characters!");
            }

          const resp = await axios.post(`${BASE_URL}/api/u/register`,data);
          console.log(resp);

            if (resp.data.success) {
                  navigateTo("/")
                  alert("Registration Successfull,Please Login!");
            }else{
              alert("Please enter correct credentials");
            }
        }


  return (
    <>
    <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div className="text-center text-2xl font-bold">Sign up</div>
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form onSubmit={handleSubmit} className="space-y-6" action="#" method="POST">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700"
            >
              First Name
            </label>
            <div className="mt-1">
              <input
                id="firstName"
                name="firstName"
                type="text"
                autoComplete="firstName"
                  value={userDetails.firstName}
                  onChange ={handleDetails}
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700"
            >
              Last Name
            </label>
            <div className="mt-1">
              <input
                id="lastName"
                name="lastName"
                type="text"
                autoComplete="lastName"
                value={userDetails.lastName}
                onChange ={handleDetails}
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
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
                required
                value={userDetails.email}
                  onChange ={handleDetails}
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
                value={userDetails.password}
                onChange ={handleDetails}
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                
              />
            </div>
          </div>
          <div>
            <button
              type="submit"  
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign up
            </button>
          </div>
        </form>
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="" />
                <NavLink to={"/"} className="block text-sm font-medium text-gray-700">
                  Already having an account?
                </NavLink >
            </div>

            
          </div>
         
        </div>
      </div>
    </div>
  </div>
</>
  )
}

export default Register