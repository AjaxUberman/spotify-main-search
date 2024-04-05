import React from "react";
import { FaHouseChimneyWindow } from "react-icons/fa6";
import { FaSearchengin } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaAlignLeft } from "react-icons/fa6";

const MobileFooterBar = () => {
  return (
    <div className=" flex justify-around bg-backdrop h-24 items-center ">
      <Link
        to="/Anasayfa"
        className="flex-col flex items-center hover:text-white "
      >
        <FaHouseChimneyWindow className="p-0 m-0 scale-150" />
        <h1>Ana Sayfa</h1>
      </Link>
      <Link to="/Ara" className="flex-col flex jitems-center ">
        <FaSearchengin className="p-0 m-0 scale-150" />
        <h1>Ara</h1>
      </Link>
      <Link
        to="/Playlists"
        className="flex-col flex text-graytext items-center hover:text-white"
      >
        <FaAlignLeft className="p-0 m-0 scale-150 " />
        <h1>Kitaplığın</h1>
      </Link>
    </div>
  );
};

export default MobileFooterBar;
