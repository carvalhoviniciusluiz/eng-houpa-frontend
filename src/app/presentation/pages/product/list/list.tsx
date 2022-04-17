import { Box, Typography } from "@mui/material"
import Image from "next/image"
import React, { useEffect, useState } from "react"
import { DebounceInput } from "react-debounce-input"
import { DeleteProduct, LoadProducts } from "~/app/domain/usecases"
import { BarAction, Breadcrumbs, Link } from "~/app/presentation/components"

type ProductListProps = {
  loadProducts: LoadProducts;
  deleteProduct: DeleteProduct;
}

export default function ProductList({ loadProducts, deleteProduct }: ProductListProps) {
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

  async function handleDestroy(productId: string) {
    await deleteProduct.delete(productId)
    const newProducts = state.products.filter(product => product.id !== productId)
    handleRehydrateProducts()
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
              Gerenciar Vitrines
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
              src="/img/hanger.svg"
              alt="image"
            />

            <Typography
              style={{
                fontSize: 24,
                marginLeft: 12
              }}
            >
              Gerenciar Vitrines
            </Typography>
          </Box>
        </Box>

        <Link
          style={{
            color: "white",
            width: 200,
            height: 56,
            borderRadius: 4,
            backgroundColor: "#3F0B6D",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            letterSpacing: 0.2,
            fontSize: 14,
            textDecoration: "none"
          }}
          href="/products/new"
        >
          Cadastrar produto
        </Link>
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
                {product.user.name} <br />
                {product.ref}
              </div>
              <div>
                <Link href={`/products/edit/${product.id}`}>Editar</Link><br />
                <button onClick={() => handleDestroy(product.id)}>Apagar</button>
              </div>
            </li>
          ))}
        </ul>
      </Box>
    </>
  )
}