import React from "react";
import './Header.css';
const Header = () => {
  return (
    <div className="header">
      <div className="about">
        <h1 className="title">Logo</h1>
        <span className="subtitle">Inicio</span>
        <span className="subtitle">Juegos</span>
        <span className="subtitle">Nosotros</span>
      </div>
      <div className="about2">
        <input className="search" type="text" />
        <h1 className="title">Cart</h1>
      </div>
    </div>
  );
};

export default Header;
