import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
} from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Anasayfa from "./components/Anasayfa";
import Ara from "./components/Ara";
import { Provider } from "react-redux";
import store from "./redux/app/store";

const router = createBrowserRouter([
  {
    path: "/" || "/Anasayfa",
    element: <Anasayfa />,
  },
  {
    path: "/Ara",
    element: <Ara />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
