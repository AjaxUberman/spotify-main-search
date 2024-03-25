import { createSlice } from "@reduxjs/toolkit";

/* GLOBAL STATE */

const initialState = {
  current: false,
  controls: false,
  playing: false,
  rightbar: false,
};

export const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setCurrent: (state, action) => {
      state.current = action.payload;
    },
    setControls: (state, action) => {
      state.controls = action.payload;
    },
    setPlaying: (state, action) => {
      state.playing = action.payload;
    },
    setRightbar: (state, action) => {
      state.rightbar = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCurrent, setControls, setPlaying, setRightbar } =
  playerSlice.actions;

export default playerSlice.reducer;
