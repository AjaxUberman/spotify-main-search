import React, { useEffect } from "react";
import { FaCirclePlay } from "react-icons/fa6";
import { useAudio } from "react-use";
import { FaPauseCircle } from "react-icons/fa";
import CustomRange from "../Bottom/CustomRange";
import { useDispatch, useSelector } from "react-redux";
import { setControls } from "../../redux/app/features/counter/CounterSlice";

const MobilePlayer = () => {
  const dispatch = useDispatch();
  const { current } = useSelector((state) => state.player);
  const [audio, state, controls, ref] = useAudio({
    src: current?.src,
  });

  useEffect(() => {
    dispatch(setControls(controls));
  }, []);

  useEffect(() => {
    controls.play();
  }, [current]);

  const songHandler = () => {
    if (state?.playing === false) {
      controls.play();
    } else {
      controls.pause();
    }
  };
  return (
    <>
      {current ? (
        <div className="group flex flex-col items-center bg-active red-600 w-screen h-24 px-4">
          {audio}
          <div className="flex pt-4 justify-between w-full">
            <img
              src={current.image}
              className="w-12 h-12 object-cover rounded-xl "
            />
            <h2 className="text-graytext text-3xl hover:text-white font-bold transition duration-200">
              {current.artist}
            </h2>
            <button onClick={songHandler}>
              <FaCirclePlay
                className={`hover:text-white hover:scale-110 text-3xl absolute ${
                  state?.playing === false ? "opacity-100" : "opacity-0"
                }`}
              />

              <FaPauseCircle
                className={`hover:text-white hover:scale-110 text-3xl  ${
                  state?.playing === true ? "opacity-100" : "opacity-0"
                }`}
              />
            </button>
          </div>
          <CustomRange
            step={0.1}
            min={0}
            max={state?.duration || 1}
            value={state?.time}
            onChange={(value) => controls.seek(value)}
          />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default MobilePlayer;
