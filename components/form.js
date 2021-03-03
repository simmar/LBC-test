// import styled from '@emotion/styled';
import React, {useState} from 'react';

export default function Form() {
  const initialValues = {
    firstName: '',
  };

  const [values, setValues] = useState(initialValues);

  // change event handler
  const handleChange = (evt) => {
    const {name, value: newValue, type} = evt.target;

    // keep number fields as numbers
    const value = type === 'number' ? +newValue : newValue;

    // save field values
    setValues({
      ...values,
      [name]: value,
    });

    // console.log('values', values);
  };
  return (
    <form>
      <div>
        <p>
          {' '}
          Si vous avez envie de me faire un petit retour, ça sera aavec
          plaiiiiisir :)
        </p>
        <label htmlFor="firstName">
          Quel est votre firstName ?
          <input
            type="text"
            id="firstName"
            placeholder="Enter your name"
            value={values.firstName}
            onChange={handleChange}
            name="firstName"
            required
          />
        </label>
        <p>Bonjour {values.firstName}</p>
      </div>
    </form>
  );
}
