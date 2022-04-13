import { useForm } from 'react-hook-form';
import { TextField } from '~/app/presentation/components';

type ProductForm = {
  name: string;
  description: string;
  ref: string;
  price: number;
}

export default function ProductForm({ validation }: any) {
  const { control, handleSubmit, formState } = useForm<ProductForm>(validation);

  function onSubmit(params: ProductForm) {
    console.log(params)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField control={control} name="name" />
      <TextField control={control} name="description" />
      <TextField control={control} name="ref" />
      <TextField control={control} name="price" />

      <button disabled={formState.isSubmitting}>
        {formState.isSubmitting && <span />}
        Salvar produto
      </button>
    </form>
  );
}
