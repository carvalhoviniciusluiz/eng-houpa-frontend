import { makeProductList } from "~/app/main/factories/pages";
import { BaseLayout } from "~/app/presentation/layouts";

export default function ProductListPage() {
  return (
    <BaseLayout>
      {makeProductList()}
    </BaseLayout>
  );
}