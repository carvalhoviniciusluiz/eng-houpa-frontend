import { makeNewProductFormValidation } from "~/app/main/factories/pages"
import { makeRemoteAddProduct } from "~/app/main/factories/usecases"
import { NewProductForm } from "~/app/presentation/pages"


export const makeNewProductForm = () => {
  return (
    <NewProductForm
      addProduct={makeRemoteAddProduct()}
      validation={makeNewProductFormValidation()}
    />
  )
}
