import React from 'react'
import "./Main.css"

const Main = () => {
  return (
    <main className="w-[100vw]">
            <div className='w-full h-[783px] bg-[#01CB63] flex'>
                <div className='p-40 w-[50vw]'>
                    <h1 className='text-white text-6xl pb-10'>AnyTime, anywhere Learn on your schedule from any device</h1>
                    <p className=' text-[1.7rem]'>We Believe everyone has the capcity to be creative <span className='text-white'>Course Pro </span>is a place where people develop their own potential</p>
                    <button className='w-[242px] h-[70px] bg-black rounded-[10px] my-10 text-white text-[1.5rem]'>Let's Get Start</button>
                </div>
                <img className="w-[50vw]" src="Rectangle 25.png" alt=" big image" />
            </div>

        <div className="bg-img h-[345px] flex justify-evenly items-center ">
        <div> <div className='text-[35px] text-[#86919D]'>Total Student</div> <div className='text-[#1F2532] text-[65px]'>5140</div> <div className='w-[149px] bg-green-600 h-2'></div></div>
        <div> <div className='text-[35px] text-[#86919D]'>Partners</div> <div className='text-[#1F2532] text-[65px]'>4123</div> <div className='w-[149px] bg-green-600 h-2'></div></div>
        <div> <div className='text-[35px] text-[#86919D]'>Affiliate Distribution</div> <div className='text-[#1F2532] text-[65px]'>4.18 Lac</div> <div className='w-[250px] bg-green-600 h-2'></div></div>
        </div>
    </main>
  )
}

export default Main