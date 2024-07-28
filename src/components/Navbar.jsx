import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import "./Nav.css";

function Navbar() {
  const [menuOp, setmenuOp] = useState(true);
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <nav className={menuOp ? "navCont" : "longer"}>
      <div className="logo" onClick={scrollToTop}>
        <Link to="/">
          <img src={require("./images/GIEVALogo.png")} alt="logo" />
        </Link>
      </div>
      <div
        className="menu"
        onClick={() => {
          setmenuOp(!menuOp);
          console.log(menuOp);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="navIcons">
        <ul className={menuOp ? "" : "open"}>
          <li onClick={scrollToTop}>
            <NavLink to={`About`}>About</NavLink>
          </li>
          <li onClick={scrollToTop}>
            <NavLink to={`Services`}>Services</NavLink>
          </li>
          <li onClick={scrollToTop}>
            <NavLink to={`/Blog`}>Blog</NavLink>
          </li>
          <li onClick={scrollToTop}>
            <NavLink to={`Contact`}>Contact us</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
