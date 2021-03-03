import styled from '@emotion/styled';
import React from 'react';
import validate from './LoginFormValidationRules';
import useForm from './useForm';

const Submit = styled('button')`
  background: #45b344;
  color: white;
  border: none;
`;

export default function Form() {
  const {errors, handleChange, handleSubmit} = useForm(login, validate);
  function login() {
    console.log('test');
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
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
            onChange={handleChange}
            name="firstName"
            required
          />
          {errors.firstName && (
            <p className="help is-danger">{errors.firstName}</p>
          )}
        </label>
      </div>
      <div className="has-text-centered mt-big">
        <button type="submit">Valider mon texte</button>
      </div>
    </form>
  );
}
