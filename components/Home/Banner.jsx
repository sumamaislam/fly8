import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function Banner() {
  const [image , setImage]=useState([])
  const  getimage= async()=>{
    const response = await fetch("http://192.168.10.11/Files/api/front/sliders")
    console.log(response)
    setImage ( await response.json()); 
       }
      
  useEffect (()=>{
    getimage();
},[])
  return (
    <div className=''>
    {image.map((items)=>{

       <img className='h-[100vh] w-full ' src={items.image} alt="" />
      // <p>{items.body}</p>
    })}
    </div>
  )
}

export default Banner
