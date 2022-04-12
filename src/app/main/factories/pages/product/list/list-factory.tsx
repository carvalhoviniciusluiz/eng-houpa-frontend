import { makeRemoteLoadProductList } from "~/app/main/factories/usecases";
import { ProductList } from "~/app/presentation/pages";

export const makeProductList = () => {
  return (
    <ProductList
      loadProductList={makeRemoteLoadProductList()}
    />
  )
}
