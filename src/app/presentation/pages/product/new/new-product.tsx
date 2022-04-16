import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { AddProduct } from '~/app/domain/usecases';
import { BarAction, Breadcrumbs, Link, TextField } from '~/app/presentation/components';

type ProductForm = {
  name: string;
  description: string;
  ref: string;
  price: number;
}

type NewProductFormProps = {
  validation: any;
  addProduct: AddProduct;
}

export default function NewProductForm({ validation, addProduct }: NewProductFormProps) {
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
    <>
      <BarAction>
        <Box>
          <Breadcrumbs>
            <Typography>Vitrines</Typography>
          </Breadcrumbs>

          <Box
            style={{
              marginTop: 28,
              display: "flex",
              alignItems: "center"
            }}
          >
            <Image
              width={23.16}
              height={24.41}
              src="/img/store.svg"
              alt="image"
            />

            <Typography
              style={{
                fontSize: 24,
                marginLeft: 12
              }}
            >
              Vitrines
            </Typography>
          </Box>
        </Box>
      </BarAction>

      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField control={control} name="name" />
        <TextField control={control} name="description" />
        <TextField control={control} name="ref" />
        <TextField control={control} name="price" />

        <button disabled={formState.isSubmitting}>
          {formState.isSubmitting && <span />}
          Salvar produto
        </button>
        <Link href="/products">Cancelar</Link>
      </form>
    </>
  );
}
