import React, { useState } from "react"
import { useDispatch } from 'react-redux'
import { contactAdded } from '../../store/contacts'
import { Link, useHistory } from 'react-router-dom';
import { Form, Button, Container, Row, Col} from 'react-bootstrap'

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
      <Container>
        <Row className="justify-content-center mt-4">
          <Col xs={10}>
      <Form>
       <Form.Group controlId="firstName">
            <Form.Label>
          First Name
            </Form.Label>
      
          <Form.Control
            type="text"
            name="firstName"
            value={firstName || ''}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="lastName">
            <Form.Label>
              Last Name
            </Form.Label>
          
          <Form.Control
            type="text"
            name="lastName"
            value={lastName || ''}
            onChange={handleChange}
          />
       </Form.Group>
       <Form.Group controlId="email">
            <Form.Label>
              Email
            </Form.Label>
          
          <Form.Control
            type="text"
            name="email"
            value={email || ''}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="phone"> 
            <Form.Label>
              Phone
            </Form.Label>
          
          <Form.Control
            type="tel"
            name="phone"
            value={phone || ''}
            onChange={handleChange}
          />
        </Form.Group>
        <Button>
        <Link to="/" onClick={submitAddContactForm}>
          Submit
        </Link>
        </Button>
      </Form>
      </Col>
      </Row>
      </Container>
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

