import React, { useState } from "react"
import { useDispatch } from 'react-redux'
import { contactAdded } from '../../store/contacts'
import { Link, useHistory } from 'react-router-dom';

const AddContactForm = () => {
  let history = useHistory()
  const [contact, setContact] = useState({})
  const dispatch = useDispatch()

  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    id: '',
    errors: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    },
  }
  


  const handleFormReset = () => {
    setContact({ ...initialState, id: '' })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setContact({
      ...contact,
      [name]: value
    })
    
    // handleValidation(name, value)

  }

  // const validateForm = (errors) => {
  //   let valid = true
  //   Object.values(errors).forEach((val) => val.length > 0 && (valid = false))
  //   return valid
  // }

  // handleInputFocus = () => {
  //   this.setState({ inputFocus: true })
  // }

  const handleValidation = (name, value) => {
    let errors = contact.errors
    switch (name) {
      case "firstName":
        errors.firstName =
          value.length < 2 ? "First Name must be at least 2 characters" : ""
        break
      case "lastName":
        errors.lastName =
          value.length < 2 ? "First Name must be at least 2 characters" : ""
        break
      case "email":
        const emailRegex = /\S+@\S+\.\S+/
        errors.email = emailRegex.test(value) ? "" : "Email is not valid"
        break
      case "phone":
        errors.phone = value.length === 10 ? "" : "Phone is not valid"
        break
      default:
        break
    }
    setContact({ errors, [name]: value }, () => {})
  }

  const submitAddContactForm = (e) => {
    e.preventDefault()
    dispatch(contactAdded(contact))
    handleFormReset()
    history.push('/')
  }
   
    const { firstName, lastName, email, phone, errors } = contact
    return (
      <form>
        <div>
          <div>
            <label htmlFor="firstName">
          First Name
            </label>
          </div>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={firstName || ''}
            onChange={handleChange}
          />
        </div>
        <div>
          <div>
            <label htmlFor="lastName">
              Last Name
            </label>
          </div>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={lastName || ''}
            onChange={handleChange}
          />
        </div>
        <div>
          <div>
            <label htmlFor="email">
              Email
            </label>
          </div>
          <input
            type="text"
            name="email"
            id="email"
            value={email || ''}
            onChange={handleChange}
          />
        </div>
        <div>
          <div>
            <label htmlFor="phone">
              Phone
            </label>
          </div>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={phone || ''}
            onChange={handleChange}
          />
        </div>
        <Link to="/" onClick={submitAddContactForm}>
          Submit
        </Link>
      </form>
    )
}

export default AddContactForm

// const mapStateToProps = state => ({
//   contacts: state.contacts
  
// })

// const mapDispatchToProps = dispatch => ({
//   contactAdded: contact => dispatch(contactAdded(contact))
// })

// export default connect(mapStateToProps, mapDispatchToProps)(AddContactForm)

