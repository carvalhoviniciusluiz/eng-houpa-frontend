import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

export const makeRegisterValidation = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('Name is required'),
    email: Yup.string()
      .required('Email is required')
      .max(191, 'Email must be at max 191 characters'),
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters')
      .max(20, 'Password must be at max 20 characters')
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  return formOptions;
}