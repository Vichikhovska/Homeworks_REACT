import React from "react";

// assets
import "../../styles/containers/header.scss";

function Header() {
  return (
    <header className="hw-header">
      <div className="hw-header_logo"></div>
      <h1>Blog name</h1>
      <nav className="hw-header_nav">
        <div className="hw-header_nav_item"></div>
        <div className="hw-header_nav_item"></div>
        <div className="hw-header_nav_item"></div>
        <div className="hw-header_nav_item"></div>
        <div className="hw-header_nav_item"></div>
      </nav>
    </header>
  );
}

export default Header;

