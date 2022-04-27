import React from 'react';
import google from '../../../images/social/google.png'
import { useNavigate } from 'react-router-dom';
import auth from '../../../.firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
const Login = () => {
    const navigate = useNavigate();
    const navigateRegister = () =>{
        navigate('/register');
    }
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    return (
        <div className='flex items-center justify-center'>
            <div className='shadow-sm m-10 p-10 sm:w-96 md:w-96 lg:96 2xl:96 rounded border border-zinc-300'>
                <h3 className='text-2xl text-center font-bold mb-6'>Login With</h3>
                <button onClick={()=> signInWithGoogle()}  className='flex items-center py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200'>
                    <img style={{ width: "25px", height: "25px" }} src={google} alt="" />
                    <span className=' pl-20'>Continue with Google</span>
                </button>
                <div className='text-sm text-center mb-10 mt-4'><p>Don't have an account? <span className='underline text-sky-500 cursor-pointer' onClick={navigateRegister}>Create an account</span></p></div>
            </div>
        </div>
    );
};

export default Login;