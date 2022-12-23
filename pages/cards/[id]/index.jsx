import React, { useState } from "react";
import { Footer, Header } from "../../../components/common";
import Link from "next/link";
import { cards, delta9o, details, productdetail } from "../../../data";
import Acordion from "../../../components/common/Acordion";
import { useDispatch, useSelector } from "react-redux";
import { Raiting } from "../../../components/Home";
import Cart from "../../../components/Home/Cart";
import { wrapper } from "../../../store";
import { footerDataRequest, navDataRequest } from "../../../redux/home";
import {
  addToCarts,
  getProductById,
  setRecentProduct,
  updateCart,
} from "../../../redux/product";
import product from "../../../redux/product";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { setRecentCheck } from "../../../redux/product";
import {
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  HatenaShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton,
} from "react-share";

export default function Detail() {
  const [show, setShow] = useState(details.image[0]);
  const [detail, setDetail] = useState("a");
  const [mainData, setMainData] = useState({});
  const [offers, setOffers] = useState(false);
  const [cartsNew, setCartsNew] = useState(false);
  const [added, setAdded] = useState(false);

  const dispatch = useDispatch();
  const router = useRouter();
  const { selectedProduct } = useSelector((state) => state.product);
  const { carts, recentProduct } = useSelector((state) => state.product);

  const { detailData } = useSelector((state) => state.product);
  const localSlug =
    typeof localStorage !== "undefined" &&
    localStorage.getItem("slug") &&
    JSON.parse(localStorage.getItem("slug"));

  useEffect(() => {
    carts?.find((item) => item.id === selectedProduct?.product?.id)
      ? setAdded(true)
      : setAdded(false);
  }, [selectedProduct, carts]);

  const handleAdd = () => {
    const isSimilar =
      carts?.length > 0 &&
      carts?.find((item) => item.id === mainData.product.id)
        ? true
        : false;
    if (!isSimilar) {
      dispatch(addToCarts(mainData.product));
    } else {
    }
    setCartsNew(true);
  };

  const increment = () => {
    if (mainData?.product?.stock <= mainData?.product?.qty) {
      alert("Not have more stock");
    } else {
      setMainData({
        ...mainData,
        product: { ...mainData?.product, qty: mainData?.product?.qty - -1 },
      });
      if (carts?.find((item) => item.id === mainData.product.id)) {
        const index = carts.findIndex(
          (object) => object.id === mainData.product.id
        );
        console.log(index);
        if (index >= 0) {
          console.log(carts[index]);
          dispatch(
            updateCart({
              ...mainData?.product,
              qty: mainData?.product?.qty - -1,
            })
          );
        }
      }
    }
  };

  const decerement = () => {
    if (mainData.product.qty > 1) {
      setMainData({
        ...mainData,
        product: { ...mainData.product, qty: mainData.product.qty - 1 },
      });
      if (carts?.find((item) => item.id === mainData.product.id)) {
        // dispatch(addToCarts(mainData.product));
        const index = carts.findIndex(
          (object) => object.id === mainData.product.id
        );
        if (index >= 0) {
          console.log(carts[index]);
          // console.log(carts[index])
          dispatch(
            updateCart({ ...mainData.product, qty: mainData.product.qty - 1 })
          );
        }
      }
    }
  };

  useEffect(() => {
    setMainData(selectedProduct);
    dispatch(setRecentProduct(selectedProduct));
    dispatch(setRecentCheck(true));
    return () => setRecentCheck(false);
  }, [selectedProduct]);

  useEffect(() => {
    if (selectedProduct?.product) {
      if (Object.keys(selectedProduct.product).length > 0) {
        dispatch(setRecentProduct(selectedProduct));
      }
    }
  }, []);

  const handleFlavourChange = (e) => {
    mainData?.flavour?.map((item, i) => {
      item.name === e.target.value && router.push(`/cards/${item.id}`);
    });
  };

  return (
    <div>
      <Header />
      <Cart showCart={cartsNew} setShowCart={setCartsNew} />
      <div className=" 2xl:w-[65%] md:w-[80%] w-[90%] container m-auto">
        <div className="container m-auto">
          <div>
            <nav className="flex mt-[5rem] ml-[20px] " aria-label="Breadcrumb">
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
                      href={`/flavour/${mainData?.product?.subcategory?.slug}`}
                      className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                    >
                      {mainData?.product?.subcategory?.name}
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
                    <p className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white">
                      {mainData?.product?.name}
                    </p>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row  justify-center gap-[40px] lg:gap-[80px] 2xl:gap-[100px] px-[10px] mt-[31px]">
          <div className=" ">
            <div className="md:w-[500px] border m-auto">
              <img
                className="flex items-center md:py-[70px] justify-center m-auto"
                src={mainData?.product?.thumbnail}
                alt=""
              />
            </div>
            <div className="flex lg:gap-[36px] gap-2 justify-center lg:justify-start">
              {/* {productdetail?.images?.map((items, index) => {
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
              })} */}
            </div>
          </div>
          <div>
            <button className="text-[15px] bg-[#5FB75D] px-[7px]  rounded-md text-white uppercase">
              {mainData?.product?.stock > 0 ? (
                <p className="">IN STOCK</p>
              ) : (
                <p>OUT OF STOCK</p>
              )}
            </button>

            {/* tittle */}
            <p className="md:text-[25px]  text-[16px] font-bold mt-[15px] text-black ">
              {mainData?.product?.name}
            </p>
            <div className="flex items-center gap-[52px]">
              {/* raiting */}
              <div className="">{/* <Raiting /> */}</div>
              <p className="md:text-[15px] text-[12px] text-[#5FB75D] mt-[3px] font-bold">
                {/* {productdetail.review} */}
              </p>
            </div>
            {/* price */}

            <p className=" text-[14px] text-justify">
              {mainData?.product?.detail}
            </p>

            <div className="flex items-center md:gap-[40px] gap-[20px]  mt-[10px] md:mt-[5px]">
              <p className="font-bold md:text-[20px] text-[15px] text-[#EB001B]">
                ${mainData?.product?.price}
              </p>
              <p className=" line-through md:text-[20px] text-[15px]">
                ${mainData?.product?.previous_price}
              </p>
            </div>
            {/* SELECT FLAVOURS */}
            <div className="w-full mt-[15px] ">
              <select
                className="w-full h-[45px] outline outline-1 outline-gray-200 pl-[3px] rounded-md"
                name=""
                id=""
                placeholder="Select Another Flavours"
                onChange={handleFlavourChange}
              >
                {/* <option className="md:text-[18px]" value=""> */}
                {mainData?.flavour?.map((item, i) => {
                  return (
                    <option key={i} selected={mainData.product.id === item.id}>
                      {item?.name}
                    </option>
                    // <option selected={Train Wreck}>{item?.name}</option>
                  );
                })}
                {/* <span className="font-extrabold"> */}
                {/* {productdetail?.flavours[0]?.name} */}
                {/* </span> */}
                {/* </option> */}
                {/* <option value="">{productdetail?.flavours[1]?.name}</option>1 */}
              </select>
            </div>
            {/* QUANTITY */}

            <div className="md:mt-[20px] mt-[40px] flex md:gap-[25px] gap-[12px]  items-center ">
              <div>
                <p className=" text-[14px] md:text-[15px] font-semibold uppercase">
                  Quantity :
                </p>
              </div>
              <div className="flex gap-[17px] md:gap-[27px] border items-center border-black h-[35px] bg-[#E9EFEE] px-[8px] md:px-[16px]">
                {mainData?.product?.qty > 1 ? (
                  <div className="cursor-pointer" onClick={decerement}>
                    <img src="/svg/arrowleft.svg" alt="" />
                  </div>
                ) : (
                  <div className="w-[7.5px]" onClick={decerement}>
                    <img src="/svg/arrowleftdisable.svg" alt="" />
                  </div>
                )}
                <div>
                  {" "}
                  <p className="text-[15px] font-bold">
                    {mainData?.product?.qty}
                  </p>
                </div>
                <div className="cursor-pointer" onClick={increment}>
                  <img src="/svg/arrowright.svg" alt="" />
                </div>
              </div>
            </div>
            {/* purchase offers */}
            {/* <div className="mt-[25px]  ">
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
            </div> */}

            {/* SUBSCRIBE */}
            {/* <div className="mt-[15px] border rounded-md bg-[#CEF1CD]">
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
              {offers && (
                <div className="px-12  pb-[15px] ">
                  <div className="flex gap-3">
                    <div className="flex items-center">
                      <input
                        id="country-option-1"
                        type="radio"
                        name="countries"
                        value="USA"
                        className="h-4 w-4 border-gray-300  focus:ring-black "
                        aria-labelledby="country-option-1"
                        aria-describedby="country-option-1"
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
                        name="countries"
                        value="USA"
                        className="h-4 w-4 border-gray-300  focus:ring-black "
                        aria-labelledby="country-option-1"
                        aria-describedby="country-option-1"
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
                        name="countries"
                        value="USA"
                        className="h-4 w-4 border-gray-300  focus:ring-black "
                        aria-labelledby="country-option-1"
                        aria-describedby="country-option-1"
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
                        name="countries"
                        value="USA"
                        className="h-4 w-4 border-gray-300  focus:ring-black "
                        aria-labelledby="country-option-1"
                        aria-describedby="country-option-1"
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
            </div> */}
            {/* BUTTON ADD TO CART */}
            {/* <Link href="/add_to_cart"> */}
            <div className="">
              {mainData?.product?.stock?.length > 0 ? (
                added ? (
                  <button
                    className="disabled:opacity-25 w-full  bg-black text-white py-[11px] text-[15px]  text-center mt-[20px] rounded-md"
                    onClick={handleAdd}
                    disabled
                  >
                    Added to Cart
                  </button>
                ) : (
                  <button
                    className="w-full  bg-black text-white py-[11px] text-[15px]  text-center mt-[20px] rounded-md cursor-pointer"
                    onClick={handleAdd}
                  >
                    ADD TO CART
                  </button>
                )
              ) : (
                <button
                  disabled
                  className="disabled:opacity-25 w-full  bg-black text-white py-[11px] text-[15px]  text-center mt-[20px] rounded-md cursor-pointer"
                >
                  OUT OF STOCK
                </button>
              )}
            </div>
            {/* </Link> */}
            {/* RESTRICTION LINE */}
            <div className="text-right mt-[10px]">
              <p className="md:text-[12px] text-[9px] fonr-semibold text-[#EB001B]">
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
              {/* <FacebookShareButton><img src="/svg/1.svg" alt="" /></FacebookShareButton> */}
              {/* <FacebookShareButton> */}
              {/* <FacebookIcon size={32} round={true} /> */}
              {/* <img src="/svg/2.svg" alt="" /> */}
              {/* JHGJGH */}
              {/* </FacebookShareButton> */}
              {/* <FacebookShareButton */}
              {/* url={"https://peing.net/ja/"}
                quote={"フェイスブックはタイトルが付けれるようです"}
                hashtag={"#hashtag"}
                description={"aiueo"}
                className="Demo__some-network__share-button"
              >
                <FacebookIcon size={32} round /> Facebookでshare
              </FacebookShareButton> */}
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
              <p className="font-bold text-black ">DELTA 9</p>
              <p className="text-justify">
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
      <div className="container m-auto px-[10px]">
        <div className="w-full md:mt-[100px] mt-[50px] border border-black ">
          <div className="flex md:gap-12 gap-[4px] bg-[#D9D9D9] ">
            <div>
              <p
                className={`md:text-[15px] text-[8px]  font-normal p-2 cursor-pointer ${
                  detail === "a" ? "  bg-black text-white" : ""
                }`}
                onClick={() => setDetail("a")}
              >
                DESCRIPTION
              </p>
            </div>
            <div>
              <p
                className={`md:text-[15px] text-[8px]  font-normal p-2 cursor-pointer ${
                  detail === "b" ? "  bg-black text-white" : ""
                }`}
                onClick={() => setDetail("b")}
              >
                INGREDIENTS
              </p>
            </div>
            <div>
              <p
                className={`md:text-[15px] text-[8px]  font-normal p-2 cursor-pointer ${
                  detail === "c" ? "  bg-black text-white" : ""
                }`}
                onClick={() => setDetail("c")}
              >
                FAQs
              </p>
            </div>
            <div>
              <p
                className={`md:text-[15px] text-[8px]  font-normal p-2 cursor-pointer ${
                  detail === "d" ? "  bg-black text-white" : ""
                }`}
                onClick={() => setDetail("d")}
              >
                LAB REPORT
              </p>
            </div>
          </div>
          {detail === "a" && (
            <div className="md:p-[40px] p-[10px] md:text-[16px] text-[12px] ">
              <p className="text-justify">
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
              <p className="text-justify">
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
              <p className="md:p-[40px] p-[10px] text-[12px] md:text-[16px] text-justify ">
                {" "}
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
          {detail === "c" && (
            <div>
              <p className="md:p-[40px] p-[10px] text-[12px] md:text-[16px] text-justify">
                FAQs
              </p>
            </div>
          )}
          {detail === "d" && (
            <div>
              <p className="md:p-[40px] p-[10px] text-[12px] md:text-[16px] text-justify">
                LAB REPORT
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="mt-[100px] container m-auto">
        <h1 className="text-2xl font-bold ml-5">Recently Viewed</h1>
        <div className="  container m-auto">
          <div className="grid xl:gap-20 gap-12 lg:grid-cols-3 md:grid-cols-2  justify-center">
            {delta9o.slice(0, 2).map((items, index) => {
              return (
                <div className="" key={index}>
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
                          className=" items-center flex gap-2  text-[14px] xl:text-[15px] font-[700px] rounded-[8px] shadow-md bg-black text-center px-4 py-3 text-[white]  outline-none cursor-pointer  hover:text-white "
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
  await store.dispatch(footerDataRequest());
});
