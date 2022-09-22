import React from 'react'
import UserCard from '../components/UserCard'

const Account = () => {
  return (
    <main className='bg-zinc-900 h-screen grid place-items-center'>
      <div className='text-center'>
        <h1 className='text-5xl text-white'>Who's watching?</h1>
        <div className="flex xs:flex-col sm:flex-row p-20 xs:space-x-0 sm:space-x-4">
          <UserCard img='https://avatars.mds.yandex.net/i?id=b4136114405ea8420cf4cc6e70f07926-4571312-images-thumbs&n=13' name='Steve'/>
          <UserCard img='https://avatars.mds.yandex.net/i?id=f286b9fe7456b68497806534a5321f40-5877892-images-thumbs&n=13' name='Will'/>
          <UserCard img='https://avatars.mds.yandex.net/i?id=39a792a36dae6a0d829e6e4c19787548-4077532-images-thumbs&n=13' name='John'/>
          <UserCard img='https://avatars.mds.yandex.net/i?id=021e6aa6f91358d272c13d1f65ed7171-4901917-images-thumbs&n=13' name='Leila'/>
        </div>
        <button className='border border-zinc-500 px-5 py-2 hover:text-black hover:bg-white/70 duration-300 text-zinc-500'>MANAGE PROFILES</button>
      </div>
    </main>
  )
}

export default Account