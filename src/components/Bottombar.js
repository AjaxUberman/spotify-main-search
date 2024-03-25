import React from "react";
import Footerright from "./Bottom/Footerright";
import FooterLeft from "./Bottom/FooterLeft";
import Footermid from "./Bottom/Footermid";
import "../App.css";

const Bottombar = () => {
  return (
    <div className="bottom-wrapper absolute bottom-1 bg-black h-24 rounded-lg ">
      <Footermid />
    </div>
  );
};

export default Bottombar;
