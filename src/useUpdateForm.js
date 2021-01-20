import { useState, useEffect } from "react";
import { contactUpdated } from "./store/contacts";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import validateValues from "./validateValues";


const useUpdateForm = (props) => {
  let history = useHistory();
  const dispatch = useDispatch();
  const [updateValues, setUpdateValues] = useState({
    firstName: props.location.state.item.firstName,
    lastName: props.location.state.item.lastName,
    email: props.location.state.item.email,
    phone: props.location.state.item.phone,
    id: props.location.state.item.id,
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
