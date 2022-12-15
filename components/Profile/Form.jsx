import React from 'react'
import InputField from '../common/inputField'
import Selectoption from '../common/Selectoption'

function Form() {
  return (
    <div className='2xl:w-[65%] w-[90%] m-auto'>
 <div className="border p-5 mt-[30px]">
    <div className='flex justify-between gap-12 md:flex-row flex-col'>

   
              <form>
                
                <div className="mt-[10px] text-[12px]  flex items-center gap-2">
                  
                  <p>The following address will be used on the time of CHECKOUT page by default.</p>
                </div>
                <p className="text-[20px] mt-[1rem] font-bold">
                  Shipping Address
                </p>

                <div className="flex  justify-between gap-4">
                  <div className="w-full">
                    <InputField
                      placeholder="First Name"
                      className=" w-full py-[10px] mt-[20px] border border-gray-700 rounded-md p-2 outline-none"
                    />
                  </div>
                  <div className="w-[100%]">
                    <InputField
                      placeholder="Last Name"
                      className="w-full py-[10px] mt-[20px] border border-gray-700  rounded-md p-2 outline-none"
                    />
                  </div>
                </div>

                <InputField
                  placeholder="Company (optional)"
                  className="w-full py-[10px] mt-[10px] border border-gray-700 rounded-md p-2 outline-none"
                />
                <InputField
                  placeholder="Street Address"
                  className="w-full py-[10px] mt-[10px] border border-gray-700 rounded-md p-2 outline-none"
                />

                <div className="flex  justify-between gap-4">
                  <div className="w-[100%]">
                    <Selectoption className="w-full  mt-[10px] border  border-gray-700 rounded-md p-2" />
                  </div>
                  <div className="w-full">
                    <InputField
                      placeholder="Zip Code"
                      className=" w-full outline-none py-[10px] mt-[10px] border border-gray-700 rounded-md p-2"
                    />
                  </div>
                  <div className="w-full">
                    <InputField
                      placeholder="State"
                      className=" w-full outline-none py-[10px] mt-[10px] border border-gray-700 rounded-md p-2"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <InputField
                    placeholder="Town/City "
                    className=" w-full outline-none py-[10px] mt-[10px] border border-gray-700 rounded-md p-2"
                  />
                </div>
                <div className="w-full">
                  <InputField
                    placeholder="Phone "
                    className=" w-full outline-none py-[10px] mt-[10px] border border-gray-700 rounded-md p-2"
                  />
                </div>
              
                <div className="flex justify-center mt-[2rem] pb-[2rem] ">
                  <div className="flex bg-[black] text-white justify-center items-center rounded-md shadow-lg px-6 py-2 gap-2">
                    <div>
                      <img src="/svg/cart2.svg" alt="cart" />
                    </div>
                    <div>
                      <button
                        className="  rounded-md text-white font-semibold"
                        type="submit" 
                      >
                        Continue Shipping
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              <div class="seperator 2xl:h-[55%] xl:h-[63%] lg:h-[83%] md:h-[45%]"></div>
              <form>
                
                <div className="mt-[10px] text-[12px]  flex items-center gap-2">
                  
                  
                </div>
                <p className="text-[20px] mt-[2rem] font-bold">
                  Billing Address
                </p>
                <div className="mt-[10px] text-[12px] text-[#2D80CD] flex items-center gap-2">
                  <div>
                    <input className="mt-1" type="checkbox" name="" id="" />
                  </div>
                  <p>Same as Shipping address</p>
                </div>
                <div className="flex  justify-between gap-4">
                  <div className="w-full">
                    <InputField
                      placeholder="First Name"
                      className=" w-full py-[10px] mt-[20px] border border-gray-700 rounded-md p-2 outline-none"
                    />
                  </div>
                  <div className="w-[100%]">
                    <InputField
                      placeholder="Last Name"
                      className="w-full py-[10px] mt-[20px] border border-gray-700  rounded-md p-2 outline-none"
                    />
                  </div>
                </div>

                <InputField
                  placeholder="Company (optional)"
                  className="w-full py-[10px] mt-[10px] border border-gray-700 rounded-md p-2 outline-none"
                />
                <InputField
                  placeholder="Street Address"
                  className="w-full py-[10px] mt-[10px] border border-gray-700 rounded-md p-2 outline-none"
                />

                <div className="flex  justify-between gap-4">
                  <div className="w-[100%]">
                    <Selectoption className="w-full  mt-[10px] border  border-gray-700 rounded-md p-2" />
                  </div>
                  <div className="w-full">
                    <InputField
                      placeholder="Zip Code"
                      className=" w-full outline-none py-[10px] mt-[10px] border border-gray-700 rounded-md p-2"
                    />
                  </div>
                  <div className="w-full">
                    <InputField
                      placeholder="State"
                      className=" w-full outline-none py-[10px] mt-[10px] border border-gray-700 rounded-md p-2"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <InputField
                    placeholder="Town/City "
                    className=" w-full outline-none py-[10px] mt-[10px] border border-gray-700 rounded-md p-2"
                  />
                </div>
                <div className="w-full">
                  <InputField
                    placeholder="Phone "
                    className=" w-full outline-none py-[10px] mt-[10px] border border-gray-700 rounded-md p-2"
                  />
                </div>
                
                <div className="flex justify-center mt-[2rem] pb-[2rem] ">
                  <div className="flex bg-[black] text-white justify-center items-center rounded-md shadow-lg px-6 py-2 gap-2">
                    <div>
                      <img src="/svg/cart2.svg" alt="cart" />
                    </div>
                    <div >
                      <button
                        className="  rounded-md text-white font-semibold"
                        type="submit" 
                      >
                        Continue Shipping
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              </div>
            </div>
    </div>
  )
}

export default Form