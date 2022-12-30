import { Container } from "postcss";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Testingapi() {
  const data =
    (localStorage !== undefined && localStorage.getItem("ham")) || [];
  const [product, setProduct] = useState(data);
  const [productData, setProductData] = useState({});
  const [err, setErr] = useState({});
  const detail = [
    {
      image: "/images/aboutbg.png",
    },
  ];
  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };
  const handleChange2 = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.files });
  };
  useEffect(() => {
    localStorage.setItem("ham", product);
  }, [product]);
  const handleSub = (e) => {
    e.preventDefault;
    let error = {};
    if (!productData.name) {
      error.name = "required";
    }
    if (!productData.files) {
      error.files = "required";
    }
    if (!productData.description) {
      error.description = "required";
    }
    if (Object.keys(error).length > 0) {
      setErr(error);
    } else {
      console.log(productData);
      setProduct([...product, productData]);
    }
  };
  return (
    <div>
      <div className="container m-auto">
        <form className="w-full flex items-center flex-col mt-[70px]" onSubmit={handleSub}>
          <h1 className="text-2xl mb-[40px]">Create Product</h1>
          <input
            type="text"
            className="border mb-[30px] w-[300px] px-[10px] h-[35px] rounded-md"
            placeholder="name"
            name="name"
            onChange={handleChange}
            value={productData.name}
          />
          <textarea
            type="text"
            className="border mb-[30px] w-[300px] px-[10px] h-[120px] pt-[10px] rounded-md"
            placeholder="description"
            name="description"
            onChange={handleChange}
            value={productData.description}
          />
          <div className="flex justify-center">
            <input
              type="file"
              className=" "
              name="files"
              onChange={handleChange2}
              value={productData.files}
            />
          </div>
          <button className="px-[40px] py-2 bg-black text-white rounded-md mt-3" type="submit">
            Create
          </button>
        </form>
        {product &&
          product.map((data, i) => {
            return (
              <div key={i} className="mt-[100px]">
                <img src={data.files} alt="" className="w-[200px]" />
                <p>{data.name}</p>
                <p>{data.description}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Testingapi;
