import { Input } from "postcss";
import React from "react";
import { useState } from "react";
import InputField from "../common/inputField";
import Selectoption from "../common/Selectoption";

function User() {
  const fields = {
    name: "",
    lastname: "",
    displayName: "",
    email: "",
    password: "",
    newpassword: "",
    repeatpassword: "",
  };
  const [formvalues, setFormvalues] = useState(fields);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormvalues({ ...formvalues, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    validate(formvalues);
  };
  const validate = (values) => {
    const error = {};
    if (!values.name) {
      error.name = "Name is Required*";
    }
    if (!values.lastname) {
      error.lastname = "Last Name is Required*";
    }
    if (!values.email) {
      error.email = "Email is Required";
    }
    if (!values.password) {
      error.password = "password is Required*";
    }
    if (!values.newpassword) {
      error.newpassword = "New Password is Required*";
    }
    if (!values.repeatpassword) {
      error.repeatpassword = "Repeat Password is Required ";
    }
    if (Object.keys(error).length > 0) {
      setErrors(error);
    } else {
      if (values.newpassword === values.repeatpassword) {
        console.log(formvalues);
        setFormvalues(fields);
        setErrors({repeatpassword:""})
      } else {
        setErrors({repeatpassword:"Password and Confirm Password must be same"});
      }
    }
  };

  return (
    <div className="2xl:w-[65%] w-[90%] m-auto ">
      <div className=" p-5 mt-[30px]">
        <div className="flex justify-center md:flex-row flex-col gap-12">
          <div className="flex flex-col gap-12 items-center mt-[100px]">
            <div className="  ">
              <img
                className="m-auto w-[150px] rounded-full "
                src="/svg/userimage.svg"
                alt=""
              />
            </div>
            <div>
              <div className="flex justify-center ">
                <button className="bg-black border text-white px-8  py-2 text-[12px] font-bold rounded-lg md:mt-[30px]">
                  CHANGE PROFILE IMAGE
                </button>
              </div>
              <div className="flex items-center   rounded-lg justify-center gap-2 mt-[20px]">
                <div className="border-red-500 border px-4 rounded-lg flex gap-2 items-center">
                  <div>
                    <img src="/svg/delete.svg" alt="" />
                  </div>
                  <div>
                    <button className="py-2    text-[12px] font-bold ">
                      REMOVE PROFILE IMAGE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mt-[10px] text-[12px]  flex items-center gap-2"></div>
            <p className="text-[20px] mt-[2rem] font-bold uppercase">
              Account Details
            </p>

            <div className="flex  justify-between gap-4">
              <div className="w-full">
                <input
                  placeholder="First Name"
                  className=" w-full py-[10px] mt-[20px] border border-gray-700  rounded-md p-2 outline-none "
                  onChange={handleChange}
                  name="name"
                  value={formvalues.name}
                />
                <p className="text-red-600">{errors.name}</p>
              </div>
              <div className="w-[100%]">
                <input
                  placeholder="Last Name"
                  className="w-full py-[10px] mt-[20px] border border-gray-700  rounded-md p-2 outline-none"
                  onChange={handleChange}
                  name="lastname"
                  value={formvalues.lastname}
                />
                <p className="text-red-600">{errors.lastname}</p>
              </div>
            </div>

            <input
              placeholder="Display Name"
              className="w-full py-[10px] mt-[10px] border border-gray-700 rounded-md p-2 outline-none"
              onChange={handleChange}
              name="displayName"
              value={formvalues.displayName}
            />
            <input
              placeholder="Email Address"
              className="w-full py-[10px] mt-[10px] border border-gray-700 rounded-md p-2 outline-none"
              onChange={handleChange}
              name="email"
              value={formvalues.email}
            />
            <p className="text-red-600">{errors.email}</p>

            {/* PASSWORD */}
            <p className="text-[20px] mt-[2rem] font-bold uppercase">
              PASSWORD CHANGE
            </p>

            <div className="w-full">
              <p className="text-[11px]  mt-[10px]">Current Password</p>
              <input
                placeholder="Type Current Password...."
                className=" w-full outline-none py-[10px] border border-gray-700 rounded-md p-2"
                onChange={handleChange}
                name="password"
                value={formvalues.password}
              />
              <p className="text-red-600">{errors.password}</p>
            </div>

            <div className="w-full">
              <p className="text-[11px] mt-[10px]">New Password</p>
              <input
                placeholder="Type New Password...."
                className=" w-full outline-none py-[10px]  border border-gray-700 rounded-md p-2"
                onChange={handleChange}
                name="newpassword"
                value={formvalues.newpassword}
              />
              <p className="text-red-600">{errors.newpassword}</p>
            </div>

            <div className="w-full">
              <p className="text-[11px] mt-[10px] ">Confirm Password</p>
              <input
                // type="password"
                placeholder="Type Confirm Password...."
                className=" w-full outline-none py-[10px] border border-gray-700 rounded-md p-2"
                onChange={handleChange}
                name="repeatpassword"
                value={formvalues.repeatpassword}
              />
              <p className="text-red-600">{errors.repeatpassword}</p>
            </div>
            <div className="flex justify-center mt-[2rem] pb-[2rem] ">
              <div className="flex bg-[black] text-white justify-center items-center rounded-md shadow-lg px-6 py-2 gap-2">
                <div>
                  <button
                    className="  rounded-md text-white font-semibold text-[14px]"
                    type="submit"
                  >
                    UPDATE
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

export default User;
