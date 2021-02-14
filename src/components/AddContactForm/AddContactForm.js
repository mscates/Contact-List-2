import React from "react";
import { Link } from "react-router-dom";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import useForm from '../FormHelpers/useForm'
import AddContactInput from "../AddContactInput/AddContactInput";
import AddContactError from "../AddContactError/AddContactError";

const AddContactForm = () => {
  const { handleSubmit, errors, values, handleChange } = useForm();
  return (
    <Container>
      <Row className="justify-content-center mt-4">
        <Col xs={10}>
          <Form noValidate>
            <AddContactInput
              className={errors.firstName && "border-danger"}
              type="text"
              value={values.firstName}
              labelName="First Name"
              name="firstName"
              errors={errors}
              handleChange={handleChange}
            />
            <AddContactError name={errors.firstName} />

            <AddContactInput
            className={errors.lastName && "border-danger"}
            type="text"
            value={values.lastName}
            labelName="Last Name"
            name="lastName"
            errors={errors}
              handleChange={handleChange}
            />
            <AddContactError name={errors.lastName} />

            <AddContactInput
              type="text"
              value={values.jobTitle}
              labelName="Job Title"
              name="jobTitle"
              errors={errors}
              handleChange={handleChange}
            />
            <AddContactError name={errors.jobTitle} />

            <AddContactInput type="text"
              value={values.email}
              labelName="Email"
              name="email" 
              errors={errors}
              handleChange={handleChange}
              />
              
            <AddContactError name={errors.email} />

            <AddContactInput type="text"
              value={values.phone}
              labelName="Phone"
              name="phone" 
              errors={errors}
              handleChange={handleChange}
              />
            <AddContactError name={errors.phone} />

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
