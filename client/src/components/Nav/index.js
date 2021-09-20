import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/orderHistory">
              Order History
            </Link>
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row" style={{ alignSelf: 'flex-end' }}>
          <li className="mx-1">
            <Link to="/signup">
              Signup
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/login">
              Login
            </Link>
          </li>
        </ul>
      );
    }
  }

  function myFunction() {
    var x = document.getElementsByClassName("links");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  return (

    <header className="flex-row px-1 topNav">
      <h1 style={{ alignSelf: 'stretch' }}>
        <Link to="/">
          <span role="img" aria-label="shopping bag">🟣</span>
          Tutti
          Frutti
        </Link>
      </h1>


      <nav className="links">
        {showNavigation()}
      </nav>
      <a href="javascript:void(0);" class="icon" onclick='myFunction()'>
        <i class="fa fa-bars"></i>
      </a>

    </header>

  );
}

export default Nav;
