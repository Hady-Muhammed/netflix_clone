import React from 'react'

const Loader = () => {
  return (
    <div className='fixed top-0 left-0 z-50 w-full h-full grid place-items-center bg-black/70'>
        <div className="flex space-x-1">
            <span className='bg-transparent border-t-4 animate-spin border-t-white w-10 h-10 rounded-full'></span>
        </div>
    </div>
  )
}

export default Loader