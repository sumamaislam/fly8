import React from 'react'

function Selectoption({props}) {
  return (
    <div className='text-gray-500'>

   <select  className="w-full py-3 mt-[1rem] border border-gray-700 rounded-md p-2 outline-none"  name="" id="" {...props}>
    <option  value="">PAKISTAN</option>
    <option   value="">USA</option>
    <option   value="">UAE</option>
    <option   value="">UK</option>
    
   </select>
    </div>
  )
}

export default Selectoption