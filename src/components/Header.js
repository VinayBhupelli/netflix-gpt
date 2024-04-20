import logo from "../utils/netflix-logo.png";

import React from "react";

const Header = () => {
  return (
    <div className="absolute w-[100%] px-8 py-4 bg-gradient-to-b from-black z-10">
      <img className="w-56" src={logo} alt="Netflix-logo" />
    </div>
  );
};

export default Header;
