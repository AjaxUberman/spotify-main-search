import React from "react";
import { Link } from "react-router-dom";
import ClampLines from "react-clamp-lines";
import SongItem from "./SongItem";

const Songcard = ({ title, more = false, items }) => {
  return (
    <div>
      <header className="flex items-center justify-between mb-4">
        <Link to="/Playlists">
          <h3 className="text-2xl font-bold text-white hover:underline">
            {title}
          </h3>
        </Link>
        {more && (
          <Link to={more} className="hover:underline text-graytext">
            Tümünü Göster
          </Link>
        )}
      </header>
      <div className="grid grid-cols-4 gap-3 cursor-pointer">
        {items.map((item) => (
          <SongItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Songcard;
