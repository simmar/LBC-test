export default function validate(values) {
  let errors = {};
  if (!values.firstName) {
    errors.firstName = 'name is required';
  } else if (/[^a-zA-Z -]/.test(values.firstName)) {
    errors.firstName = 'name is invalid';
  }
  return errors;
}
