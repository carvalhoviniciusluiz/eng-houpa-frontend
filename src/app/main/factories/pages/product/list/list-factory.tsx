import { LoadProducts } from "~/app/domain/usecases";
import { makeRemoteDeleteProduct, makeRemoteLoadProducts } from "~/app/main/factories/usecases";
import { ProductList } from "~/app/presentation/pages";

export type ProductListProps = {
  initialLoad: LoadProducts.Response
}

export const makeProductList = (props: ProductListProps) => {
  const { initialLoad } = props
  return (
    <ProductList
      initialLoad={initialLoad}
      loadProducts={makeRemoteLoadProducts()}
      deleteProduct={makeRemoteDeleteProduct()}
    />
  )
}
