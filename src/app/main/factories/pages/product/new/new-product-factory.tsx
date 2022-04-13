import { makeNewProductFormValidation } from "~/app/main/factories/pages"
import { NewProductForm } from "~/app/presentation/pages"
import { makeRemoteAddProduct } from "../../../usecases"


export const makeNewProductForm = () => {
  return (
    <NewProductForm
      addProduct={makeRemoteAddProduct()}
      validation={makeNewProductFormValidation()}
    />
  )
}
