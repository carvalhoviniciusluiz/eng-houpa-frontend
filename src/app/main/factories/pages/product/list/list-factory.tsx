import { LoadProducts } from "~/app/domain/usecases";
import { makeRemoteDeleteProduct, makeRemoteLoadProducts } from "~/app/main/factories/usecases";
import { ProductList } from "~/app/presentation/pages";

export const makeProductList = (props: LoadProducts.Response) => {
  return (
    <ProductList
      {...props}
      loadProducts={makeRemoteLoadProducts()}
      deleteProduct={makeRemoteDeleteProduct()}
    />
  )
}
