import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

export const makeLoginValidation = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    password: Yup.string().required('Password is required')
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  return formOptions;
}