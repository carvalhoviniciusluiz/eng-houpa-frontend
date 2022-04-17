import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { EditProduct, GetProduct } from '~/app/domain/usecases';
import { BarAction, Breadcrumbs } from '~/app/presentation/components';
import { FormProduct } from '~/app/presentation/pages/product/components';

type ProductForm = {
  name: string;
  description: string;
  ref: string;
  price: number;
}

type EditProductFormParams = {
  validation: any;
  getProduct: GetProduct;
  editProduct: EditProduct;
  productId: string;
}

export default function EditProductForm({
  validation,
  getProduct,
  editProduct,
  productId
}: EditProductFormParams) {
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
