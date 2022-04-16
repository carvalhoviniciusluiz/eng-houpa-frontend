import { makeNewProductForm } from "~/app/main/factories/pages";
import { BaseLayout } from "~/app/presentation/layouts";

export default function NewProductFormPage() {
  return (
    <BaseLayout>
      {makeNewProductForm()}
    </BaseLayout>
  )
}