import React from "react";
import { NavLink, Link } from "react-router-dom";

//import firebase from "../../config/fbconfig";

const Navbar = () => {
//   const handleLogout = () => {
//     firebase.auth().signOut();
//   };

  return (
    <nav className="purple">
      <div className="nav-wrapper">
        <Link to="/schedule" className="brand-logo">
          MyScheduler
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <NavLink to="/favorites">Important</NavLink>
          </li>
          <li>
            <Link to="/">Weather Dashboard</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
