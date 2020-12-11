import React, { Component } from "react"
import styles from "../../styles/AddContactForm.module.css"
import uuid from "react-uuid"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons"

class AddContactForm extends Component {
  initialState = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    id: uuid(),
    firstNameIcon: faTimesCircle,
    lastNameIcon: faTimesCircle,
    emailIcon: faTimesCircle,
    phoneIcon: faTimesCircle,
    inputFocus: false,
  }

  state = this.initialState

  handleFormReset = () => {
    this.setState(() => this.initialState)
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.handleValidation(name, value)

    this.setState({
      [name]: value,
    })
  }

  handleIsNameValid = (value) => {
    if (value.length < 3) {
      console.log("must have at least 2 characters")
    } else {
      console.log("good")
    }
  }

  handleInputFocus = () => {
    this.setState({ inputFocus: true })
  }

  handleFirstNameIcon = (value) => {
    const iconToShow = value.length < 2 ? faTimesCircle : faCheckCircle
    this.setState({ firstNameIcon: iconToShow })
  }
  handleLastNameIcon = (value) => {
    const iconToShow = value.length < 2 ? faTimesCircle : faCheckCircle
    this.setState({ lastNameIcon: iconToShow })
  }

  handleEmailIcon = (value) => {
    let emailRegex = /\S+@\S+\.\S+/
    const iconToShow = emailRegex.test(value) ? faCheckCircle : faTimesCircle
    this.setState({ emailIcon: iconToShow })
  }
  handlePhoneIcon = (value) => {
    const iconToShow = value.length === 10 ? faCheckCircle : faTimesCircle
    this.setState({ phoneIcon: iconToShow })
  }

  handleValidation = (name, value) => {
    switch (name) {
      case "firstName":
        this.handleIsNameValid(value)
        this.handleFirstNameIcon(value)
        break
      case "lastName":
        this.handleIsNameValid(value)
        this.handleLastNameIcon(value)
        break
      case "email":
        this.handleEmailIcon(value)
        break
      case "phone":
        this.handlePhoneIcon(value)
        break
      default:
        console.log("all is good")
    }
  }

  submitAddContactForm = (e) => {
    e.preventDefault()
    this.props.handleSubmit(this.state)
    this.handleFormReset()
  }

  render() {
    const { firstName, lastName, email, phone } = this.state
    return (
      <form className={styles.container}>
        <div className={styles.inputContainer}>
          <div className={styles.labelContainer}>
            <label className={styles.label} htmlFor="firstName">
              First Name
            </label>

            <div>
              {this.state.inputFocus ? (
                <FontAwesomeIcon
                  icon={this.state.firstNameIcon}
                  className={[
                    styles.circle,
                    this.state.firstNameIcon === faTimesCircle
                      ? styles.timesCircle
                      : styles.checkCircle,
                  ].join(" ")}
                />
              ) : null}
            </div>
          </div>
          <input
            onFocus={this.handleInputFocus}
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
            <div>
              {this.state.inputFocus ? (
                <FontAwesomeIcon
                  icon={this.state.lastNameIcon}
                  className={[
                    styles.circle,
                    this.state.lastNameIcon === faTimesCircle
                      ? styles.timesCircle
                      : styles.checkCircle,
                  ].join(" ")}
                />
              ) : null}
            </div>
          </div>
          <input
            onFocus={this.handleInputFocus}
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
            <div>
              {this.state.inputFocus ? (
                <FontAwesomeIcon
                  icon={this.state.emailIcon}
                  className={[
                    styles.circle,
                    this.state.emailIcon === faTimesCircle
                      ? styles.timesCircle
                      : styles.checkCircle,
                  ].join(" ")}
                />
              ) : null}
            </div>
          </div>
          <input
            onFocus={this.handleInputFocus}
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
            <div>
              {this.state.inputFocus ? (
                <FontAwesomeIcon
                  icon={this.state.phoneIcon}
                  className={[
                    styles.circle,
                    this.state.phoneIcon === faTimesCircle
                      ? styles.timesCircle
                      : styles.checkCircle,
                  ].join(" ")}
                />
              ) : null}
            </div>
          </div>
          <input
            onFocus={this.handleInputFocus}
            className={styles.input}
            type="tel"
            name="phone"
            id="phone"
            value={phone}
            onChange={this.handleChange}
          />
        </div>
        <button
          className={styles.submitAddContact}
          onClick={this.submitAddContactForm}
        >
          Submit
        </button>
      </form>
    )
  }
}

export default AddContactForm
