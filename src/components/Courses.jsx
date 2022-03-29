import React from 'react'

const Courses = () => {
  return (
    <div>
        <div className='text-center text-green-500'>Courses</div>
        <div className='text-center text-xl my-5'>Our Most popular courses</div>
        <div className='w-[500px] h-[600px] border-[1px] border-[#E6E6E6] mx-auto'>
            <img className='w-full h-1/2' src="" alt="profile" />
            <div className='w-[460px]'>Ultimate Business Intelligence Analyst A to Z Course 2021</div>
            <div>46,995 Student</div>
            <div className='flex'><div>time</div><div className='ml-auto'>44 lectures</div></div>
            <div className='flex'><img src="" alt=" profile pic" /><div>name</div> <div className='ml-auto'>price</div> <div>notproce</div></div>
        </div>
    </div>
  )
}

export default Courses