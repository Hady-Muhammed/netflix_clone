import axios from 'axios';
import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
const Row = ({categ,fetchUrl,rowID}) => {
    const [movies, setMovies] = useState([])
    // Functions 
    const slideLeft = () => {
        let slider = document.getElementById('slider' + rowID);
        slider.scrollLeft -= 500;
    }
    const slideRight = () => {
        let slider = document.getElementById('slider' + rowID);
        slider.scrollLeft += 500;
    }
    useEffect(() => {
        axios.get(fetchUrl).then(res => setMovies(res.data.results))
    },[fetchUrl]);
  return (
    <section className='font-bold'>
        <h2 className='p-4 text-white text-2xl'>{categ}</h2>
        <div className="flex relative items-center group">
            <button onClick={slideLeft} className='group-hover:block opacity-50 hidden w-[30px] text-4xl bg-white text-black font-bold rounded-full absolute left-0 z-[6000]'>{'<'}</button>
            <div id={`slider${rowID}`} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide space-x-3 relative'>
                {
                    movies?.map(movie => (
                        <MovieCard movie={movie} key={movie.id} title={movie?.title} img={movie?.backdrop_path}/>
                    ))
                }
            </div>
            <button onClick={slideRight} className='group-hover:block opacity-50 hidden w-[30px] text-4xl bg-white text-black font-bold rounded-full absolute right-0 z-[6000]'>{'>'}</button>
        </div>
    </section>
  )
}

export default Row