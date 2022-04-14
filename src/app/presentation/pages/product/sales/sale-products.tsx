import { useEffect, useState } from "react";
import { DebounceInput } from "react-debounce-input";
import { LoadProducts } from "~/app/domain/usecases";

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
    </>
  )
}