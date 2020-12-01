import React from "react";
import { NavLink, Link } from "react-router-dom";

//import firebase from "../../config/fbconfig";

const Navbar = () => {
  //   const handleLogout = () => {
  //     firebase.auth().signOut();
  //   };

  return (
    <nav style={{ backgroundColor: "#773344" }}>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">
          Weather Scheduler
        </Link>
        <NavLink to="/favorites">
          <button
            style={{
              paddingLeft: ".5vw",
              paddingRight: ".5vw",
              paddingTop: ".6VW",
              width: "10vw",
              float: "right",
              marginTop: ".5vw",
              marginRight: ".5VW",
            }}
          >
            Important
          </button>
        </NavLink>
        <Link to="/schedule">
          <button
            style={{
              paddingLeft: ".5vw",
              paddingRight: ".5vw",
              paddingTop: ".6VW",
              width: "15vw",
              float: "right",
              marginTop: ".5vw",
              marginRight: ".5VW",
            }}
          >
            Weather Dashboard
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
