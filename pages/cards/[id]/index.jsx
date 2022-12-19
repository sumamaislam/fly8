import React, { useState } from "react";
import { Footer, Header } from "../../../components/common";
import Link from "next/link";
import { cards, delta9o, details, productdetail } from "../../../data";
import Acordion from "../../../components/common/Acordion";
import { useDispatch, useSelector } from "react-redux";
import { Raiting } from "../../../components/Home";
import Cart from "../../../components/Home/Cart";
import { wrapper } from "../../../store";
import { navDataRequest } from "../../../redux/home";
import { addToCarts, getProductById } from "../../../redux/product";
export default function Detail() {
  const [show, setShow] = useState(details.image[0]);
  const [detail, setDetail] = useState("a");
  const [offers, setOffers] = useState(false);
  const [carts, setCarts] = useState(false);

  const dispatch = useDispatch();
  const { selectedProduct } = useSelector((state) => state.product);
  console.log("oooooooo",selectedProduct)

  const handleAdd = () => {
    setCarts(true);
    dispatch(addToCarts(selectedProduct));
  };

  console.log("HHi", productdetail);

  return (
    <div>
      <Header />
      {carts && <Cart showCart={carts} setShowCart={setCarts} />}
      <div className=" 2xl:w-[65%] md:w-[80%] container m-auto">
        <div className="container m-auto">
          <div>
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
                    <Link
                      href="#"
                      className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                    >
                      Delta-9o
                    </Link>
                  </div>
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
                    <Link
                      href="#"
                      className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                    >
                      Detail
                    </Link>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row  justify-center gap-[40px] lg:gap-[80px] 2xl:gap-[100px] px-[10px] mt-[31px]">
          <div className=" ">
            <div className="max-w-[700px] border ">
              <img className="" src={selectedProduct?.thumbnail} alt="" />
            </div>
            {/* <div className="flex lg:gap-[36px] gap-2 justify-center lg:justify-start">
              {productdetail?.images?.map((items, index) => {
                return (
                  <div
                    className="mb-[10px] py-[10px]"
                    key={index}
                    onClick={() => setShow(items)}
                  >
                    <img
                      className={`   p-2 w-[100px] border  ${
                        show === items
                          ? "border-2 border-black rounded-md "
                          : ""
                      } `}
                      src={items}
                      alt="img"
                    />
                  </div>
                );
              })}
            </div> */}
          </div>
          {/* right side */}
          <div>
            {/* Instock btn */}
            <button className="text-[15px] bg-[#5FB75D] px-[7px]  rounded-md text-white uppercase">
              {productdetail.stock}
            </button>

            {/* tittle */}
            <p className="md:text-[25px] text-[16px] font-normal mt-[15px] text-black ">
              {selectedProduct?.name}
            </p>
            <div className="flex items-center gap-[52px]">
              {/* raiting */}
              <div className="">
                <Raiting />
              </div>
              <p className="md:text-[15px] text-[12px] text-[#5FB75D] mt-[3px] font-bold">
                {productdetail.review}
              </p>
            </div>
            {/* price */}
            <div className="flex items-center md:gap-[40px] gap-[20px] mt-[5px]">
              <p className="font-bold md:text-[20px] text-[15px] text-[#EB001B]">
                ${selectedProduct?.price}
              </p>
              <p className=" line-through md:text-[20px] text-[15px]">
                ${productdetail.discount}
              </p>
            </div>
            {/* SELECT FLAVOURS */}
            <div className="w-full mt-[15px] ">
              <select
                className="w-full h-[45px] outline outline-1 outline-gray-200 pl-[3px] rounded-md"
                name=""
                id=""
                placeholder="Select Another Flavours"
              >
                <option className="md:text-[18px]" value="">
                  {" "}
                  <span className="font-extrabold  ">
                    {" "}
                    {productdetail?.flavours[0]?.name}
                  </span>
                </option>
                <option value="">{productdetail?.flavours[1]?.name}</option>
              </select>
            </div>
            {/* QUANTITY */}

            <div className="mt-[20px] flex gap-[25px] items-center ">
              <div>
                <p className="text-[15px] font-semibold uppercase">
                  Quantity :
                </p>
              </div>
              <div className="flex gap-[27px] border items-center border-black h-[35px] bg-[#E9EFEE] px-[16px]">
                <div>
                  <img src="/svg/arrowleft.svg" alt="" />
                </div>
                <div>
                  {" "}
                  <p className="text-[15px] font-bold">
                    {productdetail.quantity}
                  </p>
                </div>
                <div>
                  <img src="/svg/arrowright.svg" alt="" />
                </div>
              </div>
            </div>
            {/* purchase offers */}
            <div className="mt-[25px]  ">
              <div className="flex justify-between  w-full h-[45px] p-4 items-center rounded-md  border">
                <div className="flex gap-3">
                  <div className="flex items-center">
                    <input
                      id="country-option-1"
                      type="radio"
                      checked={!offers}
                      name="countries"
                      value="USA"
                      className="h-4 w-4 border-gray-300  focus:ring-black "
                      aria-labelledby="country-option-1"
                      aria-describedby="country-option-1"
                      onClick={() => setOffers(false)}
                    />
                  </div>
                  <div className="uppercase">
                    <p className="md:text-[18px] text-[15px] font-normal">
                      One Time Purchase
                    </p>
                  </div>
                </div>
                <div>
                  <p className="md:text-[18px] text-[15px] font-bold">$34.55</p>
                </div>
              </div>
            </div>

            {/* SUBSCRIBE */}
            <div className="mt-[15px] border rounded-md bg-[#CEF1CD]">
              <div className="flex justify-between  w-full h-[45px] p-4 items-center  rounded-md ">
                <div className="flex gap-3">
                  <div className="flex items-center">
                    <input
                      id="country-option-1"
                      type="radio"
                      checked={offers}
                      name="countries"
                      value="USA"
                      className="h-4 w-4 border-gray-300  focus:ring-black "
                      aria-labelledby="country-option-1"
                      aria-describedby="country-option-1"
                      onClick={() => setOffers(true)}
                    />
                  </div>
                  <div className="uppercase">
                    <p className="md:text-[18px] text-[15px]  font-normal">
                      subscribe to save
                    </p>
                  </div>
                </div>

                <div>
                  <p className="md:text-[18px] text-[15px]  font-bold">
                    $25.55
                  </p>
                </div>
              </div>
              {/* further detail subscription */}
              {offers && (
                <div className="px-12  pb-[15px] ">
                  <div className="flex gap-3">
                    <div className="flex items-center">
                      <input
                        id="country-option-1"
                        type="radio"
                        //  checked={ offers ? true : false}
                        name="countries"
                        value="USA"
                        className="h-4 w-4 border-gray-300  focus:ring-black "
                        aria-labelledby="country-option-1"
                        aria-describedby="country-option-1"
                        //  onClick={()=>setOffers(false)}
                      />
                    </div>
                    <div className="uppercase">
                      <p className="md:text-[14px] text-[12px]  font-normal">
                        EVERY 2 WEEKS
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 pt-2">
                    <div className="flex items-center">
                      <input
                        id="country-option-1"
                        type="radio"
                        // checked={ !showModel ? true : false}
                        name="countries"
                        value="USA"
                        className="h-4 w-4 border-gray-300  focus:ring-black "
                        aria-labelledby="country-option-1"
                        aria-describedby="country-option-1"
                        // onClick={()=>setShowModel(false)}
                      />
                    </div>
                    <div className="uppercase">
                      <p className="md:text-[14px] text-[12px]  font-normal">
                        EVERY 1 MONTH
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 pt-2">
                    <div className="flex items-center">
                      <input
                        id="country-option-1"
                        type="radio"
                        // checked={ !showModel ? true : false}
                        name="countries"
                        value="USA"
                        className="h-4 w-4 border-gray-300  focus:ring-black "
                        aria-labelledby="country-option-1"
                        aria-describedby="country-option-1"
                        // onClick={()=>setShowModel(false)}
                      />
                    </div>
                    <div className="uppercase">
                      <p className="md:text-[14px] text-[12px]  font-normal">
                        EVERY 6 MONTHS
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 pt-2">
                    <div className="flex items-center">
                      <input
                        id="country-option-1"
                        type="radio"
                        // checked={ !showModel ? true : false}
                        name="countries"
                        value="USA"
                        className="h-4 w-4 border-gray-300  focus:ring-black "
                        aria-labelledby="country-option-1"
                        aria-describedby="country-option-1"
                        // onClick={()=>setShowModel(false)}
                      />
                    </div>
                    <div className="uppercase">
                      <p className="md:text-[14px] text-[12px]  font-normal">
                        EVERY 1 YEAR
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/* BUTTON ADD TO CART */}
            {/* <Link href="/add_to_cart"> */}
            <div
              className="w-full  bg-black text-white py-[11px] text-[15px]  text-center mt-[20px] rounded-md cursor-pointer"
              onClick={handleAdd}
            >
              <button className="">ADD TO CART</button>
            </div>
            {/* </Link> */}
            {/* RESTRICTION LINE */}
            <div className="text-right mt-[10px]">
              <p className="text-[12px] fonr-semibold text-[#EB001B]">
                Not Intended for use by those under the age of 21.
              </p>
            </div>

            {/* CATEGORIES */}
            <div className="flex gap-8 items-center pt-[15px]">
              <p className="font-bold md:text-[20px] text-[16px]">Category:</p>
              {/* <p className="md:text-[15px] text-[12px] pt-[5px]">{productdetail.category}</p>
              <p className="md:text-[15px] text-[12px] pt-[5px]">STARTER KIT</p>
              <p className="md:text-[15px] text-[12px] pt-[5px]">DELTA-9o</p> */}
              {productdetail?.category?.map((items, index) => {
                return (
                  <p className="md:text-[15px] text-[12px] pt-[5px]">
                    {items.name}
                  </p>
                );
              })}
            </div>
            <div className=" mt-[15px] md:text-[20px] text-[16px] flex gap-8 ">
              <p className="font-bold ">Share to :</p>
              <img src="/svg/1.svg" alt="" />
              <img src="/svg/2.svg" alt="" />
              <img src="/svg/3.svg" alt="" />
              <img src="/svg/4.svg" alt="" />
            </div>
          </div>
        </div>
        {/* Heading */}
        <div className="md:mt-[100px] mt-[50px]">
          <h1 className="md:text-[25px] text-[18px] font-bold text-center ">
            ABOUT DELTA-9o HIGH POTENCY
          </h1>
        </div>
      </div>
      {/* Detail */}
      <div className="md:mt-[100px] mt-[50px] ">
        <div className="bg-[#F7F7F7]">
          <div
            className="container m-auto flex items-center p-5 flex-col md:flex-row  md:p-8 gap-[75px]
  "
          >
            <div className="bg-gray-200 font-bold text-[20px]   p-5 md:p-4 shadow-inner ">
              <p className="min-w-[150px] min-h-[150px] text-center flex items-center">
                What is <br /> Delta-9o Vapes.?
              </p>
            </div>
            <div className="2xl:text-[20px] lg:text-[20px] text-[14px] text-[#7A7A7A]">
              <p className="font-bold text-black">DELTA 9</p>
              <p>
                When it comes to puffing THC, it doesn’t get better than fly8
                Delta 9 vapes. Our vapes offer the perfect Balance of potency,
                convenience, and long-life. Each of our powerful pens contains a
                unique blend of cannabinoids including Delta 8, Delta 9, Delta
                10, and THC O. This combo is both completely unique and sure to
                help you blast off to the moon. Why get baked on one form of THC
                when you can puff a boutique blend of potent psychotropic
                cannabinoids? All of our D9 products are crafted with unique
                combinations of cannabinoids
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* description */}
      <div className="container m-auto px-[10px]">
        <div className="w-full md:mt-[100px] mt-[50px] border border-black ">
          <div className="flex md:gap-12 gap-4 bg-[#D9D9D9] ">
            <div>
              <p
                className={`md:text-[15px] text-[10px]  font-normal p-2 cursor-pointer ${
                  detail === "a" ? "  bg-black text-white" : ""
                }`}
                onClick={() => setDetail("a")}
              >
                DESCRIPTION
              </p>
            </div>
            <div>
              <p
                className={`md:text-[15px] text-[10px]  font-normal p-2 cursor-pointer ${
                  detail === "b" ? "  bg-black text-white" : ""
                }`}
                onClick={() => setDetail("b")}
              >
                INGREDIENTS
              </p>
            </div>
            <div>
              <p
                className={`md:text-[15px] text-[10px]  font-normal p-2 cursor-pointer ${
                  detail === "c" ? "  bg-black text-white" : ""
                }`}
                onClick={() => setDetail("c")}
              >
                FAQs
              </p>
            </div>
            <div>
              <p
                className={`md:text-[15px] text-[10px]  font-normal p-2 cursor-pointer ${
                  detail === "d" ? "  bg-black text-white" : ""
                }`}
                onClick={() => setDetail("d")}
              >
                LAB REPORT
              </p>
            </div>
          </div>
          {detail === "a" && (
            <div className="md:p-[40px] p-[20px]">
              <p>
                When it comes to puffing THC, it doesn’t get better than fly8
                Delta 9 vapes. Our vapes offer the perfect Balance of potency,
                convenience, and long-life. Each of our powerful pens contains a
                unique blend of cannabinoids including Delta 8, Delta 9, Delta
                10, and THC O. This combo is both completely unique and sure to
                help you blast off to the moon. Why get baked on one from of THC
                when you can puff a boutique blend of potent psychotropic
                cannabinoids? When it comes to puffing THC, it doesn’t get
                better than fly8 Delta 9 vapes. Our vapes offer the perfect
                Balance of potency, convenience, and long-life. Each of our
                powerful pens contains a unique blend of cannabinoids including
                Delta 8, Delta 9, Delta 10, and THC O. This combo is both
                completely unique and sure to help you blast off to the moon.
                Why get baked on one form of THC when you can puff a boutique
                blend of potent psychotropic cannabinoids? When it comes to
                puffing THC, it doesn’t get better than fly8 Delta 9 vapes. Our
                vapes offer the perfect Balance of potency, convenience, and
                long-life. Each of our powerful pens contains a unique blend of
                cannabinoids including Delta 8, Delta 9, Delta 10, and THC O.
                This combo is both completely unique and sure to help you blast
                off to the moon. Why get baked on one form of THC when you can
                puff a boutique blend of potent psychotropic cannabinoids? When
                it comes to puffing THC, it doesn’t get better than fly8 Delta 9
                vapes. Our vapes offer the perfect Balance of potency,
                convenience, and long-life. Each of our powerful pens contains a
                unique blend of cannabinoids including Delta 8, Delta 9, Delta
                10, and THC O. This combo is both completely unique and sure to
                help you blast off to the moon. Why get baked on one form of THC
                when you can puff a boutique blend of potent psychotropic
                cannabinoids?
              </p>
              <p>
                When it comes to puffing THC, it doesn’t get better than fly8
                Delta 9 vapes. Our vapes offer the perfect Balance of potency,
                convenience, and long-life. Each of our powerful pens contains a
                unique blend of cannabinoids including Delta 8, Delta 9, Delta
                10, and THC O. This combo is both completely unique and sure to
                help you blast off to the moon. Why get baked on one form of THC
                when you can puff a boutique blend of potent psychotropic
                cannabinoids? When it comes to puffing THC, it doesn’t get
                better than fly8 Delta 9 vapes. Our vapes offer the perfect
                Balance of potency, convenience, and long-life. Each of our
                powerful pens contains a unique blend of cannabinoids including
                Delta 8, Delta 9, Delta 10, and THC O. This combo is both
                completely unique and sure to help you blast off to the moon.
                Why get baked on one form of THC when you can puff a boutique
                blend of potent psychotropic cannabinoids?When it comes to
                puffing THC, it doesn’t get better than fly8 Delta 9 vapes. Our
                vapes offer the perfect Balance of potency, convenience, and
                long-life. Each of our powerful pens contains a unique blend of
                cannabinoids including Delta 8, Delta 9, Delta 10, and THC O.
                This combo is both completely unique and sure to help you blast
                off to the moon. Why get baked on one form of THC when you can
                puff a boutique blend of potent psychotropic cannabinoids?
              </p>
            </div>
          )}
          {detail === "b" && (
            <div>
              <h2 className="md:p-[40px] p-[20px]">INGREDIENTS</h2>
            </div>
          )}
          {detail === "c" && (
            <div>
              <h2 className="md:p-[40px] p-[20px]">FAQs</h2>
            </div>
          )}
          {detail === "d" && (
            <div>
              <h2 className="md:p-[40px] p-[20px]">LAB REPORT</h2>
            </div>
          )}
        </div>
      </div>
      {/* RECENTLY VIEWED */}
      <div className="mt-[100px] container m-auto">
        <h1 className="text-2xl font-bold ml-5">Recently Viewed</h1>
        <div className="  container m-auto">
          <div className="grid xl:gap-20 gap-12 lg:grid-cols-3 md:grid-cols-2  justify-center ">
            {delta9o.slice(0, 2).map((items, index) => {
              return (
                <div className="   " key={index}>
                  <div className="justify-center flex ">
                    <Link href={`/cards/${items.id}`}>
                      <img
                        className="rounded-t-lg   "
                        src={items.image[0]}
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="pt-[15px]">
                    <h1 className="text-[18px] xl:text-[22px] font-bold    text-[black] dark:text-white text-center">
                      {items.name}
                    </h1>
                    <div className="flex justify-center gap-[30px] items-center">
                      <p className="text-[#EB001B] text-[20px] mt-[10px]">
                        ${items.price}
                      </p>
                      <p className="line-through text-[20px] mt-[10px]">
                        ${items.discount}
                      </p>
                    </div>
                    <div className=" flex items-center justify-center">
                      <Raiting /> (274)
                    </div>

                    <div className="flex justify-center mt-[24px]">
                      <Link href={`/cards/${items.id}`}>
                        <button
                          className=" items-center flex gap-2 hover:animate-bounce text-[14px] xl:text-[15px] font-[700px] rounded-[8px] shadow-md bg-black text-center px-4 py-3 text-[white]  outline-none cursor-pointer  hover:text-white "
                          // onClick={handleAdd}
                        >
                          <span>
                            <img
                              className="w-[15px]"
                              src="/svg/cart.svg"
                              alt=""
                            />
                          </span>
                          ADD TO CART
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export const getStaticPaths = async () => {
  // const products = await initStore().dispatch(getProducts());
  // const paths =
  //   products?.payload?.data?.length &&
  //   products?.payload?.data?.map((item) => ({
  //     params: {
  //       id: item.id.toString(),
  //     },
  //   }));
  return {
    paths: [],
    fallback: true, // can also be true or 'blocking'
  };
};

export const getStaticProps = wrapper.getStaticProps((store) => async (ctx) => {
  if (ctx?.params?.id) {
    await store.dispatch(getProductById(ctx?.params?.id));
  }
  await store.dispatch(navDataRequest());
});
