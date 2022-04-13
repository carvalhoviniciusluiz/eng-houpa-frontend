export interface LoadProducts {
  loadAll: () => Promise<LoadProducts.Response[]>
}

type ProductRow = {
  id: string;
  name: string;
  description: string;
  ref: string;
  price: number;
  updatedAt: string;
  user: {
    id: string;
    email: string;
    name: string;
    updatedAt: string;
  }
}

export namespace LoadProducts {
  export type ProductResponse = ProductRow

  export type Response = {
    data: ProductRow[],
    meta: {
      count: number;
      firstItemOnPage: number;
      hasNextPage: boolean;
      hasPreviousPage: boolean;
      isFirstPage: boolean;
      isLastPage: boolean;
      lastItemOnPage: number;
      numberOfFirstItemOnPage: number;
      numberOfLastItemOnPage: number;
      page: number;
      pageCount: number;
      pageNumberIsGood: boolean;
      pageSize: number;
    }
  }
}
