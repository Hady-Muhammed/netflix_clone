import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector , useDispatch } from 'react-redux'
import { signOut } from "firebase/auth";
import { auth } from '../firebase/config';
import { toast } from 'react-toastify';
import Loader from './Loader';
import { LOG_OUT } from '../redux/slices/authSlice';


const Navbar = () => {
  const dispatch = useDispatch();
  // Import Global States
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  // States
  const [changeNav, setChangeNav] = useState('bg-transparent');
  const [isLoading, setIsLoading] = useState(false);

  // Functions
  const logOut = () => {
    setIsLoading(true)
    signOut(auth).then(() => {
      // Sign-out successful.
      setIsLoading(false)
      toast.success('Logged Out Successfully!');
      dispatch(LOG_OUT())
    }).catch((error) => {
      // An error happened.
      setIsLoading(false)
      toast.error(error.message)
    });
  }
  const handleNavColor = () => {
    if(window.scrollY >= 60) {
      setChangeNav('bg-black/60')
    } else {
      setChangeNav('bg-transparent')
    }
  }
  window.addEventListener('scroll',handleNavColor)
   
  return (
    <nav className={`flex xs:flex-col sm:flex-row justify-between items-center fixed top-0 w-full ${changeNav} z-20 text-white px-10 py-5 duration-300`}>
        <Link to='/netflix_clone/'>
          <h1 className='text-red-600 font-bold text-5xl cursor-pointer'>NETFLIX</h1>
        </Link>
        {
          isLoggedIn ?
        <div className='space-x-2'>
            <Link to='/netflix_clone/account'>
                <button className='font-bold p-5'>Account</button>
            </Link>
            <Link to='/netflix_clone/watchLater'>
                <button className='font-bold p-5'>Watch List</button>
            </Link>
            <Link onClick={logOut} to='/netflix_clone/'>
                <button className='font-bold px-8 py-4 bg-red-600 text-white rounded-md'>Log out</button>
            </Link>
        </div>
          :
        <div className='space-x-2'>
            <Link to='/netflix_clone/signin'>
                <button className='font-bold p-5'>Sign In</button>
            </Link>
            <Link to='/netflix_clone/signup'>
                <button className='font-bold px-8 py-4 bg-red-600 text-white rounded-md'>Sign Up</button>
            </Link>
        </div>
        }
        {
          isLoading && <Loader/>
        }
    </nav>
  )
}

export default Navbar