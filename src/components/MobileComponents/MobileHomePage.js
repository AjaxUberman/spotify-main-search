import React from "react";
import Content from "../Content";
import MobileFooterBar from "./MobileFooterBar";
import MobilePlayer from "./MobilePlayer";

const MobileHomePage = () => {
  return (
    <div className="relative  bg-gradient-to-b from-primarygreen from-0% via-backdrop via-30% to-backdrop">
      <div className="h-screen  overflow-y-scroll ">
        <Content />
      </div>
      <div className="z-50 absolute bottom-24 ">
        <MobilePlayer />
      </div>
      <div className="z-10 absolute bottom-0 pb-0 w-full  ">
        <MobileFooterBar />
      </div>
    </div>
  );
};

export default MobileHomePage;
