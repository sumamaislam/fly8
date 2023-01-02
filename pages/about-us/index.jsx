import Link from "next/link";
import React from "react";
import { Footer, Header } from "../../components/common";
import Commitment from "../../components/Home/Commitment";
import { footerDataRequest, navDataRequest, qualityDataRequest } from "../../redux/home";
import { wrapper } from "../../store";

function AboutUs() {
  return (
    <div>
      <Header />
      <div className="w-[90%] 2xl:w-[80%] m-auto">
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
                 <div
                    className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                  >
                    About us
                    </div>
                </div>
              </li>
            </ol>
          </nav>
        </div>
        <div>
          <p className="mt-[70px] text-[24px] md:text-[30px] text-center font-bold ">
            ABOUT US
          </p>
          <p className="text-[16px] text-center mt-[30px] text-[#7A7A7A]">
            When it comes to puffing THC, it doesn’t get better than fly8 Delta
            9 vapes. Our vapes offer the perfect Balance of potency,
            convenience, and long-life. Each of our powerful pens contains a
            unique blend of cannabinoids including Delta 8, Delta 9, Delta 10,
            and THC O. This combo is both completely unique and sure to help you
            blast off to the moon. Why get baked on one form of THC when you can
            puff a boutique blend of potent psychotropic cannabinoids?When it
            comes to puffing THC, it doesn’t get better than fly8 Delta 9 vapes.
            Our vapes offer the perfect Balance of potency, convenience, and
            long-life. Each of our powerful pens contains a unique blend of
            cannabinoids including Delta 8, Delta 9, Delta 10, and THC O. This
            combo is both completely unique and sure to help you blast off to
            the moon. Why get baked on one form of THC when you can puff a
            boutique blend of potent psychotropic cannabinoids?
          </p>
        </div>

        <div className="flex flex-col justify-center md:flex-row mt-[100px] gap-[175px] items-center">
          <div className="2xl:max-w-[350px] md:max-w-[300px] max-w-[170px] ">
            <div className="bg-[#DD9D3E]">
              <img
                className="2xl:max-w-[350px] md:max-w-[300px] max-w-[170px] translate-x-[70px]  md:translate-x-[100px] translate-y-[60px]"
                src="/images/about.png "
                alt=""
              />
            </div>
          </div>
          <div>
            <p className="md:text-[30px] font-bold text-center  text-[24px]">
              WHO WE ARE.?
            </p>
            <div className=" max-w-[800px] m-auto">
              <p className="mt-[30px] text-justify text-[#7A7A7A]">
                When it comes to puffing THC, it doesn’t get better than fly8
                Delta 9 vapes. Our vapes offer the perfect Balance of potency,
                convenience, and long-life. Each of our powerful pens contains a
                unique blend of cannabinoids including Delta 8, Delta 9, Delta
                10, and THC O. This combo is both completely unique and sure to
                help you blast off to the moon. Why get baked on one form of THC
                when you can puff a boutique blend of potent psychotropic
                cannabinoids?When it comes to puffing THC, it doesn’t get better
                than fly8 Delta 9 vapes. Our vapes offer the perfect Balance of
                potency, convenience, and long-life. Each of our powerful pens
                contains a unique blend of cannabinoids including Delta 8, Delta
                9, Delta 10, and THC O. This combo is both completely unique and
                sure to help you blast off to the moon. Why get baked on one
                form of THC when you can puff a boutique blend of potent
                psychotropic cannabinoids?
              </p>
            </div>
          </div>
        </div>



      </div>
        <div className="bg-[url('/images/aboutbg.png')] bg-cover mt-[130px] bg-blend-lighten ">
          <p className="text-[30px]  font-extrabold text-white h-[568px]  flex items-center text-center md:text-left  md:pl-[120px] bg-black opacity-[0.6]">
            <span className="text-white">Rated Excellent From Over <br /> 2000 Reviews</span></p>
        </div>
        <div className="w-[90%] 2xl:w-[80%] m-auto">
        <div className="flex flex-col justify-center md:flex-row mt-[100px] gap-[175px] items-center">
          <div className="2xl:max-w-[350px] md:max-w-[300px] max-w-[170px] ">
            <div className="bg-[#3EA4DD;]">
              <img
                className="2xl:max-w-[350px] md:max-w-[300px] max-w-[170px] translate-x-[70px]  md:translate-x-[100px] translate-y-[60px]"
                src="/images/bg2.png "
                alt=""
              />
            </div>
          </div>
          <div>
            <p className="md:text-[30px] font-bold text-center text-[24px] ">
              WHO WE ARE.?
            </p>
            <div className=" max-w-[800px] m-auto">
              <p className="mt-[30px] text-justify text-[#7A7A7A]">
                When it comes to puffing THC, it doesn’t get better than fly8
                Delta 9 vapes. Our vapes offer the perfect Balance of potency,
                convenience, and long-life. Each of our powerful pens contains a
                unique blend of cannabinoids including Delta 8, Delta 9, Delta
                10, and THC O. This combo is both completely unique and sure to
                help you blast off to the moon. Why get baked on one form of THC
                when you can puff a boutique blend of potent psychotropic
                cannabinoids?When it comes to puffing THC, it doesn’t get better
                than fly8 Delta 9 vapes. Our vapes offer the perfect Balance of
                potency, convenience, and long-life. Each of our powerful pens
                contains a unique blend of cannabinoids including Delta 8, Delta
                9, Delta 10, and THC O. This combo is both completely unique and
                sure to help you blast off to the moon. Why get baked on one
                form of THC when you can puff a boutique blend of potent
                psychotropic cannabinoids?
              </p>
            </div>
          </div>
        </div>
        <div className="md:mt-[150px]">

        <Commitment/>
        </div>
        </div>

      <Footer />
    </div>
  );
}

export default AboutUs;
export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  await store.dispatch(navDataRequest());
  await store.dispatch(footerDataRequest());
  await store.dispatch(qualityDataRequest());


});