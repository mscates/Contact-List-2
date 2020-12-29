import React from "react"
import ContactData from "./ContactData"
import styles from "../styles/ContactItemsHeader.module.css"


const ContactItemsHeader = () => {
  return (
    <div className={styles.table}>
      <div className={styles.tableRow}>
        <div className={styles.tableHeader}>First Name</div>
        <div className={styles.tableHeader}>Last Name</div>
        <div className={styles.tableHeader}>Email</div>
        <div className={styles.tableHeader}>Phone</div>
      </div>
      <ContactData />
    </div>
  )
}

export default ContactItemsHeader
