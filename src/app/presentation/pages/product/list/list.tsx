import { useEffect, useState } from "react"
import { LoadProductList } from "~/app/domain/usecases"

export default function ProductList({ loadProductList }: any) {
  const [state, setState] = useState({
    products: [] as LoadProductList.Response[]
  })

  useEffect(() => {
    loadProductList
      .loadAll()
      .then((products: LoadProductList.Response[]) => setState((prevState) => ({
        ...prevState,
        products
      })))
      .catch(console.error)
  }, []) // eslint-disable-line

  return (
    <ul>
      {state.products.map(product => (
        <li key={product.id}>
          <div>
            {product.name} <br />
            Current User Name <br />
            {product.ref}
          </div>
        </li>
      ))}
    </ul>
  )
}