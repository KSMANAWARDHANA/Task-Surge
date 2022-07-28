/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-sequences */
import React, {useEffect, useState} from 'react'
import axios from "axios";

export default function ViewList() {

    const[students,setStudents]=useState([]);//creating students array to load user data from database 

    useEffect(()=>{
        function getStudents(){
            axios.get("http://localhost:8070/student/").then((res) => {
                setStudents(res.data);
            }).catch((err)=>{
                alert(err.message);
            })
        }
        getStudents();
    },[])

    return (
    
      <div className="px-12 py-2 col-span-3">
                        <div class="lg:flex flex-grow items-center mr-6 -mt-24">
                            <h5 className="font-semibold text-md">Click Here to View User List</h5>
                       
                            <ul class="flex flex-col lg:flex-row list-none ml-auto">
                                    <input
                                      className='w-full px-2 py-2 rounded-lg font-medium bg-gray-100 border-2 border-gray-400 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white'
                                      type='text'
                                      placeholder='Enter Date Of Birth'
                                      value={students}
                                     />
                            </ul>
                        </div>
       </div>    
    
  )
}
