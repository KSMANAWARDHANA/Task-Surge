/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-sequences */
import React, {useEffect, useState} from 'react'
import Nav from './Nav';
import axios from "axios";


export default function StuDashboard() {
  
    //create notes
    const [note_num, setNum] = useState();
    const [title, setTitle] = useState();
    const [description, setDesc] = useState();

    function sendData(e){
      e.preventDefault();
      
      const newNote = {
        note_num,
        title,
        description
      }

      //sending data to database through created routes in backend
      axios.post("http://localhost:8070/note/add",newNote).then(()=>{
        alert("Notes Create Successfully!!");
      }).catch((err)=>{
        alert(err)
      })
      
    }

   
    return (
      <div>
          <Nav/>
         
          <div className="bg-white mt-12 px-12 grid grid-cols-1/ sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-4">
            {/*card 01-->create user profile*/}
              
              <div className="ml-24 rounded overflow-hidden shadow-xl ">
                <div className="px-24 py-4">
                    <div className="font-semibold mb-2 text-xl text-red-600">Create Note</div><hr/>
                        <div className="px-24 py-2">
                            <span className="  inline-block  text-sm font-semibold text-gray-800 mr-2 ml-5">
                              Note Number<div><span className="inline-block  text-sm font-semibold text-blue-700  ">
                                        <input
                                          className='w-min px-2 py-2 rounded-lg font-medium bg-gray-100 border-2 border-gray-400 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white'
                                          type='text'
                                          placeholder='Enter User ID'
                                          value={note_num}
                                          onChange={(e)=>{setNum(e.target.value)}}
                                        /></span></div>
                            </span>

                            <span className=" inline-block  text-sm font-semibold text-gray-800 mr-2 ml-12">
                                Title<div><span className="inline-block  text-sm font-normal text-gray-800  ">
                                    <input
                                      className='w-full px-2 py-2 rounded-lg font-medium bg-gray-100 border-2 border-gray-400 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white'
                                      type='text'
                                      placeholder='Enter Date Of Birth'
                                      value={title}
                                      onChange={(e)=>{setTitle(e.target.value)}}
                                     /></span></div>
                            </span>
                        </div>

                        <div className="px-24 py-0 w-full">
                          <span className=" inline-block  text-sm font-semibold text-gray-800 mr-2 ml-5">
                           Description<div><span className="inline-block text-sm font-normal text-gray-800  ">
                                    <textarea
                                      className='w-full px-48 py-24 rounded-lg font-medium bg-gray-100 border-2 border-gray-400 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white'
                                      type='text'
                                      placeholder=''
                                      value={description}
                                      onChange={(e)=>{setDesc(e.target.value)}}
                                     /></span></div>
                          </span>
                        </div>

                        <button
                          className="ml-48 bg-red-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded mt-4 ml-6"
                          type="submit"
                          onClick={sendData}
                          >Create
                        </button>

                        <button
                          className="bg-red-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded mt-4 ml-6"
                          type="submit"
                          onClick=""
                          >Update
                        </button>

                        <button
                          className="bg-red-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded mt-4 ml-6"
                          type="submit"
                          onClick=""
                          >Delete
                        </button>
                </div>
            </div>

             
        </div>
   </div>
  )
}
