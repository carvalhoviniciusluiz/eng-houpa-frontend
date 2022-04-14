import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { GetProduct } from '~/app/domain/usecases';
import { Link, TextField } from '~/app/presentation/components';

type ProductForm = {
  name: string;
  description: string;
  ref: string;
  price: number;
}

export default function EditProductForm({
  validation,
  getProduct,
  editProduct,
  productId
}: any) {
  const { control, handleSubmit, formState, setValue } = useForm<ProductForm>(validation);

  const router = useRouter();

  useEffect(() => {
    getProduct
      .get(productId)
      .then((product: GetProduct.Response) => {
        setValue('name', product.name)
        setValue('description', product.description)
        setValue('ref', product.ref)
        setValue('price', product.price)
      })
      .catch(console.error)
  }, []) // eslint-disable-line

  async function onSubmit(params: ProductForm) {
    editProduct.edit(productId, params)
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
        Editar produto
      </button>
      <Link href="/products">Cancelar</Link>
    </form>
  );
}
