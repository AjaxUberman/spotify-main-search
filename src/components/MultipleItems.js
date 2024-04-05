import React, { useState } from "react";
import "../App.css";
import { FaCircleChevronLeft } from "react-icons/fa6";
import { FaCircleChevronRight } from "react-icons/fa6";

const MultipleItems = () => {
  const [active, setActive] = useState("left");

  const clickHandler = () => {
    if (active === "left") {
      setActive("right");
    } else {
      setActive("left");
    }
  };
  return (
    <div className=" whitespace-nowrap relative items-center ">
      <div
        className={`flex  gap-2 2xl:gap-6 transition ease-in 2xl:pl-3   ${
          active === "left" ? "overflow-x-hidden" : "-translate-x-44 "
        }`}
      >
        <button className="py-3 px-1 rounded-full bg-zart hover:bg-active transition ease-in">
          Çalma Listeleri
        </button>
        <button
          className={`rounded-full py-3 px-1 bg-zart hover:bg-active transition ease-in ${
            active === "left" ? "opacity-100" : "opacity-0"
          }`}
        >
          Albümler
        </button>
        <button className="rounded-full py-3 px-1 bg-zart hover:bg-active transition ease-in">
          Podcastler ve Programlar
        </button>
      </div>
      <button
        className="2xl:translate-x-14  2xl:absolute 2xl:right-12 flex  -translate-y-10 md:absolute md:right-0 md:translate-x-10 "
        onClick={clickHandler}
      >
        <FaCircleChevronRight
          className={`transition duration-200  ease-in text-graytext bg-white rounded-full text-3xl  ${
            active === "left" ? "opacity:100" : "opacity-0"
          }`}
        />
        <FaCircleChevronLeft
          className={`transition duration-200  ease-in text-graytext bg-white rounded-full 2xl:absolute 2xl:-left-8 2xl:-translate-x-96 text-3xl md:-translate-x-80 ${
            active === "right" ? "opacity:100" : "opacity-0"
          }`}
        />
      </button>
    </div>
  );
};

export default MultipleItems;
