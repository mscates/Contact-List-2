import React from "react"

import { Link } from 'react-router-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import useForm from '../../useForm'
import validate from '../../validateValues'

const AddContactForm = () => {
  
  const { handleChange, values, handleSubmit, errors} = useForm(validate)
  

  // const handleValidation = (name, value) => {
  //   const emailRegex = /\S+@\S+\.\S+/
  //   if(name === 'firstName' && value.length === 0){
  //     setContactErrors({...contactErrors, [name]: "First Name is required"})
  //   }
  //   if(name === 'lastName' && value.length === 0){
  //     setContactErrors({...contactErrors, [name]: "Last Name is required"})
  //   }
  //   if(name === 'email' && !emailRegex.test(value)){
  //     setContactErrors({...contactErrors, [name]: "Email is not valid"})
  //   }
  //   if(name === 'phone' & value.length !== 10){
  //     setContactErrors({...contactErrors, [name]: "Phone must be ten numbers"})
  //   }
  //   switch (name) {
  //     case "firstName":
  //       value.length === 0 ? contactErrors.push("First Name is required") : null
  //       break
  //     case "lastName":
  //       contactErrors.lastNameError =
  //         value.length === 0 ? "Last Name is required" : ""
  //       break
  //     case "email":
  //       const emailRegex = /\S+@\S+\.\S+/
  //       contactErrors.emailError = emailRegex.test(value) ? "" : "Email is not valid"
  //       break
  //     case "phone":
  //       contactErrors.phoneError = value.length === 0 ? "Phone must have 10 numbers" : ""
  //       break
  //     default:
  //       break
  //   }
  // }

  
    
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
            value={values.firstName}
            onChange={handleChange}
          />
        </Form.Group>
      {errors.firstName && <p>{errors.firstName}</p>}
        <Form.Group controlId="lastName">
            <Form.Label>
              Last Name
            </Form.Label>
          
          <Form.Control
            type="text"
            name="lastName"
            value={values.lastName}
            onChange={handleChange}
          />
       </Form.Group>
       {errors.lastName && <p>{errors.lastName}</p>}
       <Form.Group controlId="email">
            <Form.Label>
              Email
            </Form.Label>
          
          <Form.Control
            type="text"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
        </Form.Group>
        {errors.email && <p>{errors.email}</p>}
        <Form.Group controlId="phone"> 
            <Form.Label>
              Phone
            </Form.Label>
          
          <Form.Control
            type="tel"
            name="phone"
            value={values.phone}
            onChange={handleChange}
          />
        </Form.Group>
        {errors.phone && <p>{errors.phone}</p>}
        <Button>
        <Link to="/" onClick={handleSubmit}>
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

