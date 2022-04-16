import { makeSaleProducts } from "~/app/main/factories/pages";
import { BaseLayout } from "~/app/presentation/layouts";

export default function SaleProductsPage() {
  return (
    <BaseLayout>
      {makeSaleProducts()}
    </BaseLayout>
  )
}