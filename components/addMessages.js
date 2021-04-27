import styled from '@emotion/styled';
import useForm from '../hooks/UseForm';
import validate from '../hooks/ValidationForm.js';

const Label = styled('label')`
  margin-bottom: 20px;
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
  border-radius: 10px;
`;

const Submit = styled('button')`
  background: #ff6e14;
  color: white;
  border: none;
  padding: 10px;
`;

export default function addMessages() {

  const onSubmit = () => {

  }
  const { handleSubmit, handleChange, errors } = useForm(validate, onSubmit)

  return (
    // Add some messages with this Form
    <form onSubmit={handleSubmit} noValidate>
      <div>

        <Label>
          Quel est votre Nom ? <sup>*</sup>
          <Input
            type="text"
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
