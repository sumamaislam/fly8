// import React, { Component } from "react";
// import Slider from "react-slick";

// export default class SimpleSlider extends Component {
//   render() {
//     const settings = {
//       dots: true,
//       infinite: true,
//       speed: 3000,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       autoplay:true,
 
//     };
//     return (
//       <div className="lg:mt-[150px] md:mt-[160px] sm:mt-[80px] mt-[70px]  w-[86%] md:w-[95%] m-auto">
//         {/* <h2> Single Item</h2> */}
//         <Slider {...settings}>
//           <div>
//           <img src="/images/1.jpg" alt="" />
//           </div>
//           <div>
//           <img src="/images/2.jpg" alt="" />
//           </div>
//           <div>
//           <img src="/images/3.jpg" alt="" />
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }
import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
export default function Banner() {
  return (
    <div className="lg:mt-[150px] md:mt-[160px] sm:mt-[80px] mt-[70px]  ">
    <Carousel transitionTime verticalSwipe autoPlay infiniteLoop>

                <div>
                <img src="/images/1.jpg" alt="" />
                   
                </div>
                <div>
                <img src="/images/2.jpg" alt="" />
       
                </div>
                <div>
                <img src="/images/3.jpg" alt="" />
             
                </div>
            </Carousel>
            </div>
  )
}
