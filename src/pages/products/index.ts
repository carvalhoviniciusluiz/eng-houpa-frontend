import { makeProductList } from "~/app/main/factories/pages";
import { useAuthenticated } from "~/app/presentation/hooks";

export default function ProductListPage() {
  return useAuthenticated(makeProductList);
}