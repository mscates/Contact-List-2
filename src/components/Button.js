import React from "react"
import styles from "../styles/Button.module.css"

const Button = (props) => {
  return (
    <button className={styles.btnStyles} onClick={props.handleClick}>
      {props.label}
    </button>
  )
}

export default Button
