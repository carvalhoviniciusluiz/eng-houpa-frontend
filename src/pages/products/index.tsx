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

export async function getServerSideProps() {
  return {
    props: {
      initialLoad: {
        data: [],
        meta: {}
      }
    }
  }
}