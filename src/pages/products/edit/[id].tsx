import { GetProduct } from "~/app/domain/usecases";
import { makeEditProductForm } from "~/app/main/factories/pages";
import { makeRemoteGetProduct } from "~/app/main/factories/usecases";
import { BaseLayout } from "~/app/presentation/layouts";
import handleSSRAuth from "~/pages/_handles/handle-ssr-auth";

type EditProductPageProps = {
  data: GetProduct.Response;
  productId: string;
}

export const getServerSideProps = handleSSRAuth<EditProductPageProps>(async (context) => {
  const productId = context.query.id as string;
  const getProduct = makeRemoteGetProduct(context);
  const httpResponse = await getProduct.get(productId);
  return {
    props: {
      data: httpResponse,
      productId
    }
  }
})

function EditProductFormPage(props: EditProductPageProps) {
  return (
    <BaseLayout>
      {makeEditProductForm({ ...props })}
    </BaseLayout>
  )
}

export default EditProductFormPage