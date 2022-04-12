import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { Link, PasswordField, TextField } from '~/app/presentation/components';

type Credentials = {
  email: string;
  password: string;
}

export default function Login({ validation, authentication }: any) {
  const { control, handleSubmit, formState } = useForm<Credentials>(validation);

  const router = useRouter();

  async function onSubmit(params: Credentials) {
    authentication.signIn(params)
      .then(() => {
        router.push('/')
      })
      .catch(console.error)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField control={control} name="email" />
      <PasswordField control={control} name="password" />

      <button disabled={formState.isSubmitting}>
        {formState.isSubmitting && <span />}
        Login
      </button>
      <Link href="/account/register">Register</Link>
    </form>
  )
}