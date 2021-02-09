import React from "react";
import { Form } from "react-bootstrap";

const AddContactInput = ({
  type,
  name,
  value,
  labelName,
  handleChange,
  errors,
}) => {
  return (
    <>
      <Form.Group controlId={name}>
        <Form.Label>{labelName}</Form.Label>
        <Form.Control
          type={type}
          name={name}
          value={value}
          onChange={handleChange}
          className={errors && errors[name] && "border-danger"}
        />
      </Form.Group>
    </>
  );
};

export default AddContactInput;
