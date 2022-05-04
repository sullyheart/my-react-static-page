import React from "react"
import ReactDOM from "react-dom"
import styles from "./MainContent.css"


function MainContent() {
  return (
      <main className="main-content">
          <h1 className="main-head">Fun facts about React</h1>
    <ul className="main-list">
    <li>Was first released in 2013</li>
    <li>Was Originally created by Jordan Walke</li>
    <li>Has well over 100k stars on Github</li>
    <li>Is maintained by Facebook</li>
    <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>
      </main>
  )
}

export default MainContent;