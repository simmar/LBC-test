import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../Context';

// Function file for validate and submit form
const useForm = (validate,onSubmit) => {
  const {
    values,
    setValues,newMessages, setnewMessages,
    isActive,
    setisActive
  } = useContext(CartContext);

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
       setisActive(true);
    }
  }, [errors, isSubmitting]);

  const handleChange = ({target}) => {
    const value = target.type === 'checkbox'
    ? target.checked
    : target.value

    setValues((values) => ({
      ...values,
      [target.name]: value,
    }));

  };

  const handleSubmit = (event) => {
    event && event.preventDefault()

    newMessages.push(values)
    setnewMessages(newMessages)
    
    setErrors(validate(values));
    setIsSubmitting(true);


    if (isActive === true) {
      setisActive(false);
    }

  };

  return {
    handleChange,
    handleSubmit,
    onSubmit,
    values,
    errors,
  }
};

export default useForm;
