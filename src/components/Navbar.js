import React from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(prop) {
  return (
      
        < >
        
        <div className="Navbar">
        <nav className="navbar">
          <ul className="list"> 
              <Link className="nav-link active" aria-current="page" to='/texteditors'>
              <li className="list_items" onClick={prop.click}> Home
            </li>
              </Link>
            </ul>
          <ul className="list">
              <Link className="nav-link active" aria-current="page" to='/assistant'>
            <li className="list_items" onClick={prop.click}>
                Personal Assistant
            </li>
              </Link>
            </ul>
          <ul className="list">
              <Link className="nav-link active" aria-current="page" to='/blog'>
            <li className="list_items" onClick={prop.click}>
                Blog
            </li>
              </Link>
            </ul>
            <ul className="list">
              <Link className="nav-link active" aria-current="page" to='/about'>
            <li className="list_items" onClick={prop.click}>
                About
            </li>
              </Link>
          </ul>
          </nav>
          </div>
        </>
    
  );
}
