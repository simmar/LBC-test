import styled from '@emotion/styled';
import React from 'react';
import useForm from '../hooks/UseForm';
import validate from '../hooks/ValidationForm.js';

const P = styled.p`
  margin-bottom: 20px;
  color: ${(props) => (props.primary ? 'red' : 'black')};
  // font-size: ${(props) => (props.primary ? '14px' : '20px')};
  margin-top: ${(props) => (props.primary ? '5px' : '20px')};
`;

const Label = styled('label')`
  margin-bottom: 40px;
  display: block;
  font-size: 16px;
`;

const Input = styled('input')`
  margin-left: 20px;
`;

const Message = styled('textarea')`
  width: 80%;
  margin-bottom: 10px;
  min-height: 100px;
  padding: 5px;
`;

const Submit = styled('button')`
  background: #ff6e14;
  color: white;
  border: none;
  padding: 10px;
`;
export default function Form() {
  const { errors, handleChange, handleSubmit } = useForm(validate);

  return (
    // Add some messages with this Form
    <form onSubmit={handleSubmit} noValidate>
      <div>
        <P>
          Si vous avez envie de me faire un petit retour, cela sera avec plaisir
          :)
        </P>
        <Label htmlFor="firstName">
          Quel est votre Nom ? <sup>*</sup>
          <Input
            type="text"
            id="firstName"
            placeholder="Enter your name"
            onChange={handleChange}
            name="firstName"
            required
          />
          {errors.firstName && <P primary>{errors.firstName}</P>}
        </Label>
      </div>

      <Message
        name="message"
        onChange={handleChange}
        placeholder="Quel est votre message"
        required
      ></Message>

      <Label>
        Message privé ?
        <Input name="private" onChange={handleChange} type="checkbox" />
      </Label>

      <div className="has-text-centered mt-big">
        <Submit type="submit">Valider mon texte</Submit>
      </div>
    </form>
  );
}
