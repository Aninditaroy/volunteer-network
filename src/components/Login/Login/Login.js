import React, { useRef } from 'react';
import google from '../../../images/social/google.png';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../.firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';

const Login = () => {
    const navigate = useNavigate();
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const navigateRegister = () => {
        navigate('/register');
    }
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    if(user){
        navigate(from, { replace: true });
    }
    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
        navigate('/home');
    }
    return (
        <div className='flex items-center justify-center'>
            <div className='shadow-sm m-10 p-10 sm:w-96 md:w-96 lg:96 2xl:96 rounded border border-zinc-300'>
                <h3 className='text-2xl text-center font-bold mb-6'>Login With</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mx-auto w-80 relative mb-5">
                        <input type="email" ref={emailRef} id="floating_filled" className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900  border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label htmlFor="floating_filled" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Email</label>
                    </div>
                    <div className="mx-auto w-80 relative mb-5">
                        <input type="password" ref={passwordRef} id="floating_filled" className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900  border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label htmlFor="floating_filled" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Password</label>
                    </div>
                    <input type='submit' className="text-white bg-blue-700 font-medium rounded-lg text-sm px-32 py-2.5 text-center mb-3" value="Login" />
                </form>
                <div className='flex items-center '>
                    <div className='border border-b-1  border-gray-200 mb-2 w-44 mx-auto mt-3'></div>
                    <span className='ml-2 mr-2 text-sm font-semibold'>OR</span>
                    <div className='border border-b-1  border-gray-200 mb-2 w-44 mx-auto mt-3'></div>
                </div>
                <br />
                <button onClick={() => signInWithGoogle()} className='flex items-center py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200'>
                    <img style={{ width: "25px", height: "25px" }} src={google} alt="" />
                    <span className=' pl-20'>Continue with Google</span>
                </button>
                <div className='text-sm text-center mb-10 mt-4'><p>Don't have an account? <span className='underline text-sky-500 cursor-pointer' onClick={navigateRegister}>Create an account</span></p></div>
            </div>
        </div>
    );
};

export default Login;