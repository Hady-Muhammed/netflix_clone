import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Row from '../components/Row';
import { requests } from '../Requests';

const Home = () => {
    // States
    const [movies , setMovies] = useState([]);
    const movie = movies[Math.floor(Math.random() * movies.length)]
    const [play , setPlay] = useState(false)
    // Import Global States
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    // Functions 
    const handleWatchLater = () => {
        if(isLoggedIn) {
            toast.success('Added to your List');
        } else {
            toast.error('Please Sign In!');
        }
    }
    const handlePlay = () => {
        if(isLoggedIn) {
            setPlay(true)
        } else {
            toast.error('Please Sign In!');
        }
    }
    useEffect(() => {
        axios.get(requests.requestTopRated).then(res => setMovies(res.data.results));
    }, [])
    console.log(movie)
  return (
    <main className='h-[550px] text-white'>
        <div className='h-[700px] relative flex items-center'>
            {/* Overlay Screen */}
            <div className='absolute z-10 w-full h-full bg-gradient-to-r from-black/80 to-black/40'></div>
            <img className='absolute top-0 left-0 h-full w-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
            <div className='relative z-10 px-10 h-fit space-y-4'>
                <h1 className='xs:text-3xl md:text-5xl'>{movie?.title}</h1>
                <div className="flex space-x-2">
                    <button onClick={handlePlay} className='bg-white hover:bg-white/80 font-semibold duration-300 text-black px-10 py-3'>Play</button>
                    <button onClick={handleWatchLater} className='text-gray-500 border-2 hover:bg-gray-600 hover:text-white border-gray px-6 py-3 duration-300'>Watch Later</button>
                </div>
                <span className='block text-gray-400'>Released: {movie?.release_date}</span>
                <p className='xs:text-sm md:text-lg'>{movie?.overview}</p>
            </div>
        </div> 
        <Row rowID='1' categ='Upcoming' fetchUrl={requests.requestUpcoming}/>
        <Row rowID='2' categ='Top Rated' fetchUrl={requests.requestTopRated}/>
        <Row rowID='3' categ='Popular' fetchUrl={requests.requestPopular}/>
        <Row rowID='4' categ='Trending' fetchUrl={requests.requestTrending}/>
        
            <div className={`${play ? 'block' : 'hidden'} fixed top-0 left-0 w-full h-full z-50 grid place-items-center`}>
                <div onClick={() => setPlay(false)} className='bg-black/60 z-[5] w-full h-full absolute'></div>
                <iframe className='z-[6]' width="560" height="315" src="https://www.youtube.com/embed/5PSNL1qE6VY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
    </main>
  )
}

export default Home