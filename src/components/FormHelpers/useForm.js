import { useState, useEffect } from "react";
import { contactAdded } from "../../store/contacts";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import validateValues from "./validateValues";

const useForm = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    jobTitle: "",
    phone: "",
    email: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value)
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateValues(values));
    setIsSubmitting(true);
  };

  // useEffect(() => {
  //   console.log('Value updated')
  //   console.log(values)
  // }, [values])

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      dispatch(contactAdded(values));
      history.push("/");
    }
  }, [errors]);

  return { handleChange, values, handleSubmit, errors };
};

export default useForm;
