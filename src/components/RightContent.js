import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRightbar } from "../redux/app/features/counter/CounterSlice";

const RightContent = () => {
  const dispatch = useDispatch();
  const { current, rightbar } = useSelector((state) => state.player);

  return (
    <div className=" bg-backdrop w-full text-white p-4 flex flex-col gap-2 ">
      <div className="flex justify-between items-center ">
        <p className="text-2xl font-bold">{current.title}</p>
        <button onClick={() => dispatch(setRightbar(false))}>X</button>
      </div>
      <img src={current.image} className="object-cover " />
      <div>
        <div>
          <h2 className="font-bold text-2xl	">{current.description}</h2>
          <h3 className="text-graytext">{current.artist}</h3>
        </div>
      </div>
    </div>
  );
};

export default RightContent;
