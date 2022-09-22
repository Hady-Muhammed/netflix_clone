import React from 'react'

const UserCard = ({img , name}) => {
  return (
    <div className='cursor-pointer group'>
        <img className='object-cover group-hover:brightness-50 duration-300' src={img} alt={name} />
        <p className='text-zinc-500 group-hover:text-white duration-300'>{name}</p>
    </div>
  )
}

export default UserCard