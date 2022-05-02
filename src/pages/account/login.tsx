import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import { makeLogin } from "~/app/main/factories/pages";
import { DefaultLayout } from "~/app/presentation/layouts";

export default function LoginPage() {
  return (
    <DefaultLayout>
      {makeLogin()}
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