import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Bottombar from "./components/Bottombar";
import Content from "./components/Content";
import { useSelector } from "react-redux";
import RightContent from "./components/RightContent";
import { useState, useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import MobileHomePage from "./components/MobileComponents/MobileHomePage";

function App() {
  const { rightbar } = useSelector((state) => state.player);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 724px)" });
  const [scrolled, setScrolled] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const content = contentRef.current;
      if (content && content.scrollTop > 2) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    handleScroll();
    const content = contentRef.current;
    if (content) {
      content.addEventListener("scroll", handleScroll);

      return () => {
        content.removeEventListener("scroll", handleScroll);
      };
    }
  }, [contentRef]);

  return (
    <>
      <div>
        {isTabletOrMobile ? (
          <div>
            <MobileHomePage />
          </div>
        ) : (
          <div className="wrapper flex flex-col h-screen bg-black   ">
            <div className="grid grid-cols-8 h-screen">
              <div className=" col-span-2 h-screen  ">
                <Sidebar className="" />
              </div>
              <div
                ref={contentRef}
                className={`relative mt-2 mr-2 rounded-lg  2xl:h-[905px] xl:h-[600px]   ${
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
        )}
      </div>
    </>
  );
}

export default App;
