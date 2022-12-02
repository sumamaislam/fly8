import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { useSelector } from "react-redux";

function Discount() {
  const [inputData, setInputData] = useState({});
  const {carts ,totalPrice} = useSelector((state)=>state.product)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputData);
    setInputData({ discount_code: "" });
  };

  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  return (
    <div className="lg:pt-[105px] md:mt-[110px] sm:mt-[110px] mt-[90px]   bg-gray-100 w-full  ">
      <div className="w-[65%] pl-[60px]">
        {carts.map((item, index) => {
          return (
            <div>
              <div className="flex justify-between  items-center ">
                <div className="flex gap-5 items-center">
                  <div className="relative ">
                    <img
                      className="w-[80px]"
                      src={item.image[0]}
                      alt=""
                    />
                    <div className="absolute top-1 right-0 px-[6px] py-[1px] rounded-full border border-1 bg-white border-black text-[10px]  text-black font-bold">
                    {item.quantity}
                    </div>
                  </div>
                  <div className="w-[300px] text-[14px] font-thin">
                    <p>
                      {item.title}
                    </p>
                  </div>
                </div>
                <div className="font-semibold text-[17px]">${item.price}</div>
              </div>
              <hr className=" border-green-700 mt-[10px]" />
            </div>
          );
        })}
        <div className=" mt-[20px] flex gap-6">
          <form onSubmit={handleSubmit}>
            <input
              className="w-[360px] p-3 rounded-md outline-none "
              type="text"
              placeholder="Gift card or discount code"
              name="discount_code"
              value={inputData.discount_code}
              onChange={handleChange}
            />

            <button
              className="w-[97px] py-3 ml-2 bg-[#369688] outline-none rounded-md text-white font-semibold disabled:opacity-25"
              type="sumbit"
              disabled={inputData?.discount_code?.length > 0 ? false : true}
            >
              Apply
            </button>
          </form>
        </div>
        <hr className=" border-green-700 mt-[20px]" />
        <div className="flex justify-between  mt-[20px]">
          <p className="text-[17px] font-thin">SubTotal</p>
          <p className="font-semibold">${totalPrice}</p>
        </div>
        <div className="flex justify-between  mt-[20px]">
          <p className="font-thin text-[17px]">Shipping</p>
          <p className="font-semibold">Free</p>
        </div>
        <hr className=" border-green-700 mt-[20px]" />

        <div className=" flex justify-between items-center mt-[20px]">
          <p className="text-[17px]">Total</p>
          <p>
            USD <span className="text-[26px]">${totalPrice}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Discount;
