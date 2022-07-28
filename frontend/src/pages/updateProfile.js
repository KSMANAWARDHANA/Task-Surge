import React,{useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

export default function UpdateProfile() {

    let user = JSON.parse(localStorage.getItem("user-info"));
    let user_id = user.user_id;
    let token = user.access_token;


     //update profile states

      const [addressEdit, setAddressEdit] = useState();
      const [ethereumEdit, setEthereumEdit] = useState();
      const [dobEdit, setdobEdit] = useState();
      const [firstNameEdit, setFirstNameEdit] = useState();
      const [middleNameEdit, setMiddleNameEdit] = useState();
      const [lastNameEdit, setLastNameEdit] = useState();
      const [countryEdit, setCountryEdit] = useState();


    async function updateProfile() {
        let item = {
           addressEdit,
           ethereumEdit,
           dobEdit,
           firstNameEdit,
           middleNameEdit,
           lastNameEdit,
           countryEdit
        };
        console.warn(item);
    
        let result = await  fetch(`https://kyc.bethelnet.io/v1/users/profilepicture/${user_id}`, {
            method: "PUT",
            headers: {
              authorization: `Bearer ${token}`,
            },
            
          })
            .then((response) => response.json())
            .then((response) => {
              console.log("Console Log - Response Received:");
              console.log(response);
              if (response.status) {
                console.log("successfully uploaded")
                toast.success(`Your Profile Updated Successfully`);
              } else {
                console.log("failed to upload")
                toast.error(`Failed to upload profile`);
              }
            })
            .catch((err) => {
              console.log("Console Log - Error Received when fetching data:");
              console.log(err);
            });


       
      
      
       
      }

    return (
        <div>
        <ToastContainer/>

                <div className="">
                    <input
                        className=' w-full px-6 py-3 rounded-lg font-medium bg-gray-100 border-2 border-indigo-300 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white'
                            type='text'
                            placeholder='Enter your First Name'
                            onChange={e => setFirstNameEdit(e.target.value)}
                    />

                    <input
                        className=' w-full px-6 py-3 rounded-lg font-medium bg-gray-100 border-2 border-indigo-300 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white'
                            type='text'
                            placeholder='Enter your First Name'
                            onChange={e => setMiddleNameEdit(e.target.value)}
                    />

                    <input
                        className=' w-full px-6 py-3 rounded-lg font-medium bg-gray-100 border-2 border-indigo-300 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white'
                            type='text'
                            placeholder='Enter your First Name'
                            onChange={e => setLastNameEdit(e.target.value)}
                    />

                    <input
                        className=' w-full px-6 py-3 rounded-lg font-medium bg-gray-100 border-2 border-indigo-300 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white'
                            type='text'
                            placeholder='Enter your First Name'
                            onChange={e => setEthereumEdit(e.target.value)}
                    />

                    <input
                        className=' w-full px-6 py-3 rounded-lg font-medium bg-gray-100 border-2 border-indigo-300 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white'
                            type='text'
                            placeholder='Enter your First Name'
                            onChange={e => setCountryEdit(e.target.value)}
                    />

                    <input
                        className=' w-full px-6 py-3 rounded-lg font-medium bg-gray-100 border-2 border-indigo-300 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white'
                            type='text'
                            placeholder='Enter your First Name'
                            onChange={e => setAddressEdit(e.target.value)}
                    />

                    <input
                        className=' w-full px-6 py-3 rounded-lg font-medium bg-gray-100 border-2 border-indigo-300 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white'
                            type='text'
                            placeholder='Enter your First Name'
                            onChange={e => setdobEdit(e.target.value)}
                    />

                    <button class="bg-red-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded mt-4 ml-2">
                        Update
                    </button>

                </div>


        </div>
    )
}
