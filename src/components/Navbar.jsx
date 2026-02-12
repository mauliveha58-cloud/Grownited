import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/netflixhome">
                 NEtflix Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/movie">
                 Movie
                </Link>
              </li>
               <li className="nav-item">
                <Link className="nav-link" to="/originals">
                 Netflix Originals
                </Link>
              </li>        
              <li className="nav-item">
                <Link className="nav-link" to="/series">
                    Series
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/usestate">
                    Usestate
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/props">
                    Props
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/inputdemo">
                    inputdemo1
                </Link>
              </li>
               <li className="nav-item">
                <Link className="nav-link" to="/hookform">
                  Hookform
                </Link>
              </li>
               
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
