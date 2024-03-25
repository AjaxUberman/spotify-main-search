import React, { useEffect } from "react";
import { FaRandom } from "react-icons/fa";
import { FaStepBackward } from "react-icons/fa";
import { FaCirclePlay } from "react-icons/fa6";
import { FaStepForward } from "react-icons/fa";
import { FaRepeat } from "react-icons/fa6";
import { secondsToTime } from "../../utils";
import { useAudio } from "react-use";
import { FaPauseCircle } from "react-icons/fa";
import CustomRange from "./CustomRange";
import { FaMicrophone } from "react-icons/fa6";
import { FaListUl } from "react-icons/fa";
import { MdOutlineComputer } from "react-icons/md";
import { RxSpeakerModerate } from "react-icons/rx";
import { RxSpeakerOff } from "react-icons/rx";
import { MdFullscreenExit } from "react-icons/md";
import FooterLeft from "./FooterLeft";
import "./Zart.css";
import { useDispatch, useSelector } from "react-redux";
import { setControls } from "../../redux/app/features/counter/CounterSlice";

const Footermid = () => {
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
    <div className="flex justify-between">
      <div>
        <FooterLeft />
      </div>
      <div className="flex flex-col items-center gap-8 align-middle text-graytext  mid-cont">
        <div className="flex cursor-pointer gap-4 text-center relative top-6 text-2xl items-center">
          <FaRandom className="hover:text-white " />
          <FaStepBackward className="hover:text-white" />
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
          <FaStepForward className="hover:text-white" />
          <FaRepeat className="hover:text-white" />
        </div>
        <div className="w-full -translate-y-2 group flex items-center gap-x-2">
          {audio}
          <div>
            <p>{secondsToTime(state?.time)}</p>
          </div>
          <CustomRange
            step={0.1}
            min={0}
            max={state?.duration || 1}
            value={state?.time}
            onChange={(value) => controls.seek(value)}
          />

          <div className="text-sm">{secondsToTime(state?.duration)} </div>
        </div>
      </div>
      <div className="flex gap-3 text-graytext align-middle  items-center top-8 text-4xl mr-3">
        <FaMicrophone className="hover:text-white cursor-pointer" />
        <FaListUl className="hover:text-white cursor-pointer" />
        <MdOutlineComputer className="hover:text-white cursor-pointer" />
        <div className="align-center justify-center -translate-y-3 mr-5">
          <button
            className="text-2xl absolute hover:text-white "
            onClick={controls[state.muted ? "unmute" : "mute"]}
          >
            <RxSpeakerModerate
              className={`${
                state.muted || state.volume === 0 ? "opacity-0" : "opacity-100"
              }`}
            />
          </button>
          <button
            className="text-2xl absolute hover:text-white "
            onClick={controls[state.muted ? "unmute" : "mute"]}
          >
            <RxSpeakerOff
              className={` ${
                state.muted || state.volume === 0 ? "opacity-100" : "opacity-0"
              }`}
            />
          </button>
        </div>
        <div className="w-full">
          <CustomRange
            step={0.01}
            min={0}
            max={1}
            value={state?.muted ? 0 : state?.volume}
            onChange={(value) => {
              controls.unmute();
              controls.volume(value);
            }}
          />
        </div>
        <MdFullscreenExit />
      </div>
    </div>
  );
};

export default Footermid;
