import React, { useState } from "react"
import { useDispatch } from 'react-redux'
import { contactUpdated } from '../../store/contacts'
import { Link, useHistory } from 'react-router-dom'

const UpdateContactForm = (props) => {
  let history = useHistory()
  const [updateContact, setUpdateContact] = useState({
     firstName: props.location.state.item.firstName,
     lastName: props.location.state.item.lastName,
     email: props.location.state.item.email,
     phone: props.location.state.item.phone,
     id: props.location.state.item.id,
  })
  const dispatch = useDispatch()

  const handleChange = (e) => {
    const { name, value } = e.target

    setUpdateContact({
      ...updateContact,
      [name]: value,
    })
  }

  const submitForm = () => {
    dispatch(contactUpdated(updateContact))
    history.push('/')
  }

  
    const { firstName, lastName, email, phone } = updateContact
    return (
      <form>
        <label htmlFor="firstName">
          First Name
        </label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={firstName}
          onChange={handleChange}
        />
        <label htmlFor="lastName">
          Last Name
        </label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={lastName}
          onChange={handleChange}
        />
        <label htmlFor="email">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={handleChange}
        />
        <label htmlFor="phone">
          Phone
        </label>
        <input
          type="tel"
          name="phone"
          id="phone"
          value={phone}
          onChange={handleChange}
        />
        <Link to="/" onClick={submitForm}>
          Submit
        </Link>
      </form>
    )

}


export default UpdateContactForm
// const mapStateToProps = state => ({
//   contacts: state.contacts
  
// })

// const mapDispatchToProps = dispatch => ({
//   contactUpdated: contact => dispatch(contactUpdated(contact))
// })

// export default connect(mapStateToProps, mapDispatchToProps)(UpdateContactForm)
