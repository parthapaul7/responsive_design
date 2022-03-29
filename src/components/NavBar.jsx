import React from 'react'

const NavBar = () => {
  return (
    <nav className='sm:sticky top-0 bg-white w-[100vw] items-center pb-10 sm:h-[110px] sm:flex sm:pb-0'>
        <img  className='w-[212px] mx-auto sm:ml-[calc(1vw+5rem)]' src="images/logo.svg" alt=" logo" />
        <button className='block p-5 mx-auto sm:ml-auto sm:mr-0 '>Login</button>
        <button className='block mx-auto sm:mx-10 bg-[#01CB63] rounded-lg w-[144px] h-[60px]'>Register</button>
    </nav>
  )
}

export default NavBar