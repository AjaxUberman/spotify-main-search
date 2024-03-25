import React from "react";

import Navigation from "./Navbar/Navigation";
import Profile from "./Navbar/Profile";

const Navbar = () => {
  return (
    <div className=" text-graytext bg-transparent h-16 rounded-t-lg flex items-center justify-between pr-5 pl-5">
      <Navigation />
      <Profile />
    </div>
  );
};

export default Navbar;
