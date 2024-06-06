import React from "react";

const Header = () => {
  return (
    <header>
      <div className="container">
        <nav>
          <a href="#" className="logo">
            Portfolio
          </a>
          <div className="nav__items">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
