import React from "react";
import ReactDOM from "react-dom";
import styles from "./Header.css"
import reactLogo from "../Images/react-native-icon.png"

function Header() {
  return (
      <header>
          <nav className="nav-row">
              <img src={reactLogo} className="nav-img"  alt="React logo"/>
              <h2 className="nav2">ReactFacts</h2>
              <h3 className="nav3">React Course - Project 1</h3>
          </nav>
      </header>
  )
}

export default Header;