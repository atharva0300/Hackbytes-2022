import React from 'react'

function NavBar() {
  return (
    <nav className='w-screen h-24 bg-black flex flex-row justify-between'>
        <h2 className='self-center text-4xl text-white font-bold ml-24'>Hobbies</h2>
        <div className='self-center flex flex-row justiy-around mr-24'>
            <a href = "#" className='self-center text-xl text-white font-normal px-6'>Sports</a>
            <a href = "#" className='self-center text-xl text-white font-normal px-6'>Music</a>
            <a href = "#" className='self-center text-xl text-white font-normal px-6'>Photography</a>
            <a href = "#" className='self-center text-xl text-white font-normal px-6'>About us</a>
        </div>
    </nav>
  )
}

export default NavBar
