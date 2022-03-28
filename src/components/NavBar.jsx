import React from 'react'

const NavBar = () => {
  return (
    <nav className='h-[110px] flex items-center'>
        <img  className='w-[212px] ml-[140px]' src="logo.svg" alt=" logo" />
        <button className='ml-auto'>Login</button>
        <button className='mx-10 bg-[#01CB63] rounded-lg w-[144px] h-[60px]'>register</button>
    </nav>
  )
}

export default NavBar