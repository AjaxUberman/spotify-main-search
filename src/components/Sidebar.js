import React from "react";
import { FaHouseChimneyWindow } from "react-icons/fa6";
import { FaSearchengin } from "react-icons/fa6";
import Library from "./Library";
import { useEffect } from "react";
import "../App.css";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/Ara") {
      document.querySelector(".yazi").style.color = "white";
    } else {
      document.querySelector(".yazi").style.color = "#b3b3b3";
    }
  }, [location.pathname]);

  return (
    <div className="text-white bg-black h-full p-2 ">
      {/* Sol UST  */}
      <div className="text-graytext  bg-backdrop p-3 items-left flex flex-col justify-between cursor-pointer rounded-lg h-28 gap-6">
        <Link
          to="/Anasayfa"
          className="hover:text-white transition ease-in flex gap-6 pt-3 pl-4 items-center font-bold"
        >
          <FaHouseChimneyWindow className="p-0 m-0 scale-150" />
          <p>Anasayfa</p>
        </Link>

        <Link
          to="/Ara"
          className="hover:text-white transition ease-in flex gap-6 pb-3 pl-4 items-center font-bold yazi"
        >
          <FaSearchengin className="p-0 m-0 scale-150" />
          <p className="">Ara</p>
        </Link>
      </div>
      {/* Sol UST  */}

      {/* Library  */}
      <div className=" bg-backdrop rounded-lg mt-2 ">
        <Library />
      </div>
      {/* Library */}
    </div>
  );
};

export default Sidebar;
