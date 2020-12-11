import React from "react"
import AddContactForm from "../forms/AddContactForm"
import styles from "../../styles/AddContactModal.module.css"

const AddContactModal = (props) => {
  return (
    <React.Fragment>
      <div
        className={
          props.showAddModal
            ? [styles.addContactModal, styles.showContactModal].join(" ")
            : null
        }
      >
        <div className={styles.modalContent}>
          <div onClick={props.closeModal} className={styles.closeButton}>
            X
          </div>
          <AddContactForm handleSubmit={props.handleSubmit} />
        </div>
      </div>
    </React.Fragment>
  )
}

export default AddContactModal
