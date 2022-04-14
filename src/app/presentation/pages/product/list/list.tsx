import React, { useEffect, useState } from "react"
import { DebounceInput } from "react-debounce-input"
import { DeleteProduct, LoadProducts } from "~/app/domain/usecases"
import { Link } from "~/app/presentation/components"

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
      <DebounceInput
        minLength={3}
        debounceTimeout={1000}
        onChange={handleSearchByName} />

      <Link href="/products/new">Cadastrar produto</Link>
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
    </>
  )
}