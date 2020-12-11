import React from "react"
import UpdateContactForm from "../forms/UpdateContactForm"
import styles from "../../styles/UpdateContactModal.module.css"

const UpdateContactModal = (props) => {
  return (
    <React.Fragment>
      <div
        className={
          props.showUpdateModal
            ? [styles.updateContactModal, styles.showUpdateModal].join(" ")
            : null
        }
      >
        <div className={styles.modalContent}>
          <div onClick={props.closeModal} className={styles.closeButton}>
            X
          </div>
          <UpdateContactForm
            contactToUpdate={props.data}
            handleUpdateSubmit={props.handleSubmit}
          />
        </div>
      </div>
    </React.Fragment>
  )
}

export default UpdateContactModal
