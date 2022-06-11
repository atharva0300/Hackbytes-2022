import React from 'react'
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
    <div className="container text-uppercase p-2">
      <a className="navbar-brand" href="/">
        FootBall
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse d-flex justify-content-end"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav ml-auto ">
          <li className="nav-item active">
            <NavLink className="nav-link" aria-current="page" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/sports">
              Sports
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/music">
              Music
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/photography">
              Photography
            </NavLink>
          </li>
         
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar