/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-sequences */
import React, {useEffect, useState} from 'react'
import Nav from './Nav';
import axios from "axios";
import Modal from 'react-modal';
import { blue } from 'material-ui-colors';
import ViewList from '../components/allStudents';

 
export default function DashboardOne() {
 

    //user profile
    const [id, setId] = useState("");
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [dateOf_Birth, setDob] = useState("");
    const [mobile, setMobile] = useState("");
    const [status, setStatus] = useState("");
    const [password, setPassword] = useState("");
    const [acc_type, setAccType] = useState("");

    //function to create user
    function sendData(e){
      e.preventDefault();
      
      const newStudent = {
        id,
        first_name,
        last_name,
        email,
        dateOf_Birth,
        mobile,
        status,
        password,
        acc_type
      }

      //sending data to database through created routes in backend
      axios.post("http://localhost:8070/admin/create",newStudent).then(()=>{
        alert("Student Create Successfully!!");
      }).catch((err)=>{
        alert(err)
      })
      
    }

    //creating a popup to view user list
    const [modalIsOpen,setModalIsOpen] = useState(false);
        const setModalIsOpenToTrue =()=>{
            setModalIsOpen(true)
        }
        const setModalIsOpenToFalse =()=>{
            setModalIsOpen(false)
        }
        const customStyles = {
            content : {
              top                   : '50%',
              left                  : '50%',
              right                 : 'auto',
              bottom                : 'auto',
              marginRight           : '-50%',
              transform             : 'translate(-50%, -50%)',
              backgroundColor       : blue      
            }
        };

    return (
      <div>
          <Nav/>
         
          <div className="bg-white mt-12 px-12 grid grid-cols-1/ sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
            {/*card 01-->create user profile*/}
              
              <div className="rounded overflow-hidden shadow-lg">
                <div className="px-6 py-4">
                    <div className="font-semibold mb-2 text-xl text-red-600">Create User</div><hr/>
                        <div className="px-12 py-2">
                            <span className="  inline-block  text-sm font-semibold text-gray-800 mr-2 ml-5">
                              User ID <div><span className="inline-block  text-sm font-semibold text-blue-700  ">
                                        <input
                                          className='w-min px-2 py-2 rounded-lg font-medium bg-gray-100 border-2 border-gray-400 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white'
                                          type='text'
                                          placeholder='Enter User ID'
                                          onChange={(e)=>{setId(e.target.value)}}
                                        /></span></div>
                            </span>

                            <span className="  inline-block  text-sm font-semibold text-gray-800 mr-2 ml-5">
                            First Name  <div><span className="inline-block  text-sm font-medium text-blue-700  ">
                                        <input
                                          className='w-full px-2 py-2 rounded-lg font-medium bg-gray-100 border-2 border-gray-400 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white'
                                          type='text'
                                          placeholder='Enter user First Name'
                                          onChange={(e)=>{setFirstName(e.target.value)}}
                                        /></span></div>
                            </span>
                        </div>

                        <div className="px-12 py-0">
                          <span className="  inline-block  text-sm font-semibold text-gray-800 mr-2 ml-5">
                          Last Name  <div><span className="inline-block  text-sm font-normal text-blue-700">
                                    <input
                                      className='w-full px-2 py-2 rounded-lg font-medium bg-gray-100 border-2 border-gray-400 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white'
                                      type='text'
                                      placeholder='Enter user last Name'
                                      onChange={(e)=>{setLastName(e.target.value)}}                                   
                                    /></span></div>
                          </span>

                          <span className="  inline-block  text-sm font-semibold text-gray-800 mr-2 ml-5">
                          Email <div><span className="inline-block  text-sm font-normal text-blue-700  ">
                                    <input
                                      className='w-full px-2 py-2 rounded-lg font-medium bg-gray-100 border-2 border-gray-400 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white'
                                      type='text'
                                      placeholder='Enter user email'
                                      onChange={(e)=>{setEmail(e.target.value)}}
                                    /></span></div></span>
                        </div>

                        <div className="px-12 py-0">
                          <span className="  inline-block  text-sm font-semibold text-gray-800 mr-2 ml-5">
                           Date Of Birth  <div><span className="inline-block  text-sm font-normal text-gray-800  ">
                                    <input
                                      className='w-full px-2 py-2 rounded-lg font-medium bg-gray-100 border-2 border-gray-400 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white'
                                      type='text'
                                      placeholder='Enter Date Of Birth'
                                      onChange={(e)=>{setDob(e.target.value)}}
                                     /></span></div>
                          </span>
                          
                          <span className="  inline-block  text-sm font-semibold text-gray-800 mr-2 ml-5 mt-2">
                          Mobile Number <div><span className="inline-block  text-sm font-normal text-gray-800  ">
                                    <input
                                      className='w-full px-2 py-2 rounded-lg font-medium bg-gray-100 border-2 border-gray-400 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white'
                                      type='text'
                                      placeholder='Enter user Mobile'
                                      onChange={(e)=>{setMobile(e.target.value)}}
                                    /></span></div>
                          </span>

                        <span className="  inline-block  text-sm font-semibold text-gray-800 mr-2 ml-5 mt-2">
                         Status<div className="w-full"><span className="inline-block  text-sm font-normal text-gray-800  ">
                                    <input
                                      className='w-full px-2 py-2 rounded-lg font-medium bg-gray-100 border-2 border-gray-400 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white'
                                      type='text'
                                      placeholder='Enter user Status'
                                      onChange={(e)=>{setStatus(e.target.value)}}
                                     /></span></div>
                        </span>

                        <span className="  inline-block  text-sm font-semibold text-gray-800 mr-2 ml-5">
                         Password <div><span className="inline-block  text-sm font-normal text-gray-800  ">
                                    <input
                                      className='w-full px-2 py-2 rounded-lg font-medium bg-gray-100 border-2 border-gray-400 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white'
                                      type='text'
                                      placeholder='Select User Password'
                                      onChange={(e)=>{setPassword(e.target.value)}}
                                    /></span></div>
                        </span>

                        <span className="  inline-block  text-sm font-semibold text-gray-800 mr-2 ml-5">
                         Account Type <div><span className="inline-block  text-sm font-normal text-gray-800  ">
                                    <input
                                      className='w-full px-2 py-2 rounded-lg font-medium bg-gray-100 border-2 border-gray-400 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white'
                                      type='text'
                                      placeholder='Enter Account Type'
                                      onChange={(e)=>{setAccType(e.target.value)}}
                                    /></span></div>
                        </span>

                        <button
                          className="bg-red-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded mt-4 ml-6"
                          type="submit"
                          onClick={sendData}
                          >Create
                        </button>

                       
                    </div>
                </div>
            </div>

             {/*card 02-->view user list*/}

             <div className="ml-8 rounded overflow-hidden shadow-lg grid grid-cols-3">
                        <h5 className="mt-4 ml-4 font-semibold text-xl text-red-600">View User List</h5><hr/>
                   
                         <div className="px-12 py-2 col-span-3">
                        
                            <div class="lg:flex flex-grow items-center mr-6 -mt-24">
                            <h5 className="font-semibold text-md">Click Here to View User List</h5>
                           
                                <ul class="flex flex-col lg:flex-row list-none ml-auto">
                                  <button onClick={setModalIsOpenToTrue}  className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">
                                    User List
                                  </button>

                                  <Modal isOpen={modalIsOpen} style={customStyles} onRequestClose={()=> setModalIsOpen(false)} >
                                  <button onClick={setModalIsOpenToFalse} className="font-bold text-3xl text-red-600">x</button>
                                  <ViewList/>

                                  </Modal>
                                </ul>
                            </div>
                       </div>
              </div>
        </div>
   </div>
  )
}
