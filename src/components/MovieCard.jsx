import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch , useSelector } from 'react-redux'
import { SET_CURRENT_MOVIE } from '../redux/slices/movieSlice';
import { toast } from 'react-toastify';
import {BsHeart , BsHeartFill} from 'react-icons/bs'
const MovieCard = ({img , title , movie}) => {
  // States
  const [added , setAdded] = useState(false);
  //Import Global States 
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const email = useSelector(state => state.auth.email);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Functions 
  const addToWatchList = () => {
    if(isLoggedIn) {
      setAdded(true)
    } else {
      toast.error('Please Login!')
    }
  }
  const handleDetails = () => {
    if(isLoggedIn) {
      dispatch(SET_CURRENT_MOVIE(movie));
      navigate(`/netflix_clone/${movie?.id}`);
    } else {
      toast.error('Please Sign In!')
    }
  }
  return (
    <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block relative  duration-300 cursor-pointer parent'>
        {/* Overlay Screen */}
        <div onClick={handleDetails} className="overlay opacity-0 absolute w-full h-full bg-black/50 duration-300"></div>
        {
          added ?
          <button className='block z-[99999] absolute top-2 left-2' onClick={addToWatchList}>
            <BsHeartFill className='heart opacity-0' size={25}/>
          </button>
          :
          <button className='block z-[99999] absolute top-2 left-2' onClick={addToWatchList}>
            <BsHeart className='heart opacity-0' size={25}/>
          </button>
        }
        <h3 onClick={handleDetails} className='title opacity-0 absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] duration-300 z-[999]'>{title}</h3>
        <img className='w-full h-full' src={`https://image.tmdb.org/t/p/w500/${img}`} alt={title} />
    </div>
  )
}

export default MovieCard