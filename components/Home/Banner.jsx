import React from "react";
import { useSelector } from "react-redux";

function Banner() {

  const { image } = useSelector((state)=>state.home)
  
  return (
    <div className="">
      {image && image?.data?.map((items ,index) => {
        return <img className="h-[100vh] w-full " key={index} src={items.image} alt="" />;
        // <p>{items.body}</p>
      })}
    </div>
  );
}

export default Banner;
