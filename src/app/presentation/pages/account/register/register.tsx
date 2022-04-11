// import { useRouter } from 'next/router';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { Link } from '~/app/presentation/components';

export default Register;

function Register() {
  // const router = useRouter();

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('First Name is required'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  function onSubmit(user: any) {
    console.log(user)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
          {...register('name')}
        />
        <div className="invalid-feedback">{errors.firstName?.message}</div>
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className={`form-control ${errors.password ? 'is-invalid' : ''}`}
          {...register('password')}
        />
        <div className="invalid-feedback">{errors.password?.message}</div>
      </div>
      <button disabled={formState.isSubmitting} className="btn btn-primary">
        {formState.isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
        Register
      </button>
      <Link href="/account/login" className="btn btn-link">Cancel</Link>
    </form>
  );
}
