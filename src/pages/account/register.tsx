import { makeRegister } from "~/app/main/factories/pages";
import { DefaultLayout } from "~/app/presentation/layouts";

export default function RegisterPage() {
  return (
    <DefaultLayout>
      {makeRegister()}
    </DefaultLayout>
  )
}