import Link from 'next/link'
import React from 'react'

function index() {
  return (
    <div className='bg-[#666666] h-screen'>
        <div className='container m-auto '>
            <div className='max-w-[1000px] m-auto flex justify-center  items-center'>
                <img src="/svg/404.png" alt="" />
            </div>
            <div>
              <p className='xl:text-5xl md:text-4xl text-2xl text-center mt-[40px] font-extrabold'>There's Nothing here...</p>
            </div>
            <div className='flex justify-center md:mt-[50px] mt-[20px] '>
              <Link href="/">
              <button className='bg-black text-white p-4 font-bold text-[12px] rounded-xl'>
                GO TO BACK
              </button>
              </Link>
            </div>

        </div>
    </div>
  )
}

export default index