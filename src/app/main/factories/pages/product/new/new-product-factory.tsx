import { makeProductFormValidation } from "~/app/main/factories/pages"
import { ProductForm } from "~/app/presentation/pages"
import { makeRemoteAddProduct } from "../../../usecases"


export const makeProductForm = () => {
  return (
    <ProductForm
      addProduct={makeRemoteAddProduct()}
      validation={makeProductFormValidation()}
    />
  )
}
