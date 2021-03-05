export default function validate(values) {
  let errors = {};
  if (!values.firstName) {
    errors.firstName = 'Quel est votre petit nom ?';
  } else if (/[^a-zA-Z -]/.test(values.firstName)) {
    errors.firstName = 'Très étrange votre nom';
  }
  return errors;
}
