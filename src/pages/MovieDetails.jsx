import React, { useState , useEffect } from 'react'
import {  useSelector } from 'react-redux'

const MovieDetails = () => {
  // Import Global States
  const movie = useSelector(state => state.currentMovie.currentMovie);
  // States
  const [isWatching , setIsWatching] = useState(false);
  
  return (
    <main className='relative flex items-center  h-screen'>
        {/* Overlay Screen */}
        <div className='absolute z-10 w-full h-full bg-gradient-to-r from-black/80 to-black/40'></div>
        <img className='object-cover absolute top-0 left-0 w-full h-full' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
        <div className='relative z-20 px-20 space-y-4'>
          <h1 className='text-5xl text-white font-bold'>{movie?.title}</h1>
          <div className='space-x-2 text-lg'>
            <span className='text-green-500 font-semibold'>{((movie?.vote_average / 10) * 100).toFixed(0)}% Match</span>
            <span className='font-semibold text-white/50'>{movie?.release_date.split('-')[0]}</span>
            <span className='font-semibold border border-white/50 bg-black text-sm p-1 text-white/50'>Ultra HD 4K</span>
            <span className='font-semibold border border-white/50 bg-black text-sm p-1 text-white/50'>{movie?.vote_average}</span>
          </div>
          <p className='text-white/60'>{movie?.overview}</p>
          <button onClick={() => setIsWatching(true)} className='bg-white hover:bg-white/80 font-semibold duration-300 text-black px-10 py-3'>WATCH EPISODE</button>
        </div>
        <div className={`${isWatching ? 'block' : 'hidden'} fixed top-0 left-0 w-full h-full z-50 grid place-items-center`}>
          <div onClick={() => setIsWatching(false)} className='bg-black/60 z-[5] w-full h-full absolute'></div>
          <iframe className='z-[6]' width="560" height="315" src="https://www.youtube.com/embed/5PSNL1qE6VY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    </main>
  )
}

export default MovieDetails