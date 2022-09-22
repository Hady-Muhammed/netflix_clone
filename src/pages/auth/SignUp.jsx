import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from '../../firebase/config';
import Loader from '../../components/Loader'
import { toast } from 'react-toastify';
import { SET_USER } from '../../redux/slices/authSlice';
import { doc, setDoc } from 'firebase/firestore';
const SignUp = () => {
  const navigate = useNavigate();
  // States
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  // Functions
  const signUp = (e) => {
    e.preventDefault();
    setIsLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed Up 
        setIsLoading(false)
        setDoc(doc(db, 'users' , email),{
          savedMovies: []
        })
        const user = userCredential.user;
        console.log(user)
        toast.success('Email Created!')
        navigate('/netflix_clone/signin')
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
      <h1 className='font-bold text-4xl mb-5'>Sign Up</h1>
      <form action="" onSubmit={signUp}>
      <input onChange={({target}) => setName(target.value)} value={name} className='px-4 py-3 placeholder:text-zinc-500 outline-none rounded-md w-full block bg-zinc-800 mb-5' required type="text"  placeholder='Name'/>
      <input onChange={({target}) => setEmail(target.value)} value={email} className='px-4 py-3 placeholder:text-zinc-500 outline-none rounded-md w-full block bg-zinc-800 mb-5' required type="email"  placeholder='Email Address'/>
      <input onChange={({target}) => setPhone(target.value)} value={phone} className='px-4 py-3 placeholder:text-zinc-500 outline-none rounded-md w-full block bg-zinc-800 mb-5' required type="number"  placeholder='Phone no.'/>
      <input onChange={({target}) => setPassword(target.value)} value={password} className='px-4 py-3 placeholder:text-zinc-500 outline-none rounded-md w-full block bg-zinc-800 mb-10' required  type="password" placeholder='Password' />
      <button className='w-full py-3 rounded-md bg-red-600 text-center font-bold'>Sign Up</button>
      <p className='text-zinc-500 mt-10'>Already have an account? <Link to='/netflix_clone/signin' className='font-bold text-white hover:underline'>Sign in now</Link></p>
      </form>
    </div>
  </div>
    </>
  )
}

export default SignUp