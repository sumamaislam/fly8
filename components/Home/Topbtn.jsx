import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function Topbtn() {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  });

  return (
    <div>
      {show && (
        <div
          className="fixed md:bottom-[100px] bottom-[30px] right-[10px] md:right-[50px]  cursor-pointer md:p-[20px] p-[10px] font-bold rounded-[100%] bg-green-500"
          onClick={handleClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
            />
          </svg>
        </div>
      )}
    </div>
  );
}

export default Topbtn;
