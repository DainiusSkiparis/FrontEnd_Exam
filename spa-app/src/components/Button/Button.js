import React from "react";
import "./Button.css";

const Button = ({ text, design, onClick }) => {
  const buttonClass = `button ${design}`;

  return (
    <button className={buttonClass} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
