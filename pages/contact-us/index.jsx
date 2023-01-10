import Link from "next/link";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { Footer, Header } from "../../components/common";
import RequestMessage from "../../components/common/RequestMessage";
import { footerDataRequest, navDataRequest } from "../../redux/home";
import { wrapper } from "../../store";
import emailjs from '@emailjs/browser';
import { useRef } from "react";

function ContactUs() {
  const fields = { name: "", email: "", message: "" };
  const [inputField, setInputFields] = useState(fields);
  const [errors, setErrors] = useState({});
  const ref = useRef();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputFields({ ...inputField, [name]: value });
    // console.log(inputField);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    validate(inputField);
  };
  const validate = (values) => {
    const error = {};
    if (!values.name) {
      error.name = "Name is Required *";
    }
    if (!values.email) {
      error.email = "Email is Required *";
    }
    if (!values.message) {
      error.message = "Message is Required *";
    }
    // if (Object.Keys(error).length > 0){
    //   setErrors(error);
    // }
    if (Object.keys(error).length > 0) {
      setErrors(error);
      console.log(error)
    } else {
      setErrors(fields);
      console.log(values);
      setInputFields(fields);
      emailjs.sendForm("service_ojeihpn", "template_1z1s2hr", ref.current, "tRRATwKkMHYiurDaS")
        .then((result) => {
          console.log(result.text);
          toast(<RequestMessage message="Message Sent Successfully" />, {
            autoClose: 8000,
          });
        }, (error) => {
          console.log(error.text);
          alert("error")
        });
      //         EmailJS_SERVICE_ID=service_ojeihpn
      // EmailJS_TEMPLATE_ID=template_1z1s2hr
      // EmailJS_PUBLIC_KEY=tRRATwKkMHYiurDaS
    }
  };

  return (
    <div>
      <Header />

      <div className="container m-auto w-[95%]">
        <nav className="flex mt-[5rem] " aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link
                href="/"
                className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <div className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white">
                  Contact Us
                </div>
              </div>
            </li>
          </ol>
        </nav>
      </div>
      <div className="mt-[10px]">
        <div className="bg-[url('/profile/2.jpg')] hidden md:block h-[210px]" >
          <p className=" text-[24px] md:text-[30px] items-center h-full text-center font-bold flex justify-center text-white">
            CONTACT US
          </p>
        </div>
        <div className="bg-[url('/profile/3.jpg')] bg-center bg-no-repeat md:hidden h-[150px]">
          <p className=" text-[24px] md:text-[30px] items-center h-full text-center font-bold flex justify-center text-white">
            CONTACT US
          </p>
        </div>

      </div>
      <div className="container m-auto w-[95%] ">
        <div className="lg:w-[80%] mt-[15px] md:mt-[50px] border m-auto flex flex-col lg:flex-row lg:rounded-[30px]  lg:shadow-lg ">
          <div className="text-[12px] md:text-[16px]  w-full py-[50px] bg-[#EDEDED]   lg:rounded-l-[30px] ">
            <p className=" 2xl:pl-[100px] md:pl-[50px] pl-[10px]">
              CONTACT WITH US
            </p>
            <p className="text-[16px] md:text-[20px] font-bold 2xl:pl-[100px] md:pl-[50px] pl-[10px]  pt-2">
              SEND US A MESSAGE
            </p>
            <form onSubmit={handleSubmit} ref={ref}>
              <div className="w-full px-[10px] md:px-[50px] 2xl:px-[100px] mt-[25px] ">
                <input
                  className="w-full outline-none border-black border py-3 rounded-lg pl-5"
                  type="text"
                  placeholder="Your Full Name"
                  name="name"
                  value={inputField.name}
                  onChange={handleChange}
                />
                <p className="text-red-500 mt-[5px] pl-2 text-[13px]">{errors.name}</p>
              </div>
              <div className="w-full   px-[10px] md:px-[50px]  2xl:px-[100px]  mt-[25px] ">
                <input
                  className="w-full outline-none border-black border py-3 rounded-lg pl-5"
                  type="email"
                  placeholder="Your Email Address"
                  name="email"
                  value={inputField.email}
                  onChange={handleChange}
                />
                <p className="text-red-500 mt-[5px] pl-2 text-[13px]">{errors.email}</p>
              </div>

              <div className="w-full  px-[10px] md:px-[50px]  2xl:px-[100px] mt-[25px]   ">
                <textarea
                  className="border border-black outline-none w-full p-3 rounded-lg "
                  name="message"
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="What you are looking for.?"
                  value={inputField.message}
                  onChange={handleChange}
                ></textarea>
                <p className="text-red-500 mt-[5px] pl-2 text-[13px]">{errors.message}</p>
              </div>
              <div className="flex justify-center mt-[30px]">
                <button className="uppercase px-10 py-3 bg-black text-white rounded-lg cursor-pointer" type="submit">
                  Submit Now
                </button>
              </div>
            </form>
          </div>
          <div className=" py-[50px] ">
            <div className="text-center lg:w-[300px] xl:w-[400px] m-auto">
              <p className="md:text-[25px] text-[20px] font-bold">
                CONTACT INFO.
              </p>
              <div>
                <p className="mt-[50px] uppercase  md:text-[18px] font-bold">
                  Address
                </p>
                <p className="text-center text-[15px] mt-[15px] max-w-[215px] m-auto ">
                  Print 24/7 LLC 3455 N Beltline Rd Suite # 103 Irving TX 75062
                </p>
              </div>
              <div>
                <p className="mt-[40px] text-center  uppercase md:text-[18px] font-bold">
                  Phone
                </p>
                <p className="text-center text-[15px] mt-[15px]  max-w-[215px] m-auto">
                  USA Office : 123-456-3456
                </p>
              </div>
              <div>
                <p className="mt-[40px]  uppercase md:text-[18px] font-bold  max-w-[215px] m-auto">
                  CUSTOMER SERVICES HOURS
                </p>
                <p className="text-center text-[15px] mt-[15px]  max-w-[215px] m-auto">
                  Mon- Fri, 24 Hours
                </p>
              </div>
              <div>
                <p className="mt-[40px]  uppercase md:text-[18px] font-bold  max-w-[215px] m-auto">
                  FOLLOW US ON
                </p>
                <div className=" mt-[15px] gap-2 flex justify-center">

                  <a href="https://www.facebook.com/" target="_blank"><img src="/socialimages/fb.png" alt="" /></a>
                  <a href="https://www.instagram.com/" target="_blank">  <img src="/socialimages/insta.png" alt="" /></a>
                  <a href="https://www.twitter.com/" target="_blank">  <img src="/socialimages/twitter.png" alt="" /></a>

                  <a
                    target="_blank"
                    href="https://web.whatsapp.com/send?phone=+923209463770&amp;text=Hi ,Sumama how are you.."
                  >   <img src="/socialimages/whatsapp.png" alt="" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactUs;
export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  await store.dispatch(navDataRequest());
  await store.dispatch(footerDataRequest());
});
