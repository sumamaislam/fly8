import React from "react";
import { Footer, Header } from "../../../components/common";
import { Raiting } from "../../../components/Home";
import { delta11 } from "../../../data";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import Router, { useRouter } from "next/router";
import { wrapper } from "../../../store";
import { footerDataRequest, navDataRequest } from "../../../redux/home";
import { sentgummiesRequest, sentslugRequest, sentvapeRequest } from "../../../redux/product";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Delta11() {
  useEffect(() => {
    AOS.init({
      easing: "ease-in-cubic",
      once: true,
      offset: 30,
    });
  }, []);
  const { vapesData } = useSelector((state) => state.product);
  const { slugData } = useSelector((state) => state.product);

  useEffect(()=>{
    if (slugData){
        console.log("WoW",slugData);
      }
  },[slugData]);

  
  useEffect(() => {
    if (typeof localStorage !== "undefined") {
      localStorage.setItem(
        "slug",
        JSON.stringify({
          slugData
        })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slugData]);
  const url="https://ecomm.fly8.us/assets/files/"

  return (
    <div>
      <Header />

      <div className="container  m-auto ">
        <div>
          <nav className="flex mt-[5rem] ml-[20px]" aria-label="Breadcrumb">
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
                  <p
                    className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                  >
                    {slugData && slugData[0]?.subcategory?.name}
                  </p>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="mt-[15px]">
        <img className="h-[300px] w-full" src={`${url}${slugData[0]?.subcategory?.banner}`} alt="" />
      </div>

      <div className="text-center font-bold text-[#5FB75D]">
        <h1 className="md:pt-[100px] pt-[50px] text-[22px] md:text-[35px] font-bold text-[#5FB75D]">
          {slugData && slugData[0]?.subcategory?.name}
        </h1>
      </div>
      <div className=" md:mt-[50px] container m-auto 2xl:w-[65%]">
        <div className="grid xl:gap-20 gap-12 lg:grid-cols-3 md:grid-cols-2 mt-[28px] justify-items-center ">
          {slugData && slugData.length > 0 && slugData?.map((items, index) => {
            return (
              <div className="" key={index}>
                <div className="justify-center flex" data-aos="zoom-out" data-aos-duration="1500">
                  <Link href={`/cards/${items.id}`}>
                    <img
                      className="rounded-t-lg   "
                      src={items.thumbnail}
                      alt=""
                    />
                  </Link>
                </div>
                <div className="pt-[15px]">
                  <h1 className="text-[18px] xl:text-[22px] font-bold    text-[black] dark:text-white text-center">
                    {items.name}
                  </h1>
                  <div className="flex justify-center gap-[30px] items-center ">
                    <p className="text-[#EB001B] text-[20px]  mt-[10px]">
                      ${items.price}
                    </p>
                    <p className="line-through text-[20px] mt-[10px]">
                      ${items.previous_price}
                    </p>
                  </div>
                  {/* <div className=" flex items-center justify-center">
                    <Raiting /> (274)
                  </div> */}

                  <div className="flex justify-center mt-[24px] w-full overflow-hidden">
                    <Link href={`/cards/${items.id}`}>
                      <button
                        className=" items-center flex gap-2 h text-[14px] xl:text-[15px] font-[700px] rounded-[8px] shadow-md bg-black text-center px-4 py-3 text-[white]  outline-none cursor-pointer  hover:text-white "
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
      <div className="md:mt-[100px] mt-[50px]">
        <div className="bg-[#F7F7F7] w-full overflow-hidden">
          <div
            className="container m-auto flex items-center p-5 flex-col md:flex-row  md:p-8 gap-[75px]
  " data-aos="fade-down" data-aos-duration="1500"
          >
            <div className="bg-gray-200 font-bold text-[20px]   p-5 md:p-4"  data-aos="fade-left" data-aos-duration="1500">
              <p className="min-w-[150px] min-h-[150px] text-center flex items-center">
                What is <br /> Delta-9o Vapes.?
              </p>
            </div>
            <div className="2xl:text-[20px] lg:text-[20px] text-[14px] text-[#7A7A7A]" data-aos="fade-right" data-aos-duration="1500" >
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
      <div className=" mt-[50px]">
        <div className="bg-[#F7F7F7] w-full overflow-hidden">
          <div
            className="container m-auto flex items-center p-5 flex-col md:flex-row  md:p-8 gap-[75px]
  " data-aos="fade-up" data-aos-duration="1500"
          >
            <div className="bg-gray-200 font-bold text-[20px]   p-5 md:p-4" data-aos="fade-left" data-aos-duration="1500">
              <p className="min-w-[150px] min-h-[150px] text-center flex items-center" >
                What is <br /> Delta-9o Vapes.?
              </p>
            </div>
            <div className="2xl:text-[20px] lg:text-[20px] text-[14px] text-[#7A7A7A]" data-aos="fade-right" data-aos-duration="1500">
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
      <Footer />
    </div>
  );
}


export const getStaticPaths = async () => {
    return {
      paths: [],
      fallback: true, 
    };
  };


export const getStaticProps = wrapper.getStaticProps((store) => async (ctx) => {
    if (ctx?.params?.id) {
      await store.dispatch(sentslugRequest(ctx?.params?.id));
    }
    await store.dispatch(navDataRequest());
    await store.dispatch(footerDataRequest());
});
