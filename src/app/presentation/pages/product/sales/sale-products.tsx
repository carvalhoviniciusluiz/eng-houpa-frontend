import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import { DebounceInput } from "react-debounce-input";
import { LoadProducts } from "~/app/domain/usecases";
import { BarAction, Breadcrumbs } from "~/app/presentation/components";

type SaleProductsProps = {
  loadProducts: LoadProducts;
}

export default function SaleProducts({ loadProducts }: SaleProductsProps) {
  const [state, setState] = useState({
    products: [] as LoadProducts.ProductResponse[]
  })

  useEffect(() => {
    handleRehydrateProducts()
  }, []) // eslint-disable-line

  function handleRehydrateProducts(name?: string) {
    loadProducts
      .loadAll({ name })
      .then(({ data: products }: LoadProducts.Response) => setState((prevState) => ({
        ...prevState,
        products
      })))
      .catch(console.error)
  }

  async function handleSearchByName(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target
    handleRehydrateProducts(value)
  }

  return (
    <>
      <BarAction>
        <Box>
          <Breadcrumbs>
            <Typography>
              Vitrines
            </Typography>
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

      <Box
        style={{
          margin: "0 80px 0 77.59px"
        }}
      >
        <DebounceInput
          minLength={3}
          debounceTimeout={1000}
          onChange={handleSearchByName} />

        <ul>
          {state.products.map(product => (
            <li key={product.id}>
              <div>
                {product.name} <br />
                {product.price}
              </div>
            </li>
          ))}
        </ul>
      </Box>
    </>
  )
}