import React from "react";
import { useState } from "react";

function Subscription() {
  const [offers, setOffers] = useState(false);
  return (
    <div className="container px-10 m-auto ">
      <div className="text-2xl font-bold tetx-black text-center mt-[60px] text-red-600">
        <p>SUBSCRIBED PRODUCTS</p>
      </div>
      
      <div className="flex gap-12 justify-center mt-[50px]">
        <div className="">
          <img className="w-[150px] border" src="/images/p1.jpeg" alt="" />
        </div>
        <div className="">
          {/* 1 */}
          <div className="flex gap-12">
            <div>
              <p className="font-normal text-[18px]">
                BEST FALAVOR OF THE DELTA-9O HIGH POTENCY VAPE WITH 2 PACK COMBO
              </p>
            </div>
            <div>
              <p className="text-[16px] font-bold">
                Billing : <span className="text-red-600">$34.56</span>
              </p>
            </div>
          </div>
          {/* 2 */}
          <div className="flex justify-between mt-6">
            <div className="flex   justify-between ">
              <div className=" border rounded-md bg-[#CEF1CD]">
                <div className="flex justify-between gap-[174px] w-full h-[55px]  px-2 items-center  rounded-md ">
                  <div className="flex gap-3">
                    <div className="flex items-center">
                      <input
                        id="country-option-1"
                        type="radio"
                        checked={offers}
                        value="USA"
                        className="h-4 w-4 border-gray-300  focus:ring-black "
                        aria-labelledby="country-option-1"
                        aria-describedby="country-option-1"
                        onClick={() => setOffers(!offers)}
                      />
                    </div>
                    <div className="uppercase">
                      <p className="md:text-[16px] text-[12px]  font-normal">
                        EVERY 2 WEEKS
                      </p>
                    </div>
                  </div>

                  <div>
                    <p className="text-[12px] md:text-[16px]  font-bold">
                      $25.55
                    </p>
                  </div>
                </div>

                {offers && (
                  <div className="px-2  pb-[15px] ">
                    <div className="flex gap-3 pt-2">
                      <div className="flex items-center">
                        <input
                          id="country-option-2"
                          type="radio"
                          value="USA"
                          className="h-4 w-4 border-gray-300  focus:ring-black "
                        />
                      </div>
                      <div className="uppercase">
                        <p className=" text-[12px] md:text-[16px]  font-normal">
                          EVERY 1 MONTH
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3 pt-2">
                      <div className="flex items-center">
                        <input
                          id="country-option-3"
                          type="radio"
                          value="USA"
                          className="h-4 w-4 border-gray-300  focus:ring-black "
                        />
                      </div>
                      <div className="uppercase">
                        <p className=" text-[12px] md:text-[16px]  font-normal">
                          EVERY 6 MONTHS
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3 pt-2">
                      <div className="flex items-center">
                        <input
                          id="country-option-4"
                          type="radio"
                          value="USA"
                          className="h-4 w-4 border-gray-300  focus:ring-black "
                        />
                      </div>
                      <div className="uppercase">
                        <p className=" text-[12px] md:text-[16px] font-normal">
                          EVERY 1 YEAR
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="flex gap-8">
              <div>
                <button className="bg-black text-white px-5 py-4 font-bold rounded-xl">
                  VIEW DETAIL
                </button>
              </div>
              <div>
                <button className="bg-red-600 text-white px-5 py-4 font-bold rounded-xl">
                  REMOVE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscription;
