import React, { useEffect, useState, useRef } from "react";
import Navbar from "./Navbar";
import Anasayfa from "./Anasayfa";
import Ara from "./Ara";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sarkiliste from "./content/Sarkiliste";
import { useDispatch, useSelector } from "react-redux";

const Content = ({ scrolled }) => {
  const { current } = useSelector((state) => state.player);

  return (
    <div
      className={`rounded-lg mb-32 md:mb-0 ${current ? "mb-52 md:mb-0" : ""}`}
    >
      <main className="text-white">
        <div
          className={`${
            scrolled
              ? "bg-primarygreen fixed top-2 right-6 md:w-degernav 2xl:w-navbar xl:w-[1000px]  transition duration-300 z-10 ease-in rounded-lg"
              : "bg-transparent"
          }`}
        >
          <Navbar scrolled={scrolled} />
        </div>y
        
        <div className="pt-5 px-5">
          <Routes>
            <Route path="/Anasayfa" element={<Anasayfa />} />
            <Route path="/" element={<Anasayfa />} />
            <Route path="/Ara" element={<Ara />} />
            <Route path="/Playlists" element={<Sarkiliste />} />
          </Routes>
        </div>
      </main>
    </div>
  );
};

export default Content;
