import { LoadProducts } from "~/app/domain/usecases";
import { makeProductList } from "~/app/main/factories/pages";
import { makeRemoteLoadProducts } from "~/app/main/factories/usecases";
import { BaseLayout } from "~/app/presentation/layouts";
import handleSSRAuth from "~/pages/_handles/handle-ssr-auth";

export const getServerSideProps = handleSSRAuth<LoadProducts.Response>(async (context) => {
  const loadProducts = makeRemoteLoadProducts(context)
  const httpResponse = await loadProducts.loadAll()
  return {
    props: httpResponse
  }
})

function ProductListPage(props: LoadProducts.Response) {
  return (
    <BaseLayout>
      {makeProductList({ ...props })}
    </BaseLayout>
  );
}

export default ProductListPage