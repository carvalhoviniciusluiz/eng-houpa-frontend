import { useRouter } from "next/router";
import { makeEditProductForm } from "~/app/main/factories/pages";

export default function EditProductFormPage() {
  const router = useRouter()
  const { id } = router.query

  if (!id) {
    return
  }

  return makeEditProductForm(id as string);
}