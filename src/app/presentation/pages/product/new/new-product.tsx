import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { Link, TextField } from '~/app/presentation/components';

type ProductForm = {
  name: string;
  description: string;
  ref: string;
  price: number;
}

export default function NewProductForm({ validation, addProduct }: any) {
  const { control, handleSubmit, formState } = useForm<ProductForm>(validation);

  const router = useRouter();

  async function onSubmit(params: ProductForm) {
    addProduct.add(params)
      .then(() => {
        router.push('/products')
      })
      .catch(console.error)
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
      <Link href="/products">Cancel</Link>
    </form>
  );
}
