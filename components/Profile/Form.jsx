import React from "react";
import InputField from "../common/inputField";
import Selectoption from "../common/Selectoption";
import CountrySelect from "../common/CountrySelect";
import StateSelect from "../common/StateSelect";
import { useState } from "react";

function Form() {
  const fields = {};
  const [formData, setFormData] = useState({});
  const [formError, setFormError] = useState({});
  const [field, setFiled] = useState(fields);
  const [filedError, setFiledError] = useState({});

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
      error.first_name = "Enter a first name*";
    }
    if (!data.last_name) {
      error.last_name = "Enter a last name*";
    }
    if (!data.country) {
      error.country = "Select country*";
    }
    if (!data.street_address) {
      error.street_address = "Enter Street Address*";
    }
    if (!data.state) {
      error.state = "Select a state*";
    }
    if (!data.zip_code) {
      error.zip_code = "Enter a PIN code*";
    }
    if (!data.phone) {
      error.phone = "Enter a phone number to use this delivery method*";
    }
    if (!data.town) {
      error.town = "select Town*";
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

  const handleChanged = (e) => {
    setFiled({ ...field, [e.target.name]: e.target.value });
    console.log(field);
  };
  const handleSubmited = (e) => {
    e.preventDefault();
    validates(field);
  };
  const validates = (values) => {
    const error = {};
    if (!values.firstname) {
      error.firstname = "Enter a first name*";
    }
    if (!values.lastname) {
      error.lastname = "Enter a last name*";
    }
    if (!values.country) {
      error.country = "Select country*";
    }
    if (!error.streetaddress) {
      error.streetaddress = "Enter Street Address*";
    }
    if (!error.state) {
      error.state = "Select a state*";
    }
    if (!error.zipcode) {
      error.zipcode = "Enter a PIN code*";
    }
    if (!error.city) {
      error.city = "select Town*";
    }
    if (!error.phone) {
      error.phone = "Enter a phone number to use this delivery method*";
    }
    if (Object.keys(error).length > 0) {
      setFiledError(error);
    }

    console.log(error);
  };
  return (
    <div className="2xl:w-[65%] w-[90%] m-auto">
      <div className="border p-5 mt-[30px]">
        <div className="flex justify-between  md:gap-12 md:flex-row flex-col ">
          <form className="2xl:w-[550px] xl:w-[500px]" onSubmit={handleSubmit}>
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
                <p className="text-red-500">{formError.first_name}</p>
              </div>
              <div className="w-[100%]">
                <InputField
                  placeholder="Last Name"
                  className="w-full py-[10px] mt-[20px] border border-gray-700  rounded-md p-2 outline-none"
                  name="last_name"
                  value={formData.last_name || ""}
                  onChange={handleChange}
                />
                <p className="text-red-500">{formError.last_name}</p>
              </div>
            </div>

            <InputField
              placeholder="Company (optional)"
              className="w-full py-[10px] mt-[10px] border border-gray-700 rounded-md p-2 outline-none"
              name="company"
              value={formData.company || ""}
              onChange={handleChange}
            />
            <p className="text-red-500">{formError.company}</p>

            <InputField
              placeholder="Street Address"
              className="w-full py-[10px] mt-[10px] border border-gray-700 rounded-md p-2 outline-none"
              name="street_address"
              value={formData.street_address || ""}
              onChange={handleChange}
            />
            <p className="text-red-500">{formError.street_address}</p>

            <div className="w-[100%]  mt-[10px]">
              <Selectoption
                className="border border-black outline-none w-full  p-3  rounded-lg "
                name="country"
                value={formData.country || ""}
                onChange={handleCountryChange}
              />
              <p className="text-red-500">{formError.country}</p>
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
                <p className="text-red-500">{formError.zip_code}</p>
              </div>
              <div className="w-full">
                {/* <StateSelect
                  className="w-full outline-none"
                  blankOptionLabel=""
                  defaultOptionLabel=" State"
                  onChange={handleStateChange}
                  name=""
                  value={formData.state || ""}
                  label=""
                  country={formData.country}
                  disabled={formData.country ? false : true}
                /> */}
                <InputField
                  placeholder="State "
                  className=" w-full outline-none py-[10px] mt-[10px] border border-gray-700 rounded-md p-2"
                  name="state"
                  value={formData.state || ""}
                  onChange={handleChange}
                />
                <p className="text-red-500">{formError.state}</p>
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
              <p className="text-red-500">{formError.town}</p>
            </div>
            <div className="w-full">
              <InputField
                placeholder="Phone "
                className=" w-full outline-none py-[10px] mt-[10px] border border-gray-700 rounded-md p-2"
                name="phone"
                value={formData.phone || ""}
                onChange={handleChange}
              />
              <p className="text-red-500">{formError.phone}</p>
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
          <form
            className="2xl:w-[550px] xl:w-[500px]"
            onSubmit={handleSubmited}
          >
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
                  name="firstname"
                  value={field.firstname}
                  onChange={handleChanged}
                  className=" w-full py-[10px] mt-[20px] border border-gray-700 rounded-md p-2 outline-none"
                />
                <p className="text-red-500">{filedError.firstname}</p>
              </div>
              <div className="w-[100%]">
                <InputField
                  placeholder="Last Name"
                  name="lastname"
                  value={field.lastname}
                  className="w-full py-[10px] mt-[20px] border border-gray-700  rounded-md p-2 outline-none"
                  onChange={handleChanged}
                />
                <p className="text-red-500">{filedError.lastname}</p>
              </div>
            </div>

            <InputField
              placeholder="Company (optional)"
              name="company"
              value={field.company}
              className="w-full py-[10px] mt-[10px] border border-gray-700 rounded-md p-2 outline-none"
              onChange={handleChanged}
            />
            <p className="text-red-500">{filedError.company}</p>
            <InputField
              placeholder="Street Address"
              name="streetaddress"
              value={field.streetaddress}
              className="w-full py-[10px] mt-[10px] border border-gray-700 rounded-md p-2 outline-none"
              onChange={handleChanged}
            />
            <p className="text-red-500">{filedError.streetaddress}</p>
            <div className="">
              <Selectoption
                className=" w-full outline-none  border mt-[10px] rounded-lg border-black pl-2 py-3"
                name="country"
                value={field.country}
                onChange={handleChanged}
              />
              <p className="text-red-500">{filedError.country}</p>
            </div>

            <div className="flex  justify-between gap-4">
              <div className="w-full">
                <InputField
                  placeholder="Zip Code"
                  className=" w-full outline-none py-[10px] mt-[10px] border border-gray-700 rounded-md p-2"
                  name="zipcode"
                  onChange={handleChanged}
                  value={field.zipcode}
                />
                <p className="text-red-500">{filedError.zipcode}</p>
              </div>
              <div className="w-full ">
                {/* <StateSelect
                  className="w-full outline-none"
                  blankOptionLabel=""
                  // defaultOptionLabel=" State"
                  name="state"
                  onChange={handleChanged}
                  value={field.state}
                /> */}
                <InputField
                  placeholder="State"
                  className=" w-full outline-none py-[10px] mt-[10px] border border-gray-700 rounded-md p-2"
                  name="state"
                  onChange={handleChanged}
                  value={field.state}
                />
                <p className="text-red-500">{filedError.state}</p>
              </div>
            </div>
            <div className="w-full">
              <InputField
                placeholder="Town/City "
                name="city"
                value={field.city}
                onChange={handleChanged}
                className=" w-full outline-none py-[10px] mt-[10px] border border-gray-700 rounded-md p-2"
              />
              <p className="text-red-500">{filedError.city}</p>
            </div>
            <div className="w-full">
              <InputField
                placeholder="Phone "
                name="phone"
                value={field.phone}
                onChange={handleChanged}
                className=" w-full outline-none py-[10px] mt-[10px] border border-gray-700 rounded-md p-2"
              />
              <p className="text-red-500">{filedError.phone}</p>
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
