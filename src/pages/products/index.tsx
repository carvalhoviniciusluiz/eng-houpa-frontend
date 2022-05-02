import { RemoteLoadProducts } from "~/app/application/usecases";
import { makeProductList } from "~/app/main/factories/pages";
// import { makeRemoteLoadProducts } from "~/app/main/factories/usecases";
import { BaseLayout } from "~/app/presentation/layouts";
import handleSSRAuth from "~/pages/_handles/handle-ssr-auth";

export const getServerSideProps = handleSSRAuth<RemoteLoadProducts.Response>(async (context) => {
  // const loadProducts = makeRemoteLoadProducts(context)

  // const { data, meta } = await loadProducts.loadAll()
  // console.log({ data, meta })

  return {
    props: {
      data: [] as any,
      meta: {} as any
    }
  }
})

function ProductListPage(props: RemoteLoadProducts.Response) {
  const { data, meta } = props
  return (
    <BaseLayout>
      {
        makeProductList({
          initialLoad: {
            meta,
            data
          }
        })
      }
    </BaseLayout>
  );
}

export default ProductListPage