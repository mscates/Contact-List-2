import React, { Component } from "react"
import styles from "../../styles/AddContactForm.module.css"
import { connect } from 'react-redux'
import { contactAdded } from '../../store/contacts'
import { Link, withRouter } from 'react-router-dom'

class AddContactForm extends Component {
  initialState = {
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
  

  state = this.initialState

  handleFormReset = () => {
    this.setState({ ...this.initialState, id: '' })
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.handleValidation(name, value)

    this.setState({
      [name]: value,
    })
  }

  validateForm = (errors) => {
    let valid = true
    Object.values(errors).forEach((val) => val.length > 0 && (valid = false))
    return valid
  }

  handleInputFocus = () => {
    this.setState({ inputFocus: true })
  }

  handleValidation = (name, value) => {
    let errors = this.state.errors
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
    this.setState({ errors, [name]: value }, () => {})
  }

  submitAddContactForm = (e) => {
    e.preventDefault()
    this.props.contactAdded(this.state)
    this.handleFormReset()
    this.props.history.push('/')
  }

  render() {
   
    const { firstName, lastName, email, phone, errors } = this.state
    return (
      <form className={styles.container}>
        <div className={styles.inputContainer}>
          <div className={styles.labelContainer}>
            <label className={styles.label} htmlFor="firstName">
          First Name
            </label>
          </div>
          <input
            className={styles.input}
            type="text"
            name="firstName"
            id="firstName"
            value={firstName}
            onChange={this.handleChange}
          />
        </div>
        <div className={styles.inputContainer}>
          <div className={styles.labelContainer}>
            <label className={styles.label} htmlFor="lastName">
              Last Name
            </label>
          </div>
          <input
            className={styles.input}
            type="text"
            name="lastName"
            id="lastName"
            value={lastName}
            onChange={this.handleChange}
          />
        </div>
        <div className={styles.inputContainer}>
          <div className={styles.labelContainer}>
            <label className={styles.label} htmlFor="email">
              Email
            </label>
          </div>
          <input
            className={styles.input}
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={this.handleChange}
          />
        </div>
        <div className={styles.inputContainer}>
          <div className={styles.labelContainer}>
            <label className={styles.label} htmlFor="phone">
              Phone
            </label>
          </div>
          <input
            className={styles.input}
            type="tel"
            name="phone"
            id="phone"
            value={phone}
            onChange={this.handleChange}
          />
        </div>
        <Link className={styles.submitAddContact} onClick={this.submitAddContactForm}>
          Submit
        </Link>
      </form>
    )
  }
}

const mapStateToProps = state => ({
  contacts: state.contacts
  
})

const mapDispatchToProps = dispatch => ({
  contactAdded: contact => dispatch(contactAdded(contact))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddContactForm)

