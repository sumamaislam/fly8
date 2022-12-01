import React from "react";

const Product = () => {
  return (
    <div className="my-[100px]">
      <div className="container m-auto">
        <div>
          <h1 className="text-center text-2xl pt-[30px] md:text-4xl font-bold text-[#0AA085] md:pt-[100px]">
            COMMING SOON
          </h1>
        </div>
        <div className=" md:my-[100px]  my-[30px] flex flex-col lg:flex-row w-[100%] gap-4  ">
          <div className='w-[100%] bg-red-300 bg-[url("/product/6.jpg")] bg-cover lg:min-h-[450px] h-[400px]'>
            <div className=" py-[50px]  ml-[20px] md:ml-[40px] text-white">
              <p className="text-2xl md:text-4xl  font-bold ">E JUICE</p>
              <p className="text-[15px] mt-[5px]">INDULGE IN THE TRUES</p>
              <div className="mt-[15px]">
                <button className="px-4 py-2 outline-1 bg-[#0AA085] text-white text-[14px]">
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>
          <div className=' w-[100%] bg-red-300 bg-[url("/product/2.jpg")] bg-cover lg:min-h-[450px] h-[400px]'>
            <div className=" py-[50px]  ml-[20px] md:ml-[40px] text-white">
              <p className="text-2xl md:text-4xl font-bold">DISPOSEABLE </p>
              <p className="text-[15px] mt-[5px]">
                MOUTH WATERING FLAVOURS IN DISPOSABLE VAPE DEVICES{" "}
              </p>
              <div className="mt-[15px]">
                <button className="px-4 py-2 outline-1 bg-[#0AA085] text-white text-[14px]">
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>
          <div className=' w-[100%]  bg-red-300 bg-[url("/product/6.jpg")] bg-cover lg:min-h-[450px] h-[400px]'>
            <div className=" py-[50px]  ml-[20px] md:ml-[40px] text-white">
              <p className="text-2xl md:text-4xl font-bold">ACCESSORIES </p>
              <p className="text-[15px] mt-[5px]">
                VAPE ACCESSORIES MADE PERFECT{" "}
              </p>
              <div className="mt-[15px]">
                <button className="px-4 py-2 outline-1 bg-[#0AA085] text-white text-[14px]">
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
