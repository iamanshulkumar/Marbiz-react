import React from "react";
import logo from "../Images/marbiz-logo.png";
import { Outlet, Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav className="navbar sticky-top navbar-expand-md  navbar-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="fas fa-bars"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/explore">
                  Explore
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/howitworks">
                  How it Works
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/category">
                  Category
                </Link>
              </li>
              
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/brand">
                  Join As Brand
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/creatorSignUp">
                  Join as creator
                </Link>
              </li>
            </ul>
            <Link to="/login">
              <button className=" btn-hover color-4 btn-rounded ms-2">
                Login
              </button>
            </Link>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
}

export default NavBar;
