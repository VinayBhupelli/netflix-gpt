import React, { useEffect } from "react";
import logo from "../utils/netflix-logo.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import auth from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);
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
