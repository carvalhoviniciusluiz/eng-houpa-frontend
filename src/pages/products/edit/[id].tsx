import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { parseCookies } from "nookies";
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