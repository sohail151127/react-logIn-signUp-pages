import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
    <nav className="navbar bg-light">
    <Link className="navbar-brand m-1" aria-current="page" to="/LogInForm">Welcome to my App</Link>
    
    <ul className="nav nav-pills">
  <li className="nav-item">
    <Link className="nav-link active m-1 px-4 bg-success" aria-current="page" to="/LogInForm">Log In</Link>
  </li>
  <li className="nav-item">
  <Link className="nav-link active m-1 px-4 bg-primary" aria-current="page" to="/SignUpForm">Sign Up</Link>
  </li>
</ul>
</nav>
    </>
  );
};

export default Navbar;
