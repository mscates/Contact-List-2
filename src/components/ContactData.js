import React from "react"
import styles from "../styles/ContactData.module.css"
import { useSelector } from 'react-redux'
import { contactRemoved } from '../store/contacts'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const ContactData = ({ dispatch }) => {
  const data = useSelector(state => state)

  const contacts = data.map((item) => (
    <div className={styles.tableRow} key={item.id}>
      <div className={styles.tableCell}>{item.firstName}</div>
      <div className={styles.tableCell}>{item.lastName}</div>
      <div className={styles.tableCell}>{item.email}</div>
      <div className={styles.tableCell}>{item.phone}</div>
      <div className={styles.tableCellButton}>
        <Link to={{
          pathname: `/update/${item.id}`,
          state: {item}
        }}
          className={styles.tableCellButtonUpdate}
        >
          Update
        </Link>
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

const connection = connect(mapStateToProps);

export default connection(ContactData)


//// mapStateToProps | ContactData

// const additionalProps = mapStateToProps();

// <Wrapper props>
//   <ContactData {...props} {...additionalProps} />
// </Wrapper>

// ///


// <ContactData status={} />

// props.status
// props = { status, contacts }

// props.contacts

