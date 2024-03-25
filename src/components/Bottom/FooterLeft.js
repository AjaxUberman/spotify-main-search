import React from "react";
import { TiTick } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import {
  setControls,
  setRightbar,
} from "../../redux/app/features/counter/CounterSlice";
import { BsCaretUpSquareFill } from "react-icons/bs";

const FooterLeft = () => {
  const dispatch = useDispatch();
  const { current, rightbar } = useSelector((state) => state.player);
  /*   console.log(rightbar);
   */
  const buttonHandler = () => {
    if (rightbar === false) {
      dispatch(setRightbar(true));
    } else {
      dispatch(setRightbar(false));
    }
  };

  return (
    <div className="flex items-center p-4 text-white gap-4">
      <div className="relative group">
        <img
          className={`h-14 w-14 rounded-sm ${
            current === false ? "opacity-0" : ""
          }`}
          src={current.image}
        ></img>
        <button
          onClick={buttonHandler}
          className="absolute top-1 right-1 bg-graytext text-black opacity-0 group-hover:opacity-100 transition ease-in"
        >
          <BsCaretUpSquareFill />
        </button>
      </div>
      <div className="flex flex-col gap-1 ">
        <p className="hover:underline text-sm cursor-pointer">
          {current.title}
        </p>
        <p className="text-graytext hover:underline text-sm cursor-pointer">
          {current.artist}
        </p>
      </div>
      <button
        className={`hover:scale-105 hover:-translate-x-1 transition ease-in duration-200 ${
          current === false ? "opacity-0" : ""
        }`}
      >
        <TiTick className="bg-primarygreen rounded-full text-black" />
      </button>
    </div>
  );
};

export default FooterLeft;
