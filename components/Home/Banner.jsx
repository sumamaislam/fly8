// import React from 'react'
// import { useEffect } from 'react'
// import { useState } from 'react'
// // import axios from 'axios';
// function Banner() {
//   const [image , setImage]=useState([])
//   const  getimage= async()=>{
//     const responses = await fetch("http://192.168.10.11/Files/api/sliders")
//     .then(function (response) {
//         setImage(response.data);
//         console.log(response.data);

//       });
  
//        }
//   // const getImage = async () => axios.get('http://192.168.10.11/Files/api/sliders')
//   // .then(function (response) {
//   //   setImage(response.data);
//   // })
//   // .catch(function (error) {
//   //   console.log(error);
//   // })
//   useEffect (()=>{
//     getimage();
// },[])
//   return (
//     <div className=''>
//     {image?.data?.map((items)=>{

//        <img className='h-[100vh] w-full ' src={items.image} alt="" />
//       // <p>{items.body}</p>
//     })}
//     </div>
//   )
// }

// export default Banner
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function Banner() {
  const [image , setImage]=useState([])
  const  getimage= async()=>{
    const response = await fetch("http://192.168.10.11/Files/api/sliders")
    setImage ( await response.json()); 
  }
  
  console.log(image.data)
  useEffect (()=>{
    getimage();
},[])
  return (
    <div className=''>
    {image?.data?.map((items)=>{
return(

  <img className='h-[100vh] w-full ' src={items.image} alt="" />
  )
  // <p>{items.body}</p>
    })}
    </div>
  )
}

export default Banner