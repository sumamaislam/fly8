import React from 'react';

function InputField({label ,...props}) {

  return (
    <div className="text-gray-500">
        {/* <label className='' >{label}</label> */}
        <input className='outline-none' {...props}/>

    </div>
  )
}
export default InputField