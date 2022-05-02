import { LoadProducts } from "~/app/domain/usecases";
import { makeRemoteLoadSaleProducts } from "~/app/main/factories/usecases";
import { SaleProducts } from "~/app/presentation/pages";

export const makeSaleProducts = (props: LoadProducts.Response) => {
  return (
    <SaleProducts
      {...props}
      loadProducts={makeRemoteLoadSaleProducts()}
    />
  )
}
