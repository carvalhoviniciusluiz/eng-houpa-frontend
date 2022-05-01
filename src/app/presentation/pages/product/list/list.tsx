import { Box, Typography } from "@mui/material"
import Image from "next/image"
import React, { useEffect, useState } from "react"
import { DebounceInput } from "react-debounce-input"
import { MdClose as Close } from 'react-icons/md'
import { DeleteProduct, LoadProducts } from "~/app/domain/usecases"
import { BarAction, Breadcrumbs, Link } from "~/app/presentation/components"

type ProductListProps = {
  initialLoad: LoadProducts.Response;
  loadProducts: LoadProducts;
  deleteProduct: DeleteProduct;
}

export default function ProductList({
  initialLoad,
  loadProducts,
  deleteProduct
}: ProductListProps) {
  const [state, setState] = useState({
    products: initialLoad.data?.map(addProductCover)
  })

  useEffect(() => {
    const hasProducts = !!state.products.length
    if (!hasProducts) {
      handleRehydrateProducts()
    }
  }, []) // eslint-disable-line

  function addProductCover(product: LoadProducts.ProductResponse) {
    return {
      ...product,
      cover: product?.pictures.find(picture => picture.cover)
    }
  }

  function handleRehydrateProducts(name?: string) {
    loadProducts
      .loadAll({ name })
      .then(({ data }: LoadProducts.Response) => setState((prevState) => ({
        ...prevState,
        products: data?.map(addProductCover)
      })))
      .catch(console.error)
  }

  async function handleDestroy(productId: string) {
    await deleteProduct.delete(productId)
    state.products.filter(product => product.id !== productId)
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
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Box
          style={{
            display: "flex",
            height: 44,
            width: 415.95,
            borderRadius: 5,
            border: "1px solid #E9E9E9",
            margin: "40px 0 24px"
          }}
        >
          <Box
            style={{
              padding: 12
            }}
          >
            <Image
              width={16}
              height={16}
              src="/img/search.svg"
              alt="icon"
            />
          </Box>
          <DebounceInput
            style={{
              width: "100%",
              height: "100%",
              border: 0,
              borderRadius: 5
            }}
            debounceTimeout={1000}
            onChange={handleSearchByName}
            placeholder="Pesquisar por nome do produto"
          />
        </Box>

        <ul
          style={{
            margin: 0,
            listStyleType: "none"
          }}
        >
          {state.products.map(product => (
            <li
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: 613,
                border: "1px solid #E9E9E9",
                borderRadius: 6,
                marginTop: 16
              }}
              key={product.id}
            >
              <Box
                style={{
                  display: "flex"
                }}
              >
                <Box
                  style={{
                    margin: "9px 27px 9px 30px",
                    border: "1px solid #C8C8C8"
                  }}
                >
                  <Image
                    width={35.82}
                    height={46.57}
                    src={product.cover?.imagePath || "/img/dress.svg"}
                    alt="picture"
                  />
                </Box>

                <Box
                  style={{
                    display: "flex",
                    alignItems: "center"
                  }}
                >
                  <Box
                    style={{
                      display: "flex",
                      flexDirection: "column"
                    }}
                  >
                    <Typography component="h1" fontSize={14}>{product.name}</Typography>
                    <Typography fontSize={10}>{product.user.name}</Typography>
                    <Typography fontSize={10}>{product.ref}</Typography>
                  </Box>
                </Box>
              </Box>

              <Box
                style={{
                  display: "flex",
                  alignItems: "center"
                }}
              >
                <Link href={`/products/edit/${product.id}`}>
                  <Image
                    width={24}
                    height={21}
                    src="/img/edit.svg"
                    alt="action"
                  />
                </Link>
                <button
                  style={{
                    margin: "0 30px",
                    border: 0,
                    background: "transparent",
                    cursor: "pointer"
                  }}
                  onClick={() => handleDestroy(product.id)}
                >
                  <Close fill="#C8C8C8" size={32} />
                </button>
              </Box>
            </li>
          ))}
        </ul>
      </Box>
    </>
  )
}