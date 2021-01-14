import React from "react"
import ContactData from "./ContactData"

const ContactItemsHeader = () => {
  return (
    <div>
      <div>
        <div>First Name</div>
        <div>Last Name</div>
        <div>Email</div>
        <div>Phone</div>
      </div>
      <ContactData />
    </div>
  )
}

export default ContactItemsHeader
