import React from "react";
import { Link } from "react-router-dom";
// import Button from "../Button/Button";
import "./Header.css";

const Header = ({ onLogout }) => {
  return (
    <div className="header">
      <Link to="/">
        <img src={"/Logo.png"} alt="CompanyLogo" className="logo" />
      </Link>
      <div className="header-right">
        <Link to="/signin" className="active">
          Sign-In
        </Link>
        <Link to="/signup">Sign-Up</Link>
        {/* <Button text="Logout" onClick={onLogout} /> */}
      </div>
    </div>
  );
};

export default Header;
