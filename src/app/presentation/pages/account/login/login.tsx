import { yupResolver } from '@hookform/resolvers/yup';
// import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { Link } from '~/app/presentation/components';


export default function Login() {
  // const router = useRouter();

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required')
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
        <label>Username</label>
        <input
          type="text"
          className={`form-control ${errors.username ? 'is-invalid' : ''}`}
          {...register('username')}
        />
        <div className="invalid-feedback">
          {errors.username?.message}
        </div>
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className={`form-control ${errors.password ? 'is-invalid' : ''}`}
          {...register('password')}
        />
        <div className="invalid-feedback">
          {errors.password?.message}
        </div>
      </div>
      <button disabled={formState.isSubmitting} className="btn btn-primary">
        {formState.isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
        Login
      </button>
      <Link href="/account/register" className="btn btn-link">Register</Link>
    </form>
  )
}