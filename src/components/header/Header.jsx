import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";

const Header = () => {
  const [toggel, setToggel] = useState(false);
  return (
    <header>
      <div className="container">
        <nav>
          <a href="#" className="logo">
            Portfolio
          </a>
          <div className={`nav__items ${toggel ? "show" : ""}`}>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Blog</a>
            <a href="#contact">Contact</a>
          </div>
          <button className="menu" onClick={() => setToggel(!toggel)}>
            <BiMenuAltRight />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
