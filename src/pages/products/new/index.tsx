import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import { makeNewProductForm } from "~/app/main/factories/pages";
import { BaseLayout } from "~/app/presentation/layouts";

export default function NewProductFormPage() {
  return (
    <BaseLayout>
      {makeNewProductForm()}
    </BaseLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookies = parseCookies(context)
  const { ['houpa-sales:account']: cookie } = cookies

  if (!cookie) {
    return {
      redirect: {
        destination: '/account/login',
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}