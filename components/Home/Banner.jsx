import React from "react";
import { useSelector } from "react-redux";

function Banner() {

  const { image } = useSelector((state)=>state.home)
  console.log("image",image)
  
  return (
    <div className="">
      {/* {image && image?.data?.slice(0,1).map((items ,index) => { */}
        {/* return */}
         <img className="lg:hidden w-full " src={image?.data[0]?.image} alt="" />
         <img className=" hidden  lg:block md:h-[100vh] w-full " src={image?.data[1]?.image} alt="" />
         {/* <img className="  md:h-[100vh] w-full " src={image?.data?.image[1]} alt="" /> */}
      {/* })} */}
    </div>
  );
}

export default Banner;
