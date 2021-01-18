import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { contactAdded } from './store/contacts'
import { useHistory } from 'react-router-dom';

const useForm = (validate, callback) => {
  let history = useHistory()
  const dispatch = useDispatch()
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
  })
  const [errors, setErrors] = useState({})
const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = e => {
    const { name, value } = e.target
   setValues({
     ...values,
    [name]: value
   })
 }
 const handleSubmit = (e) => {
  e.preventDefault()
  setErrors(validate(values))
  setIsSubmitting(true)
  dispatch(contactAdded(values)) 
  history.push('/')
}

useEffect(() => {
  if(Object.keys(errors).length === 0 && isSubmitting){
    callback()
    }
},[errors])


  return {handleChange, values, handleSubmit, errors}
}
 
export default useForm;