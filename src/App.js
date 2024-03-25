import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Bottombar from "./components/Bottombar";
import Content from "./components/Content";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import RightContent from "./components/RightContent";
import { useState, useEffect, useRef } from "react";

function App() {
  const { rightbar } = useSelector((state) => state.player);
  console.log(rightbar);

  const [scrolled, setScrolled] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const content = contentRef.current;
      if (content.scrollTop > 2) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // İlk render'da handleScroll fonksiyonunu çağırarak scroll durumunu kontrol edin
    handleScroll();

    // scroll olayını dinleyin
    const content = contentRef.current;
    content.addEventListener("scroll", handleScroll);

    // Component unmount edildiğinde event listener'ı kaldırın
    return () => {
      content.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="wrapper flex flex-col h-full bg-black   ">
        <div className="grid grid-cols-8 h-full">
          <div className=" col-span-2 h-full  ">
            <Sidebar className="" />
          </div>
          <div
            ref={contentRef}
            className={`relative mt-2 mr-2 rounded-lg  ${
              scrolled === true
                ? "bg-backdrop"
                : " bg-gradient-to-b from-primarygreen from-0% via-backdrop via-30% to-backdrop"
            }  flex-auto overflow-auto content-cont overflow-y-scroll  overflow-x-hidden scroll-smooth scrollbar scrollbar-thumb-graytext scrollbar-track-transparent transition duration-200 ease-in ${
              rightbar === true ? "col-span-4" : "col-span-6"
            }`}
          >
            <Content scrolled={scrolled} />
          </div>
          {rightbar && (
            <div className="col-span-2 rounded-lg flex-auto overflow-auto mt-2 mr-2 content-cont ">
              <RightContent />
            </div>
          )}
          <div className="m-2 col-span-8 overflow-x-hidden ">
            <Bottombar />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
