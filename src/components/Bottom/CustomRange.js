import React from "react";
import { useAudio } from "react-use";
import { Range, getTrackBackground } from "react-range";

const CustomRange = ({ value, step, min, max, onChange }) => {
  return (
    <div className="w-full">
      <Range
        values={[value]}
        step={step}
        min={min}
        max={max}
        onChange={(values) => onChange(values[0])}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            className="w-full h-7 "
            style={{
              ...props.style,
              display: "flex",
              width: "100%",
            }}
          >
            <div
              ref={props.ref}
              className="h-1 rounded-md group"
              style={{
                width: "100%",
                background: getTrackBackground({
                  values: [value],
                  colors: ["#1db954", "#535353"],
                  min: min,
                  max: max,
                }),
                alignSelf: "center",
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props, isDragged }) => (
          <div
            {...props}
            className={`"h-2 w-2 border-none group-hover:opacity-100 opacity:0 ${
              !isDragged ? "opacity-0" : ""
            } "`}
            style={{
              ...props.style,
              height: "12px",
              width: "12px",
              borderRadius: "50%",
              backgroundColor: "#FFF",

              boxShadow: "0px 2px 6px #AAA",
            }}
          ></div>
        )}
      />
    </div>
  );
};

export default React.memo(CustomRange);
