import React from "react"
import { Link } from 'react-router-dom'
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap'
import useUpdateForm from "../../useUpdateForm";

const UpdateContactForm = (props) => {
  const { handleChange, updateValues, handleSubmit, errors } = useUpdateForm(props.location.state.item);
 

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
        className={errors.firstName ? 'border-danger' : null}
          type="text"
          name="firstName"
          value={updateValues.firstName}
          onChange={handleChange}
        />
        </Form.Group>
        {errors.firstName && (
              <Alert className="p-1" variant="light">
                {errors.firstName}
              </Alert>
            )}
        <Form.Group controlId="lastName">
        <Form.Label>
          Last Name
        </Form.Label>
        <Form.Control
          type="text"
          name="lastName"
          
          value={updateValues.lastName}
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
     
          value={updateValues.email}
          onChange={handleChange}
        />
        </Form.Group>
        <Form.Group controlId="phone">
        <Form.Label>
          Phone
        </Form.Label>
        <Form.Control
          type="tel"
          value={updateValues.phone}
          onChange={handleChange}
        />
        </Form.Group>
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


export default UpdateContactForm
// const mapStateToProps = state => ({
//   contacts: state.contacts
  
// })

// const mapDispatchToProps = dispatch => ({
//   contactUpdated: contact => dispatch(contactUpdated(contact))
// })

// export default connect(mapStateToProps, mapDispatchToProps)(UpdateContactForm)
