import React, { Component } from "react"
import styles from "../../styles/UpdateContactForm.module.css"
import { connect } from 'react-redux'
import { contactUpdated } from '../../store/contacts'
import { Link, withRouter } from 'react-router-dom'

class UpdateContactForm extends Component {
  state = {
    firstName: this.props.location.state.item.firstName,
    lastName: this.props.location.state.item.lastName,
    email: this.props.location.state.item.email,
    phone: this.props.location.state.item.phone,
    id: this.props.location.state.item.id,
  }

  handleChange = (e) => {
    const { name, value } = e.target
    const update = this.props.item

    this.setState({
      ...update,
      [name]: value,
    })
  }

  submitForm = () => {
    this.props.contactUpdated(this.state)
    this.props.history.push('/')
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
        <Link onClick={this.submitForm}>
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
  contactUpdated: contact => dispatch(contactUpdated(contact))
})

export default connect(mapStateToProps, mapDispatchToProps)(UpdateContactForm)
