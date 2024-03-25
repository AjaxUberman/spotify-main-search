import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";

const Playlists = () => {
  return (
    <div className="playlist-wrapper flex flex-col relative ">
      <div className="flex justify-between items-center ml-5 text-graytext">
        <FaSearch className="cursor-pointer hover:text-white hover:bg-active hover:rounded-full p-2 text-4xl	 " />
        <div className="flex items-center gap-2 mr-3 text-graytext hover:text-white hover:scale-105 transition ease-in cursor-pointer absolute right-4">
          <p>Son Çalınanlar</p>
          <FaListUl />
        </div>
      </div>
      <div className="playlist-names flex flex-col pl-6">
        <ul>
          {new Array(40).fill(
            <li>
              <a
                href="#"
                className="text-sm text-graytext hover:text-white flex h-8 items-center"
              >
                Beğenilen Şarkılar
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Playlists;
