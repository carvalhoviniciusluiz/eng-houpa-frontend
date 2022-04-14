import { makeEditProductFormValidation } from "~/app/main/factories/pages"
import { makeRemoteEditProduct, makeRemoteGetProduct } from "~/app/main/factories/usecases"
import { EditProductForm } from "~/app/presentation/pages"

export const makeEditProductForm = (productId: string) => {
  return (
    <EditProductForm
      productId={productId}
      getProduct={makeRemoteGetProduct()}
      editProduct={makeRemoteEditProduct()}
      validation={makeEditProductFormValidation()}
    />
  )
}
