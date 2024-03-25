import React, { useState } from "react";
import "../App.css";
import { FaCircleChevronLeft } from "react-icons/fa6";
import { FaCircleChevronRight } from "react-icons/fa6";

const MultipleItems = () => {
  const handleRightButtonClick = () => {
    const zort = document.querySelector(".left-button");
    zort.classList.remove("disable");
    const zart = document.querySelector(".main");
    zart.classList.add("active");
    const rc = document.querySelector(".right-button");
    rc.classList.add("disable");
  };

  const handleLeftButtonClick = () => {
    const zart = document.querySelector(".main");
    zart.classList.remove("active");
    const rc = document.querySelector(".right-button");
    rc.classList.remove("disable");
    const zort = document.querySelector(".left-button");
    zort.classList.add("disable");
  };

  return (
    <div className="main ml-6 whitespace-nowrap flex  gap-2 transition ease-in ">
      <button className="p-1 pl-2 pr-2 rounded-full bg-zart hover:bg-active transition ease-in">
        Çalma Listeleri
      </button>
      <button className="rounded-full pl-2 pr-2 bg-zart hover:bg-active transition ease-in">
        Albümler
      </button>
      <button className="rounded-full pl-2 pr-2 bg-zart hover:bg-active transition ease-in">
        Podcastler ve Programlar
      </button>
      <button className="left-button disable" onClick={handleLeftButtonClick}>
        <FaCircleChevronLeft
          className="transition duration-200	 ease-in"
          style={{
            color: "grey",
            backgroundColor: "white",
            borderRadius: "50%",
          }}
        />
      </button>
      <button className="right-button " onClick={handleRightButtonClick}>
        <FaCircleChevronRight
          className="icon transition duration-200	 ease-in"
          style={{
            color: "grey",
            backgroundColor: "white",
            borderRadius: "50%",
          }}
        />
      </button>
    </div>
  );
};

export default MultipleItems;
