import React from 'react';
import "../css/Header.css";
import {Link} from "react-router-dom"

function Header() {
  return (
    <nav className="header">
      <Link to= "/" >
      
      <img className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
      />
      </Link>
      {/* logo on the left ->> img */}
      {/* search box */}
      {/* 3 links */}
      
    </nav>
  )
}

export default Header
