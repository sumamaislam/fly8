import Link from "next/link";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Footer, Header } from "../../components/common";
import { Email } from "../../components/Home";
import { footerDataRequest, navDataRequest } from "../../redux/home";
import { wrapper } from "../../store";
import { signIn } from "next-auth/react"
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import RequestMessage from "../../components/common/RequestMessage";
// import { Footer, Header } from "../common";
// import { Email } from "../Home";

function login() {
  const [formVal, setFormVal] = useState("");
  const [formErr, setFormErr] = useState("");
  const fields = { email: "", password: "" };
  const [val, setVal] = useState(fields);
  const [err, setErr] = useState("");
  const router = useRouter();

  const handleChanged = (e) => {
    const { name, value } = e.target;
    setVal({ ...val, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formVal) {
      console.log(formVal);
      setFormVal("");
      setFormErr("");
    } else {
      setFormErr("Email is required *");
    }
  };
  const submit = (e) => {
    e.preventDefault();
    let error = {};
    if (!val.email) {
      error.email = "email required *" 
    } 
    if (!val.password) {
      error.password = "password required *"
    }
    if (Object.keys(error).length > 0){
      setErr(error)
    }else{
      console.log(val)
      setVal({ email: "", password: "" })
      setErr({ email: "", password: "" })
      console.log({ ...val, redirect: false })
      signIn("credentials", { ...val, redirect: false }).then((response) => {
        if (response?.ok) {
          router.push("/profile");
        }else{
          toast(<RequestMessage message="Login failed! " />);
          toast(<RequestMessage message="Invalid Username or password" />);
        }
      });
    }
  };
  return (
    <div>
      <Header />
      <div className="bg-[url('/profile/22.jpg')] bg-cover ">
        <div className="pt-[130px] pb-[50px]">
          <p className="text-center text-white text-[30px] font-bold">LOGIN / SIGNUP</p>
        </div>
      </div>
      <div className="2xl:w-[65%] w-[90%] m-auto">
        <div className="flex md:justify-between md:gap-[100px] md:flex-row flex-col-reverse  ">
          {/* left side log in form */}
          <div className="mt-[100px]  md:w-[550px] w-[270px] m-auto">
            <p className="font-bold">LOG IN</p>
            {/* log in form */}
            <form className="" onSubmit={submit}>
              {/* email */}
              <div className="mt-[30px] text-[14px]">
                <input
                  className="w-full border outline-none pl-2 py-2 rounded-xl border-1 border-black"
                  type="text"
                  name="email"
                  onChange={handleChanged}
                  placeholder="Username OR Email Address *"
                  value={val.email}
                />
                <p className="text-[10px] md:text-[12px] text-red-500 p-1">{err.email}</p>
              </div>
              {/* password */}
              <div className="mt-[15px]  text-[14px]">
                <input
                  className="w-full border outline-none pl-2 py-2 rounded-xl border-1 border-black"
                  type="password"
                  placeholder="Password *"
                  name="password"
                  onChange={handleChanged}
                  value={val.password}
                />
                 <p className="text-[10px] md:text-[12px] text-red-500 p-1">{err.password}</p>
              </div>
              {/* forget your password */}
              <div>
                <Link href="/forgotpassword">
                  <p className="underline text-[#EB001B] outline-none mt-[10px] text-[10px] text-right">
                    Forgot your password.?
                  </p>
                </Link>
              </div>
              {/* checkbox */}
              {/* <div className="mt-[15px] text-[12px] font-semibold">
                <input type="checkbox" name="" id="" /> Remember me
              </div> */}
              {/* button */}
              <div className=" bg-black mt-[15px] text-center rounded-xl cursor-pointer">
                <button className=" w-full text-[14px] text-white fontbold py-3 ">
                  LOG IN
                </button>
              </div>
            </form>
          </div>
          {/* line */}
          <div className="seperator 2xl:h-[35%] xl:h-[43%] lg:h-[57%] md:h-[25%]"></div>
          {/* right side registration form  */}
          <div className="mt-[100px] md:w-[550px] w-[270px] m-auto">
            <p className="font-bold">REGISTER</p>
            {/* log in form */}
            <form className="" onSubmit={handleSubmit}>
              {/* email */}
              <div className="mt-[30px] text-[14px]">
                <input
                  className="w-full border outline-none pl-2 py-2 rounded-xl border-1 border-black"
                  type="email"
                  placeholder="Email Address  *"
                  name="email"
                  value={formVal}
                  onChange={(e) => setFormVal(e.target.value)}
                />
                <p className=" text-[10px] md:text-[12px] text-red-500 p-1">{formErr}</p>
              </div>

              {/* statement */}
              <div className="text-[11px] text-center mt-[10px]">
                <p>
                  A link for the setting PASSWORD will be sent to your given
                  email address
                </p>
              </div>

              {/* button */}
              <div className=" bg-black mt-[15px] text-center rounded-xl cursor-pointer">
                <button className=" w-full text-[14px] text-white fontbold py-3 ">
                  REGISTER NOW
                </button>
              </div>
            </form>
            {/* <button onClick={()=>signIn()}>oooooooooooo</button> */}
          </div>
        </div>
      </div>
      <Email />
      <Footer />
    </div>
  );
}


export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  await store.dispatch(navDataRequest());
  await store.dispatch(footerDataRequest());
});

export default login;
