import React from "react"
import styles from "../styles/Header.module.css"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className={styles.container}>
      <h1>Basic Contact List</h1>
      <Link to="/add" className={styles.btnStyles}>
        Add Contact
      </Link>
    </div>
  )
}

export default Header
