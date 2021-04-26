import { useContext, useEffect, useMemo, useState } from 'react';
import { CartContext } from '../Context';

// Function file for validate and submit form
const useForm = (validate) => {
  const {
    values,
    setValues,
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

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);

    if (isActive === true) {
      setisActive(false);
    }
  };

  const handleChange = (event) => {
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
    setIschecked(!checked);
  };

  return useMemo(() => ({
    handleChange,
    handleSubmit,
    values,
    errors,
  }));
};

export default useForm;
