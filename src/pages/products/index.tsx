import { makeProductList, ProductListProps } from "~/app/main/factories/pages";
import { BaseLayout } from "~/app/presentation/layouts";
import { handleSSRAuth } from "~/pages/_handles/handle-ssr-auth";

export default function ProductListPage(props: ProductListProps) {
  const { initialLoad } = props
  return (
    <BaseLayout>
      {makeProductList({ initialLoad })}
    </BaseLayout>
  );
}

type ProductLoadProps = {
  initialLoad: {
    data: [],
    meta: {}
  }
}

export const getServerSideProps = handleSSRAuth<ProductLoadProps>(async () => {
  return {
    props: {
      initialLoad: {
        data: [],
        meta: {}
      }
    }
  }
})