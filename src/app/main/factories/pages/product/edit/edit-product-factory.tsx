import { GetProduct } from "~/app/domain/usecases"
import { makeEditProductFormValidation } from "~/app/main/factories/pages"
import { makeRemoteEditProduct } from "~/app/main/factories/usecases"
import { EditProductForm } from "~/app/presentation/pages"

export type EditProductProps = {
  data: GetProduct.Response
  productId: string
}

export const makeEditProductForm = (props: EditProductProps) => {
  return (
    <EditProductForm
      {...props}
      editProduct={makeRemoteEditProduct()}
      validation={makeEditProductFormValidation()}
    />
  )
}
