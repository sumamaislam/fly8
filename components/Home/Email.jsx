import React from "react";
import { useRef } from "react";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";
import RequestMessage from "../common/RequestMessage";


function Email() {
  
  const [emailData, setEmailData] = useState({});
  const ref = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailData.email){
    }else{
     console.log(emailData)
     emailjs.sendForm("service_ojeihpn", "template_f4lia6n", ref.current, "tRRATwKkMHYiurDaS")
     .then((result) => {
       console.log(result.text);
       toast(<RequestMessage message="Subscription Added" />, {
         autoClose: 8000,
       });
       setEmailData({email: ""});
     }, (error) => {
       console.log(error.text);
       alert("error")
     });
    }
  }

  const handleChange = (e) => {
    setEmailData({...emailData,[e.target.name]:e.target.value})
  }

  return (
    <div className="mt-[109px]">
      <div className="2xl:w-[65%] px-[10px] container  m-auto overflow-hidden">
        <div className="flex md:gap-[59px]  justify-center items-center ">
          <div>
            <img
              className="w-[300px] mt-[20px] hidden md:block"
              src="/brands/email.png"
              alt=""
            />
          </div>
          <div>
            <p className="xl:text-[40px] md:text-[30px] text-[20px] text-center md:text-left uppercase">
              Get <span className="font-bold">50%</span> Discount on your first
              order{" "}
            </p>
            <p className="text-[20px] pt-[28px] font-medium text-center md:text-left">
              Sign up to take this offer
            </p>
            <form ref={ref} onSubmit={handleSubmit} className="flex gap-1 mt-[30px] justify-center flex-col md:flex-row ">
              <div className="flex justify-center md:justify-start">
                <input
                  className=" 2xl:w-[700px] md:w-[500px] w-[250px]   h-[48px] md:rounded-tl-[10px] md:rounded-bl-[10px] outline-1 pl-4 outline-black outline"
                  placeholder="E-Mail Address"
                  type="text"
                  name="email"
                  value={emailData.email}
                  onChange={handleChange}
                />
              </div>
              <div className=" flex justify-center md:justify-start mt-[20px] md:mt-[0px]">
                <button className=" text-[10px] mt-[-1px] py-[17px] px-6 bg-black text-white md:rounded-tr-[10px] md:rounded-br-[10px] ">
                  SUBSCRIBE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Email;
