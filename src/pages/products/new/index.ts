// import { useRouter } from "next/router";
import { makeNewProductForm } from "~/app/main/factories/pages";
import { useAuthenticated } from "~/app/presentation/hooks";

export default function NewProductFormPage() {
  return useAuthenticated(makeNewProductForm);
}