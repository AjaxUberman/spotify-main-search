import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "./features/counter/CounterSlice";
import searchReducer from "./features/counter/PlayetStore";

export default configureStore({
  reducer: {
    player: playerReducer,
    search: searchReducer,
  },
});
