import { makeProductFormValidation } from "~/app/main/factories/pages"
import { ProductForm } from "~/app/presentation/pages"


export const makeProductForm = () => {
  return (
    <ProductForm
      validation={makeProductFormValidation()}
    />
  )
}
