import {useContext, useEffect, useMemo, useState} from 'react';
import {CartContext} from '../Context';

const useForm = (callback, validate) => {
  const {values, setValues, setisActive} = useContext(CartContext);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [callback, errors, isSubmitting]);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
    setisActive(true);

    if (errors.firstName) {
      setisActive(true);
      console.log('setisActive(true)');
    } else {
      setisActive(false);
      console.log('setisActive(false)');
    }
  };

  const handleChange = (event) => {
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  return useMemo(() => ({
    handleChange,
    handleSubmit,
    values,
    errors,
  }));
};

export default useForm;
