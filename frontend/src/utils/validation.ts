import * as yup from 'yup';

export const email = yup.string().required('Email is required!').email('Invalid email!');

const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

export const password = yup
  .string()
  .required('Password is required!')
  .matches(passwordRegex, 'Password should contain...');
export const passwordConfirm = yup
  .string()
  .required('Password confirm is required!')
  .matches(passwordRegex, 'Password should contain...')
  .oneOf([yup.ref('password'), null], 'Passwords must match');
