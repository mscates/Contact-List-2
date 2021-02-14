import React from "react";

const AddContactError = ({ name }) => {
  return <div>{name && <p className="text-danger">{name}</p>}</div>;
};

export default AddContactError;
