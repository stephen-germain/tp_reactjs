import React from "react";

const NavBar = ({ totalCompteurs }) => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#9">
          Navbar 
          <span className="badge badge-pill badge-secondary">
            {totalCompteurs}
          </span>
        </a>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
