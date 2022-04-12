import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

export const makeRegisterValidation = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('Name is required'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  return formOptions;
}