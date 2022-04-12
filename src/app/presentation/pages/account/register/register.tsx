import { useForm } from 'react-hook-form';
import { UserModel } from '~/app/domain/models';
import { Link, PasswordField, TextField } from '~/app/presentation/components';

export default function Register({ validation }: any) {
  const { control, handleSubmit, formState } = useForm<UserModel>(validation);

  function onSubmit(user: UserModel) {
    console.log(user)
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
