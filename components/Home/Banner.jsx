import React from "react";
import { useSelector } from "react-redux";

function Banner() {

  const { image } = useSelector((state)=>state.home)
  console.log("image",image)
  
  return (
    <div className="">
      {/* {image && image?.data?.slice(0,1).map((items ,index) => { */}
        {/* return */}
         <img className="lg:hidden w-full " src={image && image.data && image.data.length > 0 && image?.data[0]?.image} alt="" />
         {/* <img className=" hidden  lg:block " src={image && image.data && image.data.length > 0 && image?.data[1]?.image} alt="" /> */}
         <div className="bg-[url('/banner/1.jpg')] h-[100vh] hidden  lg:block bg-no-repeat bg-cover bg-center">
          <div className="flex xl:w-[230px] w-[170px] m-auto justify-center pt-[150px] xl:pt-[200px]">
            <img src={image && image.data && image.data.length > 0 && image?.data[2]?.image} alt="" />
          </div>
          <div className="flex justify-center gap-8 ">

<div className="xl:pt-[100px] pt-[50px]">
  <img className="" src={image && image.data && image.data.length > 0 && image.data[4].image} alt="" />
</div>
<div className="xl:pt-[100px] pt-[50px]">
  <img className=""src={image && image.data && image.data.length > 0 && image.data[3].image} alt="" />
</div>
          </div>
         </div>
         
         {/* <img className="  md:h-[100vh] w-full " src={image?.data?.image[1]} alt="" /> */}
      {/* })} */}
    </div>
  );
}

export default Banner;
