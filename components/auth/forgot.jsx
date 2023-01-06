import Link from "next/link";
import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import RequestMessage from "../common/RequestMessage";
import { forgotPassword } from "../../redux/auth";
import { useDispatch } from "react-redux";

function ForgotPassword() {
  const [forgotData, setForgotData] = useState({});
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setForgotData({...forgotData,[e.target.name]:e.target.value})
  };
  const handleSubmit = (e) => {
   e.preventDefault();
   if (forgotData.password === forgotData.confirm_password){
     console.log(forgotData)
     setForgotData({
        password: "",
        confirm_password: ""
     })
    //  dispatch(forgotPassword(forgotData))
   }else{
    toast(<RequestMessage message="Password and Confirm Password must be same" />, {
        autoClose: 8000,
      });
   }
  } 

  return (
    <div>
      <div className="bg-[url('/profile/2.jpg')] bg-cover ">
        <div className="pt-[130px] pb-[50px]">
          <p className="text-center text-white text-[30px] font-bold">
            Forgot Password
          </p>
        </div>
      </div>
      <div className="container m-auto w-[550px] max-w-full my-[100px]">
        <form className="" onSubmit={handleSubmit}>
          <h1 className="font-semibold text-[25px] mb-[30px]">
            CREATE PASSWORD
          </h1>
          <p className="font-medium text-[13px]">
            Your email with FLY8 has been verified. Set your new password.
          </p>
          <input
            placeholder="Type New Password"
            className=" w-full py-[10px] mt-[20px] border border-gray-700  rounded-md p-2 outline-none "
              onChange={handleChange}
            name="password"
            type="password"
              value={forgotData.password}
          />
          <p className="font-medium text-[10px] mt-[3px] ml-[8px]">
            Must be at least 8 characters strong
          </p>
          <input
            placeholder="Confirm Password"
            className=" w-full py-[10px] mt-[20px] border border-gray-700  rounded-md p-2 outline-none "
              onChange={handleChange}
            name="confirm_password"
            type="password"
              value={forgotData.confirm_password}
          />
          {/* <div className="flex items-center mt-[16px] ml-[20px]">
            <input
              id="country-option-1"
              type="radio"
              // checked={offers}
              value="USA"
              className="h-[12px] w-[12px] border-gray-300  focus:ring-black "
              aria-labelledby="country-option-1"
              aria-describedby="country-option-1"
            //   onClick={() => setOffers(!offers)}
            />
            <p className="font-medium text-[10px] mt-[3px] ml-[8px]">
              I agree with to Fly8’s{" "}
              <Link className="" href="/">
                Privacy Policy{" "}
              </Link>{" "}
              and Terms Of Services
            </p>
          </div> */}
          <div className="mt-[30px]">
            <button className="bg-black w-full md:text-[16px] text-[10px]  text-white px-5 py-2 font-bold rounded-md" type="password">
              CHANGE PASSWORD
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
