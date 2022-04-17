import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { AddProduct } from '~/app/domain/usecases';
import { BarAction, Breadcrumbs } from '~/app/presentation/components';
import { FormProduct } from '~/app/presentation/pages/product/components';

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
              src="/img/shirt.svg"
              alt="image"
            />

            <Typography
              style={{
                fontSize: 24,
                marginLeft: 12
              }}
            >
              Cadastrar Produto
            </Typography>
          </Box>
        </Box>
      </BarAction>

      <FormProduct
        title="Cadastro de Produto"
        isSubmitting={formState.isSubmitting}
        handleSubmit={handleSubmit(onSubmit)}
        control={control}
      />
    </>
  );
}
