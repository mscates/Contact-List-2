import React from "react";
import { Link } from "react-router-dom";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import useForm from "../../useForm";

const AddContactForm = () => {
  const { handleChange, values, handleSubmit, errors } = useForm();
  const {firstName, lastName, jobTitle, phone, email} = errors

  const errorInputBorder = (name) => {
    return name ? 'border-danger' : null
  }
  
  return (
    <Container>
      <Row className="justify-content-center mt-4">
        <Col xs={10}>
          <Form noValidate>
            <Form.Group controlId="firstName">
              <Form.Label>First Name</Form.Label>
              
              <Form.Control
              className={errorInputBorder(firstName)}
                type="text"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
              />
            </Form.Group>
            {firstName && (
              <p className="text-danger">
                {firstName}
              </p>
            )}

            <Form.Group controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
              className={errorInputBorder(lastName)}
                type="text"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
              />
            </Form.Group>
            {jobTitle && <p className="text-danger">{jobTitle}</p>}

            <Form.Group controlId="jobTitle">
              <Form.Label>Job Title</Form.Label>
              <Form.Control
              className={errorInputBorder(jobTitle)}
                type="text"
                name="jobTitle"
                value={values.jobTitle}
                onChange={handleChange}
              />
            </Form.Group>
            {jobTitle && <p className="text-danger">{jobTitle}</p>}

            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>

              <Form.Control
              className={errorInputBorder(email)}
                type="text"
                name="email"
                value={values.email}
                onChange={handleChange}
              />

            </Form.Group>
            {errors.email && <p className="text-danger">{errors.email}</p>}
            <Form.Group controlId="phone">
              <Form.Label>Phone</Form.Label>

              <Form.Control
              className={errorInputBorder(phone)}
                type="tel"
                name="phone"
                value={values.phone}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.phone && <p className="text-danger">{errors.phone}</p>}
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
