import React from "react";
import { FaCirclePlay } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { setCurrent } from "../redux/app/features/counter/CounterSlice";

const SongItem = ({ item }) => {
  const dispatch = useDispatch();
  const { current } = useSelector((state) => state.player);
  const updateCurrent = () => {
    dispatch(setCurrent(item));
  };
  return (
    <div className="">
      <div
        key={item.id}
        className="rounded-xl hover:bg-active px-3 py-2 group relative"
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
          className=" opacity-0 group-hover:opacity-100 duration-200	 transition ease-in group-hover:-translate-y-24 md:-translate-y-20  md:translate-x-40  md:bottom-2 md:text-5xl text-3xl absolute right-6 -bottom-4 text-primarygreen bg-black rounded-full"
        />
      </div>
    </div>
  );
};

export default SongItem;
