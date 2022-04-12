import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { Link, PasswordField, TextField } from '~/app/presentation/components';

type Register = {
  name: string;
  email: string;
  password: string;
}

export default function Register({ validation, register }: any) {
  const { control, handleSubmit, formState } = useForm<Register>(validation);

  const router = useRouter();

  function onSubmit(params: Register) {
    register.signUp(params)
      .then(() => {
        router.push('/account/login')
      })
      .catch(console.error)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField control={control} name="name" />
      <TextField control={control} name="email" />
      <PasswordField control={control} name="password" />

      <button disabled={formState.isSubmitting}>
        {formState.isSubmitting && <span />}
        Register
      </button>
      <Link href="/account/login">Cancel</Link>
    </form>
  );
}
