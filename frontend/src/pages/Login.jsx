import {React, useEffect, useState} from "react";
import {Link, useHistory } from "react-router-dom";
import college from '../assets/college.png';
import axios from "axios";

export default function Login() {
  const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

  const history = useHistory();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const login = async (e) => {
		e.preventDefault();
		try {
			const { data: res } = await axios.post("http://localhost:8070/login/", data);
			localStorage.setItem("token", res.data);
      if(res.data.acc_Type=="admin"){
        history.push("/admin/dashboard")
      }
      else{
        history.push("/student/dashboard")
      }
			window.location = "/";
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};
  return (
     <div className='min-h-screen bg-gray-300 text-gray-900 flex justify-center'>
        
            <div className='max-w-screen-lg m-8 sm:m-18 bg-white shadow  flex justify-center flex-1 rounded-3xl shadow-xl'>
             {/*left container */}
             <div class="relative overflow-hidden bg-gray-100 lg:w-1/2 xl:w-5/12 rounded-3xl flex-1 md:flex">
                    <img src={college} alt="" class=" mt-2 ml-10 object-contain object-center w-3/4 h-3/4" />
                </div>
     
             {/*Right container*/}
            <div className='lg:w-1/2 xl:w-5/12 p-6 sm:p-12 px '>
                    <div className='mt-12 flex flex-col items-center space-y-2 px-3 py-1 '>
                            <h2 className='text-lg font-semibold text-gray-800'>Please Login Here !!!</h2> 
                    
                    {/*form div */}
                    <div className="mt-24">
                            <input
                            className=' w-full px-6 py-3 rounded-lg font-medium bg-gray-100 border-2 border-indigo-300 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white'
                            type='email'
                            placeholder='Enter your email'
                            onChange={handleChange}
							              required
                            />

                            <input
                            className=' w-full px-6 py-3 rounded-lg font-medium bg-gray-100 border-2 border-indigo-300 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5'
                            type='password'
                            placeholder='Enter your Password'
                            onChange={handleChange}
							              required
                            />
                            {error && <div className="">{error}</div>}
                            <div>
                            <Link
                            to='/users/password/forget'
                            className='text-right text-indigo-500  mt-2'
                            >
                            Forget password?
                            </Link>
                            </div>
                    </div> 

                             <button
                            type='submit'
                            className=' w-full max-w-xs mt-24 tracking-wide font-semibold bg-indigo-600 text-gray-100  py-2 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none'
                            onClick={login}
                            >
                            <i className='fas fa-sign-in-alt  w-12 -ml-2' />
                            <span className='ml-3'>Sign In</span>
                            </button>
           </div>
        </div>
    </div>
  </div>
  );
}