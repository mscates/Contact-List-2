import React from "react"
import styles from "../styles/ContactData.module.css"

const ContactData = (props) => {
  const contacts = props.data.map((item) => (
    <div className={styles.tableRow} key={item.id}>
      <div className={styles.tableCell}>{item.firstName}</div>
      <div className={styles.tableCell}>{item.lastName}</div>
      <div className={styles.tableCell}>{item.email}</div>
      <div className={styles.tableCell}>{item.phone}</div>
      <div className={styles.tableCellButton}>
        <button
          onClick={() => props.updateContact(item.id)}
          className={styles.tableCellButtonUpdate}
        >
          Update
        </button>
      </div>
      <div className={styles.tableCellButton}>
        <button
          className={styles.tableCellButtonDelete}
          onClick={() => props.removeContact(item.id)}
        >
          Delete
        </button>
      </div>
    </div>
  ))

  return <React.Fragment>{contacts}</React.Fragment>
}

export default ContactData
