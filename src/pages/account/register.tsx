import { makeRegister } from "~/app/main/factories/pages";
import { DefaultLayout } from "~/app/presentation/layouts";
import { handleSSRGuest } from "~/pages/_handles/handle-ssr-guest";

export default function RegisterPage() {
  return (
    <DefaultLayout>
      {makeRegister()}
    </DefaultLayout>
  )
}

export const getServerSideProps = handleSSRGuest(async () => {
  return {
    props: {}
  }
})