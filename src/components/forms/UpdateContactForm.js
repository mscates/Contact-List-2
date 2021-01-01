import React, { Component } from "react"
import styles from "../../styles/UpdateContactForm.module.css"

class UpdateContactForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    id: '',
  }

  handleChange = (e) => {
    const { name, value } = e.target
    const update = this.props.contactToUpdate

    this.setState({
      ...update,
      [name]: value,
    })
  }

  submitForm = () => {
    this.props.handleUpdateSubmit(this.state)
  }

  render() {
    const { firstName, lastName, email, phone } = this.state
    return (
      <form className={styles.container}>
        <label className={styles.label} htmlFor="firstName">
          First Name
        </label>
        <input
          className={styles.input}
          type="text"
          name="firstName"
          id="firstName"
          value={firstName}
          onChange={this.handleChange}
        />
        <label className={styles.label} htmlFor="lastName">
          Last Name
        </label>
        <input
          className={styles.input}
          type="text"
          name="lastName"
          id="lastName"
          value={lastName}
          onChange={this.handleChange}
        />
        <label className={styles.label} htmlFor="email">
          Email
        </label>
        <input
          className={styles.input}
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={this.handleChange}
        />
        <label className={styles.label} htmlFor="phone">
          Phone
        </label>
        <input
          className={styles.input}
          type="tel"
          name="phone"
          id="phone"
          value={phone}
          onChange={this.handleChange}
        />
        <input type="button" value="Submit" onClick={this.submitForm} />
      </form>
    )
  }
}

export default UpdateContactForm
