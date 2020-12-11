import React from "react"
import styles from "../styles/Header.module.css"
import Button from "./Button"

const Header = (props) => {
  return (
    <div className={styles.container}>
      <h1>Basic Contact List</h1>
      <Button
        className={styles.addContactBtn}
        handleClick={props.handleClick}
        label="Add Contact"
      ></Button>
    </div>
  )
}

export default Header
