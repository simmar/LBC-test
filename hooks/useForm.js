import { useContext, useEffect, useMemo, useState } from 'react';
import { CartContext } from '../Context';

// Function file for validate and submit form
const useForm = (validate,onSubmit) => {
  const {
    values,
    setValues,newMessages, setnewMessages,
    isActive,
    setisActive,
    checked,
    setIschecked,
  } = useContext(CartContext);

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      setisActive(true);
    }
  }, [errors, isSubmitting]);

  const handleChange = (event) => {
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
    setIschecked(!checked);
  };

  const handleSubmit = (event) => {
    event && event.preventDefault()

    newMessages.push(values)
    setnewMessages(newMessages)
    console.log('newMessages', newMessages);
    
    setErrors(validate(values));
    setIsSubmitting(true);

    if (isActive === true) {
      setisActive(false);
    }
    if (isSubmitting === true) {
      console.log('values', values);
      
    }

  };

  return useMemo(() => ({
    handleChange,
    handleSubmit,
    onSubmit,
    values,
    errors,
  }));
};

export default useForm;
