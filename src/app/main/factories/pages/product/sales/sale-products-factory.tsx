import { makeRemoteLoadProducts } from "~/app/main/factories/usecases";
import { SaleProducts } from "~/app/presentation/pages";

export const makeSaleProducts = () => {
  return (
    <SaleProducts
      loadProducts={makeRemoteLoadProducts()}
    />
  )
}
