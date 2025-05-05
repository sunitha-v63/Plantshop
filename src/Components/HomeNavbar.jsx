import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from "../assets/Image/logo.png";

const HomeNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg custom-padding py-2 shadow-sm text-white" style={{ backgroundColor: " #0D4F36" }}>
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <Link className="navbar-brand d-flex flex-column align-items-center" to="/">
          <img
            src={logo}
            alt="logo"
            className="img-fluid"
            style={{ maxHeight: "50px" }}
          />
          <span className="text-green fw-bold text-white" style={{ fontSize: "12px", fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>
            Indo Green
          </span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" style={{ color: "white" }}></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center fs-4" id="navbarContent" style={{ fontWeight: '600' }}>
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-4">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" style={{ color: "white" }}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/" style={{ color: "white" }}>Shop</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/" style={{ color: "white" }}>About us</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/" style={{ color: "white" }}>Blog</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default HomeNavbar;
