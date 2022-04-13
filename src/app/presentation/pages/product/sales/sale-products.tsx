import { useEffect, useState } from "react"
import { LoadProducts } from "~/app/domain/usecases"

export default function SaleProducts({ loadProducts }: any) {
  const [state, setState] = useState({
    products: [] as LoadProducts.ProductResponse[]
  })

  useEffect(() => {
    loadProducts
      .loadAll()
      .then(({ data: products }: LoadProducts.Response) => setState((prevState) => ({
        ...prevState,
        products
      })))
      .catch(console.error)
  }, []) // eslint-disable-line

  return (
    <>
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