import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import { GiConsoleController, GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import "./Navbar.css";

import {auth} from './../firebase'
import { CONSTANTS } from "@firebase/util";

const Navbar = () => {


  // const [status,setStatus] = useState(false)
  
  const user = auth.currentUser;
  const provider = new GoogleAuthProvider();


  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then(() => console.log("Signed In"))
      .catch((err) => console.log("SignIn Error", err.message));
  };


  const handleClick = () => {
    signOut(auth)
      .then(() => console.log("Signed Out"))
      .catch((err) => console.log("SignOut Error", err.message));
  };

  {
    console.log(user);
    console.log(user);
    
  }
  const [drop, setDrop] = useState(false);
  const dropMenu = () => {
    if (!drop) {
      setDrop(true);
    } else setDrop(false);
  };
  return (
    <nav className="nav-bar">
      <img src="./images/health.png" alt="HEALTHEC" />
      <div className="nav-links">
        <div className={`nav-items ${drop ? "mob-items" : ""}`}>
          <ul>
            <li>
              <NavLink to="/">HOME</NavLink>
            </li>
            <li>
              <NavLink to="/contact">CONTACT US</NavLink>
            </li>
          </ul>
        </div>
        <button className="button">
          <div
            className="container"
            onClick={user?signInWithGoogle:handleClick}
          >
            
            {!user?"Logout":"Login"}
            <FiLogIn />
          </div>
        </button>
        <GiHamburgerMenu
          className={`${drop ? "inactive" : "hamburger"}`}
          onClick={dropMenu}
        />
        <AiOutlineClose
          className={`${!drop ? "inactive" : "close"}`}
          onClick={dropMenu}
        />
      </div>
    </nav>
  );
};

export default Navbar;
