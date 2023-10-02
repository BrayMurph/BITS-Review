import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {
  
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
       <ul className="flex-row">
          <ul className="mx-1">
           <Link to="/profile">
             Profile
           </Link>
         </ul>
         <ul className="mx-1">
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </ul>
       </ul>
      );
   } else {
      return (
       <ul className="flex-row">
          <ul className="mx-1">
            <Link to="/signup">
             Signup
           </Link>
          </ul>
          <ul className="mx-1">
           <Link to="/login">
              Login
           </Link>
          </ul>
       </ul>
    );
  }
}

  return (
    <header>
      <h1>
        <Link to="/">
          BITS Review
        </Link>
      </h1>

      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;