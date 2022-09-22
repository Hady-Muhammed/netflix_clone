import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { auth } from '../../firebase/config';
import Loader from '../../components/Loader'
import { toast } from 'react-toastify';
import { signInWithEmailAndPassword } from "firebase/auth";
import { SET_USER } from '../../redux/slices/authSlice';

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // States
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState('');
  // Functions 
  const signIn = (e) => {
    e.preventDefault();
    setIsLoading(true)
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        setIsLoading(false)
        toast.success('Signed In!')
        const user = userCredential.user;
        dispatch(SET_USER(user.email))
        navigate('/netflix_clone/')
        console.log(user);
        // ...
      })
      .catch((error) => {
        setIsLoading(false)
        const errorMessage = error.message;
        toast.error(errorMessage)
      });
  }
  return (
    <>
    {
      isLoading &&
      <Loader/>
    }
    <div className='h-screen flex justify-center items-center bg-[url("https://assets.nflxext.com/ffe/siteui/vlv3/a795ee10-8c6d-467c-8159-254be2b69013/dd59baf8-9749-4702-ace9-131a3eac358f/EG-en-20220912-popsignuptwoweeks-perspective_alpha_website_medium.jpg")]'>
      {/* Overlay Screen */}
      <div className='absolute z-10 w-full h-full bg-gradient-to-r from-black/80 to-black/40'></div>
      <div className='relative p-10 w-[400px] bg-black/70 z-20 text-white'>
        <h1 className='font-bold text-4xl mb-5'>Sign In</h1>
        <form onSubmit={signIn} action="">
          <input onChange={({target}) => setEmail(target.value)} value={email} className='px-4 py-3 placeholder:text-zinc-500 outline-none rounded-md w-full block bg-zinc-800 mb-5' type="email" required  placeholder='Email Address'/>
          <input onChange={({target}) => setPassword(target.value)} value={password} className='px-4 py-3 placeholder:text-zinc-500 outline-none rounded-md w-full block bg-zinc-800 mb-10' type="password" required placeholder='Password' />
          <button className='w-full py-3 rounded-md bg-red-600 text-center font-bold'>Sign In</button>
          <p className='text-zinc-500 mt-10'>New to Netflix? <Link to='/netflix_clone/signup' className='font-bold text-white hover:underline'>Sign up now</Link></p>
        </form>
      </div>
    </div>
    </>
  )
}

export default SignIn