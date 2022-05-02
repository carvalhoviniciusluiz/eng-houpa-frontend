import { LoadProducts } from "~/app/domain/usecases";
import { makeSaleProducts } from "~/app/main/factories/pages";
import { makeRemoteLoadSaleProducts } from "~/app/main/factories/usecases";
import { BaseLayout } from "~/app/presentation/layouts";
import handleSSRNeutral from "~/pages/_handles/handle-ssr-neutral";

export const getServerSideProps = handleSSRNeutral<LoadProducts.Response>(async (context) => {
  const loadProducts = makeRemoteLoadSaleProducts(context)
  const httpResponse = await loadProducts.loadAll()
  return {
    props: httpResponse
  }
})

function SaleProductsPage(props: LoadProducts.Response) {
  return (
    <BaseLayout>
      {makeSaleProducts({ ...props })}
    </BaseLayout>
  )
}

export default SaleProductsPage;