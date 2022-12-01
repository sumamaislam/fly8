import React, { Component } from "react";
import Slider from "react-slick";
import { categories } from "../../data";
import Raiting from "./Raiting";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 3000,
      autoplaySpeed:5000,
      autoplay:true,
      slidesToShow: 6,
      slidesToScroll: 6,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <>
      <div className=" md:w-[90%] w-[85%]  md:container  m-auto my-[50px]">
        <div className="my-[50px]">

        <h2 className="text-center text-4xl font-bold text-[#0AA085]">TOP SELLERS</h2>
        <Slider {...settings}>
            {categories.map((items, index)=>{
              return( 
                <div className="flex items-center py-[100px]" key={index}>

                <div >
                    <img  className="w-[95%] m-auto flex justify-center" src={items.image}  alt="" />
                    <p className="text-center text-[12px]">{items.brand}</p>
                    <p className="text-center font-semibold">{items.name}</p>
                    <p className="text-center font-bold">{items.price}</p>
                    <div className="flex justify-center">

                    <Raiting/>
                    </div>
                    
                   </div>
                 
               </div>
               
               )
              })}
        </Slider>
        <div className="flex justify-center ">

        {/* <div className="flex justify-center ">
            <button className="inline-flex items-center px-16 py-2 text-sm font-medium text-center text-black outline outline-[#0AA085] outline-2   hover:bg-[#0AA085] hover:text-black ">
              View More
             <svg
                      aria-hidden="true"
                      className="w-4 h-4 ml-2 -mr-1 "
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                        ></path>
                    </svg> 
            </button>
          </div> */}
        </div>
                </div>
      </div>
        <hr className=" border-[#D8DF21]" />
                        </>
    );
  }
}