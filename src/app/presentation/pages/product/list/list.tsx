import { useEffect, useState } from "react"
import { LoadProducts } from "~/app/domain/usecases"
import { Link } from "~/app/presentation/components"

export default function ProductList({ loadProducts, deleteProduct }: any) {
  const [state, setState] = useState({
    products: [] as LoadProducts.ProductResponse[]
  })

  useEffect(() => {
    loadProducts
      .loadAll()
      .then(({ data }: LoadProducts.Response) => handleRehydrateProducts(data))
      .catch(console.error)
  }, []) // eslint-disable-line

  function handleRehydrateProducts(products: LoadProducts.ProductResponse[]) {
    setState((prevState) => ({
      ...prevState,
      products
    }))
  }

  async function handleDestroy(productId: string) {
    await deleteProduct.delete(productId)
    const newProducts = state.products.filter(product => product.id !== productId)
    handleRehydrateProducts(newProducts)
  }

  return (
    <>
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