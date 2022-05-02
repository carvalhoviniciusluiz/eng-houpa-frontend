import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { EditProduct } from '~/app/domain/usecases';
import { EditProductProps } from '~/app/main/factories/pages';
import { BarAction, Breadcrumbs } from '~/app/presentation/components';
import { FormProduct } from '~/app/presentation/pages/product/components';

type ProductForm = {
  name: string;
  description: string;
  ref: string;
  price: number;
}

type EditProductFormParams = EditProductProps & {
  editProduct: EditProduct;
  validation: any;
}

export default function EditProductForm({
  data,
  productId,
  editProduct,
  validation
}: EditProductFormParams) {
  const { control, handleSubmit, formState, setValue } = useForm<ProductForm>(validation);

  const router = useRouter();

  useEffect(() => {
    setValue('name', data.name)
    setValue('description', data.description)
    setValue('ref', data.ref)
    setValue('price', data.price)
  }, []) // eslint-disable-line

  async function onSubmit(params: ProductForm) {
    editProduct.edit(productId, params)
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

      <FormProduct
        title="Editar Produto"
        isSubmitting={formState.isSubmitting}
        handleSubmit={handleSubmit(onSubmit)}
        control={control}
      />
    </>
  );
}
