import React, { useState } from 'react'
import { accordion } from '../../data'

export default function Acordion() {
    const [show, setShow] = useState(true   );
  return (
    <div>
       {accordion.map((items, index)=>{
        return(
            <div className='mt-[12px]'>

            <div className='flex cursor-pointer'>
                <p className='w-full p-3 bg-[#0AA085] text-white
                 font-bold '>{items.question} </p>
                <p className='bg-[#0AA085] p-3'  onClick={()=>setShow(!show)} > {show ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
 : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    } </p>
              </div>
              <div className=' transition transform ease-in-out delay-150 duration-300 '>
               {show && <p className='max-w-[700px]  text-black text-justify mt-4 '>{items.answer}</p>}
            </div>
            </div>
        )
       })}
    </div>
  )
}
