import { useRouter } from "next/router";
import { makeEditProductForm } from "~/app/main/factories/pages";
import { BaseLayout } from "~/app/presentation/layouts";

export default function EditProductFormPage() {
  const router = useRouter()
  const { id } = router.query

  if (!id) {
    return
  }

  return (
    <BaseLayout>
      {makeEditProductForm(id as string)}
    </BaseLayout>
  )
}