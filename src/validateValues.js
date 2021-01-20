export default function validateValues(values) {
  let errors = {};

  if (!values.firstName) {
    errors.firstName = "First Name is required";
  }
  if (!values.lastName) {
    errors.lastName = "Last Name is required";
  }
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email is not valid";
  }
  if (!values.phone) {
    errors.phone = "Phone Number is required";
  } else if (values.phone.length !== 10) {
    errors.phone = "Phone must be 10 numbers";
  }
  console.log(errors);
  return errors;
}
