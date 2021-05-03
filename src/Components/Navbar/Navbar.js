import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-danger">
      <div class="container">
        <Link class="navbar-brand text-white" to="/">
          PHOXY
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link ms-4 text-light active" to="/home">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link ms-4 text-light" to="/projects">
                Projects
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link ms-4 text-light" to="/log-in">
                Log In
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link ms-4 text-light" to="/admin">
                Admin
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
