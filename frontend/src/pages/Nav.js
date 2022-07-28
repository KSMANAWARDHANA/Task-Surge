/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useHistory } from "react-router-dom";

export default function Nav(){

    const history = useHistory();

    function logout(){
        localStorage.clear();
        history.push('/')}
  
    return(
    <>
        <nav className="flex items-center justify-between flex-wrap bg-white py-4 shadow-lg">
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-md ml-6">
                    <a href="" className="hover:underline block mt-4 lg:inline-block lg:mt-0 text-red-600 hover:text-red-800 mr-4 text-lg font-semibold">
                        Welcome to Dashboard
                    </a>
                </div> 
                <div class="lg:flex flex-grow items-center mr-6">
                    <ul class="flex flex-col lg:flex-row list-none ml-auto">
                        <li class="ml-8 ">
                            <button 
                                className="rounded-lg text-sm bg-transparent hover:underline hover:bg-red-100 text-red-600 font-semibold hover:text-black py-2 px-5 border border-red-500 hover:border-transparent "
                                onClick={logout}>
                                Logout
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
 )
}