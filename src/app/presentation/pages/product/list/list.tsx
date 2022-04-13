import { useEffect, useState } from "react"
import { LoadProducts } from "~/app/domain/usecases"
import { Link } from "~/app/presentation/components"

export default function ProductList({ loadProducts }: any) {
  const [state, setState] = useState({
    products: [] as LoadProducts.Response[]
  })

  useEffect(() => {
    loadProducts
      .loadAll()
      .then((products: LoadProducts.Response[]) => setState((prevState) => ({
        ...prevState,
        products
      })))
      .catch(console.error)
  }, []) // eslint-disable-line

  return (
    <>
      <Link href="/products/new">Cadastrar produto</Link>
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
    </>
  )
}