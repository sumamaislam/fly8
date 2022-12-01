import React, { Component } from "react";
import Slider from "react-slick";


export default class Responsive extends Component {
    render() {
      var settings = {
        dots: false,
        infinite: true,
        speed: 3000,
        autoplaySpeed:5000,
        autoplay:true,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false
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
      <div className="my-[50px] w-[80%] m-auto ">
        <h2 className="text-center text-3xl text-[#0AA085] font-bold my-[50px]">OUR CLIENTS </h2>
        <Slider className="" {...settings}>
       

          <div className="">
           <img className="m-auto" src="/brands/1.jpg" alt="" />
          </div>
          <div className="">
          <img className="m-auto" src="/brands/2.jpg" alt="" />
          </div>
          <div className="">
          <img className="m-auto" src="/brands/3.jpg" alt="" />
          </div>
          <div className="">
          <img className="m-auto" src="/brands/4.jpg" alt="" />
          </div>
          <div className="">
          <img className="m-auto" src="/brands/5.jpg" alt="" />
          </div>
          <div className="">
          <img className="m-auto" src="/brands/6.jpg" alt="" />
          </div>
          <div className="">
          <img className="m-auto" src="/brands/7.jpg" alt="" />
          </div>
          <div className="">
          <img className="m-auto" src="/brands/8.jpg" alt="" />
          </div>
          <div className="">
          <img className="m-auto" src="/brands/9.jpg" alt="" />
          </div>
          
        </Slider>
      </div>
        <hr className="mt-[50px] border-[#D8DF21]" />      
        </> 
    );
  }
}
