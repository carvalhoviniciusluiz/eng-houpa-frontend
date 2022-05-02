import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import { makeRegister } from "~/app/main/factories/pages";
import { DefaultLayout } from "~/app/presentation/layouts";

export default function RegisterPage() {
  return (
    <DefaultLayout>
      {makeRegister()}
    </DefaultLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookies = parseCookies(context)
  const { ['houpa-sales:account']: cookie } = cookies

  if (cookie) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}