import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

export const makeProductFormValidation = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('Name is required'),
    description: Yup.string(),
    ref: Yup.string()
      .required('Ref is required'),
    price: Yup.number()
      .required('Price is required')
      .positive()
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  return formOptions;
}