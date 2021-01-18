import React, { useState } from "react"
import { useDispatch } from 'react-redux'
import { contactUpdated } from '../../store/contacts'
import { Link, useHistory } from 'react-router-dom'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'

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
      <Container>
        <Row className="justify-content-center mt-4">
          <Col xs={10}>
      <Form noValidate>
      <Form.Group controlId="firstName">
        <Form.Label>
          First Name
        </Form.Label>
        <Form.Control
          type="text"
          name="firstName"
          value={firstName}
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
          
          value={lastName}
          onChange={handleChange}
        />
        </Form.Group>
        <Form.Group controlId="email">
        <Form.Label>
          Email
        </Form.Label>
        <Form.Control
          type="email"
          name="email"
     
          value={email}
          onChange={handleChange}
        />
        </Form.Group>
        <Form.Group controlId="phone">
        <Form.Label>
          Phone
        </Form.Label>
        <Form.Control
          type="tel"
          value={phone}
          onChange={handleChange}
        />
        </Form.Group>
        <Button>
        <Link to="/" onClick={submitForm}>
          Submit
        </Link>
        </Button>
      </Form>
      </Col>
        </Row>
      </Container>
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
