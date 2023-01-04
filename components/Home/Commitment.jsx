import React from "react";
import { useSelector } from "react-redux";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
function Commitment() {
  const { quality } = useSelector((state) => state.home);
  useEffect(() => {
    AOS.init({
      easing: "ease-in-cubic",
      once: true,
      offset: 30,
    });
  }, []);
  return (
    <div className="mt-[100px]">
      <div className="2xl:w-[65%] px-[10px] container  m-auto " >
        <p className="md:text-[30px]  text-[22px] xl:text-[40px] font-semibold text-center overflow-hidden"  data-aos="fade-down" data-aos-duration="1500">
          Our Commitment to Quality
        </p>
        <div className="md:mt-[76px]">
          <div className="md:mt-[65px] mt-[30px] flex gap-8 md:flex-row flex-col items-center md:items-start  justify-between overflow-hidden"  data-aos="fade-up" data-aos-duration="1500">
            {quality &&
              quality.data &&
              // quality.data.length > 0 &&
              quality?.data?.map((items, index) => {
                return (
                  <div className="w-[250px]" key={index}>
                    <img
                      className="w-[120px] m-auto"
                      src={items.photo}
                      alt=""
                    />
                    <p className="pt-[10px] text-[18px]  xl:text-[22px] font-bold text-center ">
                      {items.title}
                    </p>
                    <p className="pt-[10px] text-[15px]   font-medium text-[#8C389A] text-center">
                      {items.details}
                    </p>
                  </div>
                );
              })}
          </div>
        </div>
        <hr className="mt-[10px]" />
      </div>
    </div>
  );
}

export default Commitment;
