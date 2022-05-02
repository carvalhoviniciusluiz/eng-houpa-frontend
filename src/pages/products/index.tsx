import { GetServerSideProps } from "next";
import { parseCookies } from 'nookies';
import { makeProductList, ProductListProps } from "~/app/main/factories/pages";
import { BaseLayout } from "~/app/presentation/layouts";

export default function ProductListPage(props: ProductListProps) {
  const { initialLoad } = props
  return (
    <BaseLayout>
      {makeProductList({ initialLoad })}
    </BaseLayout>
  );
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
    props: {
      initialLoad: {
        data: [],
        meta: {}
      }
    }
  }
}