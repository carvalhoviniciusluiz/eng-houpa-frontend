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
      .then(({ data }: LoadProducts.Response) => setState((prevState) => ({
        ...prevState,
        products: data?.map(product => ({
          ...product,
          priceFormated: (() => {
            return new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            })
              .format(product?.price || 0)
          })(),
          cover: product?.pictures[0]
        }))
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
            margin: "40px 0"
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
            listStyleType: "none",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gridGap: 17
          }}
        >
          {state.products.map(product => (
            <li
              key={product.id}
            >
              <Box
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center"
                }}
                className="showcase"
              >
                <Box>
                  <Image
                    width={308}
                    height={371}
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
                      flexDirection: "column",
                      alignItems: "center"
                    }}
                  >
                    <Typography
                      style={{
                        marginTop: 16,
                        fontSize: 16,
                        letterSpacing: 0.2,
                        textTransform: "uppercase",
                        textAlign: "center"
                      }}
                      component="h1"
                    >
                      {product.name}
                    </Typography>
                    <Typography
                      style={{
                        fontSize: 16,
                        marginTop: 15,
                        color: '#3F0B6D',
                        textAlign: "center",
                        letterSpacing: 0.2
                      }}
                    >
                      {product.priceFormated}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </li>
          ))}
        </ul>
      </Box>
    </>
  )
}