import React from "react"
import styles from "../styles/ContactData.module.css"
import { useSelector } from 'react-redux'
import { contactRemoved } from '../store/contacts'
import { connect } from 'react-redux'

const ContactData = ({ dispatch }) => {
  const data = useSelector(state => state)
  console.log(data)
  const contacts = data.map((item) => (
    <div className={styles.tableRow} key={item.id}>
      <div className={styles.tableCell}>{item.firstName}</div>
      <div className={styles.tableCell}>{item.lastName}</div>
      <div className={styles.tableCell}>{item.email}</div>
      <div className={styles.tableCell}>{item.phone}</div>
      <div className={styles.tableCellButton}>
        <button
          // onClick={() => props.updateContact(item.id)}
          className={styles.tableCellButtonUpdate}
        >
          Update
        </button>
      </div>
      <div className={styles.tableCellButton}>
        <button
          className={styles.tableCellButtonDelete}
          onClick={() => dispatch(contactRemoved(item.id))}
        >
          Delete
        </button>
      </div>
    </div>
  ))

  return <React.Fragment>{contacts}</React.Fragment>
}

const mapStateToProps = state => ({
  contacts: state.contacts
})

export default connect(mapStateToProps)(ContactData)

