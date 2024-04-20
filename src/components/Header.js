import React from "react";
import logo from "../utils/netflix-logo.png";
import profileIcon from "../utils/Profile-icon.png";
import { signOut } from "firebase/auth";
import auth from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  return (
    <div className="absolute w-screen px-8 py-8 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-56" src={logo} alt="Netflix-logo" />
      {user && window.location.pathname !== "/" && (
        <div className="flex">
          <img src={user.photoURL} alt="" className="h-10 px-6" />
          <p className="text-white font-lg font-bold pt-2 pr-8 cursor-pointer">
            {user.displayName}
          </p>
          <p
            className="text-white font-lg font-bold pt-2 cursor-pointer"
            onClick={handleSignOut}
          >
            Sign Out
          </p>
        </div>
      )}
    </div>
  );
};

export default Header;
