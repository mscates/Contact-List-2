import React from "react";

import { Link } from "react-router-dom";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import useForm from "../../useForm";

const AddContactForm = () => {
  const { handleChange, values, handleSubmit, errors } = useForm();
  
  return (
    <Container>
      <Row className="justify-content-center mt-4">
        <Col xs={10}>
          <Form noValidate>
            <Form.Group controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                required
                type="text"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.firstName && (
              <Alert className="p-1" variant="danger">
                {errors.firstName}
              </Alert>
            )}

            <Form.Group controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.lastName && <p>{errors.lastName}</p>}
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>

              <Form.Control
                type="text"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.email && <p>{errors.email}</p>}
            <Form.Group controlId="phone">
              <Form.Label>Phone</Form.Label>

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
  );
};

export default AddContactForm;

// const mapStateToProps = state => ({
//   contacts: state.contacts

// })

// const mapDispatchToProps = dispatch => ({
//   contactAdded: contact => dispatch(contactAdded(contact))
// })

// export default connect(mapStateToProps, mapDispatchToProps)(AddContactForm)
