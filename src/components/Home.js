import React from "react"
import ContactItemsHeader from "./ContactItemsHeader"

const Home = (props) => {
  return (
    <div>
     
      <ContactItemsHeader
        removeContact={props.handleDeleteContact}
        updateContact={props.handleUpdateContact}
        data={props.data}
      />
    </div>
  )
}

export default Home
