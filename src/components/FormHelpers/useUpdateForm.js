import { useState, useEffect } from "react";
import { contactUpdated } from "../../store/contacts";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import validateValues from "./validateValues";


const useUpdateForm = (props) => {
  console.log(props)
  let history = useHistory();
  const dispatch = useDispatch();
  const [updateValues, setUpdateValues] = useState({
    firstName: props.firstName,
    lastName: props.lastName,
    email: props.email,
    phone: props.phone,
    id: props.id,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUpdateValues({
      ...updateValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateValues(updateValues));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      dispatch(contactUpdated(updateValues));
      history.push("/");
    }
  }, [errors, dispatch, history, updateValues, isSubmitting]);

  return { handleChange, updateValues, handleSubmit, errors };
};

export default useUpdateForm;
