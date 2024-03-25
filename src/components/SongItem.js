import React from "react";
import { FaCirclePlay } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setCurrent } from "../redux/app/features/counter/CounterSlice";

const SongItem = ({ item }) => {
  const dispatch = useDispatch();
  const { current } = useSelector((state) => state.player);
  const updateCurrent = () => {
    dispatch(setCurrent(item));
  };
  return (
    <div>
      <div
        key={item.id}
        className="rounded-xl hover:bg-active px-3 py-2  group"
      >
        <img src={item.image} className="rounded-xl w-full h-52 object-cover" />

        <h2 className="font-semibold text-nowrap flex-nowrap">
          {item.title.split("").length > 10
            ? item.title.slice(0, 15).concat("...")
            : item.title}
        </h2>
        <p className="text-graytext">{item.description}</p>
        <FaCirclePlay
          onClick={updateCurrent}
          className=" opacity-0 group-hover:opacity-100 duration-200	 transition ease-in relative  group-hover:-translate-y-24 -translate-y-20  translate-x-40  bottom-2 right-2 text-5xl text-primarygreen bg-black rounded-full"
        />
      </div>
    </div>
  );
};

export default SongItem;
