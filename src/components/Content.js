import React, { useEffect, useState, useRef } from "react";
import Navbar from "./Navbar";
import Anasayfa from "./Anasayfa";
import Ara from "./Ara";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sarkiliste from "./content/Sarkiliste";

const Content = ({ scrolled }) => {
  return (
    <div className="rounded-lg ">
      <main className="text-white">
        <div
          className={`${
            scrolled
              ? "bg-primarygreen fixed top-2 right-6 w-degernav transition duration-300 z-10 ease-in rounded-lg"
              : "bg-transparent"
          }`}
        >
          <Navbar scrolled={scrolled} />
        </div>
        <div className="pt-5 px-5">
          <Routes>
            <Route path="/Anasayfa" element={<Anasayfa />} />
            <Route path="/Ara" element={<Ara />} />
            <Route path="/Playlists" element={<Sarkiliste />} />
          </Routes>
        </div>
      </main>
    </div>
  );
};

export default Content;
