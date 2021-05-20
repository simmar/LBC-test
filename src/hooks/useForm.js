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

  // If no error and isSubmitting only, we can display messages
  useEffect(() => {
    if (Object.keys(errors).length === 0 ) {
      setisActive(true);
    }
  }, [errors]);

  // Get back value of 'inputs'
  const handleChange = ({target}) => {
    const value = target.type === 'checkbox'
    ? target.checked
    : target.value

    setValues((values) => ({
      ...values,
      [target.name]: value,
    }));
  };

  // submit messages value 
  const handleSubmit = (event) => {
    event && event.preventDefault()

    if(Object.entries(validate(values)).length === 0) {  
      setnewMessages(newMessages)
      newMessages.push(values)
    }
    
    setErrors(validate(values));

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
