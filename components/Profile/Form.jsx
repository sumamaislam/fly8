


import React from "react";
import InputField from "../common/inputField";
import Selectoption from "../common/Selectoption";
import CountrySelect from "../common/CountrySelect";
import StateSelect from "../common/StateSelect";
import { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({});
  const [formError, setFormError] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    validate(formData);
  };
  const handleCountryChange = (val) => {
    setFormData({ ...formData, country: val });
  };

  const validate = async (data) => {
    const error = {};

    if (!data.first_name) {
      error.first_name = "Enter a first name";
    }
    if (!data.last_name) {
      error.last_name = "Enter a last name";
    }
    if (!data.country) {
      error.country = "Select country";
    }
    if (!data.street_address) {
      error.street_address = "Enter Street Address";
    }
    if (!data.state) {
      error.state = "Select a state";
    }
    if (!data.zip_code) {
      error.zip_code = "Enter a PIN code";
    }
    if (!data.phone) {
      error.phone = "Enter a phone number to use this delivery method";
    }
    if (!data.town) {
      error.town = "select Town";
    }
    if (Object.keys(error).length > 0) {
      setFormError(error);
      console.log("Error", formError);
    } else {
      console.log(formData);
    }
  };

  const handleStateChange = (val) => {
    setFormData({ ...formData, state: val });
  };

  return (
    <div className="2xl:w-[65%] w-[90%] m-auto">
      <div className="border p-5 mt-[30px]">
        <div className="flex justify-between  md:gap-12 md:flex-row flex-col ">
        

        
          <form className="2xl:w-[550px] xl:w-[500px]" onSubmit={handleSubmit} >
            <div className="mt-[10px] text-[12px]  flex items-center gap-2">
              <p>
                The following address will be used on the time of CHECKOUT page
                by default.
              </p>
            </div>
            <p className="text-[20px] mt-[1rem] font-bold">Shipping Address</p>

            <div className="flex  justify-between gap-4">
              <div className="w-full">
                <InputField
                  placeholder="First Name"
                  className=" w-full py-[10px] mt-[20px] border border-gray-700 rounded-md p-2 outline-none"
                  name="first_name"
                  value={formData.first_name || ""}
                  onChange={handleChange}
                />
              </div>
              <div className="w-[100%]">
                <InputField
                  placeholder="Last Name"
                  className="w-full py-[10px] mt-[20px] border border-gray-700  rounded-md p-2 outline-none"
                  name="last_name"
                  value={formData.last_name || ""}
                  onChange={handleChange}
                />
              </div>
            </div>

            <InputField
              placeholder="Company (optional)"
              className="w-full py-[10px] mt-[10px] border border-gray-700 rounded-md p-2 outline-none"
              name="company"
              value={formData.company || ""}
              onChange={handleChange}
            />
            <InputField
              placeholder="Street Address"
              className="w-full py-[10px] mt-[10px] border border-gray-700 rounded-md p-2 outline-none"
              name="street_address"
              value={formData.street_address || ""}
              onChange={handleChange}
            />
            <div className="w-[100%]  mt-[10px]">
              <CountrySelect
                className="border border-black outline-none w-full  p-3  rounded-lg "
                name="country" 
                value={formData.country || ""}
                onChange={handleCountryChange}
              />
            </div>
            <div className="flex  justify-between gap-4">
              <div className="w-full">
                <InputField
                  placeholder="Zip Code"
                  className=" w-full outline-none py-[10px] mt-[10px] border border-gray-700 rounded-md p-2"
                  name="zip_code"
                  value={formData.zip_code || ""}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full mt-[10px] border  pt-3 rounded-lg border-black">
                <StateSelect
                  className="w-full outline-none"
                  blankOptionLabel=""
                  defaultOptionLabel=" State"
                  onChange={handleStateChange}
                  name=""
                  value={formData.state || ""}
                  label=""
                  country={formData.country}
                  disabled={formData.country ? false : true}
                />
              </div>
            </div>
            <div className="w-full">
              <InputField
                placeholder="Town/City "
                className=" w-full outline-none py-[10px] mt-[10px] border border-gray-700 rounded-md p-2"
                name="town"
                value={formData.town || ""}
                onChange={handleChange}
              />
            </div>
            <div className="w-full">
              <InputField
                placeholder="Phone "
                className=" w-full outline-none py-[10px] mt-[10px] border border-gray-700 rounded-md p-2"
                name="phone"
                value={formData.phone || ""}
                onChange={handleChange}
              />
            </div>

            <div className="flex justify-center mt-[2rem] pb-[2rem] ">
              <div className="flex bg-[black] text-white justify-center items-center rounded-md shadow-lg px-6 py-2 gap-2">
                
                <div>
                  <button
                    className="  rounded-md text-white font-semibold"
                    type="submit"
                  >
                    UPDATE SHIPPING ADDRESS
                  </button>
                </div>
              </div>
            </div>
          </form>
      
          <div className="seperator 2xl:h-[55%] xl:h-[63%] lg:h-[83%] md:h-[45%]"></div>
          <form className="2xl:w-[550px] xl:w-[500px]">
            <div className="mt-[10px] text-[12px]  flex items-center gap-2"></div>
            <p className="text-[20px] mt-[2rem] font-bold">Billing Address</p>
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

            
            <div className="w-[100%] border mt-[10px] rounded-lg border-black p-2">
              <CountrySelect
                className="border-none outline-none w-full"
                name="country"
              />
            </div>

            <div className="flex  justify-between gap-4">
              <div className="w-full">
                <InputField
                  placeholder="Zip Code"
                  className=" w-full outline-none py-[10px] mt-[10px] border border-gray-700 rounded-md p-2"
                />
              </div>
              <div className="w-full mt-[10px] border  pt-3 rounded-lg border-black">
                <StateSelect
                  className="w-full outline-none"
                  blankOptionLabel=""
                  defaultOptionLabel=" State"
                  name=""
                  label=""
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
                  <button
                    className="  rounded-md text-white font-semibold"
                    type="submit"
                  >
                 UPDATE BILLING ADDRESS
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
