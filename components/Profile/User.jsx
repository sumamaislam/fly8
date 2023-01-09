import { Input } from "postcss";
import React from "react";
import { useState } from "react";
import InputField from "../common/inputField";
import Selectoption from "../common/Selectoption";
import { useRef } from "react";
import { useSession } from "next-auth/react";
import { useDispatch } from "react-redux";
import { updatedUser } from "../../redux/auth";
import { useEffect } from "react";

function User() {
  const fields = {
    name: "",
    lastname: "",
    email: "",
    password: "",
    newpassword: "",
    repeatpassword: "",
  };
  const [errors, setErrors] = useState({});
  const [userImg, setUserImg] = useState("");
  const [checked, setChecked] = useState(false);

  const { data: session } = useSession();
  const names = session?.user?.user?.full_name?.split(" ")
  const [formvalues, setFormvalues] = useState({
    first_name: names ? names[0] : "",
    lastname: names && names.length > 1 ? names[1] : "",
    // name: session?.user?.user?.first_name,
    zip: session?.user?.user?.zip_code,
    email: session?.user?.user?.email,
    phone: session?.user?.user?.phone,
    fax: session?.user?.user?.fax,
    city: session?.user?.user?.city,
    country: session?.user?.user?.country,
    address: session?.user?.user?.address,
    photo: session?.user?.user?.photo,
  });

  // console.log(data1.split(" ")[0])

  const ref = useRef();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormvalues({ ...formvalues, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    validate(formvalues);
  };

  const mainData = {
    name: formvalues?.first_name + " " + formvalues?.lastname,
    email: formvalues?.email,
    phone: formvalues?.phone,
    fax: formvalues?.fax,
    city: formvalues?.city,
    country: formvalues?.country,
    zip: formvalues?.zip,
    address: formvalues?.address,
    photo: formvalues?.photo
  }

  const validate = (values) => {
    const error = {};
    if (!values.first_name) {
      error.first_name = "First name is Required*";
    }
    // if (!values.lastname) {
    //   error.lastname = "Last Name is Required*";
    // }
    // if (!values.email) {
    //   error.email = "Email is Required";
    // }
    // if (!values.password) {
    //   error.password = "password is Required*";
    // }
    // if (!values.newpassword) {
    //   error.newpassword = "New Password is Required*";
    // }
    // if (!values.repeatpassword) {
    //   error.repeatpassword = "Repeat Password is Required ";
    // }
    if (Object.keys(error).length > 0) {
      setErrors(error);
    } else {
      if (checked) {
        if (values.newpassword === values.repeatpassword) {
          console.log(formvalues);
          dispatch(updatedUser({
            ...mainData,
            current_password: mainData.password,
            newpassword: values.newpassword ? values.newpassword : null,
            repeatpassword: values.repeatpassword ? values.repeatpassword : null,
            photo: checked,
          }))
          // setFormvalues({
          //   first_name: "",
          //   lastname: "",
          //   email: "",
          //   password: "",
          //   newpassword: "",
          //   repeatpassword: "",
          // });
          setErrors({ repeatpassword: "" });
        } else {
          setErrors({
            repeatpassword: "Password and Confirm Password must be same",
          });
        }
      } else {
        dispatch(updatedUser({
          ...mainData
        }))
      }

    }
  };
  const handleImgChange = (e) => {
    // console.log(URL.createObjectURL(e.target.files[0]))
    setUserImg(URL.createObjectURL(e.target.files[0]))
    const data2 = {
      name: session?.user?.user?.full_name,
      email: session?.user?.user?.email,
      phone: session?.user?.user?.phone,
      fax: session?.user?.user?.fax,
      city: session?.user?.user?.city,
      country: session?.user?.user?.country,
      zip: session?.user?.user?.zip,
      address: session?.user?.user?.address,
      photo: URL.createObjectURL(e.target.files[0])
    }
    dispatch(updatedUser(data2));
    // dispatch(updatedUser()); 
  };
  const handleDeleteImg = (e) => {
    setUserImg("")
    dispatch(updatedUser({
      name: session?.user?.user?.full_name,
      email: session?.user?.user?.email,
      phone: session?.user?.user?.phone,
      fax: session?.user?.user?.fax,
      city: session?.user?.user?.city,
      country: session?.user?.user?.country,
      zip: session?.user?.user?.zip,
      address: session?.user?.user?.address, "photo": null
    }));
  };
  // useEffect(() => {
  //   console.log(userImg)
  // }, [userImg])
  const handleCheckChange = () => {
    setChecked(!checked)
  }

  return (
    <div className="2xl:w-[65%] w-[90%] m-auto ">
      <div className=" p-5 mt-[30px]">
        <div className="flex justify-center md:flex-row flex-col gap-12">
          <div className="flex flex-col gap-12 items-center md:mt-[100px]">
            <div className="  ">
              {userImg ? <img
                className="m-auto w-[150px] rounded-full "
                // src="/svg/userimage.svg"
                src={userImg}
                alt=""
              />
                : <img
                  className="m-auto w-[150px] rounded-full "
                  src="/images/noimg.png"
                  alt=""
                />}

            </div>
            <div>
              <div className="flex justify-center ">
                <input
                  type="file"
                  className="hidden"
                  ref={ref}
                  onChange={handleImgChange}
                  accept=".jpg , .png ,.jpeg"
                />
                <button
                  className="bg-black border text-white px-8  py-2 text-[12px] font-bold rounded-lg md:mt-[30px]"
                  onClick={() => ref.current.click()}
                >
                  CHANGE PROFILE IMAGE
                </button>
              </div>
              <div className="flex items-center   rounded-lg justify-center gap-2 mt-[20px]">
                <div className="border-red-500 border px-4 rounded-lg flex gap-2 items-center">
                  <div>
                    <img src="/svg/delete.svg" alt="" />
                  </div>
                  <div>
                    <button
                      className="py-2    text-[12px] font-bold "
                      onClick={handleDeleteImg}
                    >
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
                  name="first_name"
                  value={formvalues.first_name}
                />
                <p className="text-red-600">{errors.first_name}</p>
              </div>
              <div className="w-[100%]">
                <input
                  placeholder="Last Name"
                  className="w-full py-[10px] mt-[20px] border border-gray-700  rounded-md p-2 outline-none"
                  onChange={handleChange}
                  name="lastname"
                  value={formvalues.lastname}
                />
                {/* <p className="text-red-600">{errors.lastname}</p> */}
              </div>
            </div>

            {/* <input
              placeholder="Display Name"
              className="w-full py-[10px] mt-[10px] border border-gray-700 rounded-md p-2 outline-none"
              onChange={handleChange}
              name="displayName"
              value={formvalues.displayName}
            /> */}
            <input
              placeholder="Email Address"
              className="w-full py-[10px] mt-[10px] border border-gray-700 rounded-md p-2 outline-none"
              // onChange={handleChange}
              name="email"
              value={formvalues.email}
            />
            {/* <p className="text-red-600">{errors.email}</p> */}



            <div className="mt-[10px] text-[12px] text-[#2D80CD] flex items-center gap-2">
              <div className="cursor-pointer">
                <input className="mt-1 cursor-pointer" checked={checked} onClick={handleCheckChange} type="checkbox" name="" id="" />
              </div>
              <p>want to change password</p>
            </div>
            {/* PASSWORD */}
            {checked && <div>
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
                  type="password"
                  value={formvalues.password}
                />
                <p className="text-red-600">{errors.password}</p>
              </div>

              <div className="w-full">
                <p className="text-[11px] mt-[10px]">New Password</p>
                <input
                  placeholder="Type New Password...."
                  type="password"
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
                  type="password"
                />
                <p className="text-red-600">{errors.repeatpassword}</p>
              </div>
            </div>}
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
