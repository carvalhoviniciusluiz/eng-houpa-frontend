import { makeLogin } from "~/app/main/factories/pages";
import { DefaultLayout } from "~/app/presentation/layouts";

export default function LoginPage() {
  return (
    <DefaultLayout>
      {makeLogin()}
    </DefaultLayout>
  )
}