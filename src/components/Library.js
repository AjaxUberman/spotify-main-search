import React from "react";
import { FaAlignLeft } from "react-icons/fa6";
import { IoIosAdd } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import MultipleItems from "./MultipleItems";
import Playlists from "./Playlists";
import "../App.css";

const Library = () => {
  return (
    <div>
      {/* TOP */}
      <div className="flex justify-between text-graytext">
        <div className="flex items-center hover:text-white transition ease-in scale-125 pl-8 pt-5 gap-2 font-bold cursor-pointer">
          <FaAlignLeft />
          <p>Kitaplığın</p>
        </div>
        <div className="flex items-center scale-125 pt-5 pr-7 gap-3 ">
          <IoIosAdd className="addicon cursor-pointer hover:text-white  hover:bg-active hover:rounded-full" />
          <FaArrowRight className="addicon cursor-pointer hover:text-white hover:bg-active hover:rounded-full  p-1 " />
        </div>
      </div>
      {/* TOP */}

      {/* SLIDER */}
      <div className="pt-8 overflow-x-hidden mr-3 ">
        <MultipleItems />
      </div>
      {/* SLIDER */}

      {/* PLAYLISTS */}
      <div className="playlist-height pt-4 overflow-y-scroll  overflow-x-hidden scroll-smooth scrollbar scrollbar-thumb-graytext scrollbar-track-transparent transition duration-200 ease-in">
        <Playlists className="" />
      </div>
      {/* PLAYLISTS */}
    </div>
  );
};

export default Library;
