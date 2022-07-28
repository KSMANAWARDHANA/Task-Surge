/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import img7 from '../assets/img7.png';
import { ToastContainer, toast } from 'react-toastify';


const ForgetPassword = ({history}) => {
  const [formData, setFormData] = useState({
    email: '',
    textChange: 'Submit'
  });
  const { email, textChange } = formData;
  const handleChange = text => e => {
    setFormData({ ...formData, [text]: e.target.value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (email) {
      setFormData({ ...formData, textChange: 'Submitting' })
     
        .then(res => {
          
            setFormData({
              ...formData,
              email: '',
            });
            toast.success(`Please check your email`);
          
        })
        .catch(err => {
        console.log(err.response)
          toast.error(err.response.data.error);
        });
    } else {
      toast.error('Please fill all fields');
    }
  };
  return (
    <div className='min-h-screen bg-gray-300 text-gray-900 flex justify-center'>
    {/*<ToastContainer />*/}
       <div className='max-w-screen-lg m-8 sm:m-18 bg-white shadow  flex justify-center flex-1 rounded-3xl shadow-xl'>

        {/*left side */}
        <div class="relative overflow-hidden bg-gray-100 lg:w-1/2 xl:w-5/12 rounded-3xl flex-1 md:flex">
                    <div className="mt-5">
                    {/*<span className="inline-block  ml-0"><img src={bethel} alt="" class="ml-5 my-8  h-8 w-8 object-contain" /></span>*/}
                    <span  className="ml-5 absolute w-full text-xl xl:text-xl font-semibold  text-red-700">BETHEL</span>
                    </div>
                    <img src={img7} alt="" class=" mt-24  object-contain   object-center" />
                </div>
     


       {/*Right side */}
       <div className='lg:w-1/2 xl:w-5/12 p-6 sm:p-12  '>
               <div className='mt-24 flex flex-col  space-y-2 px-3 py-1 '>
                       <h1 className='text-lg font-semibold text-gray-700'>Forgot Password ?</h1> 
                       <div><h6 className='text-lg font-normal text-gray-700'>
                         {`Enter your email and we'll send
                         you instructions to reset`}
                         </h6> </div>
               
               {/*form div */}
               <div className="">
                   <form className='mx-auto max-w-xs relative '
                    onSubmit={handleSubmit}>

                   <div className='mx-auto max-w-xs relative space-y-0 text-gray-700 font-medium'>
                       <label htmlFor="email "><h5>Email</h5></label>
                       <input
                       className=' w-full px-6 py-3 rounded-lg font-medium bg-gray-100 border-2 border-indigo-300 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white'
                       type='email'
                       placeholder='Enter Your Email Address'
                       onChange={handleChange('email')}
                       value={email}
                       />
                   </div>

                   <button
                  type='submit'
                  className='mt-5 tracking-wide font-semibold bg-indigo-600 text-gray-100 w-full py-3 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none'
                >
                  <i className='fas fa-sign-in-alt  w-6  -ml-2' />
                  <span className='ml-3'>Send reset link</span>
                </button>

                <a
                  className='w-full max-w-xs font-bold shadow-sm rounded-lg py-3 ml-24'       
                  href='/login'
                  target='_self'
                >
                <h5 className='leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2 text-blue-600'>Back to login</h5>
                </a>
                
           </form>
       </div> 
         
             
      </div>
   </div>
</div>
</div>
  );
};

export default ForgetPassword;