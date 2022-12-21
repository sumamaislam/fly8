import { useState } from "react";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2  ">
      <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 ">
        <div className="pointer-events-auto w-screen max-w-md">
          <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
            <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
              {/* <div className="flex items-start gap-36">
                      <img
                        src="/svg/back.svg"
                        alt=""
                        className="cursor-pointer transition duration-700 "
                        
                      />
                      <div className=" flex h-7 items-center justify-center">
                        <button
                          type="button"
                          className="-m-2 p-2  text-gray-400 hover:text-gray-500"
                        >
                          <img
                            className="w-[20px]"
                            src="/svg/cartblack.svg"
                            alt=""
                          />
                        </button>
                      </div>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-center">
                        CONGRATS..!! You get free shipping for your first order
                      </p>
                    </div>
                    <hr className="border mt-[5px]" /> */}
              <>
                {showSidebar ? (
                  <button
                    className="flex text-4xl text-white items-center cursor-pointer fixed right-10 top-6 z-50"
                    onClick={() => setShowSidebar(!showSidebar)}
                  >
                    x
                  </button>
                ) : (
                  <svg
                    onClick={() => setShowSidebar(!showSidebar)}
                    className="fixed  z-30 flex items-center cursor-pointer right-10 top-6"
                    fill="#2563EB"
                    viewBox="0 0 100 80"
                    width="40"
                    height="40"
                  >
                    <rect width="100" height="10"></rect>
                    <rect y="30" width="100" height="10"></rect>
                    <rect y="60" width="100" height="10"></rect>
                  </svg>
                )}

                <div
                  className={`top-0 right-0 w-[35vw] bg-blue-600  p-10 pl-20 text-white fixed h-full ease-in-out duration-700 z-40  ${
                    showSidebar ? "translate-x-0 " : "translate-x-full"
                  }`}
                >
                  <h3 className="mt-20 text-4xl font-semibold text-white">
                    I am a sidebar
                  </h3>
                </div>
              </>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
