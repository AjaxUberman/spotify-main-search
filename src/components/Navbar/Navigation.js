import React from "react";
import { FaCircleChevronLeft } from "react-icons/fa6";
import { FaCircleChevronRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex gap-1  scale-105 text-3xl text-zart cursor-pointer ">
        <FaCircleChevronLeft
          onClick={() => {
            navigate(-1);
          }}
        />
        <FaCircleChevronRight
          onClick={() => {
            navigate(+1);
          }}
        />
      </div>
    </div>
  );
};

export default Navigation;
