import React from 'react';
import "../css/Header.css";
import {Link} from "react-router-dom"
import SearchIcon from "@material-ui/icons/Search"
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
      <div className="header__search">

      <input type="text" classNamer="header__searchInput"/>
      <SearchIcon className="header__searchIcon"/>

      </div>

      {/* 3 links */}
      
    </nav>
  )
}

export default Header
